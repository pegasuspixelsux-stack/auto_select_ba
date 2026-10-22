import { Banknote, CreditCard, MessageCircle, RefreshCw } from "lucide-react";
import type { LucideIcon } from "lucide-react";

// Placeholder shared with the footer; replace with the real number.
const WHATSAPP_NUMBER = "59899000000";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hola, quiero consultar por las opciones de financiación y permutas en AutoSelect.",
)}`;

const OPTIONS: {
  icon: LucideIcon;
  title: string;
  description: string;
  badge: string;
}[] = [
  {
    icon: CreditCard,
    title: "Financiación Hasta el 40%",
    description:
      "Financiá un saldo del vehículo en cuotas fijas utilizando tarjetas de crédito (Visa, Mastercard, Cabal). Combiná múltiples tarjetas en el acto.",
    badge: "Hasta 40% del valor",
  },
  {
    icon: RefreshCw,
    title: "Tomamos tu Usado",
    description:
      "Aceptamos tu vehículo actual como parte de pago. Realizamos la tasación técnica y comercial directa durante tu cita en el showroom.",
    badge: "Tasación en el acto",
  },
  {
    icon: Banknote,
    title: "Mejor Precio de Contado",
    description:
      "Accedé a precios promocionales bonificados y transferencia rápida al abonar de contado o transferencia directa.",
    badge: "Precio Bonificado",
  },
];

export default function FinancingSection() {
  return (
    <section
      id="financiacion"
      data-testid="financing-section"
      aria-labelledby="financing-heading"
      className="scroll-mt-4 px-3 py-14 lg:px-6 lg:py-20"
    >
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-muted">
          Facilidades de pago
        </p>
        <h2
          id="financing-heading"
          className="mt-2 text-balance text-3xl font-semibold tracking-[-0.02em] lg:text-4xl"
        >
          Financiación y Permutas a tu medida
        </h2>
        <p className="mt-3 text-sm font-medium text-muted sm:text-base">
          Elegí la opción que mejor se adapte a tu compra y coordiná tu visita
          al showroom.
        </p>
      </div>

      <ul className="mx-auto mt-10 grid max-w-[1440px] grid-cols-1 gap-4 md:grid-cols-3 lg:gap-6">
        {OPTIONS.map(({ icon: Icon, title, description, badge }) => (
          <li
            key={title}
            className="flex flex-col rounded-2xl border border-line bg-surface p-6 shadow-[var(--card-shadow)] backdrop-blur-md transition-[transform,box-shadow,border-color] duration-300 ease-out motion-safe:hover:scale-[1.02] [:root:not([data-theme=light])_&]:hover:border-brand/50 [:root:not([data-theme=light])_&]:hover:shadow-[0_0_36px_-6px_rgba(255,234,0,0.45)] hover:shadow-[0_24px_48px_-12px_rgba(0,0,0,0.5)]"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-line text-blue-500">
              <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
            </span>
            <h3 className="mt-5 text-lg font-semibold tracking-[-0.01em]">
              {title}
            </h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
              {description}
            </p>
            <span className="mt-5 w-fit rounded-full border border-line px-3 py-1 text-[11px] font-medium text-fg">
              {badge}
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-10 flex justify-center">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          data-testid="financing-whatsapp"
          className="inline-flex items-center gap-2 rounded-full bg-inverse px-6 py-3 text-xs font-semibold uppercase tracking-wider text-on-inverse transition-[opacity,transform] duration-150 hover:opacity-85 active:scale-95"
        >
          <MessageCircle className="h-4 w-4" strokeWidth={1.75} aria-hidden />
          Consultar Financiación y Citas
        </a>
      </div>
    </section>
  );
}
