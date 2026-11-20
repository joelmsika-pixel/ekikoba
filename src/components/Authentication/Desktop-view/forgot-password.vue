<template>
  <div class="min-h-screen bg-slate-100">
    <div class="mx-auto flex min-h-screen max-w-4xl items-center justify-center px-3 py-2 sm:px-4">
      <div class="grid w-full max-w-[760px] overflow-hidden rounded-[18px] border border-slate-200 bg-white shadow-[0_12px_30px_rgba(15,23,42,0.08)] lg:grid-cols-[0.8fr_1.2fr]">
        <div class="relative hidden overflow-hidden bg-slate-50 p-2.5 text-slate-700 lg:flex lg:flex-col lg:items-start lg:justify-start lg:gap-5">
          <div
            class="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5"
            :style="{ backgroundImage: `url(${mapImage})` }"
          ></div>

          <div class="relative z-10 flex w-full items-center gap-3">
            <img
              src="../../images/header-section-images/bannerlogo.png"
              alt="eKikoba banner logo"
              class="h-12 w-12 object-contain drop-shadow-sm"
            />
            <div class="flex flex-col leading-none">
              <span class="text-[1.4rem] font-black tracking-[-0.06em] text-slate-900 lowercase">ekikoba</span>
              <span class="mt-1 text-[0.52rem] font-bold tracking-[0.18em] text-emerald-700">Together We Grow</span>
            </div>
          </div>

          <div class="relative z-10 flex w-full items-start justify-center pt-25">
            <div class="space-y-2 text-center">
              <h1 class="mx-auto max-w-xs text-[1.4rem] font-black leading-[1.1] tracking-[-0.05em] text-slate-900">
                <span class="text-emerald-800">Reset</span> your access.
              </h1>
              <p class="mx-auto max-w-xs text-[0.72rem] leading-4 text-slate-600">
                We’ll help you recover your account and get back to building momentum with your
                <span class="font-semibold text-emerald-800">community</span>.
              </p>
            </div>
          </div>
        </div>

        <div class="flex items-center justify-center bg-white p-2.5 sm:p-3 lg:p-4">
          <div class="w-full max-w-sm">
            <div class="mb-4 px-1">
              <div class="h-1.5 w-full rounded-none bg-emerald-800"></div>
            </div>

            <div class="mb-4 text-left">
              <span class="inline-flex border border-[#0f5a3d] bg-[#0f5a3d] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white">
                Reset password
              </span>
            </div>

            <div class="mb-3 rounded-none border border-emerald-100 bg-emerald-50 p-2.5 text-[10px] leading-5 text-slate-600">
              Enter the phone number linked to your account and we’ll send a secure reset code.
            </div>

            <form class="space-y-2.5" @submit.prevent="submitForm">
              <div>
                <label for="phone" class="mb-1 block text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-600">Phone number</label>
                <div class="relative">
                  <span class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2.5 text-slate-400">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M3 5.5A2.5 2.5 0 015.5 3h2.2a1.5 1.5 0 011.44 1.08l.96 3.74a1.5 1.5 0 01-.82 1.75l-1.57.7a12.7 12.7 0 005.3 5.3l.7-1.57a1.5 1.5 0 011.75-.83l3.75.97A1.5 1.5 0 0121 16.3v2.2A2.5 2.5 0 0118.5 21h-1.8C12.75 21 3 11.25 3 7.3v-1.8z" />
                    </svg>
                  </span>
                  <input
                    id="phone"
                    v-model="form.phone"
                    type="tel"
                    placeholder="071234567"
                    class="w-full rounded-none border border-slate-200 bg-slate-50 py-2.5 pl-9 pr-3 text-sm text-slate-900 placeholder:text-slate-400 transition focus:border-[#0f5a3d] focus:bg-white focus:outline-none focus:ring-0"
                  />
                </div>
              </div>

              <button
                type="submit"
                class="mt-1 w-full cursor-pointer rounded-none bg-[#0f5a3d] px-3 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#0d4a35] focus:outline-none focus:ring-0"
              >
                Send reset code
              </button>
            </form>

            <div class="mt-4 space-y-1 text-center text-[10px] text-slate-500">
              <div>
                Remembered your password?
                <RouterLink to="/login" class="ml-1 font-semibold text-emerald-600 transition hover:text-emerald-700">Back to login</RouterLink>
              </div>
              <div>
                Need an account?
                <RouterLink to="/" class="ml-1 font-semibold text-emerald-600 transition hover:text-emerald-700">Create one</RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import mapImage from '../../images/header-section-images/map.jpg'

const form = reactive({
  phone: '',
})

const submitForm = () => {
  console.log('Forgot password request submitted:', form)
}
</script>
