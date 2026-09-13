"use client";

import { SearchIcon } from "@/components/ui/Icons";

type FontSearchProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
};

export function FontSearch({
  value,
  onChange,
  placeholder = "Buscar estilo...",
}: FontSearchProps) {
  return (
    <div className="font-search">
      <span className="font-search__icon">
        <SearchIcon />
      </span>
      <label className="sr-only" htmlFor="font-search">
        Buscar estilo
      </label>
      <input
        id="font-search"
        className="font-search__input"
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        autoComplete="off"
        spellCheck={false}
      />
    </div>
  );
}
