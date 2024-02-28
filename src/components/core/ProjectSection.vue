<template>
  <section
    id="projects"
    class="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    aria-label="Selected projects"
  >
    <div
      class="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0"
    >
      <h2 class="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
        Projects
      </h2>
    </div>
    <div>
      <ul class="group/list">
        <li class="mb-12" v-for="(project, index) in projectsData" :key="index">
          <div
            class="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
          >
            <div
              class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"
            ></div>
            <div class="z-10 sm:order-2 sm:col-span-6">
              <h3>
                <a
                  class="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                  :href="project?.url || '#!'"
                  :target="project?.url ? '_blank' : '_self'"
                  rel="noreferrer noopener"
                  aria-label="Halcyon Theme (opens in a new tab)"
                >
                  <span
                    class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"
                  ></span>

                  <span class="inline-block">{{ project?.title }} <PathIcon /> </span>
                </a>
              </h3>
              <p class="mt-2 text-sm leading-normal text-justify">
                {{ project.description }}
              </p>
              <!-- href="" -->
              <span
                class="relative mt-2 inline-flex items-center text-sm font-medium text-slate-300 hover:text-teal-300 focus-visible:text-teal-300"
                target="_blank"
                rel="noreferrer noopener"
                :aria-label="`Over ${project?.users_counts} (opens in a new tab)`"
                v-if="project?.users_counts"
              >
                <DownloadIcon />
                <span>{{ project?.users_counts }}</span>
              </span>
              <ul
                class="mt-2 flex flex-wrap"
                aria-label="Technologies used:"
                v-if="project?.technologies"
              >
                <li
                  class="mr-1.5 mt-2"
                  v-for="(technology, index) in project?.technologies"
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
            <img
              :alt="project.title"
              loading="lazy"
              width="200"
              height="48"
              decoding="async"
              data-nimg="1"
              class="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
              style="color: transparent"
              :src="project.images[0]"
            />
          </div>
        </li>
      </ul>
      <!-- <div class="mt-12">
        <a
          class="inline-flex items-center leading-tight font-semibold text-slate-200 group"
          aria-label="View Full Project Archive"
          href="/archive"
        >
          <span>
            <span
              class="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none"
            >
              View Full project
            </span>
            <span class="whitespace-nowrap">
              <span
                class="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none"
              >
                Archive
              </span>
              <ArrowLeftIcon />
            </span>
          </span>
        </a>
      </div> -->
    </div>
  </section>
</template>

<script setup lang="ts">
import { projectsData } from '@/data/projects.data'
import DownloadIcon from '../icons/DownloadIcon.vue'
import PathIcon from '../icons/PathIcon.vue'
</script>

<style scoped></style>
