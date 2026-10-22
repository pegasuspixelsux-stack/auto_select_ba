"use client";

import {
  Car,
  LayoutDashboard,
  LogOut,
  Menu,
  Settings,
  Users,
  X,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const LINKS = [
  {
    label: "Panel de Control",
    href: "/dashboard",
    icon: LayoutDashboard,
    active: true,
  },
  { label: "Listado de Vehículos", href: "/dashboard#vehiculos", icon: Car },
  { label: "Usuarios & Equipo", href: "/dashboard#equipo", icon: Users },
  { label: "Configuración", href: "/dashboard#configuracion", icon: Settings },
];

function Brand() {
  return (
    <Link href="/dashboard" className="flex items-center gap-3">
      <span className="text-lg font-bold uppercase tracking-[-0.02em]">
        <span className="mr-[0.15em] bg-brand px-1.5 py-0.5 text-black">
          AUTO
        </span>
        SELECT
      </span>
      <span className="rounded-full border border-line px-2 py-0.5 font-mono text-[10px] text-muted">
        v1.0
      </span>
    </Link>
  );
}

function SidebarBody({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <div className="flex h-full flex-col">
      <div className="px-5 py-6">
        <Brand />
      </div>

      <nav aria-label="Panel" className="flex-1 space-y-1 px-3">
        {LINKS.map(({ label, href, icon: Icon, active }) => (
          <Link
            key={label}
            href={href}
            onClick={onNavigate}
            aria-current={active ? "page" : undefined}
            className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-colors duration-150 ${
              active
                ? "bg-surface text-fg ring-1 ring-line"
                : "text-muted hover:bg-surface hover:text-fg"
            }`}
          >
            <Icon className="h-4 w-4" strokeWidth={1.75} aria-hidden />
            {label}
          </Link>
        ))}
      </nav>

      <div className="border-t border-line p-4">
        <div className="flex items-center gap-3">
          <span
            aria-hidden
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-inverse text-xs font-semibold text-on-inverse"
          >
            A
          </span>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium">Alejandro</p>
            <p className="truncate text-xs text-muted">Admin</p>
          </div>
          <Link
            href="/login"
            aria-label="Cerrar sesión"
            data-testid="logout"
            className="flex h-8 w-8 items-center justify-center rounded-full text-muted transition-colors duration-150 hover:bg-surface hover:text-fg"
          >
            <LogOut className="h-4 w-4" strokeWidth={1.75} aria-hidden />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Desktop / tablet: fixed sidebar. */}
      <aside
        data-testid="sidebar"
        className="fixed inset-y-0 left-0 z-30 hidden w-64 border-r border-line bg-bg lg:block"
      >
        <SidebarBody />
      </aside>

      {/* Mobile and tablet: top bar with a slide-in drawer. */}
      <header className="sticky top-0 z-30 flex items-center justify-between border-b border-line bg-bg/80 px-4 py-3 backdrop-blur-xl lg:hidden">
        <Brand />
        <button
          type="button"
          aria-label="Abrir menú"
          aria-expanded={open}
          onClick={() => setOpen(true)}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-fg transition-transform duration-150 active:scale-95"
        >
          <Menu className="h-4 w-4" strokeWidth={1.75} aria-hidden />
        </button>
      </header>

      {open && (
        <div
          className="fixed inset-0 z-40 lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Menú"
        >
          <button
            type="button"
            aria-label="Cerrar menú"
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-black/60"
          />
          <div className="absolute inset-y-0 left-0 w-72 max-w-[85vw] border-r border-line bg-bg">
            <button
              type="button"
              aria-label="Cerrar menú"
              onClick={() => setOpen(false)}
              className="absolute right-3 top-4 flex h-8 w-8 items-center justify-center rounded-full text-muted hover:text-fg"
            >
              <X className="h-4 w-4" strokeWidth={1.75} aria-hidden />
            </button>
            <SidebarBody onNavigate={() => setOpen(false)} />
          </div>
        </div>
      )}
    </>
  );
}
