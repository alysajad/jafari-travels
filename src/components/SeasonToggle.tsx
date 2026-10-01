import { createContext, useContext, useState, type ReactNode } from "react";
import { Snowflake, Sun } from "lucide-react";
import type { Season } from "../data/site";

const SeasonContext = createContext<{ season: Season; setSeason: (season: Season) => void } | null>(null);

export function SeasonProvider({ children }: { children: ReactNode }) {
  const [season, setSeason] = useState<Season>("winter");
  return <SeasonContext.Provider value={{ season, setSeason }}>{children}</SeasonContext.Provider>;
}

export function useSeason() {
  const context = useContext(SeasonContext);
  if (!context) throw new Error("useSeason requires SeasonProvider");
  return context;
}

export function SeasonToggle() {
  const { season, setSeason } = useSeason();
  return (
    <div className="season-toggle" role="group" aria-label="Choose your travel season">
      <span className={`season-toggle-slider ${season === "summer" ? "is-summer" : ""}`} aria-hidden="true" />
      {(["winter", "summer"] as const).map((value) => {
        const Icon = value === "winter" ? Snowflake : Sun;
        return (
          <button key={value} type="button" aria-pressed={season === value} onClick={() => setSeason(value)} className="focus-ring season-toggle-button">
            <Icon size={16} aria-hidden="true" /> {value === "winter" ? "Winter" : "Summer"}
          </button>
        );
      })}
    </div>
  );
}
