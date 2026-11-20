<template>
  <main class="min-h-screen bg-[#f3f8f6] pb-6 text-[#153d3d]">
    <header class="relative h-[184px] overflow-hidden rounded-b-[30px] bg-gradient-to-br from-[#073e46] via-[#075b55] to-[#087052] text-white">
      <span aria-hidden="true" class="pointer-events-none absolute -right-10 -top-20 h-56 w-56 rounded-full bg-[#1ea66d]/25"></span>
      <span aria-hidden="true" class="pointer-events-none absolute right-12 -top-24 h-52 w-52 rotate-[-28deg] rounded-[42px] bg-[#0b765e]/45"></span>
      <span aria-hidden="true" class="pointer-events-none absolute right-[22%] top-12 h-36 w-36 rounded-full bg-gradient-to-br from-[#1fd06f]/50 to-transparent blur-[1px]"></span>
      <div class="relative z-10 mx-auto max-w-lg px-5 pt-5">
        <div class="flex items-center justify-between">
          <RouterLink to="/dashboard-mobile" aria-label="Back to dashboard" class="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
            <svg aria-hidden="true" class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </RouterLink>
          <div class="flex items-center gap-2 text-sm font-semibold tabular-nums text-white/90">
            <span class="h-2 w-2 rounded-full bg-[#73e6a1]"></span>
            {{ timeNow }}
          </div>
          <button type="button" aria-label="Notifications, 3 unread" class="relative flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
            <svg aria-hidden="true" class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4" />
            </svg>
            <span class="absolute right-0.5 top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#f15b55] px-1 text-[9px] font-bold">3</span>
          </button>
        </div>
        <div class="mt-4">
          <h1 class="text-[27px] font-extrabold leading-none tracking-tight">My <span class="text-[#56d77c]">Mchezo</span></h1>
          <p class="mt-1.5 text-sm font-medium tracking-wide text-white/70">Together We Grow</p>
        </div>
      </div>
    </header>

    <div class="relative z-10 mx-auto -mt-7 flex max-w-lg flex-col gap-3.5 px-4 sm:px-5">
      <section id="group-information" aria-label="Mchezo group" class="relative isolate flex h-[140px] overflow-hidden rounded-[22px] border border-white bg-[#075b4d] shadow-[0_8px_24px_rgba(9,74,60,0.18)]">
        <div aria-hidden="true" class="absolute inset-0 -z-10 bg-gradient-to-br from-[#147943] via-[#075b4d] to-[#003f42]"></div>
        <span aria-hidden="true" class="pointer-events-none absolute -left-7 -top-8 -z-10 h-40 w-40 rounded-full border-[18px] border-[#73d96e]/20"></span>
        <span aria-hidden="true" class="pointer-events-none absolute bottom-[-80px] left-[28%] -z-10 h-48 w-48 rotate-45 bg-[#20a45b]/35"></span>
        <div class="relative z-20 flex w-[56%] flex-col justify-center px-4 text-white">
          <div class="mb-2 flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#81e86e] bg-white/10 text-white shadow-[0_0_16px_rgba(129,232,110,0.2)]">
            <svg aria-hidden="true" class="h-7 w-7" viewBox="0 0 24 24" fill="currentColor">
              <path d="M9 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm6.5 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM9 13c-3.3 0-6 1.7-6 3.8V19h12v-2.2C15 14.7 12.3 13 9 13Zm6.5 0c-.5 0-1 .1-1.5.2 1.2.8 2 2 2 3.6V19h5v-2c0-2.2-2.5-4-5.5-4Z" />
            </svg>
          </div>
          <h2 class="truncate text-[15px] font-bold leading-tight">My Mchezo Group</h2>
          <div class="mt-1 flex items-center gap-1 text-[10px] font-medium text-white/80">
            <span class="truncate">Group ID: 594rei</span>
            <button type="button" aria-label="Copy group ID" class="flex h-6 w-6 shrink-0 items-center justify-center rounded-md text-white/90 hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-white" @click="copyGroupId">
              <svg aria-hidden="true" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <rect x="8" y="8" width="12" height="12" rx="2" />
                <path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" />
              </svg>
            </button>
          </div>
          <span class="mt-1.5 inline-flex w-fit items-center gap-1.5 rounded-full bg-[#e6f8ed] px-2.5 py-1 text-[10px] font-semibold text-[#176b4d]">
            <span class="h-1.5 w-1.5 rounded-full bg-[#4fc478]"></span>Active
          </span>
          <p v-if="copyStatus" role="status" class="absolute bottom-1 left-4 text-[9px] text-white">{{ copyStatus }}</p>
        </div>
        <div aria-hidden="true" class="absolute inset-y-0 right-0 w-[59%] overflow-hidden">
          <img :src="familyGroupImage" alt="" class="h-full w-full object-cover object-[72%_center]" />
          <div class="absolute inset-0 bg-gradient-to-r from-[#075b4d] via-[#075b4d]/35 to-transparent"></div>
        </div>
      </section>

      <section id="group-summary" aria-label="Group summary" class="grid grid-cols-3 divide-x divide-[#d8e9e4] rounded-[18px] border border-[#dfede8] bg-white px-1 py-3.5 shadow-[0_4px_14px_rgba(16,71,63,0.05)]">
        <div class="flex min-w-0 flex-col items-center px-1 text-center">
          <span class="flex h-9 w-9 items-center justify-center rounded-full bg-[#e6f6ed] text-[#08734f]">
            <svg aria-hidden="true" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <ellipse cx="12" cy="5" rx="7.5" ry="3" /><path d="M4.5 5v5c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3V5M4.5 10v5c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3v-5M4.5 15v4c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3v-4" />
            </svg>
          </span>
          <p class="mt-1.5 text-[10px] leading-tight text-[#6b8586]">Contribution<br />Amount</p>
          <p class="mt-1 text-[17px] font-extrabold tabular-nums text-[#0b4549]">TSh 0</p>
        </div>
        <div class="flex min-w-0 flex-col items-center px-1 text-center" id="group-members">
          <span class="flex h-9 w-9 items-center justify-center rounded-full bg-[#e6f6ed] text-[#08734f]">
            <svg aria-hidden="true" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2m16 0v-2a4 4 0 0 0-3-3.9M14 3.1a4 4 0 0 1 0 7.8" /><circle cx="10" cy="7" r="4" />
            </svg>
          </span>
          <p class="mt-1.5 text-[10px] leading-tight text-[#6b8586]">Total Members</p>
          <p class="mt-1 text-[17px] font-extrabold tabular-nums text-[#0b4549]">0</p>
        </div>
        <div class="flex min-w-0 flex-col items-center px-1 text-center">
          <span class="flex h-9 w-9 items-center justify-center rounded-full bg-[#e6f6ed] text-[#08734f]">
            <svg aria-hidden="true" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">
              <rect x="3.5" y="5" width="17" height="16" rx="2" /><path d="M7.5 3v4M16.5 3v4M3.5 9h17M8 13h3M8 17h5" />
            </svg>
          </span>
          <p class="mt-1.5 text-[10px] leading-tight text-[#6b8586]">Current Round</p>
          <p class="mt-1 text-[15px] font-extrabold text-[#0b4549]">Not set</p>
        </div>
      </section>

      <section aria-label="Group actions" class="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
        <a href="#contribution-summary" class="group flex min-h-[112px] flex-col rounded-[17px] border border-[#087052] bg-gradient-to-br from-[#087052] to-[#064b51] p-3 text-white shadow-[0_5px_13px_rgba(7,91,77,0.14)] transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#087052]">
          <span class="flex h-9 w-9 items-center justify-center rounded-full border border-white/40 bg-white/10">
            <svg aria-hidden="true" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="7.5" ry="3" /><path d="M4.5 5v5c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3V5m-15 5v5c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3v-5" /></svg>
          </span>
          <span class="mt-2 text-xs font-bold leading-tight">Make Contribution</span>
          <span class="mt-1 text-[10px] leading-tight text-white/70">Join and support your group</span>
        </a>
        <a href="#payout-summary" class="group flex min-h-[112px] flex-col rounded-[17px] border border-[#dcece6] bg-white p-3 shadow-[0_4px_12px_rgba(16,71,63,0.04)] transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#087052]">
          <span class="flex h-9 w-9 items-center justify-center rounded-full border border-[#ccebd9] bg-[#eaf8ef] text-[#078253]">
            <svg aria-hidden="true" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="7" width="16" height="14" rx="2" /><path d="M8 7V4h8v3m-8 7h8m-4-3v6" /><circle cx="12" cy="14" r="1" /></svg>
          </span>
          <span class="mt-2 text-xs font-bold leading-tight text-[#124a50]">View Payouts</span>
          <span class="mt-1 text-[10px] leading-tight text-[#718a8c]">See your payout history</span>
        </a>
        <a href="#group-members" class="group flex min-h-[112px] flex-col rounded-[17px] border border-[#dcece6] bg-white p-3 shadow-[0_4px_12px_rgba(16,71,63,0.04)] transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#087052]">
          <span class="flex h-9 w-9 items-center justify-center rounded-full border border-[#ccebd9] bg-[#eaf8ef] text-[#078253]">
            <svg aria-hidden="true" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2m16 0v-2a4 4 0 0 0-3-3.9M14 3.1a4 4 0 0 1 0 7.8" /><circle cx="10" cy="7" r="4" /></svg>
          </span>
          <span class="mt-2 text-xs font-bold leading-tight text-[#124a50]">Group Members</span>
          <span class="mt-1 text-[10px] leading-tight text-[#718a8c]">View all members</span>
        </a>
        <RouterLink to="/mchezo-schedule-mobile" class="group flex min-h-[112px] flex-col rounded-[17px] border border-[#cfe9dc] bg-gradient-to-br from-[#f0faf4] to-white p-3 shadow-[0_4px_12px_rgba(16,71,63,0.04)] transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#087052]">
          <span class="flex h-9 w-9 items-center justify-center rounded-full border border-[#ccebd9] bg-[#e4f6eb] text-[#087650]">
            <svg aria-hidden="true" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="3.5" y="5" width="17" height="16" rx="2" /><path d="M7.5 3v4M16.5 3v4M3.5 9h17M8 13h3M8 17h5" /></svg>
          </span>
          <span class="mt-2 text-xs font-bold leading-tight text-[#087052]">Mchezo Schedule</span>
          <span class="mt-1 text-[10px] leading-tight text-[#718a8c]">View rounds and dates</span>
        </RouterLink>
        <a href="#group-information" class="group flex min-h-[112px] flex-col rounded-[17px] border border-[#d8e1ff] bg-gradient-to-br from-[#f3f5ff] to-white p-3 shadow-[0_4px_12px_rgba(48,68,132,0.04)] transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#465bab]">
          <span class="flex h-9 w-9 items-center justify-center rounded-full border border-[#d8c6ff] bg-[#f1e9ff] text-[#793cca]">
            <svg aria-hidden="true" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3h9l4 4v14H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" /><path d="M14 3v5h5M8 13h8M8 17h6" /></svg>
          </span>
          <span class="mt-2 text-xs font-bold leading-tight text-[#174c73]">Group Information</span>
          <span class="mt-1 text-[10px] leading-tight text-[#718a8c]">Group details and rules</span>
        </a>
        <a href="#group-information" class="group flex min-h-[112px] flex-col rounded-[17px] border border-[#f5dfd1] bg-gradient-to-br from-[#fff7f1] to-white p-3 shadow-[0_4px_12px_rgba(120,72,37,0.04)] transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c55a37]">
          <span class="flex h-9 w-9 items-center justify-center rounded-full border border-[#ffddc6] bg-[#fff0e6] text-[#c25432]">
            <svg aria-hidden="true" class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="m19.4 13.5 1.4 1.1-1.5 2.6-1.7-.7a7.8 7.8 0 0 1-1.8 1l-.3 1.8h-3l-.3-1.8a7.8 7.8 0 0 1-1.8-1l-1.7.7-1.5-2.6 1.4-1.1a7.5 7.5 0 0 1 0-2l-1.4-1.1 1.5-2.6 1.7.7a7.8 7.8 0 0 1 1.8-1l.3-1.8h3l.3 1.8a7.8 7.8 0 0 1 1.8 1l1.7-.7 1.5 2.6-1.4 1.1a7.5 7.5 0 0 1 0 2ZM14 15.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" /></svg>
          </span>
          <span class="mt-2 text-xs font-bold leading-tight text-[#124a50]">Settings</span>
          <span class="mt-1 text-[10px] leading-tight text-[#718a8c]">Manage your group</span>
        </a>
      </section>

      <section id="contribution-summary" aria-label="Total contribution" class="overflow-hidden rounded-[18px] border border-[#cce9d5] bg-white shadow-[0_4px_13px_rgba(16,71,63,0.05)]">
        <div class="relative flex items-center justify-between overflow-hidden bg-gradient-to-r from-[#91d993] via-[#d7f4d9] to-[#b4ebc1] px-4 py-3">
          <span aria-hidden="true" class="absolute -right-5 -top-12 h-28 w-28 rounded-full border-[14px] border-white/20"></span>
          <div class="relative z-10 flex min-w-0 items-center gap-3">
            <span class="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#075b4d] text-[#93e59f]">
              <svg aria-hidden="true" class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><circle cx="12" cy="12" r="9" /><path d="M12 3a9 9 0 0 1 8.5 6M20.5 9 17 10m-5 11a9 9 0 0 1-8.5-6M3.5 15 7 14" /></svg>
            </span>
            <div class="min-w-0">
              <h2 class="truncate text-sm font-extrabold text-[#104b44]">Total Contribution</h2>
              <p class="mt-0.5 text-[10px] text-[#397263]">All members combined</p>
            </div>
          </div>
          <div class="relative z-10 shrink-0 text-right">
            <p class="text-lg font-extrabold tabular-nums text-[#0b5149]">TSh 0</p>
            <span class="inline-flex items-center gap-1 rounded-full bg-white/80 px-2 py-0.5 text-[9px] font-semibold text-[#176b4d]">
              <svg aria-hidden="true" class="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3.5" y="5" width="17" height="16" rx="2" /><path d="M7.5 3v4M16.5 3v4M3.5 9h17" /></svg>
              This cycle
            </span>
          </div>
        </div>
        <div id="payout-summary" class="grid grid-cols-3 divide-x divide-[#e1ece8] px-1 py-3">
          <div class="flex min-w-0 flex-col items-center px-1 text-center">
            <span class="flex h-8 w-8 items-center justify-center rounded-full bg-[#e6f6ed] text-[#08734f]">
              <svg aria-hidden="true" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v18m6-14H9a3 3 0 0 0 0 6h6a3 3 0 0 1 0 6H5" /><path d="m8 17-3 2 3 2" /></svg>
            </span>
            <p class="mt-1.5 text-[9px] leading-tight text-[#6b8586]">Total Payout Received</p>
            <p class="mt-1 text-xs font-bold text-[#124a50]">TSh 0</p>
          </div>
          <div class="flex min-w-0 flex-col items-center px-1 text-center">
            <span class="flex h-8 w-8 items-center justify-center rounded-full bg-[#e6f6ed] text-[#08734f]">
              <svg aria-hidden="true" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
            </span>
            <p class="mt-1.5 text-[9px] leading-tight text-[#6b8586]">Next Payout</p>
            <p class="mt-1 text-xs font-bold text-[#124a50]">Not set</p>
          </div>
          <div class="flex min-w-0 flex-col items-center px-1 text-center">
            <span class="flex h-8 w-8 items-center justify-center rounded-full bg-[#e6f6ed] text-[#08734f]">
              <svg aria-hidden="true" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3.5" y="5" width="17" height="16" rx="2" /><path d="M7.5 3v4M16.5 3v4M3.5 9h17M8 13h3M8 17h5" /></svg>
            </span>
            <p class="mt-1.5 text-[9px] leading-tight text-[#6b8586]">Next Contribution Due</p>
            <p class="mt-1 text-xs font-bold text-[#124a50]">Not set</p>
          </div>
        </div>
      </section>

      <section aria-label="Recent activity" class="rounded-[18px] border border-[#dfede8] bg-white p-3.5 shadow-[0_4px_13px_rgba(16,71,63,0.04)]">
        <div class="flex items-center justify-between">
          <h2 class="flex items-center gap-2 text-xs font-bold text-[#124a50]">
            <span class="flex h-7 w-7 items-center justify-center rounded-full bg-[#e6f6ed] text-[#08734f]">
              <svg aria-hidden="true" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
            </span>
            Recent Activity
          </h2>
          <a href="#group-summary" class="inline-flex items-center gap-1 text-[10px] font-semibold text-[#087052] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#087052]">View all <span aria-hidden="true">›</span></a>
        </div>
        <div class="mt-2.5 flex items-center gap-3 rounded-xl bg-[#f4f9f7] px-3 py-3">
          <span class="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#e6f6ed] text-[#08734f]">
            <svg aria-hidden="true" class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3h9l4 4v14H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" /><path d="M14 3v5h5M8 13h8M8 17h8" /></svg>
          </span>
          <div>
            <p class="text-[11px] font-semibold text-[#245b5d]">No recent activity yet</p>
            <p class="mt-1 text-[10px] leading-snug text-[#718a8c]">Your contributions and payouts will appear here.</p>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import familyGroupImage from '../../../images/images-mobile-view/my mchezo component images/family group.png'

const timeNow = ref(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }))
const copyStatus = ref('')
let clockInterval

onMounted(() => {
  clockInterval = window.setInterval(() => {
    timeNow.value = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  }, 60_000)
})

onBeforeUnmount(() => window.clearInterval(clockInterval))

async function copyGroupId() {
  try {
    if (!navigator.clipboard?.writeText) {
      throw new Error('Clipboard access is unavailable.')
    }

    await navigator.clipboard.writeText('594rei')
    copyStatus.value = 'Group ID copied'
    window.setTimeout(() => {
      copyStatus.value = ''
    }, 2000)
  } catch (error) {
    copyStatus.value = 'Unable to copy group ID'
    console.error('Unable to copy the group ID.', error)
  }
}
</script>
