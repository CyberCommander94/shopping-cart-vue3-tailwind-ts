<template>
  <div class="
    w-screen
    h-screen
    bg-dialog-backdrop
    flex
    items-center
    justify-center
    z-10000
    fixed
    top-0
    left-0"
    @click.self="handleClickOutside"
  >
    <div class="
      py-1
      w-[90vw]
      tablet:w-[60vw]
      tabletmax-w-[1000px]
      tablet:min-w-[400px]
      bg-white
      relative
      overflow-hidden"
    >
      <div class="
        bg-app-border
        absolute
        z-1000
        h-1
        w-full
        left-0
        top-0
        bg-repeat-x"
      ></div>
        <div class="
          w-full
          border-gray-200
          border-b
          px-7
          py-3
          flex
          items-center
          justify-between"
        >
          <h2 class="
            text-20
            font-light"
          >User Feedback</h2>
          <button class="
            flex
            items-center
            justify-center
            w-8
            h-8
            hover:bg-gray-200"
            @click="setFeedbackModalState(false)"
          >
            <i class="material-symbols-rounded text-icon-small laptop:text-icon-small">close</i>
          </button>
        </div>
        <div class="
          flex
          flex-col
          justify-start
          tablet:px-20
          px-8
          pt-3
          h-[530px]
          overflow-x-hidden
          overflow-y-auto
          box-border"
        >
          <div class="
            pb-7"
          >
            <h3 class="
              text-16
              font-regular"
            >Choose type of your feedback</h3>
            <p class="
              text-10
              font-light"
            >Select one of the options</p>
            <select
              name=""
              id=""
              class="
                w-full
                max-w-[300px]
                border-gray-200
                border
                mt-2
                mb-6
                outline-none
                text-12
                px-3
                py-2"
            >
              <option value="">UI issue</option>
              <option value="">UX issue</option>
              <option value="">Improvement</option>
              <option value="">Other</option>
            </select>
            <h3 class="
              text-16
              font-regular"
            >Rate your overral experience</h3>
            <p class="
              text-10
              font-light"
            >From 1 to 5 stars</p>
            <StarsRating @changeRating="changeRating" :value="rating" class="mt-1 mb-6"></StarsRating>
            <h3 class="
              text-16
              font-regular"
            >Any additional feedback?</h3>
            <p class="
              text-10
              font-light"
            >Let us know how we can improve</p>
            <textarea
              placeholder="Input here"
              name="Additional feedback"
              rows="7"
              class="
                w-full
                border-gray-200
                border
                mt-2
                mb-6
                outline-none
                px-3
                py-2
                text-12"
            ></textarea>
            <button class="
              text-white
              bg-interface-2
              px-4
              py-2
              font-light
              text-4
            ">Send Fedback</button>
          </div>
        </div>
      <div class="
        bg-app-border
        absolute
        z-1000
        h-1
        w-full
        left-0
        bottom-0
        bg-repeat-x
      "></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, type VNodeRef } from 'vue';
import StarsRating from '@/components/StarsRating/StarsRating.vue'
import { useModalsDataStore } from '@/stores/modals'

const { setFeedbackModalState } = useModalsDataStore();

const props = defineProps<{
  closeOnClickOutside?: boolean
}>();

const handleClickOutside = () => {
  if(props.closeOnClickOutside) {
    setFeedbackModalState(false);
  }
};

const rating = ref<number>(0);
const changeRating = (value: number) => {
  rating.value = value;
};
</script>
