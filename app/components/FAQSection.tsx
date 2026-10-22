"use client";

import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

const FAQS: { question: string; answer: string }[] = [
  {
    question:
      "¿Dónde está ubicado el salón de ventas y cómo coordino una visita?",
    answer:
      "Nuestro salón de ventas principal se encuentra en Zona Norte (Tigre). Para brindarte una atención personalizada, realizar pruebas de manejo y evaluar tu unidad, atendemos exclusivamente bajo cita previa. Podés agendar tu turno directamente por WhatsApp o mediante nuestro formulario.",
  },
  {
    question: "¿Puedo entregar mi auto usado como parte de pago (Permuta)?",
    answer:
      "Sí, aceptamos permutas. En tu visita al salón de ventas realizamos la inspección técnica y tasación comercial de tu vehículo en el acto para tomarlo como parte de pago de tu próximo auto.",
  },
  {
    question: "¿Cómo funciona la financiación con tarjeta de crédito?",
    answer:
      "Podés financiar hasta el 40% del valor del vehículo utilizando tarjetas de crédito en cuotas fijas (Visa, Mastercard, Cabal). Además, tenés la posibilidad de combinar múltiples tarjetas de crédito para cubrir el saldo.",
  },
  {
    question: "¿Los vehículos cuentan con documentación al día y garantía?",
    answer:
      "Todas las unidades de nuestro catálogo están verificadas, cuentan con VTV vigente, libre de deudas de patentes e infracciones, y la documentación completa lista para transferir de manera inmediata.",
  },
  {
    question: "¿Qué documentación necesito presentar para cerrar la compra?",
    answer:
      "Únicamente necesitás tu DNI argentino vigente. Nosotros nos encargamos de coordinar la gestoría y los trámites de transferencia para que te lleves el auto sin complicaciones.",
  },
  {
    question:
      "¿Cuáles son los métodos de pago aceptados para el saldo o compra contado?",
    answer:
      "Aceptamos dólares estadounidenses (USD), pesos argentinos (ARS) a la cotización del día, transferencias bancarias directas y financiación con tarjeta de crédito hasta el 40%.",
  },
  {
    question: "¿Puedo realizar una prueba de manejo (Test Drive) del vehículo?",
    answer:
      "Por supuesto. Al agendar tu cita previa por WhatsApp, preparamos la unidad de tu interés en el salón de ventas para que realicés la prueba de manejo antes de tomar cualquier decisión.",
  },
  {
    question: "¿Tienen descuento o beneficio por pago de contado?",
    answer:
      "Sí, las compras realizadas 100% de contado o mediante transferencia directa acceden a precios promocionales bonificados y prioridad en la entrega del vehículo.",
  },
  {
    question:
      "¿Cuánto tiempo demora la entrega del vehículo una vez reservado?",
    answer:
      "Si la compra es de contado o con financiación con tarjeta, la entrega es prácticamente inmediata dentro de las 24 a 48 horas hábiles, una vez completada la documentación de transferencia.",
  },
  {
    question:
      "¿Puedo reservar un auto desde la web antes de ir al salón de ventas?",
    answer:
      "Sí. Podés realizar una seña previa o solicitar el bloqueo temporal de la unidad coordinando directamente con un asesor a través de WhatsApp.",
  },
];

function FaqItem({
  id,
  question,
  answer,
  open,
  onToggle,
}: {
  id: string;
  question: string;
  answer: string;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-line">
      <h3>
        <button
          type="button"
          aria-expanded={open}
          aria-controls={id}
          onClick={onToggle}
          className="flex w-full items-start justify-between gap-4 py-4 text-left text-sm font-semibold text-fg transition-colors duration-150 max-md:pointer-events-none md:py-5 md:text-base md:hover:text-muted"
        >
          {question}
          <ChevronDown
            aria-hidden
            strokeWidth={1.75}
            className={`mt-0.5 hidden h-5 w-5 shrink-0 text-muted transition-transform duration-200 md:block ${open ? "rotate-180" : ""}`}
          />
        </button>
      </h3>
      {/* Mobile lists every answer; from md up the item is an accordion. */}
      <div
        id={id}
        role="region"
        className={`grid grid-rows-[1fr] transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none ${open ? "md:grid-rows-[1fr]" : "md:grid-rows-[0fr]"}`}
      >
        <div className="overflow-hidden">
          <p className="pb-4 text-sm leading-relaxed text-muted md:pb-5">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQSection() {
  // Mobile: the whole section collapses. Desktop: one answer open at a time.
  const [sectionOpen, setSectionOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Expand when a link or the URL points at this section (collapsed on mobile).
  useEffect(() => {
    const expand = () => {
      if (window.location.hash === "#preguntas-frecuentes") {
        setSectionOpen(true);
      }
    };
    expand();
    window.addEventListener("hashchange", expand);
    return () => window.removeEventListener("hashchange", expand);
  }, []);

  return (
    <section
      id="preguntas-frecuentes"
      data-testid="faq-section"
      aria-labelledby="faq-heading"
      className="scroll-mt-4 md:px-3 md:py-12 lg:px-6 lg:py-16"
    >
      <button
        type="button"
        aria-expanded={sectionOpen}
        aria-controls="faq-content"
        data-testid="faq-toggle"
        onClick={() => setSectionOpen((o) => !o)}
        className="flex w-full items-center justify-between gap-4 border-y border-line px-3 py-4 text-left md:hidden"
      >
        <span className="text-xs font-medium uppercase tracking-widest text-fg">
          Preguntas frecuentes
        </span>
        <ChevronDown
          aria-hidden
          strokeWidth={1.75}
          className={`h-5 w-5 shrink-0 text-muted transition-transform duration-200 ${sectionOpen ? "rotate-180" : ""}`}
        />
      </button>

      <div
        id="faq-content"
        className={sectionOpen ? "px-3 pb-10 pt-8 md:p-0" : "hidden md:block"}
      >
        <div className="mx-auto max-w-3xl text-center">
          <p className="hidden text-xs font-semibold uppercase tracking-widest text-muted md:block">
            Preguntas frecuentes
          </p>
          <h2
            id="faq-heading"
            className="text-balance text-3xl font-semibold tracking-[-0.02em] md:mt-2 lg:text-4xl"
          >
            Todo lo que necesitás saber antes de visitarnos
          </h2>
        </div>

        <div className="mx-auto mt-8 max-w-[1000px] md:mt-10">
          {FAQS.map((faq, i) => (
            <FaqItem
              key={faq.question}
              id={`faq-answer-${i}`}
              {...faq}
              open={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
