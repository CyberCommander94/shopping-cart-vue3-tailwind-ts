<template>
  <RouterLink
    :to="{path: `${itemInfo.id}/products`}"
    :class="[ratioClass, { 'category-item': true }]"
    class="
      w-full
      max-w-[400px]
      tablet:max-w-full
      h-[300px]
      mb-5
      last-child:mb-0
      tablet:mb-0
      overflow-x-hidden
      overflow-y-hidden
      block
      shadow-lg
      shadow-gray-300
      tablet:h-full
      [&.high]:tablet:row-end-span-2
      [&.high]:tablet:col-span-12
      [&.small]:tablet:row-end-span-1
      [&.small]:tablet:col-span-12
      [&.extra-wide]:tablet:row-end-span-1
      [&.extra-wide]:tablet:col-span-24
      hover:scale-[1.02]
      transition-scale
      duration-200
      ease-in
    "
  >
    <figure
      :style="{ 'background-image': 'url(' + itemInfo.categoryBg + ')' }"
      class="
        relative
        bg-cover
        bg-center
        h-[300px]
        w-full
        overflow-x-hidden
        overflow-y-hidden
        cursor-pointer
        tablet:h-full
      "
    >
      <figcaption
        class="
          bg-card-caption
          absolute
          bottom-0
          w-full
          pl-5
          leading-40
          text-20
          h-10
          font-extralight
        "
      >{{ itemInfo.categoryName }}</figcaption>
    </figure>
  </RouterLink>
</template>

<script setup lang="ts">
import { ref, onBeforeMount } from 'vue';

const props = defineProps<{
  itemInfo: { categoryName: string, id: string, categoryBg: string },
}>();

const ratioClass = ref('');

onBeforeMount(async () => {
  let ratio = await getImgRatio(props.itemInfo.categoryBg);
  ratioClass.value = addRatioClass(<number>ratio)
});

const getImgRatio = (url: string) => {
  return new Promise(function(resolve) {
    const img = new Image()
    img.onload = function() {
      resolve(
        Math.round((img.naturalWidth / img.naturalHeight) * 100) / 100
      )
    }
    img.src = url
  })
};

const addRatioClass = (ratio: number): string => {
  let ratClass = ''
  if (ratio >= 1.5) {
    ratClass = 'extra-wide'
  } else if (ratio < 1.5 && ratio > 0.75) {
    ratClass = 'small'
  } else if (ratio <= 0.75) {
    ratClass = 'high'
  }
  return ratClass
};
</script>
