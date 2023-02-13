<template>
  <header class="
    fixed
    z-1000
    top-1
    w-full
    h-12
    tablet:h-13
    flex
    justify-between
    items-center
    bg-white
    tablet:px-10
    border-b
    border-b-gray-200"
  >
    <div class="flex h-full">
      <button
        class="
          flex w-[50px]
          tablet:w-12
          justify-center
          items-center
          hover:bg-gray-100"
        @click="goBack"
      >
        <i class="material-symbols-rounded text-icon-small laptop:text-icon-medium">arrow_back</i>
      </button>
      <RouterLink 
        to="/"
        class="
          flex w-[50px]
          tablet:w-12
          justify-center
          items-center
          hover:bg-gray-100"
      >
        <i class="material-symbols-rounded text-icon-small laptop:text-icon-medium">home</i>
      </RouterLink>
      <button
        class="
          flex w-[50px]
          tablet:w-12
          justify-center
          items-center
          hover:bg-gray-100"
        @click="setFeedbackModalState(true)"
      >
        <i class="material-symbols-rounded text-icon-small laptop:text-icon-medium">feedback</i>
      </button>
      <button
        to="home"
        class="
          flex w-[50px]
          tablet:w-12
          justify-center
          items-center
          hover:bg-gray-100"
      >
        <i class="material-symbols-rounded text-icon-small laptop:text-icon-medium">translate</i>
      </button>
    </div>
    <RouterLink
      to="/cart"
      class="
        flex
        justify-center
        items-center
        h-full
        px-3
        hover:bg-gray-100"
    >
      <i class="material-symbols-rounded text-icon-small laptop:text-icon-medium relative block">
        shopping_cart
        <div class="
          top-[-7px]
          right-[-7px]
          absolute
          w-5
          h-5
          text-white
          bg-interface-1
          rounded-full
          text-9
          flex
          items-center
          justify-center
          text-light
          font-sans"
        ><span>{{ getProductsCount }}</span></div>
      </i>
      <span class="ml-4 text-[20px] laptop:text-[24px] font-light">${{ getTotalPrice }}</span>
    </RouterLink>
  </header>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useModalsDataStore } from '@/stores/modals'
import { useCartDataStore } from '@/stores/cart'

const cartData = useCartDataStore()
const { getProductsCount, getTotalPrice } = storeToRefs(cartData);

const { setFeedbackModalState } = useModalsDataStore();

const router = useRouter();

const goBack = () => {
  router.go(-1);
}
</script>
