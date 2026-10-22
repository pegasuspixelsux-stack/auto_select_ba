import { Mail, MessageCircle } from "lucide-react";
import type { ReactNode } from "react";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";

interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}

const COLUMNS: FooterColumn[] = [
  {
    title: "Navegación",
    links: [
      { label: "Comprar", href: "/autos" },
      { label: "Publicá tu Auto", href: "/#publicar" },
      { label: "Concesionarias", href: "/concesionarias" },
      { label: "Nosotros", href: "#" },
    ],
  },
  {
    title: "Legales & Ayuda",
    links: [
      { label: "Términos y Condiciones", href: "#" },
      { label: "Política de Privacidad", href: "#" },
      { label: "Preguntas Frecuentes", href: "#" },
      { label: "Soporte", href: "#" },
    ],
  },
];

/** Placeholder contact details: replace with the real ones. */
const CONTACT_EMAIL = "contacto@autoselect.com";
const WHATSAPP_NUMBER = "59899000000";
const WHATSAPP_LABEL = "+598 99 000 000";

/** Brand icons are drawn inline: this lucide-react version has none. */
function SocialIcon({ children }: { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {children}
    </svg>
  );
}

const SOCIALS: { label: string; href: string; icon: ReactNode }[] = [
  {
    label: "Instagram",
    href: "#",
    icon: (
      <SocialIcon>
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <path d="M17.5 6.5h.01" />
      </SocialIcon>
    ),
  },
  {
    label: "Facebook",
    href: "#",
    icon: (
      <SocialIcon>
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </SocialIcon>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <SocialIcon>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </SocialIcon>
    ),
  },
];

const LEGAL_LINKS = [
  { label: "Política de cookies", href: "#" },
  { label: "Protección de datos personales", href: "#" },
  { label: "Admin", href: "/login" },
];

const LINK = "text-sm text-muted transition-colors duration-150 hover:text-fg";
const HEADING = "text-xs font-semibold uppercase tracking-widest text-fg";

export default function Footer() {
  return (
    <footer data-testid="footer" className="border-t border-line bg-bg">
      <div className="mx-auto max-w-[1440px] px-3 py-16 lg:px-6">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
          <div className="col-span-2 lg:col-span-1">
            <Logo />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted">
              La plataforma para comprar y vender autos en Uruguay. Conectamos
              vendedores particulares y concesionarias verificadas con
              compradores.
            </p>
            <p className="mt-5 text-xs text-subtle">
              © 2026 AUTO SELECT. Todos los derechos reservados.
            </p>
          </div>

          {COLUMNS.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <h2 className={HEADING}>{column.title}</h2>
              <ul className="mt-5 space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className={LINK}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div data-testid="footer-contact">
            <h2 className={HEADING}>Contacto &amp; Redes</h2>
            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className={`${LINK} inline-flex items-center gap-2`}
                >
                  <Mail
                    className="h-4 w-4 shrink-0"
                    strokeWidth={1.75}
                    aria-hidden
                  />
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${LINK} inline-flex items-center gap-2`}
                >
                  <MessageCircle
                    className="h-4 w-4 shrink-0"
                    strokeWidth={1.75}
                    aria-hidden
                  />
                  WhatsApp {WHATSAPP_LABEL}
                </a>
              </li>
            </ul>
            <ul className="mt-5 flex gap-2">
              {SOCIALS.map(({ label, href, icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    aria-label={label}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-muted transition-[color,border-color,transform] duration-150 hover:border-fg/40 hover:text-fg active:scale-95"
                  >
                    {icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          data-testid="disclaimer"
          className="mt-16 max-w-4xl space-y-2 border-t border-line pt-8 text-xs leading-relaxed text-subtle"
        >
          <p>
            AUTO SELECT es una plataforma de publicación de avisos. No vendemos
            vehículos ni participamos en las operaciones entre compradores y
            vendedores.
          </p>
          <p>
            La información, las fotos y los precios de cada aviso son publicados
            por vendedores particulares y concesionarias, y no garantizamos que
            sean exactos, completos ni estén actualizados. No nos hacemos
            responsables por errores, omisiones ni por el estado, la titularidad
            o la documentación de los vehículos. Antes de concretar cualquier
            operación, verificá los datos directamente con el vendedor y revisá
            el vehículo y su documentación.
          </p>
        </div>

        <div className="mt-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <nav
            aria-label="Legal"
            data-testid="legal-links"
            className="flex flex-wrap gap-x-6 gap-y-2 text-xs"
          >
            {LEGAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-subtle transition-colors duration-150 hover:text-fg"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </footer>
  );
}
