<template>
  <main class="min-h-screen bg-[#e8f2eb]">
    <article aria-label="Calendar schedule banner" class="relative isolate h-32 w-full overflow-hidden bg-white shadow-[0_6px_18px_rgba(19,70,48,0.08)]">
      <img :src="scheduleBanner" alt="" aria-hidden="true" class="absolute inset-0 h-full w-full scale-[1.8] object-cover object-center" />
      <router-link to="/dashboard-mobile" aria-label="Back to dashboard" class="group absolute left-4 top-4 z-10 flex h-12 w-12 items-center justify-center text-white transition-transform duration-200 hover:-translate-x-0.5 focus-visible:rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
        <svg aria-hidden="true" class="h-9 w-9 drop-shadow-[0_1px_3px_rgba(0,0,0,0.75)] transition-transform duration-200 group-hover:scale-105" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
          <path d="M20 12H4m7 7-7-7 7-7" />
        </svg>
      </router-link>
      <div class="absolute left-16 right-20 top-1/2 z-10 -translate-y-1/2 text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.65)]">
        <h1 class="text-xs font-bold leading-tight">Calendar Schedule</h1>
        <p class="mt-1 text-[9px] font-medium leading-snug text-white/90">Stay on top of every round</p>
      </div>
      <svg aria-hidden="true" class="pointer-events-none absolute right-6 top-5 h-12 w-12 text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.25)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
        <rect x="3.5" y="5" width="17" height="16" rx="2.5" />
        <path d="M7.5 3.5v3M16.5 3.5v3M3.5 9h17" />
        <path d="M8 12.5h.01M12 12.5h.01M16 12.5h.01M8 16.5h.01M12 16.5h.01" stroke-width="2.2" />
      </svg>
    </article>
    <article aria-label="Second empty schedule card" class="relative z-10 mx-auto -mt-6 h-32 w-[calc(100%-4px)] overflow-hidden rounded-2xl border border-[#c7dfcd] bg-gradient-to-br from-white via-white to-[#f1f8f2] shadow-[0_-4px_8px_rgba(19,70,48,0.12)]">
      <svg aria-hidden="true" class="pointer-events-none absolute inset-0 z-0 h-full w-full text-[#2d6a4f]/[0.06] opacity-70" viewBox="0 0 520 150" preserveAspectRatio="none" fill="none">
        <defs>
          <pattern id="schedule-card-network" width="96" height="78" patternUnits="userSpaceOnUse">
            <path d="M0 20 32 0 64 24 96 7M0 20 16 68 56 49 88 78M32 0 56 49 64 24 88 78M16 68 56 49 96 58" stroke="currentColor" stroke-width="1" />
            <g fill="currentColor">
              <circle cx="0" cy="20" r="2.5" /><circle cx="32" cy="0" r="2.5" />
              <circle cx="64" cy="24" r="2.5" /><circle cx="96" cy="7" r="2.5" />
              <circle cx="16" cy="68" r="2.5" /><circle cx="56" cy="49" r="2.5" />
              <circle cx="88" cy="78" r="2.5" /><circle cx="96" cy="58" r="2.5" />
            </g>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#schedule-card-network)" />
      </svg>
      <span aria-hidden="true" class="pointer-events-none absolute inset-2 z-10 rounded-xl border border-[#2d6a4f]/[0.08]"></span>
      <span aria-hidden="true" class="pointer-events-none absolute left-0 right-0 top-0 z-10 h-1 bg-gradient-to-r from-[#2d6a4f]/20 via-[#78b77f] to-[#2d6a4f]/20"></span>
      <div class="relative z-30 flex h-full items-center gap-3 px-3 pr-24">
        <span aria-hidden="true" class="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#2d6a4f]/20 bg-[#2d6a4f] text-white shadow-sm">
          <svg class="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <path d="M16 20v-1.5a3.5 3.5 0 0 0-3.5-3.5h-5A3.5 3.5 0 0 0 4 18.5V20" />
            <circle cx="10" cy="7.5" r="3.5" />
            <path d="M17 11a3.5 3.5 0 0 0 0-7M20 20v-1.5a3.5 3.5 0 0 0-2.5-3.35" />
          </svg>
        </span>
        <span aria-hidden="true" class="h-10 w-px shrink-0 bg-gradient-to-b from-transparent via-[#78b77f]/50 to-transparent"></span>
        <div class="min-w-0 flex-1">
          <h2 class="truncate text-lg font-semibold leading-tight text-[#163c2c]">Mchezo Schedule</h2>
          <div class="mt-1 flex items-center gap-1">
            <p class="whitespace-nowrap text-xs font-medium text-[#6d8576]">GROUP ID: <span class="font-semibold text-[#2d6a4f]">594rei</span></p>
            <button type="button" aria-label="Copy group ID" class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#edf6ef] text-[#2d6a4f] transition-colors hover:bg-[#dceee0] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2d6a4f]" @click="copyGroupId">
              <svg aria-hidden="true" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <rect x="8" y="8" width="12" height="12" rx="2" />
                <path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" />
              </svg>
            </button>
          </div>
          <p v-if="copyStatus" role="status" class="text-[10px] text-[#2d6a4f]">{{ copyStatus }}</p>
        </div>
        <img :src="calendarEmblem" alt="" aria-hidden="true" class="pointer-events-none absolute right-[-26px] top-[-55px] z-20 h-60 w-45 object-contain object-right" />
      </div>
    </article>
    <article aria-label="Mchezo summary" class="relative z-20 mx-auto -mt-6 flex h-36 w-[calc(100%-4px)] flex-col justify-center gap-2 overflow-hidden rounded-b-2xl border border-[#b6d7bb] bg-gradient-to-br from-[#f0f8f1] via-[#e8f3e9] to-[#deeedf] px-2 py-2 shadow-[0_4px_14px_rgba(19,70,48,0.10)]">
      <span aria-hidden="true" class="pointer-events-none absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-[#2d6a4f]/20 via-[#78b77f] to-[#2d6a4f]/20"></span>
      <svg aria-hidden="true" class="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 400 144" preserveAspectRatio="none">
        <path d="m0 144 0-25 43-25 35 20 34-19 43 25 43-22 39 21 43-24 39 22 41-21 40 22v26H0Z" fill="white" fill-opacity=".22" />
        <path d="m0 119 43-25 35 20 34-19 43 25 43-22 39 21 43-24 39 22 41-21 40 22M285 0h115v67c-32-3-47-24-65-43-16-16-29-24-50-24Z" fill="none" stroke="white" stroke-opacity=".62" stroke-width="1.5" stroke-linejoin="round" />
        <path d="m291 0 57 57 22-21 30 31M16 130l26-15 24 14m130-7 22-11 20 11m57-15 22 12 22-11 20 11" fill="none" stroke="white" stroke-opacity=".58" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" />
        <circle cx="43" cy="94" r="2" fill="white" fill-opacity=".85" />
        <circle cx="112" cy="95" r="2" fill="white" fill-opacity=".85" />
        <circle cx="348" cy="57" r="2" fill="white" fill-opacity=".85" />
      </svg>
      <div class="relative z-10 grid w-full grid-cols-3">
        <span aria-hidden="true" class="pointer-events-none absolute bottom-1 left-1/3 top-1 w-px bg-gradient-to-b from-transparent via-[#78b77f]/75 to-transparent"></span>
        <span aria-hidden="true" class="pointer-events-none absolute bottom-1 left-2/3 top-1 w-px bg-gradient-to-b from-transparent via-[#78b77f]/75 to-transparent"></span>
        <div class="flex min-w-0 flex-col items-center px-1.5 text-center">
          <span aria-hidden="true" class="flex h-8 w-8 items-center justify-center rounded-full border border-[#cfe3d2] bg-white text-[#2d6a4f] shadow-[0_3px_8px_rgba(19,70,48,0.10)]">
            <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none">
              <path d="M4 5c0-1.66 3.58-3 8-3s8 1.34 8 3v14c0 1.66-3.58 3-8 3s-8-1.34-8-3V5Z" fill="currentColor" />
              <path d="M4.5 5c0 1.38 3.36 2.5 7.5 2.5s7.5-1.12 7.5-2.5M4.5 12c0 1.38 3.36 2.5 7.5 2.5s7.5-1.12 7.5-2.5" stroke="white" stroke-width="1.5" />
            </svg>
          </span>
          <p class="mt-1.5 flex min-h-5 items-center text-[10px] font-medium leading-tight text-[#60796a]">Total members</p>
          <p class="mt-0.5 max-w-full truncate text-sm font-bold leading-tight text-[#163c2c]">—</p>
        </div>
        <div class="flex min-w-0 flex-col items-center px-1.5 text-center">
          <span aria-hidden="true" class="flex h-8 w-8 items-center justify-center rounded-full border border-[#cfe3d2] bg-white text-[#2d6a4f] shadow-[0_3px_8px_rgba(19,70,48,0.10)]">
            <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none">
              <rect x="2" y="4" width="20" height="16" rx="3" fill="currentColor" />
              <path d="M2.5 9h19M15 15h3" stroke="white" stroke-width="1.7" stroke-linecap="round" />
            </svg>
          </span>
          <p class="mt-1.5 flex min-h-5 items-center justify-center text-[10px] font-medium leading-tight text-[#60796a]">Contribution amount</p>
          <p class="mt-0.5 max-w-full truncate text-xs font-bold leading-tight text-[#163c2c]">TZS 1,000,000</p>
        </div>
        <div class="flex min-w-0 flex-col items-center px-1.5 text-center">
          <span aria-hidden="true" class="flex h-8 w-8 items-center justify-center rounded-full border border-[#cfe3d2] bg-white text-[#2d6a4f] shadow-[0_3px_8px_rgba(19,70,48,0.10)]">
            <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none">
              <rect x="3" y="4" width="18" height="18" rx="3" fill="currentColor" />
              <path d="M7 2v5m10-5v5M3 9h18" stroke="white" stroke-width="1.7" stroke-linecap="round" />
            </svg>
          </span>
          <p class="mt-1.5 flex min-h-5 items-center text-[10px] font-medium leading-tight text-[#60796a]">Next Mchezo</p>
          <p class="mt-0.5 max-w-full truncate text-[10px] font-bold leading-tight text-[#163c2c]">To be announced</p>
        </div>
      </div>
    </article>
    <section aria-label="Mchezo schedule" class="relative z-10 mx-3 mb-24 mt-4 overflow-hidden rounded-2xl border border-[#cfe3d2] bg-white p-4 shadow-[0_6px_18px_rgba(19,70,48,0.07)]">
      <div class="space-y-2.5">
        <article class="rounded-xl border border-[#b6d7bb] bg-[#f4faf5] p-3">
          <div class="flex items-center justify-between gap-2">
            <p class="text-xs font-bold text-[#244b31]">Round 1 <span class="font-medium text-[#718578]">· Current round</span></p>
            <span class="shrink-0 rounded-full bg-[#e7f5eb] px-2 py-0.5 text-[9px] font-semibold text-[#2d6a4f]">Current</span>
          </div>
          <div class="mt-2 grid grid-cols-2 gap-x-3 gap-y-1.5 text-[10px]">
            <p class="text-[#718578]">Member</p>
            <p class="text-right font-medium text-[#42604d]">To be announced</p>
            <p class="text-[#718578]">Round date</p>
            <p class="text-right font-medium text-[#42604d]">To be announced</p>
            <p class="text-[#718578]">Payout</p>
            <p class="text-right font-semibold text-[#2d6a4f]">Pending</p>
          </div>
          <div class="mt-3 border-t border-[#dce9df] pt-2">
            <div class="flex items-center justify-between text-[9px]">
              <span class="font-medium text-[#60796a]">Cycle progress</span>
              <span class="font-semibold text-[#2d6a4f]">8% complete</span>
            </div>
            <div aria-label="Cycle progress: 8 percent, Round 1 of 12" class="relative mt-2 h-2.5 overflow-hidden rounded-full bg-[#dce9df] shadow-inner">
              <span class="relative block h-full w-[8%] min-w-[18px] rounded-full bg-gradient-to-r from-[#1f5a3f] via-[#2d8a58] to-[#78c58a] shadow-[0_0_8px_rgba(45,138,88,0.5)]">
                <span aria-hidden="true" class="absolute right-0 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full border border-white bg-[#a5d6a7] shadow-[0_0_5px_rgba(255,255,255,0.9)]"></span>
              </span>
            </div>
          </div>
        </article>
        <article class="rounded-xl border border-[#e5eee7] bg-white p-3">
          <div class="flex items-center justify-between gap-2">
            <p class="text-xs font-semibold text-[#42604d]">Round 2 <span class="font-normal text-[#718578]">· Next round</span></p>
            <span class="shrink-0 text-[9px] font-medium text-[#718578]">Upcoming</span>
          </div>
          <div class="mt-2 grid grid-cols-2 gap-x-3 gap-y-1.5 text-[10px]">
            <p class="text-[#809587]">Member</p>
            <p class="text-right font-medium text-[#60796a]">To be announced</p>
            <p class="text-[#809587]">Round date</p>
            <p class="text-right font-medium text-[#60796a]">To be announced</p>
            <p class="text-[#809587]">Payout</p>
            <p class="text-right font-medium text-[#60796a]">Pending</p>
          </div>
          <div class="mt-3 border-t border-[#e8f0ea] pt-2">
            <div class="flex items-center justify-between text-[9px]">
              <span class="font-medium text-[#718578]">Cycle progress</span>
              <span class="font-semibold text-[#2d6a4f]">17% complete</span>
            </div>
            <div aria-label="Cycle progress: 17 percent, Round 2 of 12" class="relative mt-2 h-2.5 overflow-hidden rounded-full bg-[#e8f0ea] shadow-inner">
              <span class="relative block h-full w-[17%] min-w-[18px] rounded-full bg-gradient-to-r from-[#1f5a3f] via-[#2d8a58] to-[#78c58a] shadow-[0_0_8px_rgba(45,138,88,0.45)]">
                <span aria-hidden="true" class="absolute right-0 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full border border-white bg-[#a5d6a7] shadow-[0_0_5px_rgba(255,255,255,0.9)]"></span>
              </span>
            </div>
          </div>
        </article>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import scheduleBanner from '../../../images/images-mobile-view/my schedule component images/Glossy Teal Wave Banner.png'
import calendarEmblem from '../../../images/images-mobile-view/my schedule component images/Eco Calendar Checkmark Emblem.png'

const copyStatus = ref('')

async function copyGroupId() {
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText('594rei')
    } else {
      copyGroupIdFallback()
    }
    copyStatus.value = ''
  } catch (error) {
    copyStatus.value = 'Copy failed. Please copy the ID manually.'
    console.error('Unable to copy the group ID.', error)
  }
}

function copyGroupIdFallback() {
  const field = document.createElement('textarea')
  field.value = '594rei'
  field.setAttribute('readonly', '')
  field.className = 'fixed left-[-9999px] top-0'
  document.body.appendChild(field)
  field.select()

  try {
    if (!document.execCommand('copy')) {
      throw new Error('The browser rejected the copy command.')
    }
  } finally {
    field.remove()
  }
}
</script>
