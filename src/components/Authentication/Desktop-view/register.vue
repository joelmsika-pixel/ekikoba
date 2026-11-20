<template>
  <div class="min-h-screen bg-slate-100">
    <div class="mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center px-3 py-2 sm:px-4">
      <div class="grid w-full max-w-[760px] overflow-hidden rounded-[18px] border border-slate-200 bg-white shadow-[0_12px_30px_rgba(15,23,42,0.08)] lg:grid-cols-[0.8fr_1.2fr]">
        <!-- Left panel -->
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
                <span class="text-emerald-800">Grow</span> your savings.
              </h1>
              <p class="mx-auto max-w-xs text-[0.72rem] leading-4 text-slate-600">
                A simple place to save together and build
                <span class="font-semibold text-emerald-800">momentum</span>
                with your community.
              </p>
            </div>
          </div>
        </div>

        <!-- Right panel -->
        <div class="flex items-center justify-center bg-white p-2.5 sm:p-3 lg:p-4">
          <div class="w-full max-w-sm">
            <div class="mb-4 px-1">
              <div class="h-1.5 w-full rounded-none bg-emerald-800"></div>
            </div>

            <div class="mb-4 text-left">
              <span class="inline-flex border border-[#0f5a3d] bg-[#0f5a3d] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white">
                Register here
              </span>
            </div>

            <div class="mb-3">
              <div class="mb-2 flex items-center justify-between text-[9px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                <span>Step {{ currentStep }} of 3</span>
                <span>{{ stepTitles[currentStep - 1] }}</span>
              </div>

              <div class="flex items-center gap-2">
                <div
                  v-for="(stepLabel, index) in stepTitles"
                  :key="stepLabel"
                  class="flex items-center"
                >
                  <div class="relative flex items-center justify-center">
                    <div
                      class="flex h-6 w-6 items-center justify-center text-[10px] font-bold transition-all duration-300 ease-out"
                      :class="currentStep >= index + 1
                        ? 'rounded-full bg-[#0f5a3d] text-white shadow-[0_0_0_4px_rgba(15,90,61,0.12)] scale-100'
                        : 'rounded-full bg-slate-200 text-slate-400 scale-90'"
                    >
                      {{ index + 1 }}
                    </div>
                    <div
                      v-if="currentStep === index + 1"
                      class="absolute inset-0 rounded-full border border-emerald-200 animate-ping"
                    ></div>
                  </div>

                  <div
                    v-if="index < stepTitles.length - 1"
                    class="mx-1 h-px w-5 transition-all duration-300"
                    :class="currentStep > index + 1 ? 'bg-[#0f5a3d]' : 'bg-slate-200'"
                  ></div>
                </div>
              </div>
            </div>

            <form class="space-y-2" @submit.prevent="submitForm">
              <transition name="slide-step" mode="out-in">
                <div v-if="currentStep === 1" :key="1" class="space-y-2">
                  <div>
                    <label for="fullName" class="mb-1 block text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-600">Full name</label>
                    <div class="relative">
                      <span class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2.5 text-slate-400">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zm-8 9a4 4 0 014-4h0a4 4 0 014 4v1H8v-1z" />
                        </svg>
                      </span>
                      <input
                        id="fullName"
                        v-model="form.fullName"
                        type="text"
                        placeholder="Enter your full name"
                        @input="handleFieldInput('fullName', !!form.fullName.trim())"
                        :class="fieldInputClass('fullName')"
                        class="w-full rounded-none border border-slate-200 bg-slate-50 py-2.5 pl-9 pr-3 text-sm text-slate-900 placeholder:text-slate-400 transition focus:border-[#0f5a3d] focus:bg-white focus:outline-none focus:ring-0"
                      />
                    </div>
                  </div>

                  <div>
                    <label for="email" class="mb-1 block text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-600">Email address</label>
                    <div class="relative">
                      <span class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2.5 text-slate-400">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M4 7.5A2.5 2.5 0 016.5 5h11A2.5 2.5 0 0120 7.5v9A2.5 2.5 0 0117.5 19h-11A2.5 2.5 0 014 16.5v-9zm0 0l8 6 8-6" />
                        </svg>
                      </span>
                      <input
                        id="email"
                        v-model="form.email"
                        type="email"
                        placeholder="name@example.com"
                        @input="form.email = sanitizeEmail(form.email); handleFieldInput('email', isValidEmail(form.email))"
                        :class="fieldInputClass('email')"
                        class="w-full rounded-none border border-slate-200 bg-slate-50 py-2.5 pl-9 pr-3 text-sm text-slate-900 placeholder:text-slate-400 transition focus:border-[#0f5a3d] focus:bg-white focus:outline-none focus:ring-0"
                      />
                    </div>
                    <div v-if="form.email || isEmailTouched" class="mt-1 flex flex-wrap items-center gap-1 text-[7px] text-slate-600">
                      <div
                        v-for="rule in emailRules"
                        :key="rule.label"
                        class="flex items-center gap-1 rounded-full border px-1.5 py-0.5 whitespace-nowrap"
                        :class="rule.valid ? 'border-emerald-200 bg-emerald-50 text-emerald-700' : 'border-slate-200 bg-slate-50 text-slate-500'"
                      >
                        <span
                          :class="rule.valid ? 'bg-emerald-600 text-white' : 'bg-slate-200 text-slate-500'"
                          class="inline-flex h-3 w-3 items-center justify-center rounded-full text-[7px] font-bold"
                        >
                          {{ rule.valid ? '✓' : '•' }}
                        </span>
                        <span>{{ rule.label }}</span>
                      </div>
                    </div>
                  </div>

                </div>

                <div v-else-if="currentStep === 2" :key="2" class="space-y-2">
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
                        placeholder="+254 712 345 678"
                        @input="handleFieldInput('phone', !!form.phone.trim())"
                        :class="fieldInputClass('phone')"
                        class="w-full rounded-none border border-slate-200 bg-slate-50 py-2.5 pl-9 pr-3 text-sm text-slate-900 placeholder:text-slate-400 transition focus:border-[#0f5a3d] focus:bg-white focus:outline-none focus:ring-0"
                      />
                    </div>
                  </div>

                  <div class="space-y-2.5">
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
                          @input="handleFieldInput('password', !!form.password && passwordRules.every((rule) => rule.valid))"
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

                    <div>
                      <label for="confirmPassword" class="mb-1 block text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-600">Confirm password</label>
                      <div class="relative">
                        <span class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2.5 text-slate-400">
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M7 10V8a5 5 0 0110 0v2M6 10h12a2 2 0 012 2v7a2 2 0 01-2 2H6a2 2 0 01-2-2v-7a2 2 0 012-2z" />
                          </svg>
                        </span>
                        <input
                          id="confirmPassword"
                          v-model="form.confirmPassword"
                          type="text"
                          placeholder="••••••••"
                          @input="handleFieldInput('confirmPassword', !!form.confirmPassword && form.password === form.confirmPassword)"
                          :class="fieldInputClass('confirmPassword')"
                          class="w-full rounded-none border border-slate-200 bg-slate-50 py-2.5 pl-9 pr-3 text-sm text-slate-900 placeholder:text-slate-400 transition focus:border-[#0f5a3d] focus:bg-white focus:outline-none focus:ring-0"
                        />
                      </div>
                    </div>
                  </div>

                  <div v-if="form.password || isPasswordTouched" class="mt-1 flex flex-wrap items-center gap-1 text-[7px] text-slate-600">
                    <div
                      v-for="rule in passwordRules"
                      :key="rule.label"
                      class="flex items-center gap-1 rounded-full border px-1.5 py-0.5 whitespace-nowrap"
                      :class="rule.valid ? 'border-emerald-200 bg-emerald-50 text-emerald-700' : 'border-slate-200 bg-slate-50 text-slate-500'"
                    >
                      <span
                        :class="rule.valid ? 'bg-emerald-600 text-white' : 'bg-slate-200 text-slate-500'"
                        class="inline-flex h-3 w-3 items-center justify-center rounded-full text-[7px] font-bold"
                      >
                        {{ rule.valid ? '✓' : '•' }}
                      </span>
                      <span>{{ rule.label }}</span>
                    </div>
                  </div>
                </div>

                <div v-else :key="3" class="space-y-2">
                  <div class="rounded-none border border-slate-200 bg-slate-50 p-2.5 shadow-[0_8px_18px_rgba(15,23,42,0.03)]">
                    <div class="mb-2 flex items-center justify-between">
                      <p class="text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-500">Review</p>
                      <span class="inline-flex items-center gap-1 rounded-full border border-emerald-200 bg-emerald-50 px-1.5 py-0.5 text-[7px] font-semibold text-emerald-700">
                        <span class="h-1.5 w-1.5 rounded-full bg-emerald-600"></span>
                        Ready to create
                      </span>
                    </div>

                    <div class="space-y-2 text-[11px] text-slate-600">
                      <div class="flex items-center gap-2 rounded-none border border-slate-200 bg-white p-2">
                        <span class="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-50 text-emerald-700">
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zm-8 9a4 4 0 014-4h0a4 4 0 014 4v1H8v-1z" />
                          </svg>
                        </span>
                        <div class="min-w-0 flex-1">
                          <div class="text-[8px] uppercase tracking-[0.12em] text-slate-400">Name</div>
                          <div class="truncate font-medium text-slate-800">{{ form.fullName || 'Not entered' }}</div>
                        </div>
                      </div>

                      <div class="flex items-center gap-2 rounded-none border border-slate-200 bg-white p-2">
                        <span class="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-50 text-emerald-700">
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4 7.5A2.5 2.5 0 016.5 5h11A2.5 2.5 0 0120 7.5v9A2.5 2.5 0 0117.5 19h-11A2.5 2.5 0 014 16.5v-9zm0 0l8 6 8-6" />
                          </svg>
                        </span>
                        <div class="min-w-0 flex-1">
                          <div class="text-[8px] uppercase tracking-[0.12em] text-slate-400">Email</div>
                          <div class="truncate font-medium text-slate-800">{{ form.email || 'Not entered' }}</div>
                        </div>
                      </div>

                      <div class="flex items-center gap-2 rounded-none border border-slate-200 bg-white p-2">
                        <span class="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-50 text-emerald-700">
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 5.5A2.5 2.5 0 015.5 3h2.2a1.5 1.5 0 011.44 1.08l.96 3.74a1.5 1.5 0 01-.82 1.75l-1.57.7a12.7 12.7 0 005.3 5.3l.7-1.57a1.5 1.5 0 011.75-.83l3.75.97A1.5 1.5 0 0121 16.3v2.2A2.5 2.5 0 0118.5 21h-1.8C12.75 21 3 11.25 3 7.3v-1.8z" />
                          </svg>
                        </span>
                        <div class="min-w-0 flex-1">
                          <div class="text-[8px] uppercase tracking-[0.12em] text-slate-400">Phone</div>
                          <div class="truncate font-medium text-slate-800">{{ form.phone || 'Not entered' }}</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="flex items-center justify-between gap-2 pt-0.5 text-[10px] text-slate-500">
                    <label class="inline-flex items-center gap-2">
                      <input
                        v-model="form.acceptedTerms"
                        type="checkbox"
                        required
                        class="h-4 w-4 cursor-pointer rounded-none border-slate-300 bg-white accent-[#0f5a3d] transition duration-150 ease-out focus:ring-0"
                      />
                      <span>I agree to the</span>
                    </label>
                    <RouterLink to="/legal-policies" class="cursor-pointer font-medium text-emerald-700 underline underline-offset-2 transition hover:text-[#0f5a3d]">Legal Policies</RouterLink>
                    <RouterLink to="/forgot-password" class="cursor-pointer font-medium text-emerald-700 transition hover:text-[#0f5a3d]">Forgot password?</RouterLink>
                  </div>
                </div>
              </transition>

              <div class="flex items-center gap-2 pt-1">
                <button
                  v-if="currentStep > 1"
                  type="button"
                  @click="prevStep"
                  class="w-1/3 cursor-pointer rounded-none border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-50 focus:outline-none focus:ring-0"
                >
                  Back
                </button>
                <button
                  v-if="currentStep < 3"
                  type="button"
                  @click="nextStep"
                  class="flex-1 cursor-pointer rounded-none bg-[#0f5a3d] px-3 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#0d4a35] focus:outline-none focus:ring-0"
                >
                  Next
                </button>
                <button
                  v-else
                  type="submit"
                  :disabled="!form.acceptedTerms"
                  :class="!form.acceptedTerms ? 'cursor-not-allowed bg-slate-300 text-slate-500 hover:bg-slate-300' : 'cursor-pointer bg-[#0f5a3d] text-white hover:bg-[#0d4a35]'"
                  class="flex-1 rounded-none px-3 py-2.5 text-sm font-semibold shadow-sm transition focus:outline-none focus:ring-0"
                >
                  Create account
                </button>
              </div>
            </form>

            <div class="mt-2 text-center text-[10px] text-slate-500">
              Already have an account?
              <RouterLink to="/login" class="ml-1 cursor-pointer font-semibold text-emerald-600 transition hover:text-emerald-700">Login here</RouterLink>
            </div>
          </div>
        </div>
      </div>

      <footer class="mt-8 flex flex-col items-center text-center">
        <div class="flex items-center gap-2">
          <span class="text-[7px] font-semibold uppercase tracking-[0.16em] text-slate-600">Developed by</span>
          <img :src="godobLogo" alt="Godob logo" class="h-7 w-20 object-contain" />
        </div>
        <span class="mt-3 text-[9px] font-medium text-slate-400">copyright@{{ currentYear }}</span>
      </footer>
    </div>
  </div>
</template>

<script setup>
import { computed, reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import godobLogo from '../../images/header-section-icons/godob.png'
import mapImage from '../../images/header-section-images/map.jpg'

const router = useRouter()
const currentYear = new Date().getFullYear()

const form = reactive({
  fullName: '',
  email: '',
  phone: '',
  password: '',
  confirmPassword: '',
  acceptedTerms: false
})

const showPassword = ref(false)
const isPasswordTouched = ref(false)
const isEmailTouched = ref(false)
const currentStep = ref(1)
const stepTitles = ['Profile', 'Security', 'Review']
const fieldStates = reactive({
  fullName: 'idle',
  email: 'idle',
  phone: 'idle',
  password: 'idle',
  confirmPassword: 'idle'
})
const fieldTimers = {}

const sanitizeEmail = (value = '') => value.replace(/\s+/g, '').trim()

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
  if (field === 'email') isEmailTouched.value = true
  if (field === 'phone' || field === 'password' || field === 'confirmPassword') isPasswordTouched.value = true

  if (isValid) {
    setFieldState(field, 'success')
    return
  }

  setFieldState(field, 'error')
}

const isValidEmail = (value = '') => {
  const trimmed = String(value || '').trim()

  if (!trimmed || trimmed.includes(' ') || trimmed.startsWith('@') || trimmed.endsWith('@')) {
    return false
  }

  const parts = trimmed.split('@')
  if (parts.length !== 2) {
    return false
  }

  const [localPart, domainPart] = parts
  if (!localPart || !domainPart) {
    return false
  }

  if (/^\d+$/.test(localPart)) {
    return false
  }

  if (!/^[A-Za-z0-9._%+-]+$/.test(localPart)) {
    return false
  }

  if (!/^[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(domainPart)) {
    return false
  }

  return true
}

const commonPasswords = [
  '12345678',
  'password123',
  'password',
  'qwerty123',
  'welcome123',
  'changeme',
  'letmein'
]

const emailRules = computed(() => {
  const value = sanitizeEmail(form.email)
  const parts = value.split('@')
  const localPart = parts[0] || ''
  const domainPart = parts[1] || ''

  return [
    { label: 'Contains @', valid: value.includes('@') },
    { label: 'No spaces', valid: !value.includes(' ') },
    { label: 'Name before @', valid: localPart.length > 0 },
    { label: 'Letters in name', valid: /[A-Za-z]/.test(localPart) },
    { label: 'Not only numbers', valid: !/^\d+$/.test(localPart) },
    { label: 'Valid domain', valid: /^[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(domainPart) },
    { label: 'Single @', valid: parts.length === 2 },
    { label: 'Proper format', valid: isValidEmail(value) }
  ]
})

const passwordRules = computed(() => {
  const value = form.password || ''
  const normalized = value.toLowerCase()
  const hasMinLength = value.length >= 12
  const hasUppercase = /[A-Z]/.test(value)
  const hasLowercase = /[a-z]/.test(value)
  const hasNumber = /\d/.test(value)
  const hasSpecial = /[!@#$%]/.test(value)
  const hasNoName = !normalized.includes((form.fullName || '').trim().toLowerCase())
  const hasNoEmail = !normalized.includes((form.email || '').trim().toLowerCase().replace(/\s+/g, ''))
  const hasNoPhone = !normalized.includes((form.phone || '').replace(/\D/g, '').toLowerCase())
  const isCommon = commonPasswords.some((entry) => normalized.includes(entry))

  return [
    { label: '12+ chars', valid: hasMinLength },
    { label: 'Uppercase', valid: hasUppercase },
    { label: 'Lowercase', valid: hasLowercase },
    { label: 'Number', valid: hasNumber },
    { label: 'Symbol', valid: hasSpecial },
    { label: 'Not common', valid: !isCommon }
  ]
})

const nextStep = () => {
  if (currentStep.value === 1) {
    isEmailTouched.value = true
    const validName = !!form.fullName.trim()
    const validEmail = isValidEmail(form.email)

    setFieldState('fullName', validName ? 'success' : 'error')
    setFieldState('email', validEmail ? 'success' : 'error')

    if (!validName || !validEmail) return
  }

  if (currentStep.value === 2) {
    isPasswordTouched.value = true
    const validPhone = !!form.phone.trim()
    const validPassword = passwordRules.value.every((rule) => rule.valid)
    const validConfirm = !!form.password && form.password === form.confirmPassword

    setFieldState('phone', validPhone ? 'success' : 'error')
    setFieldState('password', validPassword ? 'success' : 'error')
    setFieldState('confirmPassword', validConfirm ? 'success' : 'error')

    if (!validPhone || !validPassword || !validConfirm) return
  }

  if (currentStep.value === 3 && !form.acceptedTerms) {
    return
  }

  if (currentStep.value < 3) currentStep.value += 1
}

const prevStep = () => {
  if (currentStep.value > 1) currentStep.value -= 1
}

const submitForm = () => {
  isEmailTouched.value = true
  isPasswordTouched.value = true

  const validName = !!form.fullName.trim()
  const validEmail = isValidEmail(form.email)
  const validPhone = !!form.phone.trim()
  const validPassword = passwordRules.value.every((rule) => rule.valid)
  const validConfirm = !!form.password && form.password === form.confirmPassword
  const validTerms = !!form.acceptedTerms

  if (!validTerms) {
    return
  }

  if (!validName || !validEmail || !validPhone || !validPassword || !validConfirm) {
    setFieldState('fullName', validName ? 'success' : 'error')
    setFieldState('email', validEmail ? 'success' : 'error')
    setFieldState('phone', validPhone ? 'success' : 'error')
    setFieldState('password', validPassword ? 'success' : 'error')
    setFieldState('confirmPassword', validConfirm ? 'success' : 'error')
    return
  }

  console.log('Register form submitted:', form)
  router.push('/login')
}
</script>

<style scoped>
.slide-step-enter-active,
.slide-step-leave-active {
  transition: all 0.35s ease;
}

.slide-step-enter-from {
  opacity: 0;
  transform: translateX(20px);
}

.slide-step-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}

.slide-step-enter-to,
.slide-step-leave-from {
  opacity: 1;
  transform: translateX(0);
}

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
