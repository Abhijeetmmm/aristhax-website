import * as React from "react";
import * as RechartsPrimitive from "recharts";
import { cn } from "@/lib/utils";

/* ============================ */
/* Theme config                 */
/* ============================ */

const THEMES = { light: "", dark: ".dark" } as const;

export type ChartConfig = {
  [k: string]: {
    label?: React.ReactNode;
    icon?: React.ComponentType;
  } & (
    | { color?: string; theme?: never }
    | { color?: never; theme: Record<keyof typeof THEMES, string> }
  );
};

/* ============================ */
/* Context                      */
/* ============================ */

type ChartContextProps = {
  config: ChartConfig;
};

const ChartContext = React.createContext<ChartContextProps | null>(null);

function useChart() {
  const ctx = React.useContext(ChartContext);
  if (!ctx) {
    throw new Error("useChart must be used within <ChartContainer />");
  }
  return ctx;
}

/* ============================ */
/* Container                    */
/* ============================ */

const ChartContainer = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    config: ChartConfig;
    children: React.ComponentProps<
      typeof RechartsPrimitive.ResponsiveContainer
    >["children"];
  }
>(({ id, className, children, config, ...props }, ref) => {
  const uid = React.useId();
  const chartId = `chart-${id || uid.replace(/:/g, "")}`;

  return (
    <ChartContext.Provider value={{ config }}>
      <div
        ref={ref}
        data-chart={chartId}
        className={cn(
          "flex aspect-video justify-center text-xs [&_.recharts-layer]:outline-none [&_.recharts-surface]:outline-none",
          className
        )}
        {...props}
      >
        <ChartStyle id={chartId} config={config} />
        <RechartsPrimitive.ResponsiveContainer>
          {children}
        </RechartsPrimitive.ResponsiveContainer>
      </div>
    </ChartContext.Provider>
  );
});
ChartContainer.displayName = "Chart";

/* ============================ */
/* Dynamic CSS                  */
/* ============================ */

const ChartStyle = ({ id, config }: { id: string; config: ChartConfig }) => {
  const entries = Object.entries(config).filter(
    ([_, v]) => v.color || v.theme
  );

  if (!entries.length) return null;

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: Object.entries(THEMES)
          .map(
            ([theme, prefix]) => `
${prefix} [data-chart="${id}"] {
${entries
  .map(([key, item]) => {
    const color =
      item.theme?.[theme as keyof typeof item.theme] || item.color;
    return color ? `--color-${key}: ${color};` : "";
  })
  .join("\n")}
}
`
          )
          .join("\n"),
      }}
    />
  );
};

/* ============================ */
/* Tooltip                      */
/* ============================ */

/**
 * Recharts DOES pass these at runtime,
 * but DOES NOT expose them in types.
 */
type TooltipPayloadItem = {
  name?: string;
  dataKey?: string;
  value?: number;
  color?: string;
  payload?: Record<string, any>;
};

type ChartTooltipProps = {
  active?: boolean;
  payload?: TooltipPayloadItem[];
  label?: React.ReactNode;
};

const ChartTooltip = RechartsPrimitive.Tooltip;

const ChartTooltipContent = React.forwardRef<
  HTMLDivElement,
  ChartTooltipProps &
    React.ComponentProps<"div"> & {
      hideLabel?: boolean;
      hideIndicator?: boolean;
      indicator?: "line" | "dot" | "dashed";
      nameKey?: string;
      labelKey?: string;
      color?: string;
    }
>(
  (
    {
      active,
      payload,
      label,
      className,
      indicator = "dot",
      hideLabel = false,
      hideIndicator = false,
      color,
      nameKey,
      labelKey,
    },
    ref
  ) => {
    const { config } = useChart();

    if (!active || !payload?.length) return null;

    return (
      <div
        ref={ref}
        className={cn(
          "grid min-w-[8rem] gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl",
          className
        )}
      >
        {!hideLabel && typeof label === "string" && (
          <div className="font-medium">
            {config[label]?.label || label}
          </div>
        )}

        {payload.map((item, i) => {
          const key = `${nameKey || item.dataKey || item.name || "value"}`;
          const itemConfig = config[key];
          const indicatorColor = color || item.payload?.fill || item.color;

          return (
            <div key={i} className="flex items-center gap-2">
              {!hideIndicator && (
                <span
                  className={cn("rounded-sm", {
                    "h-2.5 w-2.5": indicator === "dot",
                    "w-1 h-2.5": indicator === "line",
                    "w-0 h-2.5 border border-dashed":
                      indicator === "dashed",
                  })}
                  style={{ backgroundColor: indicatorColor }}
                />
              )}

              <span className="flex-1 text-muted-foreground">
                {itemConfig?.label || item.name}
              </span>

              {typeof item.value === "number" && (
                <span className="font-mono tabular-nums text-foreground">
                  {item.value.toLocaleString()}
                </span>
              )}
            </div>
          );
        })}
      </div>
    );
  }
);
ChartTooltipContent.displayName = "ChartTooltip";

/* ============================ */
/* Legend                       */
/* ============================ */

type LegendItem = {
  value?: string;
  color?: string;
  dataKey?: string;
};

type ChartLegendProps = {
  payload?: LegendItem[];
  verticalAlign?: "top" | "bottom";
};

const ChartLegend = RechartsPrimitive.Legend;

const ChartLegendContent = React.forwardRef<
  HTMLDivElement,
  ChartLegendProps &
    React.ComponentProps<"div"> & {
      hideIcon?: boolean;
      nameKey?: string;
    }
>(({ className, hideIcon, payload, verticalAlign = "bottom", nameKey }, ref) => {
  const { config } = useChart();
  if (!payload?.length) return null;

  return (
    <div
      ref={ref}
      className={cn(
        "flex items-center justify-center gap-4",
        verticalAlign === "top" ? "pb-3" : "pt-3",
        className
      )}
    >
      {payload.map((item, i) => {
        const key = `${nameKey || item.dataKey || "value"}`;
        const itemConfig = config[key];

        return (
          <div key={i} className="flex items-center gap-2">
            {!hideIcon && itemConfig?.icon ? (
              <itemConfig.icon />
            ) : (
              <span
                className="h-2 w-2 rounded-sm"
                style={{ backgroundColor: item.color }}
              />
            )}
            {itemConfig?.label}
          </div>
        );
      })}
    </div>
  );
});
ChartLegendContent.displayName = "ChartLegend";

/* ============================ */
/* Exports                      */
/* ============================ */

export {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  ChartStyle,
};
