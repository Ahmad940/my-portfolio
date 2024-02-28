<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <RouterLink :to="to || ''" class="text-slate-400">
    <slot></slot>
  </RouterLink>
</template>

<script setup lang="ts">
import { RouterLink, type RouterLinkProps } from 'vue-router'

export interface linkProps extends RouterLinkProps {}

defineProps<linkProps>()
</script>

<style scoped></style>
