import { computed, watch } from "vue";
import { useListingsStore } from "@/stores/listings";
import { useRoute, useRouter } from "vue-router";
import {
  filterByPrice,
  sortListings,
  prioritizeHit,
} from "@/utils/sortAndFilter";

export function useListings() {
  const store = useListingsStore();
  const route = useRoute();
  const router = useRouter();

  if (route.query.sort) store.sort = route.query.sort as string;
  if (route.query.filterPrice)
    store.filterPrice = route.query.filterPrice as string;
  if (route.query.dateFormat)
    store.dateFormat = route.query.dateFormat as "short" | "long";

  watch(
    [() => store.sort, () => store.filterPrice, () => store.dateFormat],
    ([sort, filterPrice, dateFormat]) => {
      router.replace({
        query: {
          ...route.query,
          sort,
          filterPrice,
          dateFormat,
        },
      });
    }
  );

  const filteredListings = computed(() => {
    let result = filterByPrice(store.listings, store.filterPrice);
    result = sortListings(result, store.sort);
    result = prioritizeHit(result);
    return result;
  });

  return {
    filteredListings,
    sort: store.sort,
    filterPrice: store.filterPrice,
    dateFormat: store.dateFormat,
  };
}
