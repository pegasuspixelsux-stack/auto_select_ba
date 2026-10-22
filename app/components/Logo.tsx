/** The wordmark: "TU PRÓXIMO" followed by a boxed, highlighted "AUTO". */
export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span
      className={`text-[21px] font-bold uppercase tracking-[-0.02em] lg:text-[23px] ${className}`}
    >
      Tu Próximo
      <span className="ml-[0.25em] bg-brand px-1.5 py-0.5 text-black [:root[data-theme=light]_&]:bg-inverse [:root[data-theme=light]_&]:text-on-inverse">
        Auto
      </span>
    </span>
  );
}
