<script setup lang="ts">
import AboutSection from '@/components/core/AboutSection.vue'
import ExperienceSection from '@/components/core/ExperienceSection.vue'
import FooterSection from '@/components/core/FooterSection.vue'
import ProjectSection from '@/components/core/ProjectSection.vue'
import SkillSection from '@/components/core/SkillSection.vue'
</script>

<template>
  <main class="pt-24 lg:w-1/2 lg:py-24">
    <div class="flex flex-col">
      <SkillSection class="order-2" />
      <AboutSection class="order-1" />
    </div>
    <ExperienceSection />
    <ProjectSection />
    <FooterSection />
  </main>
</template>
