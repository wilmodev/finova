"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import ChartTooltip from "./ChartTooltip";
export type MonthlyPoint = {
  label: string; // "Jan", "Feb"…
  income: number;
  expenses: number;
};

type Props = {
  data: MonthlyPoint[];
  className?: string;
  isAnimationActive?: boolean;
};

const COLORS = {
  income: "#A78BFA",
  incomeFill: "#8B5CF6",
  expenses: "#F58AC0",
  grid: "#2A1F42",
  axis: "#8F84B0",
  cardBg: "#171027",
} as const;


const formatK = (n: number) => (n === 0 ? "0" : `${n / 1000}k`);

/* ---------- Chart ---------- */

export function IncomeExpensesAreaChart({
  data,
  className = "h-64 w-full ",
  isAnimationActive = true,
}: Props) {
  const currentLabel = data.at(-1)?.label;

  return (
    <section className="mt-15">
      <div
      className={className }
      role="img"
      aria-label={`Income versus expenses over the last ${data.length} months`}
    >
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="income-fill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={COLORS.incomeFill} stopOpacity={0.38} />
              <stop offset="100%" stopColor={COLORS.incomeFill} stopOpacity={0} />
            </linearGradient>
            <linearGradient id="expenses-fill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={COLORS.expenses} stopOpacity={0.24} />
              <stop offset="100%" stopColor={COLORS.expenses} stopOpacity={0} />
            </linearGradient>
          </defs>

          <CartesianGrid vertical={false} stroke={COLORS.grid} strokeDasharray="3 6" />

          <XAxis
            dataKey="label"
            tickLine={false}
            axisLine={{ stroke: COLORS.grid }}
            tick={{ fill: COLORS.axis, fontSize: 11 }}
            tickMargin={8}
          />
          <YAxis
            width={36}
            tickLine={false}
            axisLine={false}
            tick={{ fill: COLORS.axis, fontSize: 11 }}
            tickFormatter={formatK}
            domain={[0, (max: number) => Math.ceil(max / 25000) * 25000]}
          />

          <Tooltip
            content={<ChartTooltip />}
            cursor={{ stroke: COLORS.income, strokeOpacity: 0.55, strokeDasharray: "3 4" }}
          />

          {/* Marks the current month */}
          {currentLabel && (
            <ReferenceLine
              x={currentLabel}
              stroke={COLORS.income}
              strokeOpacity={0.35}
              strokeDasharray="3 4"
            />
          )}

          <Area
            type="monotone"
            dataKey="expenses"
            stroke={COLORS.expenses}
            strokeWidth={2.5}
            fill="url(#expenses-fill)"
            activeDot={{ r: 5, fill: COLORS.expenses, stroke: COLORS.cardBg, strokeWidth: 2.5 }}
            isAnimationActive={isAnimationActive}
          />
          <Area
            type="monotone"
            dataKey="income"
            stroke={COLORS.income}
            strokeWidth={2.5}
            fill="url(#income-fill)"
            activeDot={{ r: 5, fill: COLORS.income, stroke: COLORS.cardBg, strokeWidth: 2.5 }}
            isAnimationActive={isAnimationActive}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
    </section>
  );
}