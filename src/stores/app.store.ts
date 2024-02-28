import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAppStore = defineStore('app', () => {
  const activeLink = ref('#about')

  function setActiveLink(payload: string) {
    activeLink.value = payload
  }

  return { activeLink, setActiveLink }
})
