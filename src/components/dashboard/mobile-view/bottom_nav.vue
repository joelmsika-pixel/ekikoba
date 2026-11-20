<script setup>
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const isFabOpen = ref(false)

watch(() => route.fullPath, () => {
  isFabOpen.value = false
})

function logout() {
  isFabOpen.value = false
  router.push('/login')
}
</script>

<template>
  <nav
    aria-label="Bottom navigation"
    class="fixed inset-x-2 bottom-[max(8px,env(safe-area-inset-bottom))] z-40 mx-auto flex h-16 max-w-md items-center justify-around rounded-2xl border border-[#c7dfcd]/80 bg-white/95 px-2 shadow-[0_4px_12px_rgba(19,70,48,0.09)] backdrop-blur-md sm:hidden"
  >
    <RouterLink
      to="/dashboard-mobile"
      class="flex min-w-[56px] flex-col items-center gap-1 transition-colors focus-visible:rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0b4d38]"
      :class="route.name === 'dashboard-mobile' ? 'text-[#245a36]' : 'text-[#6d8576] hover:text-[#245a36]'"
      :aria-current="route.name === 'dashboard-mobile' ? 'page' : undefined"
    >
      <svg aria-hidden="true" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1z" />
      </svg>
      <span class="text-[10px] font-semibold">Dashboard</span>
    </RouterLink>
    <RouterLink
      to="/mchezo-schedule-mobile"
      class="flex min-w-[56px] flex-col items-center gap-1 transition-colors focus-visible:rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0b4d38]"
      :class="route.name === 'mchezo-schedule-mobile' ? 'text-[#245a36]' : 'text-[#6d8576] hover:text-[#245a36]'"
      :aria-current="route.name === 'mchezo-schedule-mobile' ? 'page' : undefined"
    >
      <svg aria-hidden="true" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M16 3v4M8 3v4M3 10h18M8 14h3M8 17h6" />
      </svg>
      <span class="text-[10px] font-medium">Schedule</span>
    </RouterLink>
    <RouterLink
      to="/dashboard-mobile"
      class="flex min-w-[56px] flex-col items-center gap-1 text-[#6d8576] transition-colors hover:text-[#245a36] focus-visible:rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0b4d38]"
    >
      <svg aria-hidden="true" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </svg>
      <span class="text-[10px] font-medium">History</span>
    </RouterLink>
    <RouterLink
      to="/legal-policies"
      class="flex min-w-[56px] flex-col items-center gap-1 transition-colors focus-visible:rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0b4d38]"
      :class="route.name === 'legal-policies' ? 'text-[#245a36]' : 'text-[#6d8576] hover:text-[#245a36]'"
      :aria-current="route.name === 'legal-policies' ? 'page' : undefined"
    >
      <svg aria-hidden="true" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <path d="M6 3h9l4 4v14H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" />
        <path d="M14 3v5h5M8 13h8M8 17h8" />
      </svg>
      <span class="text-[10px] font-medium">Policies</span>
    </RouterLink>
    <div class="relative flex h-12 w-12 shrink-0 items-center justify-center">
      <a
        href="https://wa.me/25515819837"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Get help on WhatsApp"
        class="fab-action absolute bottom-[7.75rem] left-1/2 flex h-11 -translate-x-1/2 items-center gap-2.5 whitespace-nowrap rounded-full border-2 border-white bg-[#218c57] px-4 text-white shadow-[0_5px_14px_rgba(19,70,48,0.25)] transition-[translate,scale,opacity,background-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-[#176d43] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0b4d38]"
        :class="isFabOpen ? 'translate-y-0 scale-100 opacity-100' : 'pointer-events-none translate-y-8 scale-90 opacity-0'"
        :tabindex="isFabOpen ? 0 : -1"
      >
        <svg aria-hidden="true" class="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
          <path d="M20.5 11.5a8.5 8.5 0 0 1-12.6 7.4L3 20l1.2-4.6A8.5 8.5 0 1 1 20.5 11.5Z" />
          <path d="M8.4 7.8c.3-.6.6-.6.9-.6h.5c.2 0 .4.1.5.4l.7 1.7c.1.2.1.4-.1.6l-.6.7c-.2.2-.2.4 0 .6.6 1 1.4 1.7 2.4 2.2.2.1.4.1.6-.1l.7-.8c.2-.2.4-.2.6-.1l1.6.8c.2.1.4.3.4.5 0 .4-.2 1.1-.7 1.5-.5.5-1.2.7-1.8.6-1-.1-2.3-.7-3.6-1.8-1.5-1.3-2.5-2.9-2.8-3.9-.3-.9-.1-1.8.7-2.3Z" />
        </svg>
        <span class="text-xs font-semibold tracking-wide">Help</span>
      </a>
      <button
        type="button"
        aria-label="Log out"
        class="fab-action absolute bottom-16 left-1/2 flex h-11 -translate-x-1/2 items-center gap-2.5 whitespace-nowrap rounded-full border-2 border-white bg-[#a6443d] px-4 text-white shadow-[0_5px_14px_rgba(80,25,20,0.28)] transition-[translate,scale,opacity,background-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-[#883832] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#a6443d]"
        :class="isFabOpen ? 'translate-y-0 scale-100 opacity-100' : 'pointer-events-none translate-y-6 scale-90 opacity-0'"
        :tabindex="isFabOpen ? 0 : -1"
        @click="logout"
      >
        <svg aria-hidden="true" class="h-[22px] w-[22px] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
          <path d="M10 17l5-5-5-5M15 12H3M12 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-6" />
        </svg>
        <span class="text-xs font-semibold tracking-wide">Out</span>
      </button>
      <button
        type="button"
        class="relative z-10 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-[#0b4d38] text-white shadow-[0_3px_8px_rgba(11,77,56,0.22)] ring-[3px] ring-[#e8f2eb] transition-transform duration-300 hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0b4d38] active:scale-95"
        :aria-expanded="isFabOpen"
        :aria-label="isFabOpen ? 'Close quick actions' : 'Open quick actions'"
        @click="isFabOpen = !isFabOpen"
      >
        <svg aria-hidden="true" class="h-5 w-5 transition-transform duration-300" :class="{ 'rotate-45': isFabOpen }" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M12 5v14M5 12h14" />
        </svg>
      </button>
    </div>
  </nav>
</template>

<style scoped>
@media (prefers-reduced-motion: reduce) {
  .fab-action,
  .relative > button[aria-expanded] svg {
    transition-duration: 1ms;
  }
}
</style>