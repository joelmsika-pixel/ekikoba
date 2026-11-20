<template>
  <div class="flex min-h-screen items-center justify-center bg-white px-4 py-8 sm:px-6 lg:px-8">
    <div class="mx-auto w-full max-w-5xl">
      <div class="legal-shell relative isolate overflow-hidden rounded-[26px] border border-[#dfe8e1] bg-[#f3f8f4] shadow-[0_12px_25px_rgba(15,22,19,0.05)]">
        <span aria-hidden="true" class="pointer-events-none absolute z-0 right-[18px] top-[18px] h-[54px] w-[54px] rotate-45 border border-[#2d6a4f]/15 bg-[#dceae0]/70 [box-shadow:inset_0_0_0_1px_rgba(255,255,255,0.08)] animate-[floatShape_10s_ease-in-out_infinite_alternate]"></span>
        <span aria-hidden="true" class="pointer-events-none absolute z-0 right-[48px] top-[92px] h-[14px] w-[14px] rotate-45 border border-[#2d6a4f]/15 bg-[#dceae0]/80 [box-shadow:inset_0_0_0_1px_rgba(255,255,255,0.08)] animate-[floatShape_10s_ease-in-out_infinite_alternate]" style="animation-delay: 0.9s;"></span>
        <span aria-hidden="true" class="pointer-events-none absolute z-0 right-[16px] top-[160px] h-[18px] w-[18px] rotate-45 border border-[#2d6a4f]/15 bg-[#dceae0]/70 [box-shadow:inset_0_0_0_1px_rgba(255,255,255,0.08)] animate-[floatShape_10s_ease-in-out_infinite_alternate]" style="animation-delay: 1.6s;"></span>
        <span aria-hidden="true" class="pointer-events-none absolute z-0 right-[90px] top-[208px] h-[14px] w-[14px] rotate-45 border border-[#2d6a4f]/10 bg-[#dceae0]/80 [box-shadow:inset_0_0_0_1px_rgba(255,255,255,0.08)] animate-[floatShape_10s_ease-in-out_infinite_alternate]" style="animation-delay: 2.2s;"></span>
        <span aria-hidden="true" class="pointer-events-none absolute z-0 right-[108px] bottom-[34px] h-[18px] w-[18px] rotate-45 border border-[#2d6a4f]/15 bg-[#ecf5ee]/60 [box-shadow:inset_0_0_0_1px_rgba(255,255,255,0.08)] animate-[floatShape_10s_ease-in-out_infinite_alternate]" style="animation-delay: 2.8s;"></span>
        <span aria-hidden="true" class="pointer-events-none absolute z-0 right-[70px] bottom-[18px] h-[10px] w-[10px] rotate-45 border border-[#2d6a4f]/15 bg-[#ecf5ee]/75 [box-shadow:inset_0_0_0_1px_rgba(255,255,255,0.08)] animate-[floatShape_10s_ease-in-out_infinite_alternate]" style="animation-delay: 3.4s;"></span>
        <span aria-hidden="true" class="pointer-events-none absolute -right-[42px] top-[24px] h-[150px] w-[150px] rotate-45 rounded-[50%] border border-[#2d6a4f]/15 bg-[#ddebe2]/30 shadow-[0_0_0_12px_rgba(45,106,79,0.03),0_0_0_26px_rgba(45,106,79,0.02)]"></span>
        <span aria-hidden="true" class="pointer-events-none absolute right-[16px] bottom-[-26px] h-[84px] w-[84px] rotate-45 rounded-[18px] border border-[#2d6a4f]/15 bg-[#d1e1d6]/20"></span>
        <span aria-hidden="true" class="pointer-events-none absolute right-[18px] top-[18px] h-[54px] w-[54px] rotate-45 rounded-[14px] border border-[#2d6a4f]/20 bg-[#bfd7c7]/30 transition-all duration-300" :class="activePolicy ? 'bg-[#bfd7c7]/40' : 'bg-[#dceae0]/70'" v-if="false"></span>

        <div class="relative z-10 grid lg:grid-cols-[200px_minmax(0,1fr)]">
          <aside class="relative overflow-hidden border-b border-[#e2eee6] bg-[#edf5ef] p-3 sm:p-4 lg:border-b-0 lg:border-r">
            <span aria-hidden="true" class="pointer-events-none absolute right-[14px] top-[-18px] h-[66px] w-[66px] rotate-45 rounded-[18px] border border-[#2d6a4f]/15 bg-[#d4e5d8]/15"></span>
            <span aria-hidden="true" class="pointer-events-none absolute right-[38px] bottom-[-14px] h-[48px] w-[48px] rotate-45 rounded-[14px] border border-[#2d6a4f]/10 bg-[#d4e5d8]/15"></span>
            <div class="relative">
              <span aria-hidden="true" class="absolute right-[-18px] top-[-10px] h-[46px] w-[46px] rotate-45 rounded-[12px] border border-[#2d6a4f]/10 bg-[#b5d0c3]/10 animate-[pulseBackground_8s_ease-in-out_infinite_alternate]"></span>
              <p class="relative text-[10px] font-bold uppercase tracking-[0.22em] text-[#5f6f69]">Policies</p>
            </div>

            <nav class="relative mt-3 space-y-1.5">
              <button
                v-for="item in policyLinks"
                :key="item.id"
                type="button"
                class="nav-item relative flex w-full items-center gap-2.5 rounded-lg border px-2.5 py-2.5 text-left text-sm font-medium transition-all duration-300"
                :class="activePolicy === item.id
                  ? 'border-[#d6e7dc] bg-[#e7f3ea] text-[#1b332d] shadow-[0_2px_10px_rgba(15,22,19,0.03)]'
                  : 'border-transparent bg-transparent text-[#475d57] hover:border-[#dfece3] hover:bg-[#f0f7f2]'"
                @click="activePolicy = item.id"
              >
                <span
                  class="inline-block h-[7px] w-[7px] rotate-45 rounded-[2px] transition-all duration-300"
                  :class="activePolicy === item.id ? 'bg-[#2d6a4f]' : 'bg-[#738f81]/75'"
                  aria-hidden="true"
                ></span>
                {{ item.label }}
              </button>
            </nav>
          </aside>

          <section class="bg-[#f8fbf8] p-4 sm:p-5 lg:p-6">
            <component :is="currentPolicyComponent" />
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
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
</style>

<script setup>
import { computed, ref } from 'vue'
import CookiePolicy from './cookie_policy.vue'
import PrivacyPolicy from './privacy_policy.vue'
import RefundPolicy from './refund_policy.vue'
import TermsOfServices from './terms_of_services.vue'

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

