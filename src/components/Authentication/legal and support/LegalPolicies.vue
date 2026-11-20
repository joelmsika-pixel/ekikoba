<template>
  <div :class="embedded
    ? 'relative z-20 mx-4 mt-[calc(60vw_-_112px)] mb-4 h-[calc(100dvh_-_60vw_+_112px_-_6rem)] min-h-[220px]'
    : 'flex h-[100dvh] items-start justify-center overflow-hidden bg-white px-3 pt-3 pb-[calc(4.25rem+env(safe-area-inset-bottom))] sm:h-auto sm:min-h-screen sm:items-center sm:overflow-visible sm:pt-8 sm:pb-8 sm:px-6 lg:px-8'">
    <div :class="embedded
      ? 'mx-auto h-full min-h-0 w-full max-w-5xl'
      : 'mx-auto h-full min-h-0 w-full max-w-5xl sm:h-auto sm:min-h-0'">
      <div class="legal-shell relative isolate h-full max-h-full overflow-hidden rounded-[26px] border border-[#dfe8e1] bg-[#f3f8f4] shadow-[0_12px_25px_rgba(15,22,19,0.05)] sm:h-auto sm:max-h-none">
        <span aria-hidden="true" class="pointer-events-none absolute z-0 right-[18px] top-[18px] h-[54px] w-[54px] rotate-45 border border-[#2d6a4f]/15 bg-[#dceae0]/70 [box-shadow:inset_0_0_0_1px_rgba(255,255,255,0.08)] animate-[floatShape_10s_ease-in-out_infinite_alternate]"></span>
        <span aria-hidden="true" class="pointer-events-none absolute z-0 right-[48px] top-[92px] h-[14px] w-[14px] rotate-45 border border-[#2d6a4f]/15 bg-[#dceae0]/80 [box-shadow:inset_0_0_0_1px_rgba(255,255,255,0.08)] animate-[floatShape_10s_ease-in-out_infinite_alternate]" style="animation-delay: 0.9s;"></span>
        <span aria-hidden="true" class="pointer-events-none absolute z-0 right-[16px] top-[160px] h-[18px] w-[18px] rotate-45 border border-[#2d6a4f]/15 bg-[#dceae0]/70 [box-shadow:inset_0_0_0_1px_rgba(255,255,255,0.08)] animate-[floatShape_10s_ease-in-out_infinite_alternate]" style="animation-delay: 1.6s;"></span>
        <span aria-hidden="true" class="pointer-events-none absolute z-0 right-[90px] top-[208px] h-[14px] w-[14px] rotate-45 border border-[#2d6a4f]/10 bg-[#dceae0]/80 [box-shadow:inset_0_0_0_1px_rgba(255,255,255,0.08)] animate-[floatShape_10s_ease-in-out_infinite_alternate]" style="animation-delay: 2.2s;"></span>
        <span aria-hidden="true" class="pointer-events-none absolute z-0 right-[108px] bottom-[34px] h-[18px] w-[18px] rotate-45 border border-[#2d6a4f]/15 bg-[#ecf5ee]/60 [box-shadow:inset_0_0_0_1px_rgba(255,255,255,0.08)] animate-[floatShape_10s_ease-in-out_infinite_alternate]" style="animation-delay: 2.8s;"></span>
        <span aria-hidden="true" class="pointer-events-none absolute z-0 right-[70px] bottom-[18px] h-[10px] w-[10px] rotate-45 border border-[#2d6a4f]/15 bg-[#ecf5ee]/75 [box-shadow:inset_0_0_0_1px_rgba(255,255,255,0.08)] animate-[floatShape_10s_ease-in-out_infinite_alternate]" style="animation-delay: 3.4s;"></span>
        <span aria-hidden="true" class="pointer-events-none absolute -right-[42px] top-[24px] h-[150px] w-[150px] rotate-45 rounded-[50%] border border-[#2d6a4f]/15 bg-[#ddebe2]/30 shadow-[0_0_0_12px_rgba(45,106,79,0.03),0_0_0_26px_rgba(45,106,79,0.02)]"></span>
        <span aria-hidden="true" class="pointer-events-none absolute right-[16px] bottom-[-26px] h-[84px] w-[84px] rotate-45 rounded-[18px] border border-[#2d6a4f]/15 bg-[#d1e1d6]/20"></span>
        <div class="relative z-10 grid h-full min-h-0 grid-rows-[auto_minmax(0,1fr)] lg:grid-cols-[200px_minmax(0,1fr)] lg:grid-rows-1 lg:h-auto">
          <aside class="relative overflow-hidden border-b border-[#e2eee6] bg-gradient-to-br from-[#f5faf6] to-[#eaf4ed] p-3 sm:p-4 lg:border-b-0 lg:border-r">
            <span aria-hidden="true" class="pointer-events-none absolute right-[14px] top-[-18px] h-[66px] w-[66px] rotate-45 rounded-[18px] border border-[#2d6a4f]/15 bg-[#d4e5d8]/15"></span>
            <span aria-hidden="true" class="pointer-events-none absolute right-[38px] bottom-[-14px] h-[48px] w-[48px] rotate-45 rounded-[14px] border border-[#2d6a4f]/10 bg-[#d4e5d8]/15"></span>
            <div class="relative flex items-center gap-3">
              <span aria-hidden="true" class="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#0b4d38] text-white shadow-[0_4px_12px_rgba(11,77,56,0.18)]">
                <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M6 3h9l4 4v14H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" />
                  <path d="M14 3v5h5M8 13h8M8 17h5" />
                </svg>
              </span>
              <div>
                <p class="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#64806c]">Your guide to eKikoba</p>
                <h1 class="mt-0.5 text-base font-bold tracking-tight text-[#173c2c]">Legal &amp; policies</h1>
              </div>
            </div>

            <nav aria-label="Legal policies" class="relative mt-3 grid grid-cols-2 gap-2 sm:mt-4 sm:grid-cols-1 sm:gap-y-1.5">
              <button
                v-for="item in policyLinks"
                :key="item.id"
                type="button"
                class="nav-item relative flex min-h-11 w-full items-center gap-2 rounded-xl border px-2.5 py-2 text-left text-[11px] font-semibold leading-tight transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0b4d38] sm:gap-2.5 sm:px-2.5 sm:py-2.5 sm:text-sm"
                :class="activePolicy === item.id
                  ? 'border-[#0b4d38] bg-[#0b4d38] text-white shadow-[0_4px_12px_rgba(11,77,56,0.18)]'
                  : 'border-[#dce9df] bg-white/80 text-[#475d57] shadow-[0_2px_6px_rgba(15,22,19,0.03)] hover:border-[#a9c9b2] hover:bg-white'"
                @click="activePolicy = item.id"
                :aria-pressed="activePolicy === item.id"
              >
                <span
                  class="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-lg transition-colors"
                  :class="activePolicy === item.id ? 'bg-white/15 text-white' : 'bg-[#eaf3ec] text-[#39734e]'"
                  aria-hidden="true"
                >
                  <svg class="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M6 3h9l4 4v14H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" />
                    <path d="M14 3v5h5M8 13h8M8 17h5" />
                  </svg>
                </span>
                {{ item.label }}
              </button>
            </nav>
          </aside>

          <section
            aria-live="polite"
            :class="embedded
              ? 'min-h-0 overflow-hidden bg-gradient-to-b from-white to-[#f5f9f6] p-4 sm:p-5 lg:p-6'
              : 'min-h-0 overflow-y-auto bg-gradient-to-b from-white to-[#f5f9f6] p-4 sm:p-5 lg:p-6'"
          >
            <Transition :name="embedded ? 'policy-content' : 'policy-content-none'" mode="out-in">
              <component :is="currentPolicyComponent" :key="activePolicy" />
            </Transition>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@media (max-width: 639px) {
  .policy-content-enter-active,
  .policy-content-leave-active {
    transition: opacity 180ms ease, transform 180ms ease;
  }

  .policy-content-enter-from {
    opacity: 0;
    transform: translateY(8px);
  }

  .policy-content-leave-to {
    opacity: 0;
    transform: translateY(-5px);
  }

  @media (prefers-reduced-motion: reduce) {
    .policy-content-enter-active,
    .policy-content-leave-active {
      transition-duration: 1ms;
    }
  }
}

@keyframes floatShape {
  0% {
    transform: rotate(45deg) translate3d(0, 0, 0);
    opacity: 0.7;
  }
  50% {
    transform: rotate(47deg) translate3d(8px, -7px, 0);
    opacity: 1;
  }
  100% {
    transform: rotate(48deg) translate3d(14px, -12px, 0);
    opacity: 0.9;
  }
}

@keyframes pulseBackground {
  0% {
    opacity: 0.5;
    transform: translate3d(0, 0, 0) rotate(45deg);
  }
  100% {
    opacity: 1;
    transform: translate3d(2px, -2px, 0) rotate(45deg);
  }
}

@media (prefers-reduced-motion: reduce) {
  .policy-content-enter-active,
  .policy-content-leave-active {
    transition-duration: 1ms;
  }
}
</style>

<script setup>
import { computed, ref } from 'vue'
import CookiePolicy from './cookie_policy.vue'
import PrivacyPolicy from './privacy_policy.vue'
import RefundPolicy from './refund_policy.vue'
import TermsOfServices from './terms_of_services.vue'

defineProps({
  embedded: {
    type: Boolean,
    default: false,
  },
})

const policyLinks = [
  { id: 'cookies', label: 'Cookies Policy' },
  { id: 'privacy', label: 'Privacy Policy' },
  { id: 'refund', label: 'Refund Policy' },
  { id: 'terms', label: 'Terms of Service' },
]

const activePolicy = ref('cookies')

const currentPolicyComponent = computed(() => {
  const map = {
    cookies: CookiePolicy,
    privacy: PrivacyPolicy,
    refund: RefundPolicy,
    terms: TermsOfServices,
  }

  return map[activePolicy.value] || CookiePolicy
})
</script>
