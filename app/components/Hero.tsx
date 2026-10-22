"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

interface HeroProps {
  headline?: string;
  subheadline?: string;
}

const EASE_OUT = [0.23, 1, 0.32, 1] as const;
const BACKGROUND_IMAGE = "/hero_image/audi_hero.webp";


export default function Hero({
  headline = "Compra y venta de autos.",
  subheadline = "Conectate directo con vendedores particulares y concesionarias verificadas. Encontrá tu próximo auto o publicá el tuyo en minutos.",
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
      className="hero-on-photo relative flex w-full flex-col sm:h-[calc((100svh_-_290px)_*_0.7)] sm:min-h-[420px] lg:h-[calc((100svh_-_290px)_*_1.155)] lg:min-h-[554px] overflow-hidden bg-bg text-fg selection:bg-fg selection:text-bg"
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
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-transparent" />
      </div>
      <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-1 flex-col justify-center px-3 pb-6 pt-[calc(1.5rem+10vw)] sm:justify-end sm:py-6 lg:justify-center lg:px-6 lg:py-14">
        <div className="w-1/2 text-left">
          <div className="w-fit max-w-full">
            <motion.h1
              {...rise(0.15, 24)}
              className="whitespace-pre-line text-balance text-2xl font-semibold leading-[1.1] tracking-[-0.02em] sm:text-5xl lg:text-6xl"
            >
              {headline}
            </motion.h1>
            <motion.p
              {...rise(0.28)}
              className="mt-2 w-0 min-w-full text-xs leading-relaxed sm:mt-5 sm:text-base text-muted"
            >
              {subheadline}
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
