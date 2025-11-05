<template>
  <div class="max-w-4xl mx-auto p-6">
    <h1 class="text-2xl font-bold mb-4">Список товарів</h1>

    <FilterBar />

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <ListingCard
        v-for="listing in filteredListings"
        :key="listing.id"
        :listing="listing"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import FilterBar from "@/components/FilterBar.vue";
import ListingCard from "@/components/ListingCard.vue";
import { useListings } from "@/composables/useListings";

const { filteredListings } = useListings();
</script>
