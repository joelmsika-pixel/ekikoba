<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue';

const props = defineProps({
  loadMembers: {
    type: Function,
    default: null,
  },
});

const members = ref([]);
const isLoadingMembers = ref(false);
const memberLoadError = ref('');
let refreshTimer;
let isRefreshing = false;

async function refreshMembers() {
  if (!props.loadMembers || isRefreshing) return;

  isRefreshing = true;
  isLoadingMembers.value = true;
  memberLoadError.value = '';

  try {
    const result = await props.loadMembers();
    if (!Array.isArray(result)) {
      throw new TypeError('The member loader must return an array.');
    }
    members.value = result;
  } catch (error) {
    memberLoadError.value = error instanceof Error ? error.message : 'Unable to load group members.';
  } finally {
    isRefreshing = false;
    isLoadingMembers.value = false;
  }
}

onMounted(() => {
  if (!props.loadMembers) return;

  refreshMembers();
  refreshTimer = window.setInterval(refreshMembers, 30000);
});

onBeforeUnmount(() => {
  if (refreshTimer) window.clearInterval(refreshTimer);
});
</script>

<template>
  <div class="grid min-w-0 grid-cols-[minmax(0,1fr)_220px] gap-4 pl-8">
    <div class="min-w-0 space-y-4">
      <div
        class="relative isolate h-[170px] min-w-0 overflow-hidden rounded-2xl border border-transparent bg-white p-4 shadow-[0_4px_12px_rgba(19,70,48,0.06)]"
      >
        <svg aria-hidden="true" class="pointer-events-none absolute inset-0 z-[1] block h-full w-full opacity-10" viewBox="0 0 800 240" preserveAspectRatio="none" fill="none">
          <defs>
            <pattern id="mchezo-network" width="64" height="48" patternUnits="userSpaceOnUse">
              <g stroke="#5b9b6b" stroke-width="0.8">
                <path d="M0 12 20 0 42 14 64 4M0 12 12 38 34 28 54 48M20 0 34 28 42 14 54 48M12 38 34 28 64 36" />
              </g>
              <g fill="#6da97a">
                <circle cx="0" cy="12" r="1.8" /><circle cx="20" cy="0" r="1.8" />
                <circle cx="42" cy="14" r="1.8" /><circle cx="64" cy="4" r="1.8" />
                <circle cx="12" cy="38" r="1.8" /><circle cx="34" cy="28" r="1.8" />
                <circle cx="54" cy="48" r="1.8" /><circle cx="64" cy="36" r="1.8" />
              </g>
            </pattern>
          </defs>
          <rect width="800" height="240" fill="url(#mchezo-network)" />
        </svg>
        <div class="relative z-10 flex items-center gap-3">
          <span class="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#cfe3d2] bg-gradient-to-br from-white to-[#e4f1e6] text-[#2d6a4f] ring-4 ring-[#eaf5eb]/55">
            <svg aria-hidden="true" class="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <path d="M16 20v-1.5a3.5 3.5 0 0 0-3.5-3.5h-5A3.5 3.5 0 0 0 4 18.5V20" />
              <circle cx="10" cy="7.5" r="3.5" />
              <path d="M17 11a3.5 3.5 0 0 0 0-7M20 20v-1.5a3.5 3.5 0 0 0-2.5-3.35" />
            </svg>
          </span>
          <div>
            <h2 class="text-xl font-semibold tracking-[-0.025em] text-[#163c2c]">My Mchezo Group</h2>
            <p class="mt-0.5 text-[10px] font-medium text-[#63796b]">Group ID: Not set</p>
          </div>
        </div>

        <section aria-label="Mchezo group details" class="relative z-10 mt-12 grid grid-cols-2 gap-x-2 gap-y-1.5 pr-24 xl:grid-cols-[145px_120px_130px] xl:gap-x-3">
          <article class="flex min-w-0 items-center gap-2 py-1 pl-2">
            <span aria-hidden="true" class="h-8 w-0.5 shrink-0 rounded-full bg-[#2d6a4f]"></span>
            <span class="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#edf6ef] text-[#2d6a4f]">
              <svg aria-hidden="true" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="M3 10h18M7 15h3" />
              </svg>
            </span>
            <div class="min-w-0">
              <p class="whitespace-nowrap text-[9px] font-medium leading-tight tracking-normal text-[#63796b]">Contribution Amount</p>
              <p class="mt-0.5 truncate text-xs font-bold leading-tight tabular-nums text-[#163c2c]">TSh 0</p>
            </div>
          </article>
          <article class="flex min-w-0 items-center gap-2 py-1 pl-2">
            <span aria-hidden="true" class="h-8 w-0.5 shrink-0 rounded-full bg-[#2d6a4f]"></span>
            <span class="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#edf6ef] text-[#2d6a4f]">
              <svg aria-hidden="true" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <path d="M16 20v-1.5a3.5 3.5 0 0 0-3.5-3.5h-5A3.5 3.5 0 0 0 4 18.5V20" />
                <circle cx="10" cy="7.5" r="3.5" />
                <path d="M17 11a3.5 3.5 0 0 0 0-7M20 20v-1.5a3.5 3.5 0 0 0-2.5-3.35" />
              </svg>
            </span>
            <div class="min-w-0">
              <p class="whitespace-nowrap text-[10px] font-medium leading-tight text-[#63796b]">Total Members</p>
              <p class="mt-0.5 truncate text-xs font-bold leading-tight tabular-nums text-[#163c2c]">{{ members.length }}</p>
            </div>
          </article>
          <article class="flex min-w-0 items-center gap-2 py-1 pl-2">
            <span aria-hidden="true" class="h-8 w-0.5 shrink-0 rounded-full bg-[#2d6a4f]"></span>
            <span class="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#edf6ef] text-[#2d6a4f]">
              <svg aria-hidden="true" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <path d="M6 3h9l4 4v14H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" />
                <path d="M14 3v5h5M8 13h8M8 17h5" />
              </svg>
            </span>
            <div class="min-w-0">
              <p class="truncate text-[9px] font-medium leading-tight text-[#63796b]">Current Round</p>
              <p class="mt-0.5 truncate text-xs font-bold leading-tight text-[#163c2c]">Not set</p>
            </div>
          </article>
        </section>

        <img
          src="../../../images/images-Desktop-view/my mchezo images desktop/group..svg"
          alt=""
          aria-hidden="true"
          class="pointer-events-none absolute right-[-20px] top-0 z-0 h-65 w-64 select-none object-contain object-right-top opacity-95"
        />
      </div>
      <section aria-label="Mchezo summary cards" class="grid grid-cols-2 items-start justify-center gap-4 xl:grid-cols-4">
        <article style="aspect-ratio: 1 / 1" class="relative isolate flex h-auto w-full max-w-[140px] min-w-0 cursor-pointer flex-col self-start overflow-hidden rounded-xl border border-[#b6d7bb] bg-[#eaf5eb] p-2.5 shadow-[0_8px_24px_rgba(19,70,48,0.1)] transition-shadow duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:shadow-[0_8px_26px_rgba(19,70,48,0.11)]">
          <span aria-hidden="true" class="pointer-events-none absolute -right-10 top-8 z-0 h-32 w-32 rounded-full border border-[#2d6a4f]/[0.14] shadow-[0_0_0_12px_rgba(45,106,79,0.035),0_0_0_27px_rgba(45,106,79,0.025)]"></span>
          <span aria-hidden="true" class="pointer-events-none absolute right-5 top-6 z-0 h-11 w-11 rotate-45 border border-[#2d6a4f]/[0.18] bg-[#c9dfcd]/20"></span>
          <span aria-hidden="true" class="pointer-events-none absolute right-11 top-[88px] z-0 h-2 w-2 rotate-45 border border-[#2d6a4f]/[0.18] bg-[#c9dfcd]/30"></span>
          <span aria-hidden="true" class="pointer-events-none absolute bottom-10 right-5 z-0 h-2.5 w-2.5 rotate-45 border border-[#2d6a4f]/[0.18] bg-[#c9dfcd]/30"></span>
          <span aria-hidden="true" class="pointer-events-none absolute bottom-5 right-20 z-0 h-1.5 w-1.5 rotate-45 border border-[#2d6a4f]/[0.16] bg-[#c9dfcd]/25"></span>
          <div class="relative z-10 flex items-start justify-between gap-1">
            <h3 class="text-[11px] font-semibold leading-snug text-[#2d6a4f]">Total contribution</h3>
            <span class="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-[#b6d7bb]/80 bg-white/60 text-[#2d6a4f]">
              <svg aria-hidden="true" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="9" /><path d="M15 8.5c-.7-.7-1.7-1-3-1-1.5 0-2.5.8-2.5 2s1 1.8 2.5 2.2 2.5.8 2.5 2.2-1 2.1-2.7 2.1c-1.2 0-2.3-.4-3.1-1.2M12 5.5v13" />
              </svg>
            </span>
          </div>
          <div class="relative z-10 mt-2">
            <p class="text-[10px] font-medium text-[#6d8576]">Group total</p>
            <p class="mt-1 truncate text-xl font-bold leading-tight text-[#0b4d38]">TSh 0</p>
          </div>
        </article>
        <article style="aspect-ratio: 1 / 1" class="relative isolate flex h-auto w-full max-w-[140px] min-w-0 cursor-pointer flex-col self-start overflow-hidden rounded-xl border border-[#b6d7bb] bg-[#eaf5eb] p-2.5 shadow-[0_8px_24px_rgba(19,70,48,0.1)] transition-shadow duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:shadow-[0_8px_26px_rgba(19,70,48,0.11)]">
          <span aria-hidden="true" class="pointer-events-none absolute -left-12 -top-12 z-0 h-32 w-32 rounded-full border border-[#2d6a4f]/[0.12] shadow-[0_0_0_12px_rgba(45,106,79,0.03),0_0_0_27px_rgba(45,106,79,0.02)]"></span>
          <span aria-hidden="true" class="pointer-events-none absolute bottom-8 right-5 z-0 h-14 w-14 rounded-full border border-[#2d6a4f]/[0.16] bg-[#c9dfcd]/15"></span>
          <span aria-hidden="true" class="pointer-events-none absolute bottom-11 right-8 z-0 h-2 w-2 rounded-full bg-[#2d6a4f]/20"></span>
          <span aria-hidden="true" class="pointer-events-none absolute right-20 top-8 z-0 h-2.5 w-2.5 rounded-full bg-[#2d6a4f]/15"></span>
          <span aria-hidden="true" class="pointer-events-none absolute bottom-5 left-8 z-0 h-1.5 w-1.5 rounded-full bg-[#2d6a4f]/15"></span>
          <div class="relative z-10 flex items-start justify-between gap-1">
            <h3 class="text-[11px] font-semibold leading-snug text-[#2d6a4f]">Total payout received</h3>
            <span class="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-[#b6d7bb]/80 bg-white/60 text-[#2d6a4f]">
              <svg aria-hidden="true" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 3v12m-5-5 5 5 5-5M5 17v3h14v-3" />
              </svg>
            </span>
          </div>
          <div class="relative z-10 mt-2">
            <p class="text-[10px] font-medium text-[#6d8576]">Current total</p>
            <p class="mt-1 truncate text-xl font-bold leading-tight text-[#0b4d38]">TSh 0</p>
          </div>
        </article>
        <article style="aspect-ratio: 1 / 1" class="relative isolate flex h-auto w-full max-w-[140px] min-w-0 cursor-pointer flex-col self-start overflow-hidden rounded-xl border border-[#b6d7bb] bg-[#eaf5eb] p-2.5 shadow-[0_8px_24px_rgba(19,70,48,0.1)] transition-shadow duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:shadow-[0_8px_26px_rgba(19,70,48,0.11)]">
          <span aria-hidden="true" class="pointer-events-none absolute -right-9 -bottom-10 z-0 h-36 w-36 rounded-full border border-[#2d6a4f]/[0.14] shadow-[0_0_0_12px_rgba(45,106,79,0.035),0_0_0_27px_rgba(45,106,79,0.025)]"></span>
          <span aria-hidden="true" class="pointer-events-none absolute right-8 top-8 z-0 h-12 w-12 rotate-45 border border-[#2d6a4f]/[0.17] bg-[#c9dfcd]/15"></span>
          <span aria-hidden="true" class="pointer-events-none absolute left-8 top-20 z-0 h-2 w-2 rotate-45 border border-[#2d6a4f]/[0.18] bg-[#c9dfcd]/30"></span>
          <span aria-hidden="true" class="pointer-events-none absolute bottom-12 left-10 z-0 h-2.5 w-2.5 rotate-45 border border-[#2d6a4f]/[0.18] bg-[#c9dfcd]/30"></span>
          <span aria-hidden="true" class="pointer-events-none absolute right-16 bottom-7 z-0 h-1.5 w-1.5 rotate-45 border border-[#2d6a4f]/[0.16] bg-[#c9dfcd]/25"></span>
          <div class="relative z-10 flex items-start justify-between gap-1">
            <h3 class="text-[11px] font-semibold leading-snug text-[#2d6a4f]">Next payout</h3>
            <span class="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-[#b6d7bb]/80 bg-white/60 text-[#2d6a4f]">
              <svg aria-hidden="true" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="9" cy="8" r="3.5" /><path d="M3 20v-1.5A4.5 4.5 0 0 1 7.5 14h3a4.5 4.5 0 0 1 4.5 4.5V20M17 8h4m-2-2v4" />
              </svg>
            </span>
          </div>
          <div class="relative z-10 mt-2">
            <p class="text-[10px] font-medium text-[#6d8576]">Recipient</p>
            <p class="mt-1 break-words text-base font-bold leading-tight text-[#0b4d38]">Name of receiver</p>
          </div>
        </article>
        <article style="aspect-ratio: 1 / 1" class="relative isolate flex h-auto w-full max-w-[140px] min-w-0 cursor-pointer flex-col self-start overflow-hidden rounded-xl border border-[#b6d7bb] bg-[#eaf5eb] p-2.5 shadow-[0_8px_24px_rgba(19,70,48,0.1)] transition-shadow duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:shadow-[0_8px_26px_rgba(19,70,48,0.11)]">
          <span aria-hidden="true" class="pointer-events-none absolute -right-10 top-8 z-0 h-32 w-32 rounded-full border border-[#2d6a4f]/[0.14] shadow-[0_0_0_12px_rgba(45,106,79,0.035),0_0_0_27px_rgba(45,106,79,0.025)]"></span>
          <span aria-hidden="true" class="pointer-events-none absolute left-5 bottom-8 z-0 h-10 w-10 rounded-full border border-[#2d6a4f]/[0.15] bg-[#c9dfcd]/15"></span>
          <span aria-hidden="true" class="pointer-events-none absolute left-8 bottom-11 z-0 h-2 w-2 rounded-full bg-[#2d6a4f]/20"></span>
          <span aria-hidden="true" class="pointer-events-none absolute right-20 top-8 z-0 h-2.5 w-2.5 rounded-full bg-[#2d6a4f]/15"></span>
          <span aria-hidden="true" class="pointer-events-none absolute right-9 bottom-6 z-0 h-1.5 w-1.5 rounded-full bg-[#2d6a4f]/15"></span>
          <div class="relative z-10 flex items-start justify-between gap-1">
            <h3 class="text-[11px] font-semibold leading-snug text-[#2d6a4f]">Next contribution due</h3>
            <span class="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-[#b6d7bb]/80 bg-white/60 text-[#2d6a4f]">
              <svg aria-hidden="true" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="5" width="18" height="16" rx="2" /><path d="M16 3v4M8 3v4M3 10h18M8 14h3" />
              </svg>
            </span>
          </div>
          <div class="relative z-10 mt-2">
            <p class="text-[10px] font-medium text-[#6d8576]">Due date</p>
            <p class="mt-1 truncate text-xl font-bold leading-tight text-[#0b4d38]">Not set</p>
          </div>
        </article>
      </section>
      <article aria-label="Group members" class="relative isolate flex h-[112px] min-w-0 flex-col overflow-hidden rounded-2xl border border-[#b6d7bb] bg-[#eaf5eb] p-3 shadow-[0_8px_24px_rgba(19,70,48,0.08)]">
        <span aria-hidden="true" class="pointer-events-none absolute -right-10 -top-16 z-0 h-40 w-40 rounded-full border border-[#2d6a4f]/[0.12] shadow-[0_0_0_12px_rgba(45,106,79,0.025),0_0_0_28px_rgba(45,106,79,0.02)]"></span>
        <span aria-hidden="true" class="pointer-events-none absolute right-16 top-8 z-0 h-3 w-3 rotate-45 border border-[#2d6a4f]/[0.16] bg-[#c9dfcd]/25"></span>
        <div class="relative z-10 flex items-center justify-between gap-3">
          <div class="flex min-w-0 items-center gap-2.5">
            <span class="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-[#cfe3d2] bg-white/70 text-[#2d6a4f]">
              <svg aria-hidden="true" class="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <path d="M16 20v-1.5a3.5 3.5 0 0 0-3.5-3.5h-5A3.5 3.5 0 0 0 4 18.5V20" />
                <circle cx="10" cy="7.5" r="3.5" />
                <path d="M17 11a3.5 3.5 0 0 0 0-7M20 20v-1.5a3.5 3.5 0 0 0-2.5-3.35" />
              </svg>
            </span>
            <div class="min-w-0">
              <h3 class="truncate text-xs font-semibold text-[#163c2c]">Group members</h3>
            </div>
          </div>
          <span class="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-[#b6d7bb]/80 bg-white/65 px-2.5 py-1 text-[9px] font-semibold text-[#52745d]">
            <span aria-hidden="true" class="h-1.5 w-1.5 rounded-full" :class="props.loadMembers ? 'bg-[#4c9a65]' : 'bg-[#a5b5aa]'"></span>
            {{ isLoadingMembers ? 'Updating' : `${members.length} members` }}
          </span>
        </div>
        <div class="relative z-10 mt-2 flex min-h-0 flex-1 items-center gap-3">
          <div v-if="members.length" class="flex min-w-0 flex-1 items-center gap-2 overflow-x-auto">
            <div v-for="member in members.slice(0, 4)" :key="member.id" class="flex min-w-0 shrink-0 items-center gap-2 rounded-full border border-[#b6d7bb]/70 bg-white/60 py-1 pl-1 pr-3">
              <span class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#b6d7bb]/80 bg-[#e4f1e6] text-[9px] font-bold text-[#2d6a4f]">{{ member.name.charAt(0).toUpperCase() }}</span>
              <span class="max-w-28 truncate text-[10px] font-medium text-[#365b46]">{{ member.name }}</span>
            </div>
          </div>
          <p v-else class="min-w-0 flex-1 truncate text-[10px] text-[#6d8576]">
            {{ isLoadingMembers ? 'Updating members…' : memberLoadError || (props.loadMembers ? 'No group members found.' : 'Member data is not connected yet.') }}
          </p>
          <button type="button" class="group inline-flex shrink-0 items-center gap-1 rounded-md px-1.5 py-1 text-[9px] font-semibold text-[#2d6a4f] transition-colors hover:bg-white/70">
            View more
            <svg aria-hidden="true" class="h-3 w-3 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>
      </article>
    </div>
    <div class="flex flex-col gap-4">
      <article aria-label="Current round and next meeting" class="relative isolate flex h-[170px] w-full flex-col overflow-hidden rounded-2xl border border-[#cfe3d2] bg-gradient-to-br from-white to-[#f1f8f2] p-3 shadow-[0_8px_24px_rgba(19,70,48,0.08)]">
        <span aria-hidden="true" class="pointer-events-none absolute -right-8 -top-10 h-28 w-28 rounded-full border border-[#2d6a4f]/10 shadow-[0_0_0_10px_rgba(45,106,79,0.025),0_0_0_22px_rgba(45,106,79,0.02)]"></span>
        <div class="relative z-10 flex flex-1 items-center justify-center">
          <div class="relative flex h-[82px] w-[82px] items-center justify-center rounded-full border-[7px] border-[#dceee0] bg-white/70 shadow-inner">
            <span aria-hidden="true" class="absolute inset-[-7px] rotate-[30deg] rounded-full border-[7px] border-transparent border-t-[#2d6a4f]/70"></span>
            <div class="text-center">
              <p class="text-lg font-bold leading-none text-[#0b4d38]">--/--</p>
              <p class="mt-1 text-[8px] font-medium text-[#6d8576]">Current Round</p>
            </div>
          </div>
        </div>
        <div class="relative z-10 mt-1 flex items-center gap-2 border-t border-[#b6d7bb]/60 pt-2">
          <span class="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#dceee0] text-[#2d6a4f]">
            <svg aria-hidden="true" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <rect x="3" y="5" width="18" height="16" rx="2" /><path d="M16 3v4M8 3v4M3 10h18M8 14h3" />
            </svg>
          </span>
          <div class="min-w-0">
            <p class="text-[9px] font-medium text-[#6d8576]">Next meeting</p>
            <p class="mt-0.5 truncate text-xs font-bold text-[#163c2c]">Not set</p>
          </div>
        </div>
      </article>
      <article aria-label="Group information" class="relative isolate h-[260px] w-full overflow-hidden rounded-2xl border border-[#dce8df] bg-white shadow-[0_8px_24px_rgba(19,70,48,0.08)]">
        <span aria-hidden="true" class="pointer-events-none absolute -right-12 top-24 h-36 w-36 rounded-full border border-[#2d6a4f]/[0.08] shadow-[0_0_0_12px_rgba(45,106,79,0.02),0_0_0_26px_rgba(45,106,79,0.015)]"></span>
        <header class="relative z-10 flex items-center gap-2 border-b border-[#e5eee7] bg-[#f6faf6] px-3 py-1.5">
          <span class="flex h-6 w-6 items-center justify-center rounded-lg bg-[#dceee0] text-[#2d6a4f]">
            <svg aria-hidden="true" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 3 3 8l9 5 9-5-9-5Z" /><path d="m3 12 9 5 9-5M3 16l9 5 9-5" />
            </svg>
          </span>
          <h3 class="text-[10px] font-semibold text-[#163c2c]">Group information</h3>
        </header>
        <div class="relative z-10 space-y-1 px-3 py-2 text-[9px] leading-tight">
          <div class="flex items-center justify-between gap-2"><span class="text-[#6d8576]">Group name</span><span class="truncate text-right font-semibold text-[#163c2c]">My Mchezo Group</span></div>
          <div class="flex items-center justify-between gap-2"><span class="text-[#6d8576]">Group ID</span><span class="text-right font-semibold text-[#163c2c]">Not set</span></div>
          <div class="flex items-center justify-between gap-2"><span class="text-[#6d8576]">Contribution</span><span class="text-right font-semibold text-[#163c2c]">TSh 0</span></div>
          <div class="flex items-center justify-between gap-2"><span class="text-[#6d8576]">Frequency</span><span class="text-right font-semibold text-[#163c2c]">Not set</span></div>
          <div class="flex items-center justify-between gap-2"><span class="text-[#6d8576]">Total members</span><span class="text-right font-semibold text-[#163c2c]">{{ members.length }}</span></div>
          <div class="flex items-center justify-between gap-2"><span class="text-[#6d8576]">Current round</span><span class="text-right font-semibold text-[#163c2c]">Not set</span></div>
          <div class="flex items-center justify-between gap-2"><span class="text-[#6d8576]">Start date</span><span class="text-right font-semibold text-[#163c2c]">Not set</span></div>
        </div>
        <div class="relative z-10 mx-3 border-t border-[#e5eee7] pt-1.5">
          <div class="rounded-lg border border-[#cfe3d2] bg-gradient-to-r from-[#f2faf3] to-[#e6f4e8] px-2 py-1.5">
            <div class="flex items-center gap-2">
              <span class="flex h-6 w-6 items-center justify-center rounded-full bg-[#d2ead7] text-[#2d6a4f]">
                <svg aria-hidden="true" class="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                  <path d="m8 12 2.5 2.5L16 9M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z" />
                </svg>
              </span>
              <div>
                <p class="text-[8px] font-medium text-[#6d8576]">Your position</p>
                <p class="text-sm font-bold leading-tight text-[#0b4d38]">#--</p>
              </div>
            </div>
            <p class="ml-8 mt-0.5 text-[8px] text-[#52745d]">In the payout rotation</p>
          </div>
        </div>
        <button type="button" class="relative z-10 mx-3 mb-1.5 mt-1.5 flex w-[calc(100%-1.5rem)] items-center justify-between rounded-lg bg-[#0b4d38] px-2.5 py-1.5 text-left text-[9px] font-semibold text-white transition-colors hover:bg-[#146348]">
          <span class="flex items-center gap-2">
            <svg aria-hidden="true" class="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 3 4 7v5c0 5 3.5 8 8 9 4.5-1 8-4 8-9V7l-8-4Z" /><path d="m9 12 2 2 4-4" />
            </svg>
            View group rules
          </span>
          <svg aria-hidden="true" class="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6" /></svg>
        </button>
      </article>
    </div>
  </div>
</template>
