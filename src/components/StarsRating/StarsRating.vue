<template>
  <div class="
    flex
    items-center
    justify-start
  "
  >
    <label
      v-for="rating in ratings"
      :class="{'text-interface-1': ((<number>tempValue >= rating))}"
      class="
        star-rating__star
        inline-block
        p-1
        text-main
        transition-color
        duration-200
        ease-out
        hover:cursor-pointer"
      @:click="setRating(rating)"
      @:mouseover="handleStarOver(rating)"
      @:mouseout="handleStarOut"
    >
      <input
        class="
          star-rating
          star-rating__checkbox
          hidden"
        type="radio"
        :value="rating"
        name="star"
        v-model="actualValue"
      />
      ★
    </label>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

const props = defineProps<{
  value: number,
}>();

const emits = defineEmits(['changeRating']);

const ratings = [1, 2, 3, 4, 5];
const tempValue = ref<number | null>(null);

const actualValue = computed(() => props.value)

const handleStarOver = (index: number) => {
    tempValue.value = index;
};

const handleStarOut = () => {
  return tempValue.value = actualValue.value;
};

const setRating = (value: number) => {
  emits('changeRating', value);
};
</script>
