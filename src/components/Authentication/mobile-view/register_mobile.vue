<template>
  <DesktopRegister v-if="!isMobile" />

  <div
    v-else
    class="relative flex h-[100dvh] flex-col overflow-hidden bg-[#d4ddd8]"
    @touchstart="handleTouchStart"
    @touchmove="handleTouchMove"
    @touchend="handleTouchEnd"
  >
    <div
      v-if="pullDistance > 0"
      class="pointer-events-none absolute left-1/2 top-0 z-50 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border border-emerald-200 bg-white text-[#0f5a3d] shadow-[0_6px_18px_rgba(15,90,61,0.18)]"
      :style="{ transform: `translate(-50%, ${Math.min(pullDistance * 0.45, 28) - 24}px)` }"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5 transition-transform duration-150"
        :class="pullDistance >= refreshThreshold ? 'rotate-180' : ''"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="1.8"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M4 12a8 8 0 0113.66-5.66L20 8.68M20 4v4.68h-4.68M20 12a8 8 0 01-13.66 5.66L4 15.32M4 20v-4.68h4.68" />
      </svg>
    </div>

    <section
      class="relative h-[46vh] w-full shrink-0 overflow-hidden bg-transparent bg-center bg-no-repeat"
      :style="{ backgroundImage: `url(${officialBg})`, backgroundSize: 'cover', backgroundPosition: 'center top' }"
    >
      <div class="absolute inset-0 bg-gradient-to-b from-[rgba(239,248,241,0.04)] via-[rgba(239,248,241,0.16)] to-[#d4ddd8]"></div>

      <img
        :src="mapImage"
        alt="Map"
        class="icon-entrance icon-map absolute bottom-49 left-[30px] h-45 w-55 object-contain opacity-10 sm:h-36 sm:w-36"
      />

      <div class="mobile-brand-block absolute left-5 z-10 flex items-center gap-3">
        <img
          :src="bannerLogo"
          alt="eKikoba logo"
          class="icon-entrance icon-logo h-18 w-18 object-contain sm:h-14 sm:w-14"
        />

        <div class="copy-entrance copy-logo-copy flex flex-col leading-[0.9]">
          <span class="mobile-brand-text font-black tracking-[-0.06em] text-slate-900 lowercase">
            <span class="inline-block">ek</span>
            <span class="relative inline-block">
              i
              <span class="absolute left-[0.16em] top-[-1px] h-[0.23em] w-[0.26em] -translate-x-1/2 rounded-full bg-[#4a7c5a]"></span>
            </span>
            <span class="inline-block">koba</span>
          </span>
          <span class="mobile-tagline mt-1 font-bold tracking-[0.18em] text-emerald-700">Together We Grow</span>
        </div>
      </div>

      <div class="mobile-hero-copy absolute left-5 z-10 max-w-[235px] text-left">
        <h2 class="mobile-hero-heading copy-entrance copy-heading font-bold leading-[0.95] tracking-[-0.06em] text-slate-900">
          <span class="inline-block">Grow</span>
          <span class="ml-2 inline-block">your</span>
          <span class="text-[#4a7c5a]">savings</span>
        </h2>
        <p class="mobile-hero-description copy-entrance copy-description mt-3 max-w-[210px] font-semibold leading-[1.5] tracking-[0.01em] text-slate-800/90">
          A simple place to save together and build a better future with your community
        </p>
      </div>

      <div class="absolute bottom-[100px] right-[-32px]">
        <img
          :src="woodIcon"
          alt="Wood icon"
          class="icon-entrance icon-wood h-60 w-60 object-contain opacity-95 sm:h-24 sm:w-24"
        />

        <img
          :src="bottleCash"
          alt="Bottle cash"
          class="icon-entrance icon-bottle absolute bottom-[36px] right-[34px] h-37 w-37 object-contain sm:h-24 sm:w-24"
        />
      </div>
    </section>

    <div class="mobile-form-area relative z-10 flex flex-1 flex-col px-0.5 pt-1">
      <div
        class="mobile-form-card mx-auto flex w-full max-w-[420px] flex-1 flex-col rounded-t-[18px] border-x border-t border-white/80 bg-white p-4 shadow-[0_-10px_24px_rgba(15,90,61,0.10)]"
        :style="{ backgroundImage: `url(${meshDeco})`, backgroundSize: '100% 120px', backgroundPosition: 'bottom center', backgroundRepeat: 'no-repeat' }"
      >
        <div class="mb-4 text-left">
          <span class="inline-flex border border-[#0f5a3d] bg-[#0f5a3d] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white">
            Register here
          </span>
        </div>

        <div class="mobile-stepper mb-4 flex items-center justify-center gap-2">
          <div v-for="(stepLabel, index) in stepTitles" :key="stepLabel" class="flex items-start">
            <div class="relative flex flex-col items-center">
              <div class="relative flex items-center justify-center">
                <div
                  class="flex h-6 w-6 items-center justify-center text-[10px] font-bold transition-all duration-300 ease-out"
                  :class="currentStep >= index + 1
                    ? 'rounded-full bg-[#0f5a3d] text-white shadow-[0_0_0_4px_rgba(15,90,61,0.12)] scale-100'
                    : 'rounded-full bg-slate-200 text-slate-400 scale-90'"
                >
                  {{ index + 1 }}
                </div>
                <div v-if="currentStep === index + 1" class="absolute inset-0 rounded-full border border-emerald-200 animate-ping"></div>
              </div>
              <span class="mt-1 whitespace-nowrap text-[8px] font-semibold uppercase tracking-[0.08em] text-slate-500">
                {{ stepLabel }}
              </span>
            </div>

            <div
              v-if="index < stepTitles.length - 1"
              class="mobile-step-line step-line mx-1 mt-3 h-1.5 w-10 overflow-hidden rounded-full bg-slate-200 sm:w-14"
            >
              <div
                class="step-line-fill h-full rounded-full bg-[#0f5a3d]"
                :class="currentStep > index + 1 ? 'w-full' : 'w-0'"
              ></div>
            </div>
          </div>
        </div>

        <form class="space-y-3" @submit.prevent="submitForm">
          <div
            class="step-stage"
            :class="{
              'step-stage-details': currentStep === 1,
              'step-stage-verification': currentStep === 2,
              'step-stage-confirmation': currentStep === 3,
              'step-stage-complete': currentStep === 4
            }"
          >
            <transition name="slide-step" mode="out-in">
            <div v-if="currentStep === 1" :key="1" class="space-y-3">
              <div>
                <label for="mobileFullName" class="mb-1.5 block text-[8px] font-bold uppercase tracking-[0.16em] text-slate-600">Full name</label>
                <div class="relative">
                  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" class="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zm-8 9a4 4 0 014-4h0a4 4 0 014 4v1H8v-1z" />
                  </svg>
                  <input
                    id="mobileFullName"
                    v-model="form.fullName"
                    type="text"
                    placeholder="Enter your full name"
                    @input="handleFieldInput('fullName', !!form.fullName.trim())"
                    :class="fieldInputClass('fullName')"
                    class="w-full rounded-none border border-slate-200 bg-slate-50 py-2.75 pl-9 pr-3 text-[12px] text-slate-900 outline-none transition focus:border-[#2d6a4f] focus:bg-white"
                  />
                </div>
              </div>

              <div>
                <label for="mobileEmail" class="mb-1.5 block text-[8px] font-bold uppercase tracking-[0.16em] text-slate-600">Email</label>
                <div class="relative">
                  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" class="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4 7.5A2.5 2.5 0 016.5 5h11A2.5 2.5 0 0120 7.5v9A2.5 2.5 0 0117.5 19h-11A2.5 2.5 0 014 16.5v-9zm0 0l8 6 8-6" />
                  </svg>
                  <input
                    id="mobileEmail"
                    v-model="form.email"
                    type="email"
                    placeholder="name@example.com"
                    @input="form.email = sanitizeEmail(form.email); handleFieldInput('email', isValidEmail(form.email))"
                    :class="fieldInputClass('email')"
                    class="w-full rounded-none border border-slate-200 bg-slate-50 py-2.75 pl-9 pr-3 text-[12px] text-slate-900 outline-none transition focus:border-[#2d6a4f] focus:bg-white"
                  />
                </div>
              </div>
            </div>

            <div v-else-if="currentStep === 2" :key="2" class="space-y-3">
              <div>
                <label for="mobilePhone" class="mb-1.5 block text-[8px] font-bold uppercase tracking-[0.16em] text-slate-600">Phone number</label>
                <div class="relative">
                  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" class="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 5.5A2.5 2.5 0 015.5 3h2.2a1.5 1.5 0 011.44 1.08l.96 3.74a1.5 1.5 0 01-.82 1.75l-1.57.7a12.7 12.7 0 005.3 5.3l.7-1.57a1.5 1.5 0 011.75-.83l3.75.97A1.5 1.5 0 0121 16.3v2.2A2.5 2.5 0 0118.5 21h-1.8C12.75 21 3 11.25 3 7.3v-1.8z" />
                  </svg>
                  <input
                    id="mobilePhone"
                    v-model="form.phone"
                    type="tel"
                    placeholder="+254 712 345 678"
                    @input="handleFieldInput('phone', !!form.phone.trim())"
                    :class="fieldInputClass('phone')"
                    class="w-full rounded-none border border-slate-200 bg-slate-50 py-2.75 pl-9 pr-3 text-[12px] text-slate-900 outline-none transition focus:border-[#2d6a4f] focus:bg-white"
                  />
                </div>
              </div>

              <div>
                <label for="mobilePassword" class="mb-1.5 block text-[8px] font-bold uppercase tracking-[0.16em] text-slate-600">Password</label>
                <div class="relative">
                  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" class="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                    <rect x="4" y="10" width="16" height="11" rx="2" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8 10V7a4 4 0 118 0v3m-4 5v2" />
                  </svg>
                  <input
                    id="mobilePassword"
                    v-model="form.password"
                    :type="showPassword ? 'text' : 'password'"
                    placeholder="Create a password"
                    @input="handleFieldInput('password', !!form.password && passwordRules.every((rule) => rule.valid))"
                    :class="fieldInputClass('password')"
                    class="w-full rounded-none border border-slate-200 bg-slate-50 py-2.75 pl-9 pr-10 text-[12px] text-slate-900 outline-none transition focus:border-[#2d6a4f] focus:bg-white"
                  />
                  <button
                    type="button"
                    class="absolute inset-y-0 right-3 flex items-center text-slate-500"
                    @click="showPassword = !showPassword"
                  >
                    <svg v-if="!showPassword" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12s3.75-6.75 9.75-6.75S21.75 12 21.75 12 18 18.75 12 18.75 2.25 12 2.25 12Z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                    <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M3 3l18 18" />
                      <path stroke-linecap="round" stroke-linejoin="round" d="M10.58 10.58A2 2 0 0013.42 13.42M9.88 5.08A10.94 10.94 0 0112 5c5.5 0 9.5 7 9.5 7a17.96 17.96 0 01-4.05 5.1M6.68 6.68A17.86 17.86 0 002.5 12S6.5 19 12 19c1.67 0 3.17-.38 4.46-1.03" />
                    </svg>
                  </button>
                </div>
              </div>

            </div>

            <div v-else-if="currentStep === 3" :key="3" class="space-y-3">
              <div>
                <label for="mobileConfirmPassword" class="mb-1.5 block text-[8px] font-bold uppercase tracking-[0.16em] text-slate-600">Confirm password</label>
                <div class="relative">
                  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" class="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                    <rect x="4" y="10" width="16" height="11" rx="2" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8 10V7a4 4 0 118 0v3m-4 5v2" />
                  </svg>
                  <input
                    id="mobileConfirmPassword"
                    v-model="form.confirmPassword"
                    type="text"
                    placeholder="Confirm your password"
                    @input="handleFieldInput('confirmPassword', !!form.confirmPassword && form.password === form.confirmPassword)"
                    :class="fieldInputClass('confirmPassword')"
                    class="w-full rounded-none border border-slate-200 bg-slate-50 py-2.75 pl-9 pr-3 text-[12px] text-slate-900 outline-none transition focus:border-[#2d6a4f] focus:bg-white"
                  />
                </div>
              </div>

              <div class="flex flex-wrap items-center gap-1 text-[10px] text-slate-500">
                <label class="inline-flex items-center gap-2">
                  <input v-model="form.acceptedTerms" type="checkbox" required class="h-4 w-4 cursor-pointer rounded border-slate-300 bg-white accent-[#0f5a3d]" />
                  <span>I agree to the</span>
                </label>
                <RouterLink
                  to="/legal-policies"
                  class="font-semibold text-emerald-700 underline underline-offset-2 transition hover:text-[#0d4a35]"
                >
                  Legal Policies
                </RouterLink>
              </div>
            </div>

            <div v-else :key="4" class="flex flex-col items-center justify-center space-y-3 py-8 text-center">
              <div class="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-[#0f5a3d] shadow-[0_0_0_6px_rgba(15,90,61,0.08)]">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5 12.5l4 4L19 6.5" />
                </svg>
              </div>
              <div>
                <h3 class="text-base font-bold text-slate-900">Registration complete</h3>
                <p class="mt-1 text-[11px] leading-5 text-slate-500">Your eKikoba account is ready to use.</p>
              </div>
            </div>
            </transition>
          </div>

          <div class="flex items-center gap-2 pt-1">
            <button
              v-if="currentStep > 1 && currentStep < 4"
              type="button"
              @click="prevStep"
              class="w-1/3 rounded-[12px] border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
            >
              Back
            </button>

            <button
              v-if="currentStep < 3"
              type="button"
              @click="nextStep"
              class="flex-1 rounded-[12px] bg-[#0f5a3d] px-3 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#0d4a35]"
            >
              Next
            </button>

            <button
              v-else-if="currentStep === 3"
              type="submit"
              :disabled="!form.acceptedTerms"
              :class="!form.acceptedTerms ? 'cursor-not-allowed bg-slate-300 text-slate-500 hover:bg-slate-300' : 'cursor-pointer bg-[#0f5a3d] text-white hover:bg-[#0d4a35]'"
              class="flex-1 rounded-[12px] px-3 py-2.5 text-sm font-semibold shadow-sm transition"
            >
              Create account
            </button>

            <button
              v-else
              type="button"
              class="flex-1 rounded-[12px] bg-[#0f5a3d] px-3 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#0d4a35]"
            >
              Done
            </button>
          </div>
        </form>

        <div class="mt-4 text-center text-[10px] text-slate-500">
          Already have an account?
          <RouterLink to="/login" class="ml-1 font-semibold text-emerald-600 transition hover:text-emerald-700">Login here</RouterLink>
        </div>
      </div>
    </div>

    <div class="pointer-events-none absolute inset-x-0 bottom-0 z-20 flex justify-center">
      <div class="icon-entrance icon-godob absolute bottom-[4px] left-1/2 flex -translate-x-1/2 flex-col items-center gap-0.5">
        <div class="flex -translate-y-2 flex-col items-center gap-0.5">
          <span class="whitespace-nowrap text-[7px] font-semibold uppercase tracking-[0.16em] text-slate-600">Developed by</span>
          <img :src="godobLogo" alt="Godob logo" class="h-7 w-20 object-contain" />
        </div>
        <span class="mt-1 whitespace-nowrap text-[9px] font-medium text-slate-400">copyright@{{ currentYear }}</span>
      </div>
    </div>

  </div>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, reactive, ref } from 'vue'
import DesktopRegister from '../Desktop-view/register.vue'
import officialBg from '../../../../../officil.jpg'
import woodIcon from '../../images/header-section-icons/woodicon.png'
import bottleCash from '../../images/header-section-icons/bottlecash.png'
import meshDeco from '../../images/header-section-icons/meshdeco.png'
import godobLogo from '../../images/header-section-icons/godob.png'
import mapImage from '../../images/images-mobile-view/map.png'
import bannerLogo from '../../images/images-mobile-view/bannerlogo.png'

const isMobile = ref(false)
const currentYear = new Date().getFullYear()
const touchStartY = ref(null)
const pullDistance = ref(0)
const refreshThreshold = 90

const handleTouchStart = (event) => {
  const target = event.target

  if (target instanceof Element && target.closest('input, button, textarea, select')) {
    touchStartY.value = null
    return
  }

  touchStartY.value = event.touches[0]?.clientY ?? null
  pullDistance.value = 0
}

const handleTouchMove = (event) => {
  if (touchStartY.value === null) return

  const touchY = event.touches[0]?.clientY ?? touchStartY.value
  pullDistance.value = Math.min(Math.max(touchY - touchStartY.value, 0), refreshThreshold)
}

const handleTouchEnd = (event) => {
  if (touchStartY.value === null) return

  const touchEndY = event.changedTouches[0]?.clientY ?? touchStartY.value
  const distancePulled = touchEndY - touchStartY.value
  touchStartY.value = null

  if (distancePulled >= refreshThreshold && window.scrollY <= 0) {
    window.location.reload()
  }

  pullDistance.value = 0
}

const updateViewport = () => {
  isMobile.value = window.innerWidth < 768
}

onMounted(() => {
  updateViewport()
  window.addEventListener('resize', updateViewport)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateViewport)
})

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
const stepTitles = ['Details', 'Verification', 'Confirmation', 'Complete']
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

  if (fieldTimers[field]) clearTimeout(fieldTimers[field])

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

  if (!trimmed || trimmed.includes(' ') || trimmed.startsWith('@') || trimmed.endsWith('@')) return false

  const parts = trimmed.split('@')
  if (parts.length !== 2) return false

  const [localPart, domainPart] = parts
  if (!localPart || !domainPart) return false

  if (/^\d+$/.test(localPart)) return false
  if (!/^[A-Za-z0-9._%+-]+$/.test(localPart)) return false
  if (!/^[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(domainPart)) return false

  return true
}

const commonPasswords = ['12345678', 'password123', 'password', 'qwerty123', 'welcome123', 'changeme', 'letmein']

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
    { label: 'Not common', valid: !isCommon },
    { label: 'Not personal', valid: hasNoName && hasNoEmail && hasNoPhone }
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

    setFieldState('phone', validPhone ? 'success' : 'error')
    setFieldState('password', validPassword ? 'success' : 'error')

    if (!validPhone || !validPassword) return
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
  if (currentStep.value === 4) return

  isEmailTouched.value = true
  isPasswordTouched.value = true

  const validPassword = passwordRules.value.every((rule) => rule.valid)
  const validConfirm = !!form.password && form.password === form.confirmPassword

  setFieldState('confirmPassword', validConfirm ? 'success' : 'error')

  if (!form.acceptedTerms) {
    return
  }

  if (!isValidEmail(form.email) || !validPassword || !validConfirm) {
    if (!isValidEmail(form.email)) setFieldState('email', 'error')
    return
  }

  currentStep.value = 4
  console.log('Register form submitted:', form)
}
</script>

<style scoped>
.mobile-brand-text {
  font-size: clamp(1.5rem, 8vw, 1.99rem);
}

.mobile-tagline {
  font-size: clamp(0.5rem, 2.8vw, 0.7rem);
}

.mobile-hero-heading {
  font-size: clamp(1.75rem, 10vw, 2.4rem);
}

.mobile-hero-description {
  font-size: clamp(0.7rem, 3.4vw, 0.81rem);
}

.mobile-hero-copy {
  top: clamp(6rem, 25vw, 7rem);
}

.mobile-brand-block {
  top: 21px;
}

.mobile-form-area {
  margin-top: calc(-1 * clamp(5rem, 20vh, 9.75rem));
  min-height: 0;
}

.mobile-form-card {
  min-height: 0;
  padding: clamp(0.75rem, 3.5vw, 1rem);
}

.mobile-stepper {
  gap: clamp(0.2rem, 1.5vw, 0.5rem);
}

.mobile-step-line {
  width: clamp(0.75rem, 7vw, 2.5rem);
}

.icon-entrance {
  animation: icon-rise 0.8s cubic-bezier(0.22, 1, 0.36, 1) both;
}

.icon-map {
  animation-name: icon-rise-map;
  animation-delay: 0.1s;
}

.icon-logo {
  animation-delay: 0.18s;
  filter: saturate(1.2) drop-shadow(0 4px 10px rgba(39, 87, 56, 0.22));
}

.icon-wood {
  animation-delay: 0.28s;
  filter: saturate(1.28) contrast(1.04) drop-shadow(0 10px 16px rgba(64, 76, 39, 0.24));
}

.icon-bottle {
  animation-name: bottle-slide-in;
  animation-delay: 0.42s;
  filter: saturate(1.32) contrast(1.06) drop-shadow(0 10px 18px rgba(31, 84, 52, 0.3));
}

.icon-bottom {
  animation-delay: 0.5s;
}

.copy-entrance {
  animation: copy-rise 0.7s cubic-bezier(0.22, 1, 0.36, 1) both;
}

.copy-logo-copy {
  animation-delay: 0.24s;
}

.copy-heading {
  animation-delay: 0.36s;
}

.copy-description {
  animation-delay: 0.48s;
}

.step-line-fill {
  transition: width 0.55s cubic-bezier(0.22, 1, 0.36, 1);
}

.step-stage {
  overflow: hidden;
  transition: min-height 0.5s cubic-bezier(0.22, 1, 0.36, 1);
}

.step-stage-details {
  min-height: 148px;
}

.step-stage-complete {
  min-height: 160px;
}

@media (max-width: 360px) {
  .mobile-stepper {
    gap: 0.1rem;
  }

  .mobile-step-line {
    margin-left: 0.15rem;
    margin-right: 0.15rem;
    width: 0.7rem;
  }

  .mobile-stepper span {
    font-size: 7px;
    letter-spacing: 0.04em;
  }

}

@media (min-width: 320px) and (max-width: 359px) {
  .mobile-brand-text {
    font-size: 1.55rem;
  }

  .mobile-tagline {
    font-size: 0.5rem;
  }

  .mobile-hero-heading {
    font-size: 1.8rem;
  }

  .mobile-hero-description {
    font-size: 0.7rem;
  }

  .icon-logo {
    width: 4rem;
    height: 4rem;
  }

  .mobile-form-area {
    margin-top: -5.25rem;
  }

  .mobile-step-line {
    width: 0.7rem;
  }
}

@media (min-width: 360px) and (max-width: 399px) {
  .mobile-brand-text {
    font-size: 1.75rem;
  }

  .mobile-tagline {
    font-size: 0.58rem;
  }

  .mobile-hero-heading {
    font-size: 2.05rem;
  }

  .mobile-hero-description {
    font-size: 0.76rem;
  }

  .icon-logo {
    width: 4.5rem;
    height: 4.5rem;
  }

  .mobile-form-area {
    margin-top: -6.5rem;
  }

  .mobile-step-line {
    width: 1rem;
  }
}

@media (min-width: 400px) and (max-width: 767px) {
  .mobile-brand-text {
    font-size: 1.99rem;
  }

  .mobile-tagline {
    font-size: 0.7rem;
  }

  .mobile-hero-heading {
    font-size: 2.35rem;
  }

  .mobile-hero-description {
    font-size: 0.81rem;
  }

  .icon-logo {
    width: 4.5rem;
    height: 4.5rem;
  }

  .mobile-form-area {
    margin-top: -7.5rem;
  }

  .mobile-step-line {
    width: 1.5rem;
  }
}

@keyframes icon-rise {
  from {
    opacity: 0;
    transform: translateY(24px) scale(0.96);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes icon-rise-map {
  from {
    transform: translateY(24px) scale(0.96);
  }
  to {
    transform: translateY(0) scale(1);
  }
}

@keyframes bottle-slide-in {
  from {
    opacity: 0;
    transform: translateX(90px) scale(0.9);
  }
  to {
    opacity: 1;
    transform: translateX(0) scale(1);
  }
}

@keyframes copy-rise {
  from {
    opacity: 0;
    transform: translateY(18px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (prefers-reduced-motion: reduce) {
  .icon-entrance,
  .copy-entrance {
    animation: none;
  }
}

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
