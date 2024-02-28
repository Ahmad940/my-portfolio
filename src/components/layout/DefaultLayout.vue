<template>
  <div class="relative">
    <div
      class="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"
      style="
        background: radial-gradient(
          600px circle at 0px 0px,
          rgba(29, 78, 216, 0.15),
          transparent 80%
        );
      "
    ></div>

    <div
      class="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-inter md:px-12 md:py-20 lg:px-24 lg:py-0"
    >
      <div class="lg:flex lg:justify-between lg:gap-4">
        <!-- Side section -->
        <SideBar />
        <!-- End of side section -->

        <!-- Main section -->
        <slot></slot>
        <!-- End of main section -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SideBar from './SideBar.vue'
</script>

<style scoped></style>
