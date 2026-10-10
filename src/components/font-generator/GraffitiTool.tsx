"use client";

import React, { useState, useId, useMemo, useRef, useEffect, useCallback } from "react";
import { copyText } from "@/lib/clipboard";
import {
  GRAFFITI_STYLES,
  GRAFFITI_ALPHABET,
  PRESET_NAMES,
  GraffitiStyleItem,
} from "@/lib/unicode/graffitiData";

type ToolMode = "copy" | "designer" | "alphabet" | "examples";

type CanvasStylePreset = "bubble" | "block3d" | "wildstyle" | "burner" | "drip" | "stencil";

type CanvasBackgroundPreset = "transparent" | "brick" | "asphalt" | "white";

export function GraffitiTool() {
  const [activeMode, setActiveMode] = useState<ToolMode>("copy");

  // ── Mode 1: Copyable Text State ──
  const [inputText, setInputText] = useState<string>("GRAFFITI");
  const [selectedCategory, setSelectedCategory] = useState<string>("todos");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [favorites, setFavorites] = useState<Set<string>>(new Set());

  // ── Mode 2: Graphic Designer State ──
  const [designerText, setDesignerText] = useState<string>("GRAFFITI");
  const [canvasStyle, setCanvasStyle] = useState<CanvasStylePreset>("bubble");
  const [fillColor, setFillColor] = useState<string>("#06B6D4");
  const [outlineColor, setOutlineColor] = useState<string>("#0F172A");
  const [outlineWidth, setOutlineWidth] = useState<number>(8);
  const [shadowDepth, setShadowDepth] = useState<number>(12);
  const [fontSizeSetting, setFontSizeSetting] = useState<number>(76);
  const [canvasBg, setCanvasBg] = useState<CanvasBackgroundPreset>("transparent");
  const [enableSplatters, setEnableSplatters] = useState<boolean>(true);
  const [canvasCopied, setCanvasCopied] = useState<boolean>(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // ── Mode 3: Alphabet Quick Filter ──
  const [selectedAlphabetLetter, setSelectedAlphabetLetter] = useState<string>("A");

  // Accessible IDs
  const textInputId = useId();
  const searchInputId = useId();
  const designerInputId = useId();

  // Toast Helper
  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2500);
  };

  // Handlers for Mode 1
  const handleCopyStyle = async (styleId: string, transformedText: string) => {
    const success = await copyText(transformedText);
    if (success) {
      setCopiedId(styleId);
      triggerToast("¡Copiado con exito al portapapeles!");
      setTimeout(() => setCopiedId(null), 2000);
    }
  };

  const toggleFavorite = (styleId: string) => {
    setFavorites((prev) => {
      const next = new Set(prev);
      if (next.has(styleId)) {
        next.delete(styleId);
        triggerToast("Eliminado de favoritos");
      } else {
        next.add(styleId);
        triggerToast("Guardado en tus favoritos");
      }
      return next;
    });
  };

  // Decorator helper to prepend/append symbols
  const handleApplyDecorator = (prefix: string, suffix: string = "") => {
    const current = inputText.trim() || "GRAFFITI";
    setInputText(`${prefix}${current}${suffix}`);
    triggerToast("Adorno aplicado al texto");
  };

  // Send to Designer canvas handler
  const handleSendToDesigner = (textToSend: string) => {
    setDesignerText(textToSend);
    setActiveMode("designer");
    triggerToast("Texto enviado al Diseñador Grafico");
  };

  const filteredStyles = useMemo(() => {
    return GRAFFITI_STYLES.filter((style) => {
      if (selectedCategory === "favoritos") {
        if (!favorites.has(style.id)) return false;
      } else if (selectedCategory !== "todos" && style.category !== selectedCategory) {
        return false;
      }

      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase();
      return (
        style.name.toLowerCase().includes(q) ||
        style.description.toLowerCase().includes(q) ||
        style.tags.some((t) => t.toLowerCase().includes(q))
      );
    });
  }, [selectedCategory, searchQuery, favorites]);

  // ── Canvas Rendering Engine for Mode 2 ──
  const drawGraffitiCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = 800;
    const height = 400;
    canvas.width = width;
    canvas.height = height;

    // 1. Background rendering
    if (canvasBg === "transparent") {
      ctx.clearRect(0, 0, width, height);
    } else if (canvasBg === "brick") {
      // Dark Urban Brick Wall
      ctx.fillStyle = "#0F172A";
      ctx.fillRect(0, 0, width, height);

      // Subtle brick mortar grid
      ctx.strokeStyle = "rgba(255, 255, 255, 0.04)";
      ctx.lineWidth = 2;
      const brickH = 32;
      const brickW = 70;
      for (let y = 0; y < height; y += brickH) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();

        const offset = (Math.floor(y / brickH) % 2) * (brickW / 2);
        for (let x = offset; x < width; x += brickW) {
          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(x, y + brickH);
          ctx.stroke();
        }
      }

      // Vignette effect
      const vignette = ctx.createRadialGradient(width / 2, height / 2, 100, width / 2, height / 2, 450);
      vignette.addColorStop(0, "rgba(0, 0, 0, 0)");
      vignette.addColorStop(1, "rgba(0, 0, 0, 0.75)");
      ctx.fillStyle = vignette;
      ctx.fillRect(0, 0, width, height);
    } else if (canvasBg === "asphalt") {
      // Dark Urban Asphalt
      const bgGrad = ctx.createLinearGradient(0, 0, width, height);
      bgGrad.addColorStop(0, "#18181B");
      bgGrad.addColorStop(1, "#09090B");
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // Subtle asphalt grit noise
      ctx.fillStyle = "rgba(255, 255, 255, 0.03)";
      for (let i = 0; i < 90; i++) {
        const x = (i * 97) % width;
        const y = (i * 127) % height;
        const r = (i % 2) + 1;
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fill();
      }
    } else {
      // Clean white background
      ctx.fillStyle = "#FFFFFF";
      ctx.fillRect(0, 0, width, height);
    }

    const textToDraw = designerText.trim() ? designerText.toUpperCase() : "GRAFFITI";

    // Auto-scale font size if text is long
    let effectiveFontSize = fontSizeSetting;
    if (textToDraw.length > 12) {
      effectiveFontSize = Math.min(fontSizeSetting, 48);
    } else if (textToDraw.length > 8) {
      effectiveFontSize = Math.min(fontSizeSetting, 60);
    }

    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    const centerX = width / 2;
    const centerY = height / 2;

    // Optional Aerosol Splatters around the text
    if (enableSplatters) {
      ctx.save();
      ctx.fillStyle = fillColor;
      ctx.globalAlpha = 0.35;
      const splatterCount = 35;
      for (let i = 0; i < splatterCount; i++) {
        const angle = (i * 17) % (Math.PI * 2);
        const dist = 90 + ((i * 37) % 130);
        const sx = centerX + Math.cos(angle) * dist * 1.5;
        const sy = centerY + Math.sin(angle) * dist * 0.7;
        const radius = (i % 4) + 1.2;
        ctx.beginPath();
        ctx.arc(sx, sy, radius, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();
    }

    // ── RENDER STYLES ──
    if (canvasStyle === "bubble") {
      // BUBBLE THROW-UP: Ultra-thick puffy letters with glossy highlights
      ctx.font = `900 ${effectiveFontSize}px "Arial Black", Impact, sans-serif`;

      // 1. Drop shadow 3D block
      if (shadowDepth > 0) {
        ctx.fillStyle = outlineColor;
        for (let d = shadowDepth; d > 0; d--) {
          ctx.fillText(textToDraw, centerX + d, centerY + d);
        }
      }

      // 2. Thick Outer Border
      ctx.lineJoin = "round";
      ctx.lineCap = "round";
      ctx.strokeStyle = outlineColor;
      ctx.lineWidth = outlineWidth * 2.2;
      ctx.strokeText(textToDraw, centerX, centerY);

      // 3. Fill with vibrant vertical gradient
      const grad = ctx.createLinearGradient(0, centerY - effectiveFontSize / 2, 0, centerY + effectiveFontSize / 2);
      grad.addColorStop(0, "#FFFFFF");
      grad.addColorStop(0.25, fillColor);
      grad.addColorStop(1, fillColor);
      ctx.fillStyle = grad;
      ctx.fillText(textToDraw, centerX, centerY);

      // 4. Glossy bubble inner shine
      ctx.fillStyle = "rgba(255, 255, 255, 0.45)";
      ctx.font = `900 ${effectiveFontSize * 0.94}px "Arial Black", Impact, sans-serif`;
      ctx.fillText(textToDraw, centerX - 3, centerY - 5);

      // 5. Specular highlight spots
      ctx.fillStyle = "#FFFFFF";
      ctx.font = `900 ${effectiveFontSize * 0.88}px "Arial Black", Impact, sans-serif`;
      ctx.fillText(textToDraw, centerX - 5, centerY - 7);
    } else if (canvasStyle === "block3d") {
      // BLOCK 3D: Heavy angled isometric extrusion
      ctx.font = `900 ${effectiveFontSize}px Impact, "Arial Black", sans-serif`;

      // 1. Isometric 3D depth extrusion towards bottom-left
      for (let d = shadowDepth; d > 0; d--) {
        const factor = d / shadowDepth;
        ctx.fillStyle = factor > 0.4 ? "#030712" : outlineColor;
        ctx.fillText(textToDraw, centerX - d, centerY + d);
      }

      // 2. Heavy Outline
      ctx.lineJoin = "miter";
      ctx.strokeStyle = outlineColor;
      ctx.lineWidth = outlineWidth * 1.4;
      ctx.strokeText(textToDraw, centerX, centerY);

      // 3. Front Face Fill
      const blockGrad = ctx.createLinearGradient(0, centerY - effectiveFontSize / 2, 0, centerY + effectiveFontSize / 2);
      blockGrad.addColorStop(0, fillColor);
      blockGrad.addColorStop(1, "#FFFFFF");
      ctx.fillStyle = blockGrad;
      ctx.fillText(textToDraw, centerX, centerY);
    } else if (canvasStyle === "wildstyle") {
      // WILDSTYLE NEON: Glowing vibrant dual-tone spray with angle
      ctx.font = `italic 900 ${effectiveFontSize}px "Arial Black", Impact, sans-serif`;

      // 1. Outer Neon Glow
      ctx.shadowColor = fillColor;
      ctx.shadowBlur = shadowDepth * 2.5;
      ctx.strokeStyle = fillColor;
      ctx.lineWidth = outlineWidth * 1.5;
      ctx.strokeText(textToDraw, centerX, centerY);

      // 2. Dark Inner Outline
      ctx.shadowBlur = 0;
      ctx.strokeStyle = outlineColor;
      ctx.lineWidth = Math.max(3, outlineWidth / 1.5);
      ctx.strokeText(textToDraw, centerX, centerY);

      // 3. Electric Multitone Gradient
      const wildGrad = ctx.createLinearGradient(centerX - 180, centerY, centerX + 180, centerY);
      wildGrad.addColorStop(0, fillColor);
      wildGrad.addColorStop(0.5, "#EC4899");
      wildGrad.addColorStop(1, "#FACC15");
      ctx.fillStyle = wildGrad;
      ctx.fillText(textToDraw, centerX, centerY);
    } else if (canvasStyle === "burner") {
      // BURNER FIRE: Hot molten flame gradient with street border
      ctx.font = `900 ${effectiveFontSize}px "Arial Black", sans-serif`;

      // 1. Heavy Black Drop Shadow
      ctx.fillStyle = "#180202";
      for (let d = shadowDepth; d > 0; d--) {
        ctx.fillText(textToDraw, centerX, centerY + d);
      }

      // 2. Outer Stroke
      ctx.lineJoin = "round";
      ctx.strokeStyle = outlineColor;
      ctx.lineWidth = outlineWidth * 1.8;
      ctx.strokeText(textToDraw, centerX, centerY);

      // 3. Fire Gradient Fill
      const fireGrad = ctx.createLinearGradient(0, centerY - effectiveFontSize / 2, 0, centerY + effectiveFontSize / 2);
      fireGrad.addColorStop(0, "#FEF08A");
      fireGrad.addColorStop(0.35, "#F97316");
      fireGrad.addColorStop(1, "#DC2626");
      ctx.fillStyle = fireGrad;
      ctx.fillText(textToDraw, centerX, centerY);
    } else if (canvasStyle === "drip") {
      // DRIP & TAG: Aerosol street marker with paint drips
      ctx.font = `900 ${effectiveFontSize}px Impact, "Arial Black", sans-serif`;

      // 1. Outline
      ctx.strokeStyle = outlineColor;
      ctx.lineWidth = outlineWidth;
      ctx.strokeText(textToDraw, centerX, centerY);

      // 2. Fill
      ctx.fillStyle = fillColor;
      ctx.fillText(textToDraw, centerX, centerY);

      // 3. Paint Drips flowing down
      ctx.fillStyle = fillColor;
      const dripPositions = [-180, -110, -40, 20, 80, 140, 200];
      dripPositions.forEach((xOffset, idx) => {
        const dripX = centerX + xOffset;
        const dripY = centerY + effectiveFontSize / 2.2;
        const dripLen = 20 + ((idx * 17) % 35);
        ctx.beginPath();
        ctx.moveTo(dripX - 3, dripY);
        ctx.lineTo(dripX + 3, dripY);
        ctx.lineTo(dripX + 1.5, dripY + dripLen);
        ctx.arc(dripX, dripY + dripLen, 3, 0, Math.PI);
        ctx.closePath();
        ctx.fill();
      });
    } else {
      // STENCIL SPRAY: Industrial spray stencil
      ctx.font = `900 ${effectiveFontSize}px Impact, "Arial Black", sans-serif`;

      // 1. Soft aerosol spray shadow
      ctx.fillStyle = "rgba(0, 0, 0, 0.45)";
      ctx.fillText(textToDraw, centerX + shadowDepth, centerY + shadowDepth);

      // 2. Stencil Body
      ctx.fillStyle = fillColor;
      ctx.fillText(textToDraw, centerX, centerY);

      // 3. Contour
      ctx.lineWidth = Math.max(2, outlineWidth / 2);
      ctx.strokeStyle = outlineColor;
      ctx.strokeText(textToDraw, centerX, centerY);
    }
  }, [
    designerText,
    canvasStyle,
    fillColor,
    outlineColor,
    outlineWidth,
    shadowDepth,
    fontSizeSetting,
    canvasBg,
    enableSplatters,
  ]);

  // Redraw canvas whenever settings change or mode is active
  useEffect(() => {
    if (activeMode === "designer") {
      drawGraffitiCanvas();
    }
  }, [activeMode, drawGraffitiCanvas]);

  const handleDownloadPNG = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const safeName = (designerText.trim() || "graffiti")
      .toLowerCase()
      .replace(/[^a-z0-9]/gi, "-");
    const dataUrl = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.download = `graffiti-${safeName}.png`;
    link.href = dataUrl;
    link.click();
    triggerToast("Descargando imagen PNG en alta resolucion");
  };

  const handleCopyCanvasImage = async () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    try {
      if (typeof window !== "undefined" && navigator.clipboard && (window as unknown as { ClipboardItem?: unknown }).ClipboardItem) {
        canvas.toBlob(async (blob) => {
          if (!blob) return;
          try {
            const item = new ClipboardItem({ "image/png": blob });
            await navigator.clipboard.write([item]);
            setCanvasCopied(true);
            triggerToast("¡Imagen copiada al portapapeles!");
            setTimeout(() => setCanvasCopied(false), 2500);
          } catch {
            handleDownloadPNG();
          }
        });
      } else {
        handleDownloadPNG();
      }
    } catch {
      handleDownloadPNG();
    }
  };

  const selectedLetterData = useMemo(() => {
    return (
      GRAFFITI_ALPHABET.find((item) => item.letter === selectedAlphabetLetter) ||
      GRAFFITI_ALPHABET[0]
    );
  }, [selectedAlphabetLetter]);

  return (
    <div className="w-full max-w-5xl mx-auto my-6 space-y-6">
      {/* ── Floating Toast Notification ── */}
      {toastMessage && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-5 py-3 rounded-2xl shadow-2xl border border-cyan-500/40 text-xs sm:text-sm font-semibold flex items-center gap-2.5 animate-bounce"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* ── Studio Navigation Tabs ── */}
      <nav
        aria-label="Modos del generador de graffiti"
        className="flex items-center gap-2 p-2 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-2xl sm:rounded-3xl border border-slate-700/80 shadow-lg overflow-x-auto scrollbar-none"
      >
        <button
          type="button"
          onClick={() => setActiveMode("copy")}
          className={`flex-1 min-w-[150px] py-3 px-3.5 rounded-xl sm:rounded-2xl font-bold text-xs sm:text-sm transition-all duration-200 flex items-center justify-center gap-2 ${
            activeMode === "copy"
              ? "bg-gradient-to-r from-cyan-500 to-teal-500 text-slate-950 shadow-md shadow-cyan-500/20 scale-[1.02]"
              : "text-slate-300 hover:text-white hover:bg-slate-800/80"
          }`}
        >
          <span className="text-base sm:text-lg">🔤</span>
          <span>Texto para Copiar ({GRAFFITI_STYLES.length})</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveMode("designer")}
          className={`flex-1 min-w-[155px] py-3 px-3.5 rounded-xl sm:rounded-2xl font-bold text-xs sm:text-sm transition-all duration-200 flex items-center justify-center gap-2 ${
            activeMode === "designer"
              ? "bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-md shadow-pink-500/20 scale-[1.02]"
              : "text-slate-300 hover:text-white hover:bg-slate-800/80"
          }`}
        >
          <span className="text-base sm:text-lg">🎨</span>
          <span>Diseñar Graffiti (PNG)</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveMode("alphabet")}
          className={`flex-1 min-w-[140px] py-3 px-3.5 rounded-xl sm:rounded-2xl font-bold text-xs sm:text-sm transition-all duration-200 flex items-center justify-center gap-2 ${
            activeMode === "alphabet"
              ? "bg-gradient-to-r from-indigo-500 to-violet-500 text-white shadow-md shadow-indigo-500/20 scale-[1.02]"
              : "text-slate-300 hover:text-white hover:bg-slate-800/80"
          }`}
        >
          <span className="text-base sm:text-lg">📖</span>
          <span>Abecedario A-Z</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveMode("examples")}
          className={`flex-1 min-w-[140px] py-3 px-3.5 rounded-xl sm:rounded-2xl font-bold text-xs sm:text-sm transition-all duration-200 flex items-center justify-center gap-2 ${
            activeMode === "examples"
              ? "bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 shadow-md shadow-amber-500/20 scale-[1.02]"
              : "text-slate-300 hover:text-white hover:bg-slate-800/80"
          }`}
        >
          <span className="text-base sm:text-lg">🔥</span>
          <span>Nombres Populares</span>
        </button>
      </nav>

      {/* ── MODE 1: Texto para Copiar (Unicode Graffiti) ── */}
      {activeMode === "copy" && (
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
          {/* Street Header Banner */}
          <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 p-6 text-white border-b border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-black uppercase tracking-wider bg-cyan-500/20 text-cyan-400 border border-cyan-500/40">
                  Modo Texto Unicode
                </span>
                <span className="text-xs text-slate-400">
                  {GRAFFITI_STYLES.length} fuentes listas para copiar y pegar
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                Generador de Letras y Firmas Callejeras
              </h2>
            </div>

            {/* Quick Actions Header */}
            <div className="flex items-center gap-2 self-stretch md:self-auto">
              <button
                type="button"
                onClick={() => handleSendToDesigner(inputText)}
                className="flex-1 md:flex-initial px-4 py-2 rounded-xl bg-pink-600 hover:bg-pink-500 text-white text-xs font-bold transition-all shadow-md flex items-center justify-center gap-1.5"
              >
                <span>🎨 Pasar este texto al Lienzo</span>
              </button>
            </div>
          </div>

          <div className="p-6 sm:p-8 space-y-6">
            {/* Input Panel with glowing street border */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label
                  htmlFor={textInputId}
                  className="text-xs font-black text-slate-800 uppercase tracking-wider flex items-center gap-1.5"
                >
                  <span className="w-2 h-2 rounded-full bg-cyan-500" />
                  Escribe tu nombre o apodo urbano:
                </label>
                {inputText && (
                  <button
                    type="button"
                    onClick={() => setInputText("")}
                    className="text-xs font-bold text-rose-600 hover:text-rose-700 transition-colors flex items-center gap-1"
                  >
                    ✕ Limpiar texto
                  </button>
                )}
              </div>

              <div className="relative">
                <input
                  id={textInputId}
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Ej: KING, STREET, CREW, TU NOMBRE..."
                  className="w-full bg-slate-50 hover:bg-white border-2 border-slate-300 focus:border-cyan-500 rounded-2xl px-5 py-4 text-lg sm:text-xl font-black text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-cyan-500/20 transition-all shadow-inner"
                />
              </div>

              {/* Tag Decorators (One-Click Tag Wrappers) */}
              <div className="space-y-1.5 pt-1">
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wide">
                  Decoradores de Tag (un clic para añadir simbolos callejeros):
                </span>
                <div className="flex flex-wrap gap-1.5 items-center">
                  {[
                    { label: "👑 Corona King", pre: "👑 ", post: " 👑" },
                    { label: "🔥 Fuego Burner", pre: "🔥 ", post: " 🔥" },
                    { label: "★ Estrellas", pre: "★ ", post: " ★" },
                    { label: "⚡ Rayo", pre: "⚡ ", post: " ⚡" },
                    { label: "☠ Calavera", pre: "☠ ", post: " ☠" },
                    { label: "『』 Brackets", pre: "『 ", post: " 』" },
                    { label: "꧁꧂ Alas", pre: "꧁ ", post: " ꧂" },
                    { label: "✦ Diamante", pre: "✦ ", post: " ✦" },
                  ].map((dec) => (
                    <button
                      key={dec.label}
                      type="button"
                      onClick={() => handleApplyDecorator(dec.pre, dec.post)}
                      className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-cyan-50 text-slate-700 hover:text-cyan-800 hover:border-cyan-300 border border-slate-200 text-xs font-semibold transition-all active:scale-95"
                    >
                      {dec.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quick Word Presets */}
              <div className="flex items-center gap-2 overflow-x-auto pt-2 pb-1 scrollbar-none text-xs">
                <span className="text-slate-500 font-bold shrink-0">Palabras rapidas:</span>
                {["Street", "King", "Crew", "Urban", "Wild", "Zone", "Drop", "Graffiti"].map(
                  (preset) => (
                    <button
                      key={preset}
                      type="button"
                      onClick={() => setInputText(preset)}
                      className="px-3 py-1 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold shrink-0 transition-colors"
                    >
                      {preset}
                    </button>
                  )
                )}
              </div>
            </div>

            {/* Filters, Categories & Search */}
            <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 pt-3 border-t border-slate-200">
              {/* Category Pills */}
              <div className="flex flex-wrap gap-1.5 items-center">
                {[
                  { label: "Todos", val: "todos", count: GRAFFITI_STYLES.length },
                  { label: "Urbano", val: "urbano" },
                  { label: "Bloque 3D", val: "bloque" },
                  { label: "Burbuja", val: "burbuja" },
                  { label: "Gótica", val: "gotica" },
                  { label: "Tags", val: "tags" },
                  {
                    label: `Favoritos (${favorites.size})`,
                    val: "favoritos",
                  },
                ].map((pill) => (
                  <button
                    key={pill.val}
                    type="button"
                    onClick={() => setSelectedCategory(pill.val)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                      selectedCategory === pill.val
                        ? "bg-slate-900 text-white shadow-sm"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    }`}
                  >
                    {pill.label}
                  </button>
                ))}
              </div>

              {/* Search Input */}
              <div className="relative w-full md:w-60">
                <input
                  id={searchInputId}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Buscar estilo o etiqueta..."
                  className="w-full text-xs bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:bg-white transition-all"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery("")}
                    className="absolute right-2.5 top-2 text-xs text-slate-400 hover:text-slate-600"
                  >
                    ✕
                  </button>
                )}
              </div>
            </div>

            {/* Styles Counter Badge */}
            <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
              <span>Mostrando {filteredStyles.length} estilos de graffiti</span>
              <span className="hidden sm:inline">Haz clic en cualquier caja para copiar al instante</span>
            </div>

            {/* Result Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredStyles.length === 0 ? (
                <div className="col-span-full py-12 text-center space-y-3 bg-slate-50 rounded-2xl border border-slate-200">
                  <span className="text-3xl">🔍</span>
                  <p className="text-base font-bold text-slate-800">
                    No se encontraron estilos para tu busqueda
                  </p>
                  <p className="text-xs text-slate-500">
                    Prueba con otra categoria o borra el filtro de busqueda.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedCategory("todos");
                      setSearchQuery("");
                    }}
                    className="px-4 py-2 rounded-xl bg-slate-900 text-white text-xs font-bold"
                  >
                    Restablecer filtros
                  </button>
                </div>
              ) : (
                filteredStyles.map((style) => {
                  const currentText = inputText.trim() || "GRAFFITI";
                  const transformed = style.transform(currentText);
                  const isCopied = copiedId === style.id;
                  const isFav = favorites.has(style.id);

                  // Category color badges
                  const catColors: Record<string, string> = {
                    urbano: "bg-cyan-50 text-cyan-700 border-cyan-200",
                    bloque: "bg-indigo-50 text-indigo-700 border-indigo-200",
                    burbuja: "bg-pink-50 text-pink-700 border-pink-200",
                    gotica: "bg-purple-50 text-purple-700 border-purple-200",
                    tags: "bg-amber-50 text-amber-800 border-amber-200",
                  };

                  return (
                    <div
                      key={style.id}
                      className={`p-4 sm:p-5 rounded-2xl border-2 transition-all duration-200 flex flex-col justify-between space-y-3 ${
                        isCopied
                          ? "bg-emerald-50/80 border-emerald-400 ring-2 ring-emerald-500/20 shadow-md"
                          : "bg-white border-slate-200 hover:border-cyan-300 hover:shadow-md"
                      }`}
                    >
                      <div className="space-y-2">
                        {/* Card Header */}
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-extrabold text-slate-900 text-sm">
                            {style.name}
                          </span>
                          <div className="flex items-center gap-1.5">
                            <span
                              className={`px-2 py-0.5 rounded-md text-[10px] font-black uppercase border ${
                                catColors[style.category] || "bg-slate-100 text-slate-600"
                              }`}
                            >
                              {style.category}
                            </span>
                            <button
                              type="button"
                              onClick={() => toggleFavorite(style.id)}
                              aria-label={isFav ? "Quitar de favoritos" : "Guardar en favoritos"}
                              className={`p-1.5 rounded-lg transition-colors ${
                                isFav
                                  ? "text-rose-600 bg-rose-50"
                                  : "text-slate-400 hover:text-slate-700 hover:bg-slate-100"
                              }`}
                            >
                              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                              </svg>
                            </button>
                          </div>
                        </div>

                        {/* Interactive Text Box */}
                        <div
                          onClick={() => handleCopyStyle(style.id, transformed)}
                          title="Toca para copiar"
                          className="p-3.5 bg-slate-50 hover:bg-cyan-50/50 rounded-xl border border-slate-200 hover:border-cyan-400 text-slate-950 text-base sm:text-lg font-bold cursor-pointer transition-all select-all break-words shadow-2xs group flex items-center justify-between gap-2"
                        >
                          <span className="font-semibold tracking-wide">{transformed}</span>
                          <span className="text-[11px] font-bold text-slate-400 group-hover:text-cyan-600 shrink-0">
                            Copiar ↗
                          </span>
                        </div>

                        <p className="text-[11px] text-slate-500 leading-relaxed">
                          {style.description}
                        </p>
                      </div>

                      {/* Card Footer Actions */}
                      <div className="pt-2 border-t border-slate-100 flex items-center justify-between gap-2">
                        <button
                          type="button"
                          onClick={() => handleSendToDesigner(transformed)}
                          className="text-[11px] font-bold text-slate-600 hover:text-pink-600 transition-colors flex items-center gap-1"
                        >
                          <span>🎨 Diseñar en PNG</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => handleCopyStyle(style.id, transformed)}
                          className={`px-4 py-2 rounded-xl text-xs font-black transition-all flex items-center gap-1.5 shadow-sm active:scale-95 ${
                            isCopied
                              ? "bg-emerald-600 text-white shadow-emerald-200"
                              : "bg-slate-900 hover:bg-cyan-600 text-white"
                          }`}
                        >
                          {isCopied ? (
                            <>
                              <svg
                                className="w-3.5 h-3.5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={3}
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                              <span>¡Copiado!</span>
                            </>
                          ) : (
                            <>
                              <svg
                                className="w-3.5 h-3.5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2.5}
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                                />
                              </svg>
                              <span>Copiar</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
      )}

      {/* ── MODE 2: Diseñar Graffiti (Canvas Studio & PNG Export) ── */}
      {activeMode === "designer" && (
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
          {/* Street Header Banner */}
          <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 p-6 text-white border-b border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-black uppercase tracking-wider bg-pink-500/20 text-pink-400 border border-pink-500/40">
                  Estudio Grafico Callejero
                </span>
                <span className="text-xs text-slate-400">Exportacion PNG transparente HD</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                Diseñar Graffiti Personalizado en Imagen
              </h2>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleDownloadPNG}
                className="px-4 py-2 rounded-xl bg-pink-600 hover:bg-pink-500 text-white text-xs font-bold transition-all shadow-md flex items-center gap-1.5"
              >
                <span>📥 Descargar PNG</span>
              </button>
            </div>
          </div>

          <div className="p-6 sm:p-8 space-y-8">
            {/* Control Dashboard */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 bg-slate-50 rounded-2xl border border-slate-200">
              {/* Left Column: Text & Style Presets (7 cols) */}
              <div className="lg:col-span-7 space-y-4">
                <div>
                  <label
                    htmlFor={designerInputId}
                    className="font-black text-xs text-slate-800 uppercase tracking-wider block mb-1.5"
                  >
                    Nombre o palabra a diseñar:
                  </label>
                  <input
                    id={designerInputId}
                    type="text"
                    maxLength={16}
                    value={designerText}
                    onChange={(e) => setDesignerText(e.target.value)}
                    placeholder="Escribe aqui..."
                    className="w-full bg-white border-2 border-slate-300 focus:border-pink-500 rounded-xl px-4 py-3 text-base sm:text-lg font-black text-slate-900 focus:outline-none focus:ring-4 focus:ring-pink-500/20 transition-all shadow-inner uppercase"
                  />
                  <div className="flex items-center justify-between text-[11px] text-slate-500 mt-1">
                    <span>Recomendado: 3 a 10 letras para maximo volumen</span>
                    <span>{designerText.length} / 16 caracteres</span>
                  </div>
                </div>

                {/* Style Presets */}
                <div>
                  <label className="font-black text-xs text-slate-800 uppercase tracking-wider block mb-2">
                    Estilo de Graffiti:
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {[
                      { id: "bubble", label: "Bubble Throw-Up", icon: "🫧" },
                      { id: "block3d", label: "Block 3D", icon: "🧱" },
                      { id: "wildstyle", label: "Wildstyle Neón", icon: "⚡" },
                      { id: "burner", label: "Burner Fuego", icon: "🔥" },
                      { id: "drip", label: "Aerosol Drip", icon: "💧" },
                      { id: "stencil", label: "Stencil Spray", icon: "🎯" },
                    ].map((st) => (
                      <button
                        key={st.id}
                        type="button"
                        onClick={() => setCanvasStyle(st.id as CanvasStylePreset)}
                        className={`p-2.5 rounded-xl font-bold text-xs flex items-center gap-2 transition-all ${
                          canvasStyle === st.id
                            ? "bg-pink-600 text-white shadow-md shadow-pink-200 scale-[1.02]"
                            : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-100"
                        }`}
                      >
                        <span>{st.icon}</span>
                        <span className="truncate">{st.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Canvas Background Choice */}
                <div>
                  <label className="font-black text-xs text-slate-800 uppercase tracking-wider block mb-2">
                    Fondo del Lienzo:
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {[
                      { id: "transparent", label: "Transparente (PNG)", desc: "Sin fondo" },
                      { id: "brick", label: "Muro Ladrillo", desc: "Urbano oscuro" },
                      { id: "asphalt", label: "Asfalto", desc: "Calle negra" },
                      { id: "white", label: "Estudio Blanco", desc: "Limpio" },
                    ].map((bg) => (
                      <button
                        key={bg.id}
                        type="button"
                        onClick={() => setCanvasBg(bg.id as CanvasBackgroundPreset)}
                        className={`p-2 rounded-xl text-left transition-all ${
                          canvasBg === bg.id
                            ? "bg-slate-900 text-white shadow-sm ring-2 ring-pink-500"
                            : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-100"
                        }`}
                      >
                        <span className="block text-xs font-bold leading-tight">{bg.label}</span>
                        <span className="block text-[10px] text-slate-400">{bg.desc}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Colors & Sliders (5 cols) */}
              <div className="lg:col-span-5 space-y-4">
                {/* Fill Color */}
                <div>
                  <label className="font-black text-xs text-slate-800 uppercase tracking-wider block mb-1.5">
                    Color de Relleno:
                  </label>
                  <div className="flex flex-wrap items-center gap-2">
                    {[
                      { hex: "#06B6D4", label: "Cyan" },
                      { hex: "#EC4899", label: "Rosa" },
                      { hex: "#84CC16", label: "Lima" },
                      { hex: "#F97316", label: "Naranja" },
                      { hex: "#FACC15", label: "Oro" },
                      { hex: "#A855F7", label: "Purpura" },
                      { hex: "#FFFFFF", label: "Blanco" },
                    ].map((c) => (
                      <button
                        key={c.hex}
                        type="button"
                        title={c.label}
                        onClick={() => setFillColor(c.hex)}
                        style={{ backgroundColor: c.hex }}
                        className={`w-7 h-7 rounded-full border-2 transition-transform ${
                          fillColor === c.hex
                            ? "scale-115 border-pink-600 ring-2 ring-pink-300"
                            : "border-slate-300 hover:scale-105"
                        }`}
                      />
                    ))}
                    <label className="flex items-center gap-1 cursor-pointer">
                      <input
                        type="color"
                        value={fillColor}
                        onChange={(e) => setFillColor(e.target.value)}
                        className="w-7 h-7 rounded-full border border-slate-300 cursor-pointer p-0"
                      />
                      <span className="text-[11px] text-slate-500 font-semibold">Custom</span>
                    </label>
                  </div>
                </div>

                {/* Outline Color */}
                <div>
                  <label className="font-black text-xs text-slate-800 uppercase tracking-wider block mb-1.5">
                    Color de Contorno:
                  </label>
                  <div className="flex flex-wrap items-center gap-2">
                    {[
                      { hex: "#0F172A", label: "Negro Marino" },
                      { hex: "#000000", label: "Negro Puro" },
                      { hex: "#7F1D1D", label: "Rojo Oscuro" },
                      { hex: "#1E1B4B", label: "Azul Marino" },
                      { hex: "#FFFFFF", label: "Blanco" },
                    ].map((c) => (
                      <button
                        key={c.hex}
                        type="button"
                        title={c.label}
                        onClick={() => setOutlineColor(c.hex)}
                        style={{ backgroundColor: c.hex }}
                        className={`w-7 h-7 rounded-full border-2 transition-transform ${
                          outlineColor === c.hex
                            ? "scale-115 border-pink-600 ring-2 ring-pink-300"
                            : "border-slate-300 hover:scale-105"
                        }`}
                      />
                    ))}
                    <input
                      type="color"
                      value={outlineColor}
                      onChange={(e) => setOutlineColor(e.target.value)}
                      className="w-7 h-7 rounded-full border border-slate-300 cursor-pointer p-0"
                    />
                  </div>
                </div>

                {/* Sliders */}
                <div className="space-y-3 pt-1">
                  <div>
                    <div className="flex justify-between text-xs font-bold text-slate-700 mb-1">
                      <span>Grosor de borde:</span>
                      <span>{outlineWidth}px</span>
                    </div>
                    <input
                      type="range"
                      min={2}
                      max={18}
                      value={outlineWidth}
                      onChange={(e) => setOutlineWidth(Number(e.target.value))}
                      className="w-full accent-pink-600 cursor-pointer"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-bold text-slate-700 mb-1">
                      <span>Profundidad 3D / Sombra:</span>
                      <span>{shadowDepth}px</span>
                    </div>
                    <input
                      type="range"
                      min={0}
                      max={25}
                      value={shadowDepth}
                      onChange={(e) => setShadowDepth(Number(e.target.value))}
                      className="w-full accent-pink-600 cursor-pointer"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-bold text-slate-700 mb-1">
                      <span>Tamaño de fuente:</span>
                      <span>{fontSizeSetting}px</span>
                    </div>
                    <input
                      type="range"
                      min={44}
                      max={96}
                      value={fontSizeSetting}
                      onChange={(e) => setFontSizeSetting(Number(e.target.value))}
                      className="w-full accent-pink-600 cursor-pointer"
                    />
                  </div>
                </div>

                {/* Splatters Checkbox */}
                <div className="pt-2">
                  <label className="flex items-center gap-2 cursor-pointer font-bold text-xs text-slate-800">
                    <input
                      type="checkbox"
                      checked={enableSplatters}
                      onChange={(e) => setEnableSplatters(e.target.checked)}
                      className="rounded text-pink-600 focus:ring-pink-500 h-4 w-4"
                    />
                    <span>Salpicaduras de spray aerosol alrededor</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Live Canvas Stage */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-pink-500" />
                  Lienzo en Vivo (Resolucion 800 × 400 px HD):
                </span>
                <span className="text-xs text-slate-500 font-semibold">
                  {canvasBg === "transparent" ? "Fondo transparente activado" : "Con fondo visual"}
                </span>
              </div>

              {/* Checkerboard Pattern for Transparency representation */}
              <div
                className="relative rounded-2xl border-2 border-slate-300 overflow-hidden flex items-center justify-center p-2 shadow-inner"
                style={{
                  backgroundImage:
                    canvasBg === "transparent"
                      ? "radial-gradient(#cbd5e1 1px, transparent 1px), radial-gradient(#cbd5e1 1px, #f8fafc 1px)"
                      : "none",
                  backgroundSize: "20px 20px",
                  backgroundPosition: "0 0, 10px 10px",
                }}
              >
                <canvas
                  ref={canvasRef}
                  className="w-full max-w-full h-auto block rounded-xl shadow-lg"
                />
              </div>
            </div>

            {/* Export Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                type="button"
                onClick={handleDownloadPNG}
                className="flex-1 py-4 px-6 rounded-2xl bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-500 hover:to-rose-500 active:scale-[0.98] text-white font-black text-sm sm:text-base shadow-lg shadow-pink-500/25 transition-all flex items-center justify-center gap-2.5"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
                <span>Descargar Graffiti en PNG de Alta Calidad</span>
              </button>

              <button
                type="button"
                onClick={handleCopyCanvasImage}
                className="py-4 px-5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2"
              >
                {canvasCopied ? (
                  <>
                    <span>✓ ¡Imagen copiada!</span>
                  </>
                ) : (
                  <>
                    <span>📋 Copiar Imagen al Portapapeles</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={() => {
                  setInputText(designerText);
                  setActiveMode("copy");
                }}
                className="py-4 px-5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs sm:text-sm font-bold transition-colors"
              >
                Ver en Texto para Copiar →
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── MODE 3: Abecedario Graffiti A-Z + Ñ ── */}
      {activeMode === "alphabet" && (
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 p-6 text-white border-b border-slate-800 space-y-1">
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-black uppercase tracking-wider bg-indigo-500/20 text-indigo-400 border border-indigo-500/40 inline-block mb-1">
              Guia Tipografica 27 Letras
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              Abecedario de Letras Graffiti (A a la Z y Ñ)
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Aprende los trazos, variantes y proporciones de cada letra. Toca cualquiera para probarla o cargarla en el generador.
            </p>
          </div>

          <div className="p-6 sm:p-8 space-y-8">
            {/* Quick Letter Navigation Ribbon */}
            <div className="space-y-2">
              <span className="text-xs font-black text-slate-700 uppercase tracking-wide">
                Selecciona una letra para ver su ficha completa:
              </span>
              <div className="flex flex-wrap gap-1.5 p-2 bg-slate-50 rounded-2xl border border-slate-200">
                {GRAFFITI_ALPHABET.map((item) => (
                  <button
                    key={item.letter}
                    type="button"
                    onClick={() => setSelectedAlphabetLetter(item.letter)}
                    className={`w-9 h-9 rounded-xl font-black text-sm transition-all flex items-center justify-center ${
                      selectedAlphabetLetter === item.letter
                        ? "bg-indigo-600 text-white shadow-md scale-110"
                        : "bg-white text-slate-800 hover:bg-indigo-50 border border-slate-200"
                    }`}
                  >
                    {item.letter}
                  </button>
                ))}
              </div>
            </div>

            {/* Featured Letter Showcase */}
            <div className="p-6 bg-gradient-to-br from-indigo-50/80 via-white to-slate-50 rounded-2xl border-2 border-indigo-200 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-indigo-600 text-white font-black text-3xl flex items-center justify-center shadow-lg shadow-indigo-300">
                    {selectedLetterData.letter}
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-slate-900">
                      {selectedLetterData.name}
                    </h3>
                    <p className="text-xs text-indigo-700 font-semibold">
                      Variantes tipograficas urbanas
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      setInputText(selectedLetterData.letter);
                      setActiveMode("copy");
                    }}
                    className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold transition-all shadow-sm"
                  >
                    Probar {selectedLetterData.letter} en Generador →
                  </button>
                </div>
              </div>

              {/* Variants showcase */}
              <div className="grid grid-cols-3 gap-3 pt-2">
                <div className="p-3 bg-white rounded-xl border border-slate-200 text-center space-y-1">
                  <span className="text-[10px] font-bold text-slate-500 uppercase">Bloque</span>
                  <div className="text-2xl font-black text-slate-900">
                    {selectedLetterData.blockChar}
                  </div>
                </div>
                <div className="p-3 bg-white rounded-xl border border-slate-200 text-center space-y-1">
                  <span className="text-[10px] font-bold text-slate-500 uppercase">Burbuja</span>
                  <div className="text-2xl font-black text-slate-900">
                    {selectedLetterData.bubbleChar}
                  </div>
                </div>
                <div className="p-3 bg-white rounded-xl border border-slate-200 text-center space-y-1">
                  <span className="text-[10px] font-bold text-slate-500 uppercase">Gotica</span>
                  <div className="text-2xl font-black text-slate-900">
                    {selectedLetterData.gothicChar}
                  </div>
                </div>
              </div>

              {/* Tip */}
              <div className="p-4 bg-white/90 rounded-xl border border-indigo-100 text-xs text-slate-700 space-y-1">
                <strong className="text-indigo-900 block font-bold">Consejo de dibujo:</strong>
                <p className="leading-relaxed">{selectedLetterData.tip}</p>
              </div>
            </div>

            {/* Complete Grid of 27 letters */}
            <div className="space-y-3">
              <span className="text-xs font-black text-slate-800 uppercase tracking-wide block">
                Todas las 27 letras del abecedario urbano:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                {GRAFFITI_ALPHABET.map((item) => (
                  <div
                    key={item.letter}
                    onClick={() => {
                      setSelectedAlphabetLetter(item.letter);
                      setInputText(item.letter);
                      setActiveMode("copy");
                    }}
                    className="p-4 rounded-2xl border border-slate-200 hover:border-indigo-400 hover:bg-indigo-50/30 cursor-pointer transition-all space-y-2 group bg-white shadow-2xs"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-black text-slate-900 group-hover:text-indigo-600 transition-colors">
                        {item.letter}
                      </span>
                      <span className="text-xs font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded-lg border border-indigo-100">
                        {item.name}
                      </span>
                    </div>

                    <div className="flex items-center justify-around text-lg font-black text-slate-800 p-2 bg-slate-50 rounded-xl">
                      <span title="Estilo Bloque">{item.blockChar}</span>
                      <span title="Estilo Burbuja">{item.bubbleChar}</span>
                      <span title="Estilo Gotica">{item.gothicChar}</span>
                    </div>

                    <p className="text-[11px] text-slate-600 leading-relaxed line-clamp-2">
                      {item.tip}
                    </p>

                    <div className="text-[11px] font-bold text-indigo-700 group-hover:underline pt-1">
                      Cargar letra {item.letter} en el generador →
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── MODE 4: Ejemplos de Nombres Populares y Tags ── */}
      {activeMode === "examples" && (
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 p-6 text-white border-b border-slate-800 space-y-1">
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-black uppercase tracking-wider bg-amber-500/20 text-amber-400 border border-amber-500/40 inline-block mb-1">
              Coleccion de Nombres y Nicks
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              Nombres Populares en Letras Graffiti
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Toca cualquier nombre o nick para cargarlo de inmediato tanto en el modo texto para copiar como en el diseñador visual.
            </p>
          </div>

          <div className="p-6 sm:p-8 space-y-6">
            {/* Curated Categories */}
            <div className="space-y-3">
              <span className="text-xs font-black text-slate-800 uppercase tracking-wide block">
                Nombres Populares y Nicks para Juegos:
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {PRESET_NAMES.map((name) => (
                  <button
                    key={name}
                    type="button"
                    onClick={() => {
                      setInputText(name);
                      setDesignerText(name);
                      setActiveMode("copy");
                      triggerToast(`Cargado nombre "${name}"`);
                    }}
                    className="p-4 bg-slate-50 hover:bg-amber-50/70 border border-slate-200 hover:border-amber-400 rounded-2xl text-left transition-all group shadow-2xs"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-black text-base text-slate-900 group-hover:text-amber-900 block">
                        {name}
                      </span>
                      <span className="text-xs text-amber-600 font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                        Probar →
                      </span>
                    </div>
                    <span className="text-[11px] text-slate-500 block mt-1">
                      Ver en estilos urbanos
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Tips */}
            <div className="p-5 bg-amber-50/60 rounded-2xl border border-amber-200 space-y-2 text-xs text-amber-950">
              <strong className="font-black text-sm block">
                ¿Como elegir un buen nick para graffiti?
              </strong>
              <p className="leading-relaxed">
                Los mejores apodos callejeros tienen entre 4 y 7 letras. Tienen buen ritmo fonetico y ofrecen suficiente espacio para combinar formas circulares y angulares sin apelmazar el diseño.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
