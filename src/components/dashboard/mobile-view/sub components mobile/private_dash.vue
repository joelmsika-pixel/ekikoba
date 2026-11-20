<template>
  <div class="relative z-10 mx-auto -mt-1 grid h-[calc(100dvh-14rem)] max-w-lg grid-rows-[1.05fr_1.35fr_1.1fr_0.85fr] gap-2 px-4 sm:mt-4 sm:h-auto sm:grid-rows-none sm:gap-4 sm:px-5">
    <article aria-label="Cash contribution" class="relative isolate min-h-0 overflow-hidden rounded-[20px] border border-white/15 bg-gradient-to-br from-[#087052] via-[#075b55] to-[#06464c] p-3 text-white shadow-[0_10px_25px_rgba(7,74,67,0.18)] sm:rounded-[22px] sm:p-4">
      <span aria-hidden="true" class="pointer-events-none absolute right-[-32px] top-[-56px] -z-10 h-40 w-40 rounded-full border-[18px] border-[#9be9b5]/10"></span>
      <span aria-hidden="true" class="pointer-events-none absolute bottom-[-64px] right-20 -z-10 h-36 w-36 rotate-45 bg-[#2ba86b]/20"></span>
      <div class="relative z-10 flex items-center justify-between gap-3">
        <div class="flex min-w-0 items-center gap-3">
          <span class="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-[#9bf0b3] sm:h-11 sm:w-11 sm:rounded-2xl">
            <svg aria-hidden="true" class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <path d="M3 7h18M5 7V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v2M5 7v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7" />
              <path d="M9 12h6M9 16h4" />
            </svg>
          </span>
          <div class="min-w-0">
            <p class="text-[9px] font-semibold uppercase tracking-[0.15em] text-white/65 sm:text-[10px]">Cash contribution</p>
            <h2 class="mt-0.5 truncate text-xs font-bold text-white sm:mt-1 sm:text-sm">Total savings</h2>
          </div>
        </div>
      </div>
      <div class="relative z-10 mt-2 flex items-end justify-between gap-4 sm:mt-4">
        <p class="text-[23px] font-extrabold leading-none tracking-tight tabular-nums sm:text-[28px]">TSh 0</p>
        <p class="pb-0.5 text-right text-[9px] leading-snug text-white/65 sm:text-[10px]">Contributions<br />from your group</p>
      </div>
      <div class="relative z-10 mt-2 h-1 overflow-hidden rounded-full bg-black/15 sm:mt-4 sm:h-1.5">
        <span class="block h-full w-[8%] rounded-full bg-gradient-to-r from-[#82e5a1] to-[#c3f4bb]"></span>
      </div>
    </article>

    <section aria-label="Dashboard highlights" class="grid min-h-0 grid-cols-2 grid-rows-2 gap-2">
      <article class="flex min-h-0 items-center gap-2 rounded-[15px] border border-[#dfede8] bg-white p-2.5 shadow-[0_4px_12px_rgba(16,71,63,0.04)] sm:min-h-[92px] sm:gap-3 sm:rounded-[17px] sm:p-3">
        <span class="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#e8f7ed] text-[#08734f] sm:h-10 sm:w-10 sm:rounded-xl">
          <svg aria-hidden="true" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9" /><path d="M12 8v8M8 12h8" /></svg>
        </span>
        <div class="min-w-0">
          <h2 class="text-[11px] font-bold leading-tight text-[#194e4f] sm:text-xs">Contribution</h2>
          <p class="mt-0.5 text-[9px] leading-tight text-[#788e8d] sm:mt-1 sm:text-[10px]">Make a payment</p>
        </div>
      </article>
      <article class="flex min-h-0 items-center gap-2 rounded-[15px] border border-[#dfede8] bg-white p-2.5 shadow-[0_4px_12px_rgba(16,71,63,0.04)] sm:min-h-[92px] sm:gap-3 sm:rounded-[17px] sm:p-3">
        <span class="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#e8f7ed] text-[#08734f] sm:h-10 sm:w-10 sm:rounded-xl">
          <svg aria-hidden="true" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M16 20v-1.5a3.5 3.5 0 0 0-3.5-3.5h-5A3.5 3.5 0 0 0 4 18.5V20" /><circle cx="10" cy="7.5" r="3.5" /><path d="M17 11a3.5 3.5 0 0 0 0-7M20 20v-1.5a3.5 3.5 0 0 0-2.5-3.35" /></svg>
        </span>
        <div class="min-w-0">
          <h2 class="text-[11px] font-bold leading-tight text-[#194e4f] sm:text-xs">Members</h2>
          <p class="mt-0.5 text-[9px] leading-tight text-[#788e8d] sm:mt-1 sm:text-[10px]">Your group</p>
        </div>
      </article>
      <article class="flex min-h-0 items-center gap-2 rounded-[15px] border border-[#dfede8] bg-white p-2.5 shadow-[0_4px_12px_rgba(16,71,63,0.04)] sm:min-h-[92px] sm:gap-3 sm:rounded-[17px] sm:p-3">
        <span class="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#e8f7ed] text-[#08734f] sm:h-10 sm:w-10 sm:rounded-xl">
          <svg aria-hidden="true" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 10h18M7 15h3" /></svg>
        </span>
        <div class="min-w-0">
          <h2 class="text-[11px] font-bold leading-tight text-[#194e4f] sm:text-xs">Payments</h2>
          <p class="mt-0.5 text-[9px] leading-tight text-[#788e8d] sm:mt-1 sm:text-[10px]">Track transactions</p>
        </div>
      </article>
      <article class="flex min-h-0 items-center gap-2 rounded-[15px] border border-[#dfede8] bg-white p-2.5 shadow-[0_4px_12px_rgba(16,71,63,0.04)] sm:min-h-[92px] sm:gap-3 sm:rounded-[17px] sm:p-3">
        <span class="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#fff3e8] text-[#c66a38] sm:h-10 sm:w-10 sm:rounded-xl">
          <svg aria-hidden="true" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3h9l4 4v14H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" /><path d="M14 3v5h5M8 13h8M8 17h5" /></svg>
        </span>
        <div class="min-w-0">
          <h2 class="text-[11px] font-bold leading-tight text-[#194e4f] sm:text-xs">Fines</h2>
          <p class="mt-0.5 text-[9px] leading-tight text-[#788e8d] sm:mt-1 sm:text-[10px]">Group charges</p>
        </div>
      </article>
    </section>

    <article id="round-overview" aria-label="Round overview" class="flex min-h-0 flex-col overflow-hidden rounded-[16px] border border-[#dfede8] bg-white shadow-[0_4px_14px_rgba(16,71,63,0.05)] sm:rounded-[18px]">
      <div class="flex items-center justify-between px-3 py-2 sm:px-4 sm:py-3.5">
        <div>
          <p class="text-[9px] font-semibold uppercase tracking-[0.15em] text-[#819493] sm:text-[10px]">Mchezo progress</p>
          <h2 class="mt-0.5 text-sm font-bold text-[#17484a] sm:mt-1 sm:text-base">Round overview</h2>
        </div>
        <span class="flex h-8 w-8 items-center justify-center rounded-lg bg-[#e8f7ed] text-[#08734f] sm:h-9 sm:w-9 sm:rounded-xl">
          <svg aria-hidden="true" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9" /><path d="M8 12h8M12 8v8" /></svg>
        </span>
      </div>
      <div class="mx-4 h-px bg-[#edf3f0]"></div>
      <div class="grid flex-1 grid-cols-3 divide-x divide-[#e7efec] px-1 py-2 text-center sm:py-3.5">
        <div class="flex flex-col justify-center px-1"><p class="text-[9px] text-[#819493] sm:text-[10px]">Current</p><p class="mt-0.5 text-[11px] font-bold text-[#17484a] sm:mt-1 sm:text-xs">Not set</p></div>
        <div class="flex flex-col justify-center px-1"><p class="text-[9px] text-[#819493] sm:text-[10px]">Next</p><p class="mt-0.5 text-[11px] font-bold text-[#17484a] sm:mt-1 sm:text-xs">Not set</p></div>
        <div class="flex flex-col justify-center px-1"><p class="text-[9px] text-[#819493] sm:text-[10px]">Following</p><p class="mt-0.5 text-[11px] font-bold text-[#17484a] sm:mt-1 sm:text-xs">Not set</p></div>
      </div>
      <div class="flex items-center justify-between border-t border-[#edf3f0] bg-[#f8fbfa] px-3 py-1.5 sm:px-4 sm:py-2.5">
        <span class="text-[9px] font-medium tracking-wide text-[#819493] sm:text-[10px]">GROUP ID</span>
        <span class="text-[11px] font-bold tracking-wide text-[#176b55] sm:text-xs">Not assigned</span>
      </div>
    </article>

    <article id="recent-contributions" aria-label="Recent contributions" class="scroll-mt-20 flex min-h-0 flex-col overflow-hidden rounded-[16px] border border-[#dfede8] bg-white p-3 shadow-[0_4px_14px_rgba(16,71,63,0.05)] sm:rounded-[18px] sm:p-4">
      <div class="flex items-center justify-between">
        <div>
          <p class="text-[9px] font-semibold uppercase tracking-[0.14em] text-[#819493] sm:text-[10px]">Activity</p>
          <h2 class="mt-0.5 text-xs font-bold text-[#17484a] sm:mt-1 sm:text-sm">Recent contributions</h2>
        </div>
        <span class="flex h-8 w-8 items-center justify-center rounded-lg bg-[#e8f7ed] text-[#08734f] sm:h-9 sm:w-9 sm:rounded-xl">
          <svg aria-hidden="true" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
        </span>
      </div>
      <ul v-if="recentContributions.length" class="mt-3 divide-y divide-[#edf3f0]">
        <li v-for="contribution in recentContributions" :key="contribution.id" class="flex items-center justify-between gap-3 py-3 first:pt-0 last:pb-0">
          <div class="min-w-0">
            <p class="truncate text-xs font-semibold text-[#17484a]">{{ contribution.memberName }}</p>
            <p class="mt-1 text-[10px] text-[#819493]">Paid contribution · {{ contribution.paidAt }}</p>
          </div>
          <span class="shrink-0 text-xs font-bold text-[#08734f]">TSh {{ contribution.amount }}</span>
        </li>
      </ul>
      <div v-else class="mt-2 flex min-h-0 flex-1 items-center gap-2 rounded-xl bg-[#f6faf8] p-2 sm:mt-3 sm:gap-3 sm:p-3">
        <span class="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white text-[#4c9380] shadow-sm sm:h-10 sm:w-10 sm:rounded-xl">
          <svg aria-hidden="true" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3h9l4 4v14H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" /><path d="M14 3v5h5M8 13h8M8 17h8" /></svg>
        </span>
        <p class="text-[9px] leading-snug text-[#718887] sm:text-[11px] sm:leading-relaxed">When a member contributes, their payment details will appear here.</p>
      </div>
    </article>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const recentContributions = ref([])
</script>
