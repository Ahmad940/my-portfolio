<template>
  <section
    id="skills"
    ref="target"
    class="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    aria-label="Skills"
  >
    <div
      class="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0"
    >
      <h2 class="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Skills</h2>
    </div>
    <div class="inline-flex flex-wrap gap-5">
      <a
        :href="skill?.url"
        v-for="(skill, index) in skillsData"
        :key="index"
        :aria-label="`${skill?.label} (opens in a new tab)`"
      >
        <component v-bind:is="skill.icon" class="h-10 w-10"></component>
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
import { skillsData } from '@/data/skills.data'
import { useAppStore } from '@/stores/app.store'
import { useIntersectionObserver } from '@vueuse/core'
import { ref } from 'vue'

const appStore = useAppStore()

const target = ref<HTMLDivElement>()

useIntersectionObserver(
  target,
  ([{ isIntersecting }]) => {
    if (isIntersecting) {
      appStore?.setActiveLink('#skills')
    }
  },
  { rootMargin: '0px 0px', threshold: 0 }
)
</script>

<style scoped></style>
