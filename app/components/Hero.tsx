"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Star } from "lucide-react";
import type { ReactNode } from "react";

interface HeroProps {
  headline?: ReactNode;
  subheadline?: string;
}

const EASE_OUT = [0.23, 1, 0.32, 1] as const;
// Placeholder figures; replace with the real Google rating.
const RATING = "4.9";
const REVIEW_COUNT = "+200";
const BACKGROUND_IMAGE = "/hero_image/audi_hero.webp";

export default function Hero({
  headline = (
    <>
      <span className="text-brand">El auto que buscás.</span> La tranquilidad
      que te falta.
    </>
  ),
  subheadline = "Unidades seleccionadas y verificadas con atención personalizada en nuestro salón de ventas. Coordiná tu prueba de manejo hoy.",
}: HeroProps) {
  const reduce = useReducedMotion();
  const rise = (delay: number, y = 16) => ({
    initial: { opacity: 0, y: reduce ? 0 : y },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: EASE_OUT },
  });

  return (
    <section
      data-testid="hero"
      className="hero-on-photo relative flex min-h-[352px] w-full flex-col sm:h-[calc((100svh_-_290px)_*_0.56)] sm:min-h-[336px] lg:h-[calc((100svh_-_290px)_*_0.924)] lg:min-h-[443px] overflow-hidden bg-bg text-fg selection:bg-fg selection:text-bg"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src={BACKGROUND_IMAGE}
          alt="Compradores recibiendo las llaves de su auto frente a una concesionaria"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[50%_75%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/30 to-transparent" />
      </div>
      <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-1 flex-col justify-start px-5 py-10 sm:justify-end sm:px-8 sm:py-10 lg:justify-center lg:px-10 lg:py-16">
        <div className="w-full text-left sm:w-[45%]">
          <div className="w-full sm:w-fit sm:max-w-full">
            <motion.p
              {...rise(0.05, 12)}
              className="mb-2 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-widest text-fg sm:mb-3 sm:text-xs"
            >
              <Star
                aria-hidden
                className="h-2.5 w-2.5 shrink-0 fill-current text-amber-400 sm:h-3 sm:w-3"
                strokeWidth={0}
              />
              Autos usados certificados
              <Star
                aria-hidden
                className="h-2.5 w-2.5 shrink-0 fill-current text-amber-400 sm:h-3 sm:w-3"
                strokeWidth={0}
              />
            </motion.p>
            <motion.h1
              {...rise(0.15, 24)}
              className="text-balance text-[28px] font-semibold leading-[1.08] tracking-[-0.02em] sm:text-5xl lg:text-6xl"
            >
              {headline}
            </motion.h1>
            <motion.p
              {...rise(0.28)}
              className="mt-2 w-1/2 text-xs leading-relaxed sm:mt-5 sm:w-0 sm:min-w-full sm:text-xl text-muted"
            >
              {subheadline}
            </motion.p>
            <motion.div
              {...rise(0.4)}
              data-testid="hero-rating"
              className="mt-3 flex flex-col items-start gap-1 text-[11px] sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-2 text-muted sm:mt-5 sm:text-sm"
            >
              <span className="flex items-center gap-2">
                <span className="font-semibold text-fg">{RATING}</span>
                <span aria-hidden className="flex gap-0.5 text-amber-400">
                  {Array.from({ length: 5 }, (_, i) => (
                    <Star
                      key={i}
                      className="h-3 w-3 fill-current sm:h-4 sm:w-4"
                      strokeWidth={0}
                    />
                  ))}
                </span>
                <span className="sr-only">{RATING} de 5 estrellas</span>
              </span>
              <span>{REVIEW_COUNT} reseñas en Google</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
