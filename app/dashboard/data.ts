import { SAMPLE_VEHICLES } from "../data/vehicles";

export type ListingStatus = "Publicado" | "Pendiente de Pago" | "Vendido";

export interface DashboardListing {
  id: string;
  make: string;
  model: string;
  year: number;
  price: number;
  /** ISO date the listing was published. */
  publishedAt: string;
  status: ListingStatus;
  image: string;
}

const imageOf = (id: string) =>
  SAMPLE_VEHICLES.find((v) => v.id === id)?.image ?? SAMPLE_VEHICLES[0].image;

/** Mock rows for the admin table. Thumbnails reuse the sample photos. */
const ROWS: [string, string, number, number, ListingStatus, string][] = [
  ["Porsche", "Taycan 4S", 2023, 94500, "Publicado", "1"],
  ["Audi", "RS e-tron GT", 2024, 108000, "Publicado", "2"],
  ["BMW", "M4 Competition", 2022, 76900, "Pendiente de Pago", "3"],
  ["Mercedes-Benz", "AMG GT 63 S", 2023, 158000, "Publicado", "4"],
  ["Porsche", "Panamera 4S E-Hybrid", 2022, 87900, "Vendido", "5"],
  ["Tesla", "Model 3 Performance", 2023, 41900, "Publicado", "9"],
  ["BMW", "M3 Competition", 2021, 69800, "Publicado", "10"],
  ["Ford", "Mustang GT Premium", 2022, 43500, "Pendiente de Pago", "11"],
  ["Chevrolet", "Camaro ZL1", 2021, 58900, "Publicado", "12"],
  ["Audi", "RS 6 Avant", 2021, 112500, "Vendido", "8"],
  ["Porsche", "911 Carrera S", 2020, 119000, "Publicado", "1"],
  ["BMW", "M2 Competition", 2021, 62400, "Publicado", "3"],
  ["Audi", "R8 V10", 2019, 139000, "Publicado", "2"],
  ["Mercedes-Benz", "C 63 S AMG", 2020, 71800, "Pendiente de Pago", "4"],
  ["Tesla", "Model S Plaid", 2022, 96500, "Publicado", "9"],
  ["Ford", "Mustang Mach-E GT", 2023, 52300, "Publicado", "11"],
  ["Chevrolet", "Corvette Stingray", 2022, 81200, "Vendido", "12"],
  ["McLaren", "720S", 2020, 229500, "Publicado", "7"],
  ["Lamborghini", "Huracán LP 580-2", 2019, 189000, "Publicado", "6"],
  ["BMW", "i4 M50", 2023, 64700, "Pendiente de Pago", "3"],
  ["Audi", "RS 3 Sedán", 2022, 58300, "Publicado", "8"],
  ["Porsche", "Macan GTS", 2021, 74600, "Vendido", "5"],
  ["Mercedes-Benz", "EQE 53 AMG", 2023, 98800, "Publicado", "4"],
  ["Ford", "Bronco Raptor", 2023, 83900, "Publicado", "11"],
  ["Tesla", "Model Y Long Range", 2024, 46800, "Pendiente de Pago", "9"],
];

/** Newest first: one listing per day counting back from 15 Oct 2026. */
export const LISTINGS: DashboardListing[] = ROWS.map(
  ([make, model, year, price, status, imageId], i) => {
    const d = new Date(Date.UTC(2026, 9, 15 - i));
    return {
      id: String(i + 1),
      make,
      model,
      year,
      price,
      status,
      publishedAt: d.toISOString().slice(0, 10),
      image: imageOf(imageId),
    };
  },
);

export type Role = "Super Admin" | "Editor" | "Soporte";
export type MemberStatus = "Activo" | "Invitado";

export interface TeamMember {
  id: string;
  name: string;
  email: string;
  role: Role;
  status: MemberStatus;
}

export const TEAM: TeamMember[] = [
  {
    id: "t1",
    name: "Alejandro González",
    email: "alejandro@autoselect.com",
    role: "Super Admin",
    status: "Activo",
  },
  {
    id: "t2",
    name: "Valentina Rossi",
    email: "valentina@autoselect.com",
    role: "Editor",
    status: "Activo",
  },
  {
    id: "t3",
    name: "Martín Pereira",
    email: "martin@autoselect.com",
    role: "Soporte",
    status: "Invitado",
  },
];
