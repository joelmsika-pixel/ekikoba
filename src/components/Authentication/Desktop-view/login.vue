<template>
  <div class="min-h-screen bg-slate-100">
    <div class="mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center px-3 py-2 sm:px-4">
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
                <span class="text-emerald-800">Welcome</span> back.
              </h1>
              <p class="mx-auto max-w-xs text-[0.72rem] leading-4 text-slate-600">
                Sign in to continue building momentum with your
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
                Member login
              </span>
            </div>

            <form class="space-y-2.5" @submit.prevent="submitForm">
              <div>
                <label for="groupId" class="mb-1 block text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-600">Group ID</label>
                <input
                  id="groupId"
                  v-model="form.groupId"
                  type="text"
                  placeholder="Enter group ID"
                  @input="handleFieldInput('groupId', !!form.groupId.trim())"
                  :class="fieldInputClass('groupId')"
                  class="w-full rounded-none border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 transition focus:border-[#0f5a3d] focus:bg-white focus:outline-none focus:ring-0"
                />
              </div>

              <div>
                <label for="password" class="mb-1 block text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-600">Password</label>
                <div class="relative w-full">
                  <span class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2.5 text-slate-400">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M7 10V8a5 5 0 0110 0v2M6 10h12a2 2 0 012 2v7a2 2 0 01-2 2H6a2 2 0 01-2-2v-7a2 2 0 012-2z" />
                    </svg>
                  </span>
                  <input
                    id="password"
                    v-model="form.password"
                    :type="showPassword ? 'text' : 'password'"
                    placeholder="••••••••"
                    @input="handleFieldInput('password', form.password.trim().length >= 8)"
                    :class="fieldInputClass('password')"
                    class="w-full rounded-none border border-slate-200 bg-slate-50 py-2.5 pl-9 pr-9 text-sm text-slate-900 placeholder:text-slate-400 transition focus:border-[#0f5a3d] focus:bg-white focus:outline-none focus:ring-0"
                  />
                  <button
                    type="button"
                    class="absolute inset-y-0 right-2 flex cursor-pointer items-center text-slate-500 hover:text-slate-700"
                    @click="showPassword = !showPassword"
                    aria-label="Toggle password visibility"
                  >
                    <svg v-if="!showPassword" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12s3.75-6.75 9.75-6.75S21.75 12 21.75 12 18 18.75 12 18.75 2.25 12 2.25 12Z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                    <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M3 3l18 18" />
                      <path stroke-linecap="round" stroke-linejoin="round" d="M10.58 10.58A2 2 0 0013.42 13.42M9.88 5.08A10.94 10.94 0 0112 5c5.5 0 9.5 7 9.5 7a17.96 17.96 0 01-4.05 5.1M6.68 6.68A17.86 17.86 0 002.5 12S6.5 19 12 19c1.67 0 3.17-.38 4.46-1.03" />
                    </svg>
                  </button>
                </div>
              </div>

              <div class="flex items-center justify-between pt-0.5 text-[10px] text-slate-500">
                <label class="inline-flex items-center gap-2">
                  <input type="checkbox" class="h-4 w-4 cursor-pointer rounded-none border-slate-300 bg-white accent-[#0f5a3d] focus:ring-0" />
                  <span>Remember me</span>
                </label>
                <RouterLink to="/forgot-password" class="font-medium text-emerald-700 transition hover:text-[#0d4a35]">Forgot password?</RouterLink>
              </div>

              <button
                type="submit"
                class="mt-1 w-full cursor-pointer rounded-none bg-[#0f5a3d] px-3 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#0d4a35] focus:outline-none focus:ring-0"
              >
                Sign in
              </button>
            </form>

            <div class="mt-4 text-center text-[10px] text-slate-500">
              Don’t have an account?
              <RouterLink to="/" class="ml-1 font-semibold text-emerald-600 transition hover:text-emerald-700">Create one</RouterLink>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import mapImage from '../../images/header-section-images/map.jpg'

const router = useRouter()

const form = reactive({
  groupId: '',
  password: '',
})

const showPassword = ref(false)
const fieldStates = reactive({
  groupId: 'idle',
  password: 'idle'
})
const fieldTimers = {}

const setFieldState = (field, state) => {
  fieldStates[field] = state

  if (fieldTimers[field]) {
    clearTimeout(fieldTimers[field])
  }

  if (state === 'success') {
    fieldTimers[field] = setTimeout(() => {
      fieldStates[field] = 'idle'
    }, 1200)
  }
}

const fieldInputClass = (field) => ({
  'field-success': fieldStates[field] === 'success',
  'field-error': fieldStates[field] === 'error'
})

const handleFieldInput = (field, isValid) => {
  if (isValid) {
    setFieldState(field, 'success')
    return
  }

  setFieldState(field, 'error')
}

const submitForm = () => {
  const validGroupId = !!form.groupId.trim()
  const validPassword = form.password.trim().length >= 8

  setFieldState('groupId', validGroupId ? 'success' : 'error')
  setFieldState('password', validPassword ? 'success' : 'error')

  if (!validGroupId || !validPassword) {
    return
  }

  console.log('Login form submitted:', form)
  router.push('/dashboard')
}
</script>

<style scoped>
.field-success {
  border-color: #16a34a !important;
  background-color: #f0fdf4 !important;
  box-shadow: 0 0 0 1px rgba(22, 163, 74, 0.14);
  transition: all 0.2s ease;
}

.field-error {
  border-color: #dc2626 !important;
  background-color: #fef2f2 !important;
  box-shadow: 0 0 0 1px rgba(220, 38, 38, 0.18);
  animation: shake 0.38s cubic-bezier(0.36, 0.07, 0.19, 0.97) 2;
}

@keyframes shake {
  0%,
  100% {
    transform: translateX(0);
  }
  15% {
    transform: translateX(-6px);
  }
  30% {
    transform: translateX(6px);
  }
  45% {
    transform: translateX(-5px);
  }
  60% {
    transform: translateX(5px);
  }
  75% {
    transform: translateX(-3px);
  }
  90% {
    transform: translateX(3px);
  }
}
</style>
