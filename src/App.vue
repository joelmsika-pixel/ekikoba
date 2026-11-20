<script setup>
import { useRoute } from 'vue-router'
import BottomNav from './components/dashboard/mobile-view/bottom_nav.vue'

const route = useRoute()
</script>

<template>
  <div>
    <div :class="[
      ['my-mchezo-mobile', 'legal-policies'].includes(route.name)
        ? 'pb-[calc(5rem+env(safe-area-inset-bottom))] sm:pb-0'
        : '',
      route.name === 'dashboard-mobile'
        ? 'h-[100dvh] overflow-hidden sm:h-auto sm:overflow-visible'
        : '',
      ['mchezo-schedule-mobile'].includes(route.name)
        ? 'h-[100dvh] overflow-hidden sm:h-auto sm:overflow-visible'
        : '',
    ]">
      <router-view />
    </div>
    <BottomNav v-if="route.meta.showMobileBottomNav" />
  </div>
</template>
