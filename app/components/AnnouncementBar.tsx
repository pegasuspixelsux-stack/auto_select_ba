export default function AnnouncementBar({
  text = "Autos usados certificados · Salón de ventas en Zona Norte (Tigre): con prueba de manejo.",
  linkText = "Agendá tu visita",
  href = "#contacto",
}: {
  text?: string;
  linkText?: string;
  href?: string;
}) {
  return (
    <div
      data-testid="announcement-bar"
      className="w-full bg-inverse text-on-inverse"
    >
      <div className="mx-auto max-w-[1440px] whitespace-nowrap px-3 py-2 text-center text-[10px] font-medium sm:py-2.5 sm:text-xs tracking-tight lg:px-6">
        <span className="sm:hidden">Autos usados certificados · Tigre.</span>
        <span className="hidden sm:inline">{text}</span>{" "}
        <a
          href={href}
          className="ml-1 font-semibold underline decoration-brand decoration-2 underline-offset-4 transition-opacity hover:opacity-70"
        >
          {linkText}
        </a>
      </div>
    </div>
  );
}
