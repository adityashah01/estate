export function NepalLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative"
      >
        {/* Nepal flag background */}
        <path d="M5 5 L5 35 L20 25 L20 15 L35 5 Z" fill="#DC143C" stroke="#003893" strokeWidth="1.5" />
        <path d="M5 35 L20 25 L35 35 Z" fill="#DC143C" stroke="#003893" strokeWidth="1.5" />

        {/* Small house icon */}
        <g transform="translate(12, 12)">
          <path d="M8 2 L2 7 L2 14 L14 14 L14 7 Z" fill="white" stroke="#003893" strokeWidth="0.8" />
          <rect x="6" y="9" width="4" height="5" fill="#003893" />
          <path d="M8 2 L14 7 L2 7 Z" fill="#003893" />
        </g>

        {/* Decorative sun/moon symbols */}
        <circle cx="15" cy="10" r="1.5" fill="white" />
        <circle cx="15" cy="22" r="1.5" fill="white" />
      </svg>
      <div className="flex flex-col">
        <span className="text-xl font-bold text-[#DC143C] leading-none">Nepal Estate</span>
        <span className="text-xs text-muted-foreground">Your Dream Home</span>
      </div>
    </div>
  )
}
