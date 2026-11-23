export function SavingsRing({ value, className }: { value: number; className?: string }) {
  return (
    <svg viewBox="0 0 36 36" fill="none" strokeWidth={5} className={className} role="img" aria-label={`Savings rate ${value}%`}>
      <circle cx="18" cy="18" r="14" stroke="#2A1F42" />
      <circle
        cx="18" cy="18" r="14"
        stroke="currentColor"
        strokeLinecap="round"
        pathLength={100}
        strokeDasharray={`${Math.min(Math.max(value, 0), 100)} 100`}
        transform="rotate(-90 18 18)"
      />
    </svg>
  );
}