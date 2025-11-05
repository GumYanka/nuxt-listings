import type { Listing } from "@/types/listing";

export function filterByPrice(listings: Listing[], filter: string): Listing[] {
  switch (filter) {
    case "1000":
      return listings.filter((l) => l.price < 1000);

    case "1000-1500":
      return listings.filter((l) => l.price >= 1000 && l.price <= 1500);

    case "2000":
      return listings.filter((l) => l.price >= 2000);

    case "all":
      return listings;

    default:
      return listings;
  }
}

export function sortListings(listings: Listing[], sort: string): Listing[] {
  const sorted = [...listings];

  switch (sort) {
    case "price_asc":
      return sorted.sort((a, b) => a.price - b.price);

    case "date_desc":
      return sorted.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );

    default:
      return listings;
  }
}

export function prioritizeHit(listings: Listing[]): Listing[] {
  return [...listings].sort((a, b) => {
    const aIsHit = a.tags.includes("Хіт") ? 1 : 0;
    const bIsHit = b.tags.includes("Хіт") ? 1 : 0;
    return bIsHit - aIsHit;
  });
}
