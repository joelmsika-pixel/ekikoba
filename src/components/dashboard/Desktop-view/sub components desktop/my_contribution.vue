<script setup>
defineProps({
  groupName: {
    type: String,
    default: '',
  },
});

const paymentHistory = [];

function downloadStatement() {
  const rows = [
    ['Statement summary', 'Value'],
    ['Group total contribution', 'TSh 0'],
    ['Your total contribution', 'TSh 0'],
    ['Contribution due today', 'Not set'],
    ['Amount needed for payout', 'Not set'],
    ['Fines', 'TSh 0'],
    [],
    ['Date', 'Description', 'Amount', 'Status'],
    ...paymentHistory.map(({ date, description, amount, status }) => [date, description, amount, status]),
  ];
  const csv = rows
    .map((row) => row.map((value) => `"${String(value ?? '').replaceAll('"', '""')}"`).join(','))
    .join('\r\n');
  const url = URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8' }));
  const link = document.createElement('a');
  link.href = url;
  link.download = 'my-contribution-statement.csv';
  link.click();
  URL.revokeObjectURL(url);
}
</script>

<template>
  <div class="grid min-w-0 grid-cols-[minmax(0,1fr)_220px] gap-4 pl-8">
    <article class="relative isolate min-h-[190px] min-w-0 overflow-hidden rounded-xl border border-[#dce8df] bg-white shadow-[0_4px_16px_rgba(19,70,48,0.06)]">
      <svg aria-hidden="true" class="pointer-events-none absolute right-0 top-0 h-28 w-52 text-[#2d6a4f]/[0.055]" viewBox="0 0 208 112" fill="none">
        <path d="m0 18 35 22 33-27 37 30 35-22 36 20 32-18M0 82l32-25 39 25 34-30 36 24 36-27 31 18M35 40l-3 17 39 25 0-69 34 30 2 31 36-7 0-44 36 20-5 34" stroke="currentColor" />
        <g fill="currentColor"><circle cx="35" cy="40" r="2" /><circle cx="68" cy="13" r="2" /><circle cx="105" cy="43" r="2" /><circle cx="140" cy="21" r="2" /><circle cx="176" cy="41" r="2" /><circle cx="32" cy="57" r="2" /><circle cx="71" cy="82" r="2" /><circle cx="105" cy="52" r="2" /><circle cx="141" cy="76" r="2" /><circle cx="177" cy="49" r="2" /></g>
      </svg>
      <header class="relative z-10 flex items-center justify-between gap-3 border-b border-[#e6eee8] bg-[#f7faf8] px-4 py-3">
        <div class="flex min-w-0 items-center gap-3">
        <span class="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#0b4d38] text-white shadow-[0_3px_8px_rgba(11,77,56,0.18)]">
          <svg aria-hidden="true" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="M3 10h18M7 15h3" />
          </svg>
        </span>
        <div class="min-w-0">
          <h2 class="text-sm font-semibold text-[#163c2c]">My Contribution</h2>
          <p class="mt-0.5 text-[10px] text-[#6d8576]">Personal contribution overview</p>
        </div>
        </div>
        <span class="inline-flex max-w-[150px] shrink-0 items-center gap-1.5 rounded-lg border border-[#cfe3d2] bg-white px-2.5 py-1.5 shadow-[0_1px_3px_rgba(19,70,48,0.05)]">
          <svg aria-hidden="true" class="h-3.5 w-3.5 shrink-0 text-[#2d6a4f]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 3 3 8l9 5 9-5-9-5Z" />
            <path d="m3 12 9 5 9-5M3 16l9 5 9-5" />
          </svg>
          <span class="truncate text-[10px] font-semibold text-[#365b46]" :title="groupName || 'No group selected'">{{ groupName || 'No group selected' }}</span>
        </span>
      </header>
      <div class="relative z-10 grid grid-cols-2 divide-x divide-y divide-[#e6eee8] sm:grid-cols-3 sm:divide-y-0">
        <div class="relative overflow-hidden px-4 py-3">
          <p class="flex items-center gap-1.5 text-[9px] font-medium uppercase tracking-[0.07em] text-[#809587]">
            <span class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#edf6ef] text-[#2d6a4f]">
              <svg aria-hidden="true" class="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="9" cy="8" r="3" /><path d="M3 19v-1a6 6 0 0 1 12 0v1M16 5.5a3 3 0 0 1 0 5.8M18 14a4 4 0 0 1 3 4v1" />
              </svg>
            </span>
            Group total contribution
          </p>
          <p class="mt-1.5 text-lg font-semibold tracking-tight text-[#0b4d38]">TSh 0</p>
        </div>
        <div class="relative overflow-hidden px-4 py-3">
          <p class="flex items-center gap-1.5 text-[9px] font-medium uppercase tracking-[0.07em] text-[#809587]">
            <span class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#edf6ef] text-[#2d6a4f]">
              <svg aria-hidden="true" class="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="6" width="18" height="13" rx="2" /><path d="M3 10h18M7 15h3M16 3v3" />
              </svg>
            </span>
            Your total contribution
          </p>
          <p class="mt-1.5 text-lg font-semibold tracking-tight text-[#0b4d38]">TSh 0</p>
        </div>
        <div class="px-4 py-3">
          <p class="flex items-center gap-1.5 text-[9px] font-medium uppercase tracking-[0.07em] text-[#809587]">
            <span class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#edf6ef] text-[#2d6a4f]">
              <svg aria-hidden="true" class="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="5" width="18" height="16" rx="2" /><path d="M16 3v4M8 3v4M3 10h18m-12 4 2 2 4-4" />
              </svg>
            </span>
            Due today
          </p>
          <p class="mt-1.5 text-sm font-semibold text-[#52745d]">Not set</p>
        </div>
        <div class="relative overflow-hidden bg-[#fcf8f7] px-4 py-3">
          <p class="flex items-center gap-1.5 text-[9px] font-medium uppercase tracking-[0.07em] text-[#809587]">
            <span class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#edf6ef] text-[#2d6a4f]">
              <svg aria-hidden="true" class="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <path d="M3 8h18v12H3zM3 8l2-4h14l2 4" /><path d="M8 14h8m-4-3v6" />
              </svg>
            </span>
            Needed for payout
          </p>
          <p class="mt-1.5 text-sm font-semibold text-[#52745d]">Not set</p>
        </div>
        <div class="px-4 py-3">
          <p class="flex items-center gap-1.5 text-[9px] font-medium uppercase tracking-[0.07em] text-[#9a6b6b]">
            <span class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#fbefed] text-[#9b4545]">
              <svg aria-hidden="true" class="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 3 2.8 19h18.4L12 3Z" /><path d="M12 9v4m0 3h.01" />
              </svg>
            </span>
            Fines
          </p>
          <p class="mt-1.5 text-lg font-semibold tracking-tight text-[#9b4545]">TSh 0</p>
        </div>
        <div class="px-4 py-3">
          <p class="flex items-center gap-1.5 text-[9px] font-medium uppercase tracking-[0.07em] text-[#809587]">
            <span class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#edf6ef] text-[#2d6a4f]">
              <svg aria-hidden="true" class="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" />
              </svg>
            </span>
            Payment status
          </p>
          <div class="mt-2 flex items-center gap-2">
            <span aria-hidden="true" class="h-2 w-2 rounded-full bg-[#a8b7ac]"></span>
            <p class="text-[10px] font-semibold text-[#52745d]">No payments yet</p>
          </div>
        </div>
      </div>
    </article>

    <article aria-label="Contribution summary" class="relative isolate flex aspect-square w-full flex-col overflow-hidden rounded-2xl border border-[#b6d7bb] bg-gradient-to-br from-[#edf7ef] via-[#eaf5eb] to-[#deeee1] p-4 shadow-[0_8px_24px_rgba(19,70,48,0.08)]">
      <svg aria-hidden="true" class="pointer-events-none absolute inset-0 h-full w-full text-[#2d6a4f]/[0.06]" viewBox="0 0 220 220" preserveAspectRatio="none" fill="none">
        <path d="m0 28 48 24 39-33 42 37 42-23 49 25M0 176l39-34 48 32 42-41 42 34 49-33M48 52l-9 90 48 32 0-155 42 37 0 45 42 23 0-82 49 25" stroke="currentColor" />
        <g fill="currentColor"><circle cx="48" cy="52" r="2" /><circle cx="87" cy="19" r="2" /><circle cx="129" cy="56" r="2" /><circle cx="171" cy="33" r="2" /><circle cx="39" cy="142" r="2" /><circle cx="87" cy="174" r="2" /><circle cx="129" cy="133" r="2" /><circle cx="171" cy="167" r="2" /></g>
      </svg>
      <span aria-hidden="true" class="pointer-events-none absolute -right-12 top-8 h-36 w-36 rounded-full border border-[#2d6a4f]/[0.10] shadow-[0_0_0_12px_rgba(45,106,79,0.025),0_0_0_26px_rgba(45,106,79,0.02)]"></span>
      <span class="relative z-10 flex h-9 w-9 items-center justify-center rounded-xl border border-white/75 bg-white/70 text-[#2d6a4f] shadow-sm">
        <svg aria-hidden="true" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
          <path d="M12 3v18M17 7.5c-.8-1-2.1-1.5-4-1.5-2.5 0-4 1.2-4 3s1.4 2.7 4 3 4 1.1 4 3-1.5 3-4 3c-1.8 0-3.3-.6-4.2-1.7" />
        </svg>
      </span>
      <h3 class="relative z-10 mt-4 text-xs font-semibold text-[#2d6a4f]">Your contribution</h3>
      <div class="relative z-10 mt-3">
        <p class="text-[10px] font-medium text-[#6d8576]">Total contributed</p>
        <p class="mt-1 text-2xl font-bold tracking-tight text-[#0b4d38]">TSh 0</p>
      </div>
      <div class="relative z-10 mt-auto flex items-center justify-between gap-2 rounded-lg border border-[#9b4545]/15 bg-[#fbf4f2]/75 px-3 py-2">
        <p class="text-[10px] font-medium text-[#9a6b6b]">Fines</p>
        <p class="text-xs font-semibold text-[#9b4545]">TSh 0</p>
      </div>
    </article>

    <article aria-label="Payment history" class="relative isolate col-span-2 min-w-0 overflow-hidden rounded-xl border border-[#dce8df] bg-white shadow-[0_4px_16px_rgba(19,70,48,0.06)]">
      <header class="flex items-center justify-between gap-3 border-b border-[#e6eee8] bg-[#f7faf8] px-4 py-3">
        <div>
          <h3 class="text-sm font-semibold text-[#163c2c]">Payment history</h3>
          <p class="mt-0.5 text-[10px] text-[#809587]">Your contribution and payment records</p>
        </div>
        <button type="button" class="inline-flex shrink-0 items-center gap-1.5 rounded-md border border-[#dce8df] bg-white px-3 py-2 text-[10px] font-semibold text-[#2d6a4f] transition-colors hover:bg-[#edf6ef]" @click="downloadStatement">
          <svg aria-hidden="true" class="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 3v12m-5-5 5 5 5-5M5 17v3h14v-3" />
          </svg>
          Download statement
        </button>
      </header>
      <div class="flex min-h-[84px] items-center gap-3 px-4 py-4 text-xs text-[#809587]">
        <span class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#edf3ee] text-[#7c9583]">
          <svg aria-hidden="true" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" />
          </svg>
        </span>
        No payment history to show yet.
      </div>
    </article>
  </div>
</template>