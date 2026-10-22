"use client";

import { Moon, Sun } from "lucide-react";
import { useSyncExternalStore } from "react";

type Theme = "dark" | "light";

function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme"],
  });
  return () => observer.disconnect();
}

const getSnapshot = (): Theme =>
  document.documentElement.dataset.theme === "light" ? "light" : "dark";
const getServerSnapshot = (): Theme => "dark";

export default function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const isLight = theme === "light";

  function toggle() {
    const next: Theme = isLight ? "dark" : "light";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* storage unavailable: theme still applies for this visit */
    }
  }

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isLight}
      aria-label="Tema claro"
      data-testid="theme-toggle"
      onClick={toggle}
      className="relative flex h-9 w-[72px] items-center rounded-full border border-line bg-surface p-1 transition-transform duration-150 ease-out active:scale-[0.97]"
    >
      <span
        aria-hidden
        className={`absolute left-1 h-7 w-8 rounded-full bg-inverse transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] motion-reduce:transition-none ${
          isLight ? "translate-x-[34px]" : "translate-x-0"
        }`}
      />
      <Moon
        aria-hidden
        strokeWidth={1.75}
        className={`relative h-4 w-8 transition-colors duration-200 ${
          isLight ? "text-muted" : "text-on-inverse"
        }`}
      />
      <Sun
        aria-hidden
        strokeWidth={1.75}
        className={`relative h-4 w-8 transition-colors duration-200 ${
          isLight ? "text-on-inverse" : "text-muted"
        }`}
      />
    </button>
  );
}
