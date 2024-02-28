<template>
  <header
    class="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24"
  >
    <!-- Top header -->
    <div>
      <Link class="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl" to="/">
        {{ aboutData?.name }}
      </Link>

      <h2 class="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
        {{ aboutData?.role }}
      </h2>

      <p class="mt-4 max-w-xs leading-normal">{{ aboutData?.brief_description }}</p>

      <nav class="hidden lg:block" aria-label="In-page jump links">
        <ul class="mt-16 w-max">
          <li v-for="item in navLinks" :key="item.id">
            <Link :to="item?.id" class="group flex items-center py-3">
              <!-- <span class="bg-slate-200 w-5 h-1"></span> -->
              <span
                class="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 group-active:text-red-400 motion-reduce:transition-none"
              ></span>
              <span
                class="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200"
                >{{ item?.title }}</span
              >
            </Link>
          </li>
        </ul>
      </nav>
    </div>

    <!-- Socials -->
    <ul class="ml-1 mt-8 flex items-center" aria-label="Social media">
      <li class="mr-5 text-xs shrink-0" v-for="item in socialsData" :key="item?.title">
        <a
          class="block hover:text-slate-200"
          :href="item?.url"
          target="_blank"
          rel="noreferrer noopener"
          :aria-label="`${item?.title} (opens in a new tab)`"
          :title="item?.title"
          ><span class="sr-only" v-text="item?.title"></span>
          <!-- <item?.icon /> -->
          <component v-bind:is="item.icon"></component>
        </a>
      </li>
    </ul>
  </header>
</template>

<script setup lang="ts">
import { aboutData } from '@/data/about.data'
import { navLinks, socialsData } from '@/data/meta.data'
import Link from '../base/Link.vue'
</script>

<style scoped></style>
