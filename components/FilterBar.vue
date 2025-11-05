<template>
  <div class="flex flex-wrap gap-3 mb-6 items-center">
    <select v-model="store.sort" class="border rounded p-2">
      <option value="price_asc">Ціна ↑</option>
      <option value="date_desc">Дата ↓</option>
    </select>

    <select v-model="store.filterPrice" class="border rounded p-2">
      <option value="all">Усі ціни</option>
      <option value="1000">до 1000</option>
      <option value="1000-1500">1000–1500</option>
      <option value="2000">2000 і більше</option>
    </select>

    <button
      @click="toggleFormat"
      class="border rounded p-2 bg-gray-100 hover:bg-gray-200 transition"
    >
      Формат дат:
      {{ exampleDate }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useListingsStore } from "@/stores/listings";
import { formatDate } from "@/utils/formatDate";

const store = useListingsStore();

const exampleDate = computed(() => formatDate("2025-12-31", store.dateFormat));

const toggleFormat = () => {
  store.dateFormat = store.dateFormat === "short" ? "long" : "short";
};
</script>
