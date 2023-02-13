<template>
  <div class="
    relative
    w-screen
    h-screen
    overflow-y-hidden
  ">
    <div class="
      bg-app-border
      fixed
      z-1000
      h-1
      w-full
      left-0
      top-0
      bg-repeat-x
    "></div>
      <AppHeader />
      <RouterView />
      <AppBreadcrumbs />
    <div class="
      bg-app-border
      fixed
      z-1000
      h-1
      w-full
      left-0
      bottom-0
      bg-repeat-x
    "></div>
  </div>
  <Teleport to="#modals">
    <FeedbackDialog v-if="isFeedbackModalOpened" close-on-click-outside/>
  </Teleport>
</template>

<script setup lang="ts">
import AppHeader from '@/components/AppHeader/AppHeader.vue'
import AppBreadcrumbs from '@/components/AppBreadcrumbs/AppBreadcrumbs.vue'
import FeedbackDialog from '@/components/FeedbackDialog/FeedbackDialog.vue'
import { useModalsDataStore } from '@/stores/modals'
import { storeToRefs } from 'pinia'

const modalsData = useModalsDataStore();
const { isFeedbackModalOpened } = storeToRefs(modalsData);
</script>
