<template>
  <section
    id="experience"
    ref="target"
    class="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    aria-label="Work experience"
  >
    <div
      class="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0"
    >
      <h2 class="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
        Experience
      </h2>
    </div> 
    <div>
      <ol class="group/list">
        <li class="mb-12" v-for="(experience, index) in experienceData.slice(0, 5)" :key="index">
          <div
            class="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
          >
            <div
              class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"
            ></div>
            <header
              class="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
              :aria-label="experience?.duration"
            >
              {{ experience?.duration }}
            </header>
            <div class="z-10 sm:col-span-6">
              <h3 class="font-medium leading-snug text-slate-200">
                <div>
                  <a
                    class="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                    :href="experience?.organization_link || '#!'"
                    :target="experience?.organization_link ? '_blank' : '_self'"
                    rel="noreferrer noopener"
                    :aria-label="`${experience?.role} at Apple (opens in a new tab)`"
                  >
                    <span
                      class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"
                    ></span>
                    <span>
                      {{ experience?.role }} ·
                      <span class="inline-block">
                        {{ experience?.organization }} <PathIcon />
                      </span>
                    </span>
                  </a>
                </div>
                <div v-if="experience?.position">
                  <div
                    class="text-slate-500"
                    aria-hidden="true"
                    v-for="position in experience?.position"
                    :key="position"
                  >
                    {{ position }}
                  </div>
                </div>
              </h3>
              <p class="mt-2 text-sm leading-normal text-justify">
                {{ experience?.description }}
              </p>
              <ul v-if="experience?.links" class="mt-2 flex flex-wrap" aria-label="Related links">
                <li class="mr-4" v-for="(link, index) in experience.links" :key="index">
                  <a
                    class="relative mt-2 inline-flex items-center text-sm font-medium text-slate-300 hover:text-teal-300 focus-visible:text-teal-300"
                    :href="link?.url"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="MusicKit.js (opens in a new tab)"
                    ><LinkIcon /> <span>{{ link?.name }}</span></a
                  >
                </li>
              </ul>
              <ul
                v-if="experience?.technologies"
                class="mt-2 flex flex-wrap"
                aria-label="Technologies used"
              >
                <li
                  class="mr-1.5 mt-2"
                  v-for="(technology, index) in experience?.technologies"
                  :key="index"
                >
                  <div
                    class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300"
                  >
                    {{ technology }}
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </li>
      </ol>
      <div class="mt-12">
        <!-- href="/resume.pdf" -->
        <a
          class="inline-flex items-baseline leading-tight hover:text-teal-300 focus-visible:text-teal-300 font-semibold text-slate-200 group/link text-base"
          target="_blank"
          href="https://resume.io/r/p10XTc0JE"
          rel="noreferrer noopener"
          aria-label="View Full Résumé (opens in a new tab)"
        >
          <span>
            View Full <span class="inline-block"> Résumé <PathIcon /> </span>
          </span>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import LinkIcon from '@/components/icons/LinkIcon.vue'
import PathIcon from '@/components/icons/PathIcon.vue'
import { experienceData } from '@/data/experience.data'
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
      appStore?.setActiveLink('#experience')
    }
  },
  { rootMargin: '0px 0px', threshold: 0.5 }
)
</script>

<style scoped></style>
@/data/experience.data
