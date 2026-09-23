import { smallCaps } from "@/lib/unicode/mappings/alphabets";

export type AttitudeVibe = "all" | "confident" | "dark" | "rebel" | "cold" | "royal" | "mysterious";

export interface VibeDefinition {
  id: AttitudeVibe;
  label: string;
  icon: string;
  badgeLabel: string;
  description: string;
}

export const ATTITUDE_VIBES: VibeDefinition[] = [
  { id: "all", label: "All Vibes", icon: "✨", badgeLabel: "All", description: "All attitude nickname ideas" },
  { id: "confident", label: "Confident", icon: "🦁", badgeLabel: "Confident", description: "Bold, unshaken, and self-assured identity" },
  { id: "dark", label: "Dark", icon: "🌑", badgeLabel: "Dark", description: "Shadows, night, silence, and void aesthetics" },
  { id: "rebel", label: "Rebel", icon: "⚡", badgeLabel: "Rebel", description: "Untamed, wild, and defiant no-rules attitude" },
  { id: "cold", label: "Cold & Calm", icon: "❄️", badgeLabel: "Cold · Calm", description: "Calculated, silent, and icy composure" },
  { id: "royal", label: "Royal", icon: "👑", badgeLabel: "Royal", description: "Commanding, prime, high-status leadership" },
  { id: "mysterious", label: "Mysterious", icon: "🔮", badgeLabel: "Mysterious", description: "Phantom, enigmatic, and unpredictable presence" },
];

export interface AttitudeNicknameItem {
  id: string;
  name: string;
  vibe: AttitudeVibe;
  tags: string[];
  prefixWord: string;
  suffixWord: string;
  meaning: string;
}

export const ATTITUDE_NICKNAMES_DATABASE: AttitudeNicknameItem[] = [
  // Confident
  { id: "att-conf-1", name: "Unshaken", vibe: "confident", tags: ["Confident", "Steadfast"], prefixWord: "Unshaken", suffixWord: "", meaning: "Unwavering resolve under fire" },
  { id: "att-conf-2", name: "AlphaAce", vibe: "confident", tags: ["Confident", "Alpha"], prefixWord: "Alpha", suffixWord: "Ace", meaning: "Lead duelist and clutch player" },
  { id: "att-conf-3", name: "ZeroDoubt", vibe: "confident", tags: ["Confident", "Decisive"], prefixWord: "Zero", suffixWord: "Doubt", meaning: "Immediate reaction without hesitation" },
  { id: "att-conf-4", name: "PrimeSoul", vibe: "confident", tags: ["Confident", "Elite"], prefixWord: "Prime", suffixWord: "Soul", meaning: "Peak gaming performance" },
  { id: "att-conf-5", name: "OwnLane", vibe: "confident", tags: ["Confident", "Independent"], prefixWord: "Own", suffixWord: "Lane", meaning: "Carving an independent path" },
  { id: "att-conf-6", name: "BoldMind", vibe: "confident", tags: ["Confident", "Tactical"], prefixWord: "Bold", suffixWord: "Mind", meaning: "Courageous tactical calls" },
  { id: "att-conf-7", name: "TrueAce", vibe: "confident", tags: ["Confident", "Consistent"], prefixWord: "True", suffixWord: "Ace", meaning: "Authentic match winner" },
  { id: "att-conf-8", name: "FearNone", vibe: "confident", tags: ["Confident", "Brave"], prefixWord: "Fear", suffixWord: "None", meaning: "Facing any squad with calm composure" },
  { id: "att-conf-9", name: "ApexCode", vibe: "confident", tags: ["Confident", "Apex"], prefixWord: "Apex", suffixWord: "Code", meaning: "Operating at top predator level" },
  { id: "att-conf-10", name: "SoloTitan", vibe: "confident", tags: ["Confident", "Titan"], prefixWord: "Solo", suffixWord: "Titan", meaning: "Colossal presence even when alone" },
  { id: "att-conf-11", name: "NobleStrike", vibe: "confident", tags: ["Confident", "Precise"], prefixWord: "Noble", suffixWord: "Strike", meaning: "Clean, honorable eliminations" },
  { id: "att-conf-12", name: "Unbroken", vibe: "confident", tags: ["Confident", "Resilient"], prefixWord: "Unbroken", suffixWord: "", meaning: "Never folding under pressure" },
  { id: "att-conf-13", name: "SureShot", vibe: "confident", tags: ["Confident", "Sniper"], prefixWord: "Sure", suffixWord: "Shot", meaning: "Every bullet finds its mark" },
  { id: "att-conf-14", name: "IronWill", vibe: "confident", tags: ["Confident", "Tough"], prefixWord: "Iron", suffixWord: "Will", meaning: "Mental strength in late zones" },
  { id: "att-conf-15", name: "DominantX", vibe: "confident", tags: ["Confident", "Dominant"], prefixWord: "Dominant", suffixWord: "X", meaning: "Controlling the pace of combat" },
  { id: "att-conf-16", name: "PrimeFocus", vibe: "confident", tags: ["Confident", "Sharp"], prefixWord: "Prime", suffixWord: "Focus", meaning: "Undistracted sightlines" },
  { id: "att-conf-17", name: "Steadfast", vibe: "confident", tags: ["Confident", "Calm"], prefixWord: "Steadfast", suffixWord: "", meaning: "Anchored through chaotic rushes" },
  { id: "att-conf-18", name: "Limitless", vibe: "confident", tags: ["Confident", "Unbound"], prefixWord: "Limitless", suffixWord: "", meaning: "No ceiling on skill ceiling" },

  // Dark
  { id: "att-dark-1", name: "DarkViper", vibe: "dark", tags: ["Dark", "Predator"], prefixWord: "Dark", suffixWord: "Viper", meaning: "Lethal strikes from unseen angles" },
  { id: "att-dark-2", name: "SilentVoid", vibe: "dark", tags: ["Dark", "Mysterious"], prefixWord: "Silent", suffixWord: "Void", meaning: "Total silence before the wipe" },
  { id: "att-dark-3", name: "DarkNova", vibe: "dark", tags: ["Dark", "Explosive"], prefixWord: "Dark", suffixWord: "Nova", meaning: "An explosion born of dark energy" },
  { id: "att-dark-4", name: "NightViper", vibe: "dark", tags: ["Dark", "Night"], prefixWord: "Night", suffixWord: "Viper", meaning: "Hunting in shadowed terrain" },
  { id: "att-dark-5", name: "ShadowAce", vibe: "dark", tags: ["Dark", "Shadow"], prefixWord: "Shadow", suffixWord: "Ace", meaning: "Moving unseen through crossfire" },
  { id: "att-dark-6", name: "BlackFrost", vibe: "dark", tags: ["Dark", "Cold"], prefixWord: "Black", suffixWord: "Frost", meaning: "Chilling presence in final circles" },
  { id: "att-dark-7", name: "VoidWolf", vibe: "dark", tags: ["Dark", "Hunter"], prefixWord: "Void", suffixWord: "Wolf", meaning: "Lone predator from empty space" },
  { id: "att-dark-8", name: "NightPulse", vibe: "dark", tags: ["Dark", "Rhythm"], prefixWord: "Night", suffixWord: "Pulse", meaning: "Stealthy heartbeat tracking targets" },
  { id: "att-dark-9", name: "PhantomX", vibe: "dark", tags: ["Dark", "Ghost"], prefixWord: "Phantom", suffixWord: "X", meaning: "Leaving only footprints behind" },
  { id: "att-dark-10", name: "AbyssWalker", vibe: "dark", tags: ["Dark", "Abyss"], prefixWord: "Abyss", suffixWord: "Walker", meaning: "Comfortable where danger is deepest" },
  { id: "att-dark-11", name: "DarkCipher", vibe: "dark", tags: ["Dark", "Enigma"], prefixWord: "Dark", suffixWord: "Cipher", meaning: "Unreadable gameplay patterns" },
  { id: "att-dark-12", name: "ShadowRaven", vibe: "dark", tags: ["Dark", "Scout"], prefixWord: "Shadow", suffixWord: "Raven", meaning: "High ground scout with dark feathers" },
  { id: "att-dark-13", name: "DuskFang", vibe: "dark", tags: ["Dark", "Bite"], prefixWord: "Dusk", suffixWord: "Fang", meaning: "Striking when twilight falls" },
  { id: "att-dark-14", name: "NightSpecter", vibe: "dark", tags: ["Dark", "Haunt"], prefixWord: "Night", suffixWord: "Specter", meaning: "Appearing without making a sound" },
  { id: "att-dark-15", name: "EclipseHunter", vibe: "dark", tags: ["Dark", "Eclipse"], prefixWord: "Eclipse", suffixWord: "Hunter", meaning: "Blotting out rival squads" },
  { id: "att-dark-16", name: "GrimAce", vibe: "dark", tags: ["Dark", "Lethal"], prefixWord: "Grim", suffixWord: "Ace", meaning: "Ruthless execution of victory" },
  { id: "att-dark-17", name: "DarkPulse", vibe: "dark", tags: ["Dark", "Energy"], prefixWord: "Dark", suffixWord: "Pulse", meaning: "Surge of shadowy precision" },
  { id: "att-dark-18", name: "VoidStriker", vibe: "dark", tags: ["Dark", "Combat"], prefixWord: "Void", suffixWord: "Striker", meaning: "Eliminations originating from nowhere" },

  // Rebel
  { id: "att-reb-1", name: "NoRules", vibe: "rebel", tags: ["Rebel", "Defiant"], prefixWord: "No", suffixWord: "Rules", meaning: "Refusing to play by conventional tactics" },
  { id: "att-reb-2", name: "RogueX", vibe: "rebel", tags: ["Rebel", "Outlaw"], prefixWord: "Rogue", suffixWord: "X", meaning: "Free agent defying game meta" },
  { id: "att-reb-3", name: "Untamed", vibe: "rebel", tags: ["Rebel", "Wild"], prefixWord: "Untamed", suffixWord: "", meaning: "Wild spirit impossible to pin down" },
  { id: "att-reb-4", name: "WildCode", vibe: "rebel", tags: ["Rebel", "Unorthodox"], prefixWord: "Wild", suffixWord: "Code", meaning: "Unpredictable flanking angles" },
  { id: "att-reb-5", name: "OwnWay", vibe: "rebel", tags: ["Rebel", "Independent"], prefixWord: "Own", suffixWord: "Way", meaning: "Choosing the unconventional drop zone" },
  { id: "att-reb-6", name: "RebelAce", vibe: "rebel", tags: ["Rebel", "Maverick"], prefixWord: "Rebel", suffixWord: "Ace", meaning: "Defiant squad leader who gets results" },
  { id: "att-reb-7", name: "SoloLaw", vibe: "rebel", tags: ["Rebel", "Lone"], prefixWord: "Solo", suffixWord: "Law", meaning: "Setting the rules of every 1v1" },
  { id: "att-reb-8", name: "Unbound", vibe: "rebel", tags: ["Rebel", "Free"], prefixWord: "Unbound", suffixWord: "", meaning: "Free from standard team rotations" },
  { id: "att-reb-9", name: "NoLimits", vibe: "rebel", tags: ["Rebel", "Fearless"], prefixWord: "No", suffixWord: "Limits", meaning: "Pushing past safe zone boundaries" },
  { id: "att-reb-10", name: "NoFear", vibe: "rebel", tags: ["Rebel", "Bold"], prefixWord: "No", suffixWord: "Fear", meaning: "Directly confronting heavily armed enemies" },
  { id: "att-reb-11", name: "NoCrown", vibe: "rebel", tags: ["Rebel", "Anti-Royal"], prefixWord: "No", suffixWord: "Crown", meaning: "Dethroning ranked lobbies" },
  { id: "att-reb-12", name: "NoMaster", vibe: "rebel", tags: ["Rebel", "Sovereign"], prefixWord: "No", suffixWord: "Master", meaning: "Autonomous player answering to none" },
  { id: "att-reb-13", name: "RogueWolf", vibe: "rebel", tags: ["Rebel", "Hunter"], prefixWord: "Rogue", suffixWord: "Wolf", meaning: "Hunting outside the standard pack" },
  { id: "att-reb-14", name: "DefiantSoul", vibe: "rebel", tags: ["Rebel", "Grit"], prefixWord: "Defiant", suffixWord: "Soul", meaning: "Never giving up in a 1v4 standoff" },
  { id: "att-reb-15", name: "ZeroMercy", vibe: "rebel", tags: ["Rebel", "Cold"], prefixWord: "Zero", suffixWord: "Mercy", meaning: "Finishing the play without hesitation" },
  { id: "att-reb-16", name: "WildEcho", vibe: "rebel", tags: ["Rebel", "Echo"], prefixWord: "Wild", suffixWord: "Echo", meaning: "Gunshots echoing across the valley" },
  { id: "att-reb-17", name: "RoguePulse", vibe: "rebel", tags: ["Rebel", "Energy"], prefixWord: "Rogue", suffixWord: "Pulse", meaning: "Sudden aggressive tempo shifts" },
  { id: "att-reb-18", name: "VagrantAce", vibe: "rebel", tags: ["Rebel", "Nomad"], prefixWord: "Vagrant", suffixWord: "Ace", meaning: "Wandering warrior surviving everywhere" },

  // Cold
  { id: "att-cold-1", name: "ColdMind", vibe: "cold", tags: ["Cold", "Calculated"], prefixWord: "Cold", suffixWord: "Mind", meaning: "Analytical decisions amidst adrenaline" },
  { id: "att-cold-2", name: "SilentAce", vibe: "cold", tags: ["Cold", "Calm"], prefixWord: "Silent", suffixWord: "Ace", meaning: "Wins quietly without taunting" },
  { id: "att-cold-3", name: "FrostX", vibe: "cold", tags: ["Cold", "Ice"], prefixWord: "Frost", suffixWord: "X", meaning: "Freezing enemy advancements" },
  { id: "att-cold-4", name: "CalmShot", vibe: "cold", tags: ["Cold", "Sniper"], prefixWord: "Calm", suffixWord: "Shot", meaning: "Steady breath before headshots" },
  { id: "att-cold-5", name: "IceSoul", vibe: "cold", tags: ["Cold", "Composure"], prefixWord: "Ice", suffixWord: "Soul", meaning: "Nerves of absolute zero under siege" },
  { id: "att-cold-6", name: "ZeroNoise", vibe: "cold", tags: ["Cold", "Stealth"], prefixWord: "Zero", suffixWord: "Noise", meaning: "Zero audio cue before flank is sprung" },
  { id: "att-cold-7", name: "StillWolf", vibe: "cold", tags: ["Cold", "Patience"], prefixWord: "Still", suffixWord: "Wolf", meaning: "Patience until the enemy rotates into view" },
  { id: "att-cold-8", name: "ColdViper", vibe: "cold", tags: ["Cold", "Venom"], prefixWord: "Cold", suffixWord: "Viper", meaning: "Patient strike with immediate impact" },
  { id: "att-cold-9", name: "GlacierAce", vibe: "cold", tags: ["Cold", "Glacier"], prefixWord: "Glacier", suffixWord: "Ace", meaning: "Immovable rock holding down compound" },
  { id: "att-cold-10", name: "SilentScope", vibe: "cold", tags: ["Cold", "Distance"], prefixWord: "Silent", suffixWord: "Scope", meaning: "Crosshairs set from 300 meters away" },
  { id: "att-cold-11", name: "FrostGrip", vibe: "cold", tags: ["Cold", "Control"], prefixWord: "Frost", suffixWord: "Grip", meaning: "Firm weapon recoil control" },
  { id: "att-cold-12", name: "WinterGhost", vibe: "cold", tags: ["Cold", "Ghost"], prefixWord: "Winter", suffixWord: "Ghost", meaning: "Disappearing behind smoke screens" },
  { id: "att-cold-13", name: "CalmFocus", vibe: "cold", tags: ["Cold", "Zen"], prefixWord: "Calm", suffixWord: "Focus", meaning: "Zero tilt, pure game sense" },
  { id: "att-cold-14", name: "ZeroPanic", vibe: "cold", tags: ["Cold", "Composure"], prefixWord: "Zero", suffixWord: "Panic", meaning: "Unflappable when surrounded by gas" },
  { id: "att-cold-15", name: "ChillNova", vibe: "cold", tags: ["Cold", "Nova"], prefixWord: "Chill", suffixWord: "Nova", meaning: "Subtle blast cooling enemy rushes" },
  { id: "att-cold-16", name: "ArcticAce", vibe: "cold", tags: ["Cold", "Arctic"], prefixWord: "Arctic", suffixWord: "Ace", meaning: "Thriving in harsh survival scenarios" },
  { id: "att-cold-17", name: "StillShadow", vibe: "cold", tags: ["Cold", "Shadow"], prefixWord: "Still", suffixWord: "Shadow", meaning: "Stationary until the optimal trigger moment" },
  { id: "att-cold-18", name: "ColdPulse", vibe: "cold", tags: ["Cold", "Rhythm"], prefixWord: "Cold", suffixWord: "Pulse", meaning: "Slow steady heartbeat in the clutch" },

  // Royal
  { id: "att-roy-1", name: "RogueKing", vibe: "royal", tags: ["Royal", "Rebel"], prefixWord: "Rogue", suffixWord: "King", meaning: "Sovereign leader who writes his own decrees" },
  { id: "att-roy-2", name: "CrownAce", vibe: "royal", tags: ["Royal", "Crown"], prefixWord: "Crown", suffixWord: "Ace", meaning: "Reigning champion of ranked matches" },
  { id: "att-roy-3", name: "RoyalX", vibe: "royal", tags: ["Royal", "Elite"], prefixWord: "Royal", suffixWord: "X", meaning: "Noble bloodline on the battlefield" },
  { id: "att-roy-4", name: "IronKing", vibe: "royal", tags: ["Royal", "Strength"], prefixWord: "Iron", suffixWord: "King", meaning: "Unbending rule over the combat zone" },
  { id: "att-roy-5", name: "PrimeKing", vibe: "royal", tags: ["Royal", "Prime"], prefixWord: "Prime", suffixWord: "King", meaning: "Uncontested peak monarch" },
  { id: "att-roy-6", name: "CrownWolf", vibe: "royal", tags: ["Royal", "Hunter"], prefixWord: "Crown", suffixWord: "Wolf", meaning: "Alpha monarch leading the hunting pack" },
  { id: "att-roy-7", name: "KingVoid", vibe: "royal", tags: ["Royal", "Dark"], prefixWord: "King", suffixWord: "Void", meaning: "Ruler over shadows and silence" },
  { id: "att-roy-8", name: "RoyalFrost", vibe: "royal", tags: ["Royal", "Cold"], prefixWord: "Royal", suffixWord: "Frost", meaning: "Majestic and distant sovereign" },
  { id: "att-roy-9", name: "ApexCrown", vibe: "royal", tags: ["Royal", "Apex"], prefixWord: "Apex", suffixWord: "Crown", meaning: "Sitting at the highest tier" },
  { id: "att-roy-10", name: "ReignAce", vibe: "royal", tags: ["Royal", "Reign"], prefixWord: "Reign", suffixWord: "Ace", meaning: "Prolonged victory streak" },
  { id: "att-roy-11", name: "GrandMonarch", vibe: "royal", tags: ["Royal", "Status"], prefixWord: "Grand", suffixWord: "Monarch", meaning: "High-status authority" },
  { id: "att-roy-12", name: "NobleViper", vibe: "royal", tags: ["Royal", "Lethal"], prefixWord: "Noble", suffixWord: "Viper", meaning: "Aristocratic strikes with deadly impact" },
  { id: "att-roy-13", name: "SovereignX", vibe: "royal", tags: ["Royal", "Sovereign"], prefixWord: "Sovereign", suffixWord: "X", meaning: "Ultimate command over the lobby" },
  { id: "att-roy-14", name: "CrownPulse", vibe: "royal", tags: ["Royal", "Vitality"], prefixWord: "Crown", suffixWord: "Pulse", meaning: "The lifeblood of championship play" },
  { id: "att-roy-15", name: "ThroneBreaker", vibe: "royal", tags: ["Royal", "Fierce"], prefixWord: "Throne", suffixWord: "Breaker", meaning: "Toppling false leaders from above" },
  { id: "att-roy-16", name: "RoyalShadow", vibe: "royal", tags: ["Royal", "Shadow"], prefixWord: "Royal", suffixWord: "Shadow", meaning: "Monarch who strikes from darkness" },
  { id: "att-roy-17", name: "ImperialAce", vibe: "royal", tags: ["Royal", "Empire"], prefixWord: "Imperial", suffixWord: "Ace", meaning: "Vast territorial battlefield control" },
  { id: "att-roy-18", name: "LordSpecter", vibe: "royal", tags: ["Royal", "Ghost"], prefixWord: "Lord", suffixWord: "Specter", meaning: "Nobility haunting the enemy backline" },

  // Mysterious
  { id: "att-mys-1", name: "SilentVoid", vibe: "mysterious", tags: ["Mysterious", "Silence"], prefixWord: "Silent", suffixWord: "Void", meaning: "A mystery wrapped in silence" },
  { id: "att-mys-2", name: "PhantomAce", vibe: "mysterious", tags: ["Mysterious", "Ghost"], prefixWord: "Phantom", suffixWord: "Ace", meaning: "Here one second, gone the next" },
  { id: "att-mys-3", name: "EchoZero", vibe: "mysterious", tags: ["Mysterious", "Echo"], prefixWord: "Echo", suffixWord: "Zero", meaning: "Sound dissipating into nothing" },
  { id: "att-mys-4", name: "GhostSoul", vibe: "mysterious", tags: ["Mysterious", "Apparition"], prefixWord: "Ghost", suffixWord: "Soul", meaning: "Intangible player evading every shot" },
  { id: "att-mys-5", name: "EnigmaX", vibe: "mysterious", tags: ["Mysterious", "Puzzle"], prefixWord: "Enigma", suffixWord: "X", meaning: "Impossible to predict or read" },
  { id: "att-mys-6", name: "CipherWolf", vibe: "mysterious", tags: ["Mysterious", "Cryptic"], prefixWord: "Cipher", suffixWord: "Wolf", meaning: "Secret hunter with unknown goals" },
  { id: "att-mys-7", name: "SilentNova", vibe: "mysterious", tags: ["Mysterious", "Nova"], prefixWord: "Silent", suffixWord: "Nova", meaning: "A flash that leaves no acoustic trail" },
  { id: "att-mys-8", name: "ShadowGhost", vibe: "mysterious", tags: ["Mysterious", "Shadow"], prefixWord: "Shadow", suffixWord: "Ghost", meaning: "Two layers of concealment" },
  { id: "att-mys-9", name: "VanishAce", vibe: "mysterious", tags: ["Mysterious", "Disappear"], prefixWord: "Vanish", suffixWord: "Ace", meaning: "Disappearing instantly post-frag" },
  { id: "att-mys-10", name: "MistWalker", vibe: "mysterious", tags: ["Mysterious", "Fog"], prefixWord: "Mist", suffixWord: "Walker", meaning: "Operating within heavy cloud cover" },
  { id: "att-mys-11", name: "MirageSoul", vibe: "mysterious", tags: ["Mysterious", "Illusion"], prefixWord: "Mirage", suffixWord: "Soul", meaning: "Faking direction, shooting from behind" },
  { id: "att-mys-12", name: "DuskPhantom", vibe: "mysterious", tags: ["Mysterious", "Dusk"], prefixWord: "Dusk", suffixWord: "Phantom", meaning: "Shadow creature appearing at sunset" },
  { id: "att-mys-13", name: "OccultAce", vibe: "mysterious", tags: ["Mysterious", "Arcane"], prefixWord: "Occult", suffixWord: "Ace", meaning: "Mystic timing on grenade arcs" },
  { id: "att-mys-14", name: "SpecterX", vibe: "mysterious", tags: ["Mysterious", "Specter"], prefixWord: "Specter", suffixWord: "X", meaning: "Unseen force clearing out buildings" },
  { id: "att-mys-15", name: "VoidWhisper", vibe: "mysterious", tags: ["Mysterious", "Whisper"], prefixWord: "Void", suffixWord: "Whisper", meaning: "Quiet communication in intense clutch" },
  { id: "att-mys-16", name: "NebulaGhost", vibe: "mysterious", tags: ["Mysterious", "Cosmic"], prefixWord: "Nebula", suffixWord: "Ghost", meaning: "Star dust presence drifting in" },
  { id: "att-mys-17", name: "HiddenApex", vibe: "mysterious", tags: ["Mysterious", "Concealed"], prefixWord: "Hidden", suffixWord: "Apex", meaning: "Concealed superiority until revealed" },
  { id: "att-mys-18", name: "ZeroTrace", vibe: "mysterious", tags: ["Mysterious", "Trace"], prefixWord: "Zero", suffixWord: "Trace", meaning: "Zero clues left behind on the map" },
];

/**
 * Text Styler utilities for Attitude Nicknames:
 * 1. Clean: the original base word
 * 2. Bold / Small Caps: modern stylish look (small caps unicode)
 * 3. Framed: subtle brackets 『...』
 * 4. Decorated: classic gaming brackets 乂...乂 or 亗...亗
 */
export function formatSmallCaps(text: string): string {
  if (!text) return "";
  return Array.from(text)
    .map((char) => smallCaps[char] ?? char)
    .join("");
}

export function formatMathematicalBold(text: string): string {
  // Convert standard alphanumeric to mathematical bold (sans bold)
  if (!text) return "";
  return Array.from(text)
    .map((char) => {
      const code = char.codePointAt(0) || 0;
      // A-Z: 0x1D5D4
      if (code >= 65 && code <= 90) {
        return String.fromCodePoint(0x1d5d4 + (code - 65));
      }
      // a-z: 0x1D5EE
      if (code >= 97 && code <= 122) {
        return String.fromCodePoint(0x1d5ee + (code - 97));
      }
      // 0-9: 0x1D7EC
      if (code >= 48 && code <= 57) {
        return String.fromCodePoint(0x1d7ec + (code - 48));
      }
      return char;
    })
    .join("");
}

export interface NicknameStyles {
  clean: string;
  boldSmallCaps: string;
  mathBold: string;
  framedBracket: string;
  decoratedSamurai: string;
  decoratedCrown: string;
  decoratedRibbon: string;
}

export function generateAttitudeStyles(baseName: string): NicknameStyles {
  const clean = baseName.trim() || "DarkViper";
  const sc = formatSmallCaps(clean);
  const mb = formatMathematicalBold(clean);

  return {
    clean,
    boldSmallCaps: sc,
    mathBold: mb,
    framedBracket: `『${sc}』`,
    decoratedSamurai: `乂${sc}乂`,
    decoratedCrown: `亗 ${sc} 亗`,
    decoratedRibbon: `╰★${sc}★╮`,
  };
}

/**
 * Semantic Remix Engine:
 * Given a base nickname (e.g. "DarkViper" or "SilentAce"),
 * surfaces semantically related combinations:
 * - Matching prefix ("Dark*") -> DarkWolf, DarkNova, DarkAce
 * - Matching suffix ("*Viper") -> NightViper, ColdViper, VoidViper
 * - Matching vibe / related concepts
 */
export function getAttitudeRemix(
  item: AttitudeNicknameItem | { name: string; vibe?: AttitudeVibe },
  allNicknames = ATTITUDE_NICKNAMES_DATABASE
): AttitudeNicknameItem[] {
  const name = item.name.trim();
  const vibe = item.vibe ?? "all";

  // Try to parse prefix and suffix if not provided
  let prefix = "";
  let suffix = "";

  const foundItem = allNicknames.find((n) => n.name.toLowerCase() === name.toLowerCase());
  if (foundItem) {
    prefix = foundItem.prefixWord;
    suffix = foundItem.suffixWord;
  } else {
    // Basic heuristic: camelCase split (e.g., "DarkViper" -> ["Dark", "Viper"])
    const match = name.match(/([A-Z][a-z0-9]+|[A-Z]+)/g);
    if (match && match.length >= 2) {
      prefix = match[0];
      suffix = match[1];
    } else {
      prefix = name;
    }
  }

  const prefixMatches: AttitudeNicknameItem[] = [];
  const suffixMatches: AttitudeNicknameItem[] = [];
  const vibeMatches: AttitudeNicknameItem[] = [];

  for (const n of allNicknames) {
    if (n.name.toLowerCase() === name.toLowerCase()) continue;

    if (prefix && n.prefixWord.toLowerCase() === prefix.toLowerCase()) {
      prefixMatches.push(n);
    } else if (suffix && n.suffixWord.toLowerCase() === suffix.toLowerCase()) {
      suffixMatches.push(n);
    } else if (vibe !== "all" && n.vibe === vibe) {
      vibeMatches.push(n);
    }
  }

  // Combine and deduplicate
  const combined = [...prefixMatches, ...suffixMatches, ...vibeMatches];
  const unique = Array.from(new Map(combined.map((x) => [x.name, x])).values());

  // Return up to 6 closely related suggestions
  return unique.slice(0, 6);
}

/**
 * Semantic Word Bank for creating combinations on the fly
 */
export const VIBE_WORD_BANK: Record<
  Exclude<AttitudeVibe, "all">,
  { starters: string[]; finishers: string[] }
> = {
  confident: {
    starters: ["Prime", "Alpha", "Bold", "True", "Noble", "Apex", "Sure", "Iron"],
    finishers: ["Ace", "Soul", "Titan", "Lane", "Mind", "Doubt", "Strike", "Focus"],
  },
  dark: {
    starters: ["Shadow", "Void", "Night", "Black", "Dark", "Dusk", "Grim", "Abyss"],
    finishers: ["Viper", "Ace", "Nova", "Wolf", "Pulse", "Raven", "Specter", "Fang"],
  },
  rebel: {
    starters: ["Rogue", "Wild", "Untamed", "Unbound", "No", "Solo", "Defiant", "Zero"],
    finishers: ["Rules", "X", "Code", "Law", "Fear", "Crown", "Master", "Mercy"],
  },
  cold: {
    starters: ["Frost", "Ice", "Cold", "Silent", "Calm", "Glacier", "Arctic", "Winter"],
    finishers: ["Mind", "Ace", "Shot", "Soul", "Noise", "Wolf", "Viper", "Pulse"],
  },
  royal: {
    starters: ["Crown", "Royal", "King", "Prime", "Imperial", "Grand", "Apex", "Lord"],
    finishers: ["Ace", "X", "King", "Wolf", "Void", "Frost", "Reign", "Monarch"],
  },
  mysterious: {
    starters: ["Phantom", "Ghost", "Void", "Silent", "Enigma", "Cipher", "Mist", "Mirage"],
    finishers: ["Soul", "Ace", "Nova", "Zero", "Wolf", "Whisper", "Echo", "Trace"],
  },
};
