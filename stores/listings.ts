import { defineStore } from "pinia";
import { ref } from "vue";
import { listingsData } from "~/data/listingsData";
import type { Listing } from "@/types/listing";

export const useListingsStore = defineStore("listings", () => {
  const listings = ref<Listing[]>(listingsData);
  const sort = ref("price_asc");
  const filterPrice = ref("");
  const dateFormat = ref<"short" | "long">("short");

  return { listings, sort, filterPrice, dateFormat };
});
