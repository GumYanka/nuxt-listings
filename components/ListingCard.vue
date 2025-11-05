<template>
  <div class="border rounded-lg p-4 shadow-sm">
    <h2 class="text-lg font-semibold">{{ listing.title }}</h2>

    <div class="text-gray-500 text-sm mb-2">
      {{ formattedDate }}
    </div>

    <div class="text-gray-700 font-medium mb-2">Ціна: {{ formattedPrice }}</div>

    <div v-if="listing.tags.length" class="flex flex-wrap gap-1">
      <span
        v-for="tag in listing.tags"
        :key="tag"
        class="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
      >
        {{ tag }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { formatDate } from "@/utils/formatDate";
import { formatPrice } from "@/utils/formatPrice";
import { useListingsStore } from "@/stores/listings";
import type { Listing } from "@/types/listing";

const props = defineProps<{ listing: Listing }>();
const store = useListingsStore();

const formattedDate = computed(() =>
  formatDate(props.listing.date, store.dateFormat)
);

const formattedPrice = computed(() => formatPrice(props.listing.price));
</script>
