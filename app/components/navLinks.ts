export interface NavLink {
  label: string;
  href: string;
  /** Only shown inline in the desktop bar from the lg breakpoint. */
  wide?: boolean;
}

/** Left side of the top nav. */
export const NAV_LINKS: NavLink[] = [
  { label: "Publicar tu auto", href: "/#publicar" },
  { label: "Compra tu auto", href: "/autos" },
  { label: "Concesionarias", href: "/concesionarias" },
];

/** Right side of the top nav. */
export const NAV_RIGHT_LINKS: NavLink[] = [
  { label: "Financiación", href: "/#calculadora", wide: true },
  { label: "Vende tu auto", href: "/#publicar", wide: true },
];
