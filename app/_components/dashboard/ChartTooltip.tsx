
const formatPesos = (n: number) => `RD$ ${n.toLocaleString("en-US")}`;


type TooltipItem = { dataKey?: string | number; value?: number };

type ChartTooltipProps = {
  active?: boolean;
  label?: string | number;
  payload?: TooltipItem[];
};

export default function ChartTooltip({ active, label, payload }: ChartTooltipProps) {
  if (!active || !payload?.length) return null;

  const income = payload.find((p) => p.dataKey === "income")?.value ?? 0;
  const expenses = payload.find((p) => p.dataKey === "expenses")?.value ?? 0;
  const net = income - expenses;

  return (
    <div className="min-w-40 rounded-xl border border-[#4A3873] bg-[#241838] px-3 py-2.5 shadow-lg">
      <p className="mb-1.5 text-[11px] text-text-secondary">{label}</p>
      <dl className="space-y-1 text-xs">
        <div className="flex items-center justify-between gap-4">
          <dt className="flex items-center gap-1.5 text-text-secondary">
            <span className="size-2 rounded-full bg-light-primary" aria-hidden="true" />
            Income
          </dt>
          <dd className="font-semibold text-text-primary">{formatPesos(income)}</dd>
        </div>
        <div className="flex items-center justify-between gap-4">
          <dt className="flex items-center gap-1.5 text-text-secondary">
            <span className="size-2 rounded-full bg-alert" aria-hidden="true" />
            Expenses
          </dt>
          <dd className="font-semibold text-text-primary">{formatPesos(expenses)}</dd>
        </div>
        <div className="mt-1 flex items-center justify-between gap-4 border-t border-[#4A3873] pt-1.5">
          <dt className="text-text-secondary">Net</dt>
          <dd className={`font-bold ${net >= 0 ? "text-text-secondary" : "text-alert"}`}>
            {net >= 0 ? "+" : "−"}
            {formatPesos(Math.abs(net))}
          </dd>
        </div>
      </dl>
    </div>
  );
}