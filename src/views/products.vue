<template>
  <section
    v-if="categoryData?.categoryGoods.length"
    class="
      w-full
      h-full
      pt-20
      px-[6vw]
      pb-15
      tablet:pt-[120px]
      tablet:pr-0
      tablet:pb-[120px]
      tablet:pl-10
      overflow-x-hidden
      overflow-y-auto
      box-border
      tablet:overflow-x-auto
      tablet:overflow-y-hidden"
  >
    <div class="
      w-auto
      h-auto
      tablet:h-full
      flex
      flex-col
      items-center
      tablet:justify-items-start
      tablet:justify-start
      tablet:pr-10
      tablet:grid
      tablet:gap-5
      tablet:min-w-max
      tablet:grid-rows-1
      tablet:grid-flow-col-dense"
    >
      <ProductCard
        v-for="(item, index) in categoryData.categoryGoods"
        :key="index"
        :item-info="item"
        :index="index"
      />
    </div>
  </section>
  <AppEmptyFolderView
    v-else
    message="This category don't have any goods now!"
  />
</template>

<script setup lang="ts">
import AppEmptyFolderView from '@/components/AppEmptyFolderView/AppEmptyFolderView.vue';
import ProductCard from '@/components/ProductCard/ProductCard.vue';

import type { ICategoryItem } from '@/utils/interfaces';

import { useShopDataStore } from '@/stores/db';
const { getCategoryData } = useShopDataStore();

const props = defineProps<{
  id: string
}>();

const categoryData: undefined | ICategoryItem = getCategoryData(props.id);

</script>
