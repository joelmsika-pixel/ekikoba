<template>
  <main class="h-[100dvh] overflow-hidden bg-[#f3f8f6] sm:h-auto sm:min-h-screen sm:overflow-visible">
    <header v-if="route.name === 'dashboard-mobile'" class="relative isolate h-[140px] overflow-hidden rounded-b-[30px] bg-gradient-to-br from-[#073e46] via-[#075b55] to-[#087052] text-white shadow-[0_12px_30px_rgba(7,74,67,0.16)] sm:h-auto">
      <img :src="familyGroupImage" alt="" aria-hidden="true" class="pointer-events-none absolute inset-y-0 right-0 -z-20 h-full w-[72%] object-cover object-[72%_43%] opacity-55" />
      <div aria-hidden="true" class="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-[#063e46] via-[#07554f]/90 to-[#075b55]/20"></div>
      <span aria-hidden="true" class="pointer-events-none absolute -right-10 -top-24 -z-10 h-64 w-64 rounded-full bg-[#1ea66d]/20 blur-2xl"></span>
      <span aria-hidden="true" class="pointer-events-none absolute right-[-44px] top-[-90px] -z-10 h-56 w-56 rounded-full border border-white/15"></span>
      <span aria-hidden="true" class="pointer-events-none absolute right-[-16px] top-[-62px] -z-10 h-44 w-44 rounded-full border border-white/10"></span>
      <div class="relative z-10 mx-auto max-w-lg px-5 pt-4 pb-6 sm:pb-9 sm:pt-5">
        <div class="flex items-center justify-between">
          <div class="ml-auto flex items-center gap-2">
            <time class="rounded-full border border-white/10 bg-white/10 px-3 py-1.5 font-mono text-xs font-semibold tabular-nums text-white/90" :datetime="digitalTimeDateTime">{{ digitalTime }}</time>
            <button type="button" aria-label="Notifications" class="relative flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
              <svg aria-hidden="true" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4" />
              </svg>
              <span class="absolute right-1 top-1 h-1.5 w-1.5 rounded-full bg-[#65e393]"></span>
            </button>
          </div>
        </div>
        <div class="mt-1 sm:mt-7">
          <p class="text-[11px] font-bold uppercase tracking-[0.22em] text-[#b8e9d0]">{{ greeting }}</p>
          <h1 class="mt-1 text-[27px] font-extrabold leading-[1.04] tracking-[-0.04em] sm:text-[29px]">Welcome back, Joel</h1>
          <time class="mt-1.5 inline-flex items-center gap-1.5 text-xs font-medium leading-none text-white/75 sm:text-[13px]" :datetime="digitalDateTime">
            <svg aria-hidden="true" class="h-4 w-4 text-[#b8e9d0]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <rect x="3.5" y="5" width="17" height="16" rx="2" />
              <path d="M7.5 3v4M16.5 3v4M3.5 9h17" />
            </svg>
            {{ currentDate }}
          </time>
        </div>
      </div>
      <div aria-hidden="true" class="absolute bottom-0 right-0 h-1 w-2/3 bg-gradient-to-l from-[#62da8b]/70 via-[#62da8b]/25 to-transparent"></div>
    </header>

    <Transition name="mobile-dashboard" mode="out-in">
      <PrivateDash v-if="route.name === 'dashboard-mobile'" key="dashboard" />
      <LegalPolicies v-else key="policies" embedded />
    </Transition>
  </main>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import PrivateDash from './sub components mobile/private_dash.vue'
import LegalPolicies from '../../Authentication/legal and support/LegalPolicies.vue'
import familyGroupImage from '../../images/images-mobile-view/my mchezo component images/family group.png'

const route = useRoute()
const now = () => new Date()
const currentTime = ref(now())
const digitalTime = computed(() => currentTime.value.toLocaleTimeString([], {
  hour: '2-digit',
  minute: '2-digit',
}))
const digitalTimeDateTime = computed(() => currentTime.value.toISOString())
const currentDate = computed(() => currentTime.value.toLocaleDateString([], {
  weekday: 'long',
  month: 'long',
  day: 'numeric',
  year: 'numeric',
}))
const digitalDateTime = computed(() => currentTime.value.toISOString())
const greeting = computed(() => {
  const hour = currentTime.value.getHours()
  if (hour < 12) return 'Good morning'
  if (hour < 18) return 'Good afternoon'
  return 'Good evening'
})
let digitalClockInterval

onMounted(() => {
  digitalClockInterval = window.setInterval(() => {
    currentTime.value = now()
  }, 60_000)
})

onBeforeUnmount(() => window.clearInterval(digitalClockInterval))
</script>

<style scoped>
@media (max-width: 639px) {
  .mobile-dashboard-enter-active,
  .mobile-dashboard-leave-active {
    transition: opacity 240ms ease, transform 240ms ease;
  }

  .mobile-dashboard-enter-from {
    opacity: 0;
    transform: translateY(12px);
  }

  .mobile-dashboard-leave-to {
    opacity: 0;
    transform: translateY(-8px);
  }

  @media (prefers-reduced-motion: reduce) {
    .mobile-dashboard-enter-active,
    .mobile-dashboard-leave-active {
      transition-duration: 1ms;
    }
  }
}
</style>
