/** The AUTO SELECT wordmark: boxed "AUTO" followed by "SELECT". */
export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span
      className={`text-[21px] font-bold uppercase tracking-[-0.02em] lg:text-[23px] ${className}`}
    >
      <span className="mr-[0.15em] bg-brand px-1.5 py-0.5 text-black [:root[data-theme=light]_&]:bg-inverse [:root[data-theme=light]_&]:text-on-inverse">
        AUTO
      </span>
      SELECT
    </span>
  );
}
