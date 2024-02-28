<template>
  <section
    id="about"
    ref="target"
    class="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    aria-label="About me"
  >
    <div
      class="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0"
    >
      <h2 class="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">About</h2>
    </div>
    <div class="text-justify">
      <p
        v-for="(item, index) in aboutData.description"
        :key="index"
        :class="[aboutData.description.length - 1 !== index && 'mb-4']"
      >
        {{ item }}
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { aboutData } from '@/data/about.data'
import { useAppStore } from '@/stores/app.store'
import { useIntersectionObserver } from '@vueuse/core'
import { ref } from 'vue'

const appStore = useAppStore()

const target = ref<HTMLDivElement>()

useIntersectionObserver(
  target,
  ([{ isIntersecting, intersectionRatio, boundingClientRect }]) => {
    if (isIntersecting) {
      // alert('Hello world')
      appStore?.setActiveLink('#about')
    }
  },
  { rootMargin: '0px 0px', threshold: 0 }
)
</script>

<style scoped></style>
