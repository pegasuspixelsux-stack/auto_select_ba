/** The wordmark: "TU PRÓXIMO" followed by a boxed, highlighted "AUTO". */
export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span
      className={`text-[21px] font-bold uppercase tracking-[-0.02em] lg:text-[23px] ${className}`}
    >
      Tu Próximo
      <span className="ml-[0.25em] bg-black px-1.5 py-0.5 text-brand [:root:not([data-theme=light])_&]:bg-white [:root:not([data-theme=light])_&]:text-black">
        Auto
      </span>
      <span className="ml-1.5 inline-flex items-center gap-1 align-middle">
        <svg
          viewBox="0 0 18 12"
          className="h-2.5 w-[15px] rounded-[1px]"
          aria-hidden
        >
          <rect width="18" height="12" fill="#74ACDF" />
          <rect y="4" width="18" height="4" fill="#fff" />
          <circle cx="9" cy="6" r="1.4" fill="#F6B40E" />
        </svg>
        <span className="hidden text-[8px] font-semibold tracking-[0.2em] text-muted sm:inline lg:text-[9px]">
          Argentina
        </span>
      </span>
    </span>
  );
}
