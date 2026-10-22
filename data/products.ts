import type { Product } from "@/types";

/**
 * Announced products.
 *
 * Deliberately empty until the founders finalise what LN Digitech will ship.
 * The products page and the homepage products section render an honest
 * "not yet announced" state while this list is empty — never add a
 * fictional product here.
 *
 * To announce a product later: append an entry with factual fields only.
 * Both the /products page and the homepage section pick it up automatically.
 */
export const products: Product[] = [];

/** Placeholder copy shown while `products` is empty. */
export const productsStatusNote =
  "Product details will be announced on this page when they are finalised.";
