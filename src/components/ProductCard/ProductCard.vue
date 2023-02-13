<template>
  <article class="
    relative
    w-full
    max-w-[400px]
    tablet:max-w-full
    flex
    flex-col
    flex-nowrap
    h-[400px]
    overflow-x-hidden
    overflow-y-hidden
    mb-5
    shadow-lg
    shadow-gray-300
    tablet:row-end-span-1
    tablet:col-span-18
    tablet:m-0
    tablet:h-full"
  >
    <figure
      :style="{ backgroundImage: 'url(' + itemInfo.path + ')' }"
      class="
      h-[370px]
      block
      w-full
      relative
      bg-cover
      bg-center
      tablet:h-full"
    >
      <figcaption
        class="
        absolute
        flex
        justify-between
        items-center
        bottom-0
        bg-card-caption
        h-11
        px-5
        box-border
        w-full
        tablet:h-13"
      >
        <span
          class="
            text-22
            font-regular
            tracking-[1px]
            font-extralight
          "
        >{{ itemInfo.name }}</span>
        <span
          class="
            text-28
            font-extralight
            text-interface-1"
        >${{ itemInfo.cost }}</span>
      </figcaption>
    </figure>
    <div
      class="
        w-full
        h-17
        tablet:h-18
        bg-interface-2
        flex
        justify-between
        items-center
        text-white
        px-5
        box-border"
    >
      <div
        class="
        border-2
        flex
        items-center
        justify-center
        cursor-pointer" 
        @click="removeCartItem({
        id: itemInfo.id,
        name: itemInfo.name,
        amount: 1,
        cost: itemInfo.cost
      })">
        <i class="material-symbols-rounded text-icon-medium">remove</i>
      </div>
      <div
        class="
        flex
        items-center
        justify-center
        flex-col
        "
      >
        <span class="font-light">amount</span>
        <p class="font-extralight text-30 leading-28">{{ getCurrItemAmount(itemInfo.id) }}</p>
      </div>
      <div 
        class="
        border-2
        flex
        items-center
        justify-center
        cursor-pointer" 
        @click="addCartItem({
        id: itemInfo.id,
        name: itemInfo.name,
        amount: 1,
        cost: itemInfo.cost
      })">
        <i class="material-symbols-rounded text-icon-medium">add</i>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import type { IProduct } from '@/utils/interfaces';
import { useCartDataStore } from '@/stores/cart';

const {
  getCurrItemAmount,
  addCartItem,
  removeCartItem,
} = useCartDataStore()

defineProps<{
  itemInfo: IProduct
}>();

</script>
