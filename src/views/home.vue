<template>
  <section
    v-if="getCategoriesData.length > 0"
    class="
      w-full
      h-full
      pt-17
      px-[6vw]
      pb-15
      overflow-y-scroll
      overflow-x-hidden
      box-border
      tablet:overflow-x-scroll
      tablet:overflow-y-hidden
      tablet:pt-17
      tablet:pr-0
      tablet:pb-17
      tablet:pl-10"
  >
    <div class="
      w-auto
      flex
      flex-col
      justify-start
      items-center
      flex-wrap
      tablet:min-w-max
      tablet:pr-10
      tablet:grid
      tablet:gap-5
      tablet:grid-flow-col-dense
      tablet:grid-rows-3
      tablet:h-full"
    >
      <CategoriesCard
        v-for="item in getCategoriesData"
        :key="item.id"
        :item-info="item"
      />
    </div>
  </section>
  <AppEmptyFolderView
    v-else
    message="Shop don't have any categories right now!"
  />
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import AppEmptyFolderView from '@/components/AppEmptyFolderView/AppEmptyFolderView.vue'
import CategoriesCard from '@/components/CategoriesCard/CategoriesCard.vue'

import { useShopDataStore } from '@/stores/db'

const data = useShopDataStore()
const { getCategoriesData } = storeToRefs(data);
</script>
