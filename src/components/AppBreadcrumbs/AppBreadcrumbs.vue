<template>
  <div class="
    fixed
    z-1000
    bottom-1
    h-10
    w-full
    flex
    items-center
    justify-center
    bg-white
    border-t
    border-gray-200
  ">
    <RouterLink
      to="home"
      class="
        text-14
        font-light
        h-full
        leading-36
        underline
        decoration-dashed
        underline-offset-2"
    >Home</RouterLink>
    <i class="material-symbols-rounded text-icon-small mx-2">chevron_right</i>
    <RouterLink
      to="home"
      class="
        text-14
        font-light
        h-full
        leading-36
        underline
        decoration-dashed
        underline-offset-2"
    >T-Shirts</RouterLink>
    <i class="material-symbols-rounded text-icon-small mx-2">chevron_right</i>
    <span class="text-14 h-full leading-36 font-light">E-Xtreme</span>
  </div>
</template>

<script setup lang="ts"></script>
