"use client";

import { ChevronDown } from "lucide-react";
import { useId, useState } from "react";

const BANKS = [
  "BROU",
  "Santander",
  "Itaú",
  "BBVA",
  "Scotiabank",
  "Heritage",
  "BHU",
  "Bandes Uruguay",
];

function Row({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul
      aria-hidden={hidden || undefined}
      className="flex shrink-0 items-center gap-12 pr-12 lg:gap-16 lg:pr-16"
    >
      {BANKS.map((bank) => (
        <li
          key={bank}
          className="whitespace-nowrap text-xl font-semibold tracking-tight text-subtle transition-colors duration-200 hover:text-fg lg:text-2xl"
        >
          {bank}
        </li>
      ))}
    </ul>
  );
}

export default function BankTicker() {
  const panelId = useId();
  const [open, setOpen] = useState(false);

  return (
    <section
      aria-labelledby="banks-heading"
      data-testid="bank-ticker"
      className="-mt-px pb-0 lg:mt-0 lg:pb-24"
    >
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        data-testid="bank-ticker-toggle"
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between gap-4 border-y border-line px-3 py-4 text-left lg:pointer-events-none lg:block lg:border-0 lg:px-6 lg:py-0"
      >
        <span>
          <span className="block text-xs font-medium uppercase tracking-widest text-fg lg:text-muted">
            Bancos que ofrecen financiamiento
          </span>
          <span
            id="banks-heading"
            className={`mt-1 text-balance text-2xl font-light tracking-[-0.02em] lg:mt-2 lg:block lg:text-4xl ${open ? "block" : "hidden"}`}
          >
            Financiá tu auto con el banco que prefieras
          </span>
        </span>
        <ChevronDown
          aria-hidden
          strokeWidth={1.75}
          className={`h-5 w-5 shrink-0 text-muted transition-transform duration-200 lg:hidden ${open ? "rotate-180" : ""}`}
        />
      </button>

      <div id={panelId} className={`${open ? "block" : "hidden"} lg:block`}>
        <div className="ticker mt-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] lg:mt-10">
          <div className="ticker-track flex w-max">
            <Row />
            <Row hidden />
          </div>
        </div>
      </div>
    </section>
  );
}
