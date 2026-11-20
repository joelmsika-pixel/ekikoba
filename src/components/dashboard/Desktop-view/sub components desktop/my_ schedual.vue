<script setup>
const props = defineProps({
  groupName: {
    type: String,
    default: 'Kikoba Group',
  },
  totalMembers: {
    type: Number,
    default: 28,
  },
});
</script>

<template>
  <div class="col-span-2 w-full min-w-0 space-y-4">
    <header class="relative isolate flex flex-wrap items-center justify-between gap-4 overflow-hidden rounded-xl border border-[#dce8df] bg-gradient-to-r from-[#f0f8f1] via-white to-[#f6faf7] px-5 py-4">
      <svg aria-hidden="true" class="pointer-events-none absolute inset-0 h-full w-full text-[#2d6a4f]/[0.03]" viewBox="0 0 520 150" preserveAspectRatio="none" fill="none">
        <defs>
          <pattern id="schedule-network-mesh" width="96" height="78" patternUnits="userSpaceOnUse">
            <path d="M0 20 32 0 64 24 96 7M0 20 16 68 56 49 88 78M32 0 56 49 64 24 88 78M16 68 56 49 96 58" stroke="currentColor" stroke-width="1.5" />
            <g fill="currentColor">
              <circle cx="0" cy="20" r="2.5" /><circle cx="32" cy="0" r="2.5" />
              <circle cx="64" cy="24" r="2.5" /><circle cx="96" cy="7" r="2.5" />
              <circle cx="16" cy="68" r="2.5" /><circle cx="56" cy="49" r="2.5" />
              <circle cx="88" cy="78" r="2.5" /><circle cx="96" cy="58" r="2.5" />
            </g>
          </pattern>
        </defs>
        <rect width="520" height="150" fill="url(#schedule-network-mesh)" />
      </svg>
      <svg aria-hidden="true" class="pointer-events-none absolute right-2 top-0 h-full w-52 text-[#2d6a4f]/55 sm:right-5 sm:w-60" viewBox="0 0 240 150" fill="none">
        <circle cx="177" cy="76" r="43" fill="currentColor" fill-opacity=".12" stroke="currentColor" stroke-width="1.5" />
        <circle cx="177" cy="76" r="60" stroke="currentColor" stroke-opacity=".55" stroke-width="1" />
        <circle cx="177" cy="76" r="72" stroke="currentColor" stroke-opacity=".35" stroke-width="1" />
        <path d="m177 76-43-29m43 29 37-39m-37 39 49 8m-49-8 19 39m-19-39-38 38" stroke="currentColor" stroke-width="1.5" />
        <g fill="#f6faf7" stroke="currentColor" stroke-width="2">
          <circle cx="134" cy="47" r="6" />
          <circle cx="214" cy="37" r="7" />
          <circle cx="226" cy="84" r="5" />
          <circle cx="196" cy="115" r="6" />
          <circle cx="139" cy="114" r="5" />
        </g>
        <circle cx="177" cy="76" r="10" fill="#2d6a4f" fill-opacity=".38" stroke="currentColor" stroke-width="2" />
        <circle cx="177" cy="76" r="3" fill="#2d6a4f" />
      </svg>
      <div class="relative z-10 flex min-w-0 items-center gap-3">
        <span class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#cfe3d2] bg-[#edf6ef] text-[#2d6a4f] shadow-[0_4px_12px_rgba(11,77,56,0.10)]">
          <svg aria-hidden="true" class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <rect x="3" y="5" width="18" height="16" rx="2" /><path d="M16 3v4M8 3v4M3 10h18m3 4h-4m2-2v4" />
          </svg>
        </span>
        <div class="min-w-0">
          <h1 class="text-small font-semibold tracking-tight text-[#163c2c] sm:text-2xl">Mchezo Schedule</h1>
          <p class="mt-1 text-xs text-[#6d8576] sm:text-sm">View your group's Mchezo schedule and stay on track with your contributions.</p>
        </div>
      </div>
      <div class="relative z-10 flex w-full max-w-full flex-wrap items-center gap-3 rounded-lg border border-[#dce8df] bg-white/95 p-2.5 sm:w-auto sm:gap-4 sm:p-3">
        <div class="flex min-w-0 flex-1 items-center gap-3 sm:flex-none">
          <span class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#edf6ef] text-[#2d6a4f]">
            <svg aria-hidden="true" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <path d="m12 3 9 5-9 5-9-5 9-5Z" /><path d="m3 12 9 5 9-5M3 16l9 5 9-5" />
            </svg>
          </span>
          <div class="min-w-0">
            <p class="text-[10px] font-medium uppercase tracking-wide text-[#809587]">Group name</p>
            <p class="max-w-40 truncate text-sm font-semibold text-[#163c2c]" :title="props.groupName">{{ props.groupName }}</p>
          </div>
          <span class="mx-1 hidden h-8 w-px bg-[#e6eee8] sm:block"></span>
          <span class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#edf6ef] text-[#2d6a4f]">
            <svg aria-hidden="true" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="10" cy="7" r="4" /><path d="M20 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </span>
          <div class="shrink-0">
            <p class="text-[10px] font-medium text-[#809587]">Total members</p>
            <p class="text-sm font-bold text-[#163c2c]">{{ props.totalMembers }}</p>
          </div>
        </div>
      </div>
    </header>

    <section aria-label="Schedule summary" class="grid grid-cols-2 gap-3 xl:grid-cols-4">
      <article class="relative isolate flex min-w-0 cursor-pointer items-center gap-3 overflow-hidden rounded-xl border border-[#cfe3d2] bg-gradient-to-br from-white via-white to-[#edf6ef] p-4 shadow-[0_5px_16px_rgba(19,70,48,0.07)]">
        <span aria-hidden="true" class="pointer-events-none absolute -right-6 -top-8 h-24 w-24 rounded-full border border-[#2d6a4f]/10 shadow-[0_0_0_9px_rgba(45,106,79,0.025),0_0_0_18px_rgba(45,106,79,0.02)]"></span>
        <span aria-hidden="true" class="absolute bottom-0 left-0 top-0 w-1 rounded-l-xl bg-[#2d6a4f]"></span>
        <span class="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-[#cfe3d2] bg-white text-[#2d6a4f] shadow-[0_3px_8px_rgba(19,70,48,0.08)]">
          <svg aria-hidden="true" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <rect x="3" y="5" width="18" height="16" rx="2" /><path d="M16 3v4M8 3v4M3 10h18m9 4 2 2 4-4" />
          </svg>
        </span>
        <div class="relative z-10 min-w-0">
          <p class="text-[10px] font-medium text-[#718578]">Total rounds</p>
          <p class="mt-0.5 text-lg font-bold text-[#163c2c]">12</p>
          <p class="text-[10px] text-[#809587]">This cycle</p>
        </div>
      </article>

      <article class="relative isolate flex min-w-0 cursor-pointer items-center gap-3 overflow-hidden rounded-xl border border-[#d7e8db] bg-[#f4faf5] p-4 shadow-[0_4px_14px_rgba(19,70,48,0.06)]">
        <svg aria-hidden="true" class="pointer-events-none absolute -right-2 -top-5 h-24 w-28 text-[#2d6a4f]/[0.07]" viewBox="0 0 112 96" fill="none">
          <path d="M6 78 34 50l20 17 45-49M66 18h33v33" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
          <circle cx="34" cy="50" r="4" fill="currentColor" /><circle cx="54" cy="67" r="4" fill="currentColor" />
        </svg>
        <span class="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#e4f1e6] text-[#2d6a4f] ring-4 ring-white/80">
          <svg aria-hidden="true" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 10h18M7 15h3" />
          </svg>
        </span>
        <div class="relative z-10 min-w-0">
          <p class="text-[10px] font-medium text-[#718578]">Contribution amount</p>
          <p class="mt-0.5 truncate text-lg font-bold text-[#163c2c]">TZS 1,000,000</p>
          <p class="text-[10px] text-[#809587]">Per round</p>
        </div>
      </article>

      <article class="relative isolate flex min-w-0 cursor-pointer items-center gap-3 overflow-hidden rounded-xl border border-[#dce8df] bg-white p-4 shadow-[0_3px_12px_rgba(19,70,48,0.05)]">
        <span aria-hidden="true" class="pointer-events-none absolute -right-3 -top-3 h-16 w-16 rounded-full bg-[#edf6ef]"></span>
        <span class="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#dce8df] bg-[#f5faf6] text-[#2d6a4f] shadow-[inset_0_-3px_0_rgba(45,106,79,0.08)]">
          <svg aria-hidden="true" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" />
          </svg>
        </span>
        <div class="relative z-10 min-w-0">
          <p class="text-[10px] font-medium text-[#718578]">Next Mchezo</p>
          <p class="mt-0.5 text-base font-bold text-[#163c2c]">05 Oct 2025</p>
          <p class="text-[10px] text-[#809587]">In 3 days</p>
        </div>
      </article>

      <article class="relative isolate flex min-w-0 cursor-pointer items-center gap-3 overflow-hidden rounded-xl border border-[#b6d7bb] bg-gradient-to-br from-[#f6fbf7] to-[#eaf5eb] p-4 shadow-[0_5px_16px_rgba(19,70,48,0.07)]">
        <span aria-hidden="true" class="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#2d6a4f] via-[#80b58c] to-[#cfe3d2]"></span>
        <span aria-hidden="true" class="pointer-events-none absolute -right-4 -top-6 h-20 w-20 rounded-full border border-[#2d6a4f]/10 shadow-[0_0_0_8px_rgba(45,106,79,0.025)]"></span>
        <span class="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#b6d7bb] bg-white text-[#2d6a4f] shadow-sm">
          <svg aria-hidden="true" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <ellipse cx="12" cy="6" rx="8" ry="3" /><path d="M4 6v5c0 1.66 3.58 3 8 3 1.17 0 2.28-.1 3.27-.29M4 11v5c0 1.66 3.58 3 8 3 .72 0 1.42-.04 2.08-.12M20 11v5M4 16v2c0 1.66 3.58 3 8 3 .57 0 1.13-.03 1.66-.08M20 6v5c0 1.66-3.58 3-8 3" /><circle cx="19" cy="18" r="3" />
          </svg>
        </span>
        <div class="relative z-10 min-w-0">
          <p class="text-[10px] font-medium text-[#718578]">Current status</p>
          <span class="mt-1 inline-flex rounded-full bg-[#e7f5eb] px-2.5 py-1 text-[10px] font-semibold text-[#168456]">Active</span>
          <p class="mt-1 text-[10px] text-[#809587]">Cycle 1 of 12</p>
        </div>
      </article>
    </section>

  </div>
</template>