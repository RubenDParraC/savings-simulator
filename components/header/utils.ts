// Types
import type { ButtonListItem } from "./types";

/**
 * buttonsList
 *
 * Centralized configuration for the Header navigation.
 * This approach avoids hardcoded routes in the component
 * and makes the navigation easily scalable and maintainable.
 */
export const buttonsList: ButtonListItem[] = [
  {
    href: "/",
    label: "Registrar intención de apertura",
  },
  {
    href: "/products",
    label: "Descubrir productos financieros",
  },
  {
    href: "/simulator",
    label: "Simulador de rentabilidad",
  },
];
