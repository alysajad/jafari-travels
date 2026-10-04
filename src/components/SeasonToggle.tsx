import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { Snowflake, Sun } from "lucide-react";
import { packages } from "../data/site";

type Season = "summer" | "winter";
const SeasonContext = createContext<{ season: Season; setSeason: (season: Season) => void } | null>(null);
const storageKey = "jaffari-travel-season";
const packagesBySeason = {
  winter: packages.filter((pkg) => pkg.season === "winter"),
  summer: packages.filter((pkg) => pkg.season !== "winter"),
};

export function SeasonProvider({ children }: { children: ReactNode }) {
  const [season, setSeason] = useState<Season>(() => {
    try {
      return sessionStorage.getItem(storageKey) === "summer" ? "summer" : "winter";
    } catch {
      return "winter";
    }
  });

  useEffect(() => {
    try {
      sessionStorage.setItem(storageKey, season);
    } catch {
      // The toggle still works when browser storage is unavailable.
    }
  }, [season]);

  return <SeasonContext.Provider value={{ season, setSeason }}>{children}</SeasonContext.Provider>;
}

export function useSeason() {
  const context = useContext(SeasonContext);
  if (!context) throw new Error("useSeason must be used within SeasonProvider");
  return {
    ...context,
    isWinter: context.season === "winter",
    seasonLabel: context.season === "winter" ? "Winter" : "Summer",
    seasonPackages: packagesBySeason[context.season],
  };
}

export function SeasonToggle({ onChange }: { onChange?: () => void }) {
  const { season, setSeason, isWinter } = useSeason();
  return (
    <div role="group" aria-label="Travel season" className="relative isolate grid w-[264px] max-w-full grid-cols-2 rounded-full border border-white/40 bg-kashmir-blue/80 p-1 shadow-lg backdrop-blur-md">
      <span aria-hidden="true" className={`pointer-events-none absolute bottom-1 left-1 top-1 -z-10 w-[calc(50%_-_4px)] rounded-full bg-secondary transition-transform duration-300 motion-reduce:transition-none ${isWinter ? "translate-x-full" : "translate-x-0"}`} />
      {(["summer", "winter"] as const).map((value) => {
        const Icon = value === "summer" ? Sun : Snowflake;
        return (
          <button
            key={value}
            type="button"
            aria-pressed={season === value}
            onClick={() => {
              if (season !== value) {
                setSeason(value);
                onChange?.();
              }
            }}
            className={`flex min-h-11 items-center justify-center gap-2 rounded-full px-3 text-xs font-extrabold uppercase tracking-widest transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white motion-reduce:transition-none ${season === value ? "text-kashmir-blue" : "text-white/85 hover:text-white"}`}
          >
            <Icon aria-hidden="true" className="h-4 w-4" />
            {value === "summer" ? "Summer" : "Winter"}
          </button>
        );
      })}
    </div>
  );
}
