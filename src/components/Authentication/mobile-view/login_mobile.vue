<template>
	<DesktopLogin v-if="!isMobile" />

	<main v-else class="relative flex h-[100dvh] min-h-[580px] flex-col overflow-hidden bg-cover bg-center" :style="{ backgroundImage: `url(${mobileBackground})` }">
		<img :src="loginTopFlower" alt="" aria-hidden="true" class="pointer-events-none absolute left-[-42px] top-[-56px] z-0 h-60 w-40 object-contain object-left-top" />
		<img :src="loginRightFlower" alt="" aria-hidden="true" class="pointer-events-none absolute right-[-42px] top-[-56px] z-0 h-60 w-40 object-contain object-right-top" />
		<img :src="loginFlower" alt="" aria-hidden="true" class="pointer-events-none absolute bottom-[-82px] left-[-59px] z-0 h-48 w-48 object-fill object-left-bottom" />
		<img :src="bottleLogin" alt="" aria-hidden="true" class="pointer-events-none absolute bottom-[-124px] right-[-77px] z-0 h-87 w-87 object-fill object-right-bottom" />
		<section
			class="relative flex min-h-[340px] shrink-0 flex-col overflow-hidden px-5 pb-10 pt-5"
		>
			<div aria-hidden="true" class="login-cloud pointer-events-none absolute left-1/2 top-[43%] z-[1] h-[340px] w-[min(175vw,860px)] -translate-x-1/2 -translate-y-1/2"></div>

			<RouterLink to="/" class="relative z-10 mx-auto flex w-fit flex-col items-center gap-0.5" aria-label="eKikoba home">
				<img :src="bannerLogo" alt="" class="h-23 w-23 object-contain drop-shadow-sm" />
				<span class="flex flex-col items-center leading-none">
					<span class="flex items-center text-[2.75rem] font-semibold tracking-[-0.06em] text-slate-900 lowercase">
						<span>ekik</span>
						<img :src="godobLogo" alt="" aria-hidden="true" class="mx-0.5 h-[0.67em] w-[0.67em] translate-y-0.5 rounded-full border border-black p-[2px] object-contain" />
						<span>ba</span>
					</span>
					<span class="mt-2 text-[0.79rem] font-bold tracking-[0.18em] text-emerald-800">Together We Grow</span>
					<span aria-hidden="true" class="mt-3 h-1 w-8 rounded-full bg-emerald-700"></span>
				</span>
			</RouterLink>

			<div class="relative z-10 mx-auto mt-[2px] w-full max-w-[320px] animate-copy-rise text-center">
				<h1 class="text-[2.25rem] font-semibold leading-[1.05] text-slate-900">Welcome <span class="text-emerald-800">back</span></h1>
				<p class="mt-2 text-sm font-semibold leading-5 text-slate-800">Login to your account,</p>
				<p class="mt-1 text-xs leading-5 text-slate-700">And complete your mchezo journey.</p>
			</div>
		</section>

		<section class="relative z-10 flex flex-1 flex-col px-3 pb-7 pt-5">
			<div class="mx-auto -mt-14 w-full max-w-[440px] rounded-[18px] border-x border-slate-200 bg-white px-5 pb-3 pt-3 shadow-[0_-10px_24px_rgba(15,90,61,0.10)]">
				<div class="mb-3">
					<span class="inline-flex border border-[#0f5a3d] bg-[#0f5a3d] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white">Member login</span>
				</div>

				<form class="space-y-2.5" @submit.prevent="submitForm">
					<div>
						<label for="mobileGroupId" class="mb-1 block text-[10px] font-bold uppercase tracking-[0.14em] text-slate-600">Group ID</label>
						<div class="relative">
							<svg aria-hidden="true" class="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
								<path stroke-linecap="round" stroke-linejoin="round" d="M3 7.5A2.5 2.5 0 015.5 5h13A2.5 2.5 0 0121 7.5v9a2.5 2.5 0 01-2.5 2.5h-13A2.5 2.5 0 013 16.5v-9zM3.5 9h17M7 15h3" />
							</svg>
							<input id="mobileGroupId" v-model="form.groupId" type="text" autocomplete="organization" placeholder="Enter group ID" :class="fieldInputClass('groupId')" class="w-full rounded-none border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#0f5a3d] focus:bg-white" @input="handleFieldInput('groupId', !!form.groupId.trim())" />
						</div>
					</div>

					<div>
						<label for="mobilePassword" class="mb-1 block text-[10px] font-bold uppercase tracking-[0.14em] text-slate-600">Password</label>
						<div class="relative">
							<svg aria-hidden="true" class="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
								<path stroke-linecap="round" stroke-linejoin="round" d="M7 10V8a5 5 0 0110 0v2M6 10h12a2 2 0 012 2v7a2 2 0 01-2 2H6a2 2 0 01-2-2v-7a2 2 0 012-2z" />
							</svg>
							<input id="mobilePassword" v-model="form.password" :type="showPassword ? 'text' : 'password'" autocomplete="current-password" placeholder="Enter your password" :class="fieldInputClass('password')" class="w-full rounded-none border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-12 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#0f5a3d] focus:bg-white" @input="handleFieldInput('password', form.password.trim().length >= 8)" />
							<button type="button" class="absolute inset-y-0 right-2 flex min-h-11 min-w-11 items-center justify-center text-slate-500" :aria-label="showPassword ? 'Hide password' : 'Show password'" @click="showPassword = !showPassword">
								<svg v-if="!showPassword" aria-hidden="true" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12s3.75-6.75 9.75-6.75S21.75 12 21.75 12 18 18.75 12 18.75 2.25 12 2.25 12Z" /><circle cx="12" cy="12" r="3" /></svg>
								<svg v-else aria-hidden="true" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8"><path stroke-linecap="round" stroke-linejoin="round" d="M3 3l18 18M10.58 10.58A2 2 0 0013.42 13.42M9.88 5.08A10.94 10.94 0 0112 5c5.5 0 9.5 7 9.5 7a17.96 17.96 0 01-4.05 5.1M6.68 6.68A17.86 17.86 0 002.5 12S6.5 19 12 19c1.67 0 3.17-.38 4.46-1.03" /></svg>
							</button>
						</div>
					</div>

					<div class="flex items-center justify-between gap-3 pt-1 text-xs text-slate-600">
						<label class="inline-flex min-h-11 items-center gap-2">
							<input v-model="form.rememberMe" type="checkbox" class="h-4 w-4 accent-[#0f5a3d]" />
							<span>Remember me</span>
						</label>
						<RouterLink to="/forgot-password" class="inline-flex min-h-11 items-center font-semibold text-emerald-800 underline-offset-2 hover:underline">Forgot password?</RouterLink>
					</div>

					<button type="submit" class="min-h-12 w-full rounded-[10px] bg-[#0f5a3d] px-4 text-sm font-semibold text-white shadow-sm transition hover:bg-[#0d4a35] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0f5a3d]">Sign in</button>
				</form>

				<p class="mt-4 text-center text-xs text-slate-500">Don’t have an account? <RouterLink to="/" class="font-semibold text-emerald-700 hover:underline">Create one</RouterLink></p>
			</div>

		</section>
	</main>
</template>

<script setup>
import { onBeforeUnmount, onMounted, reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import DesktopLogin from '../Desktop-view/login.vue'
import mobileBackground from '../../images/images-mobile-view/bg.png'
import bannerLogo from '../../images/header-section-images/bannerlogo.png'
import loginFlower from '../../images/images-mobile-view/login-flower.svg'
import loginTopFlower from '../../images/images-mobile-view/login-top-flower.svg'
import loginRightFlower from '../../images/images-mobile-view/login-right-flower.svg'
import bottleLogin from '../../images/images-mobile-view/bottle-login.svg'
import godobLogo from '../../images/images-mobile-view/godoblogo.png'

const router = useRouter()
const isMobile = ref(false)
const showPassword = ref(false)
const form = reactive({ groupId: '', password: '', rememberMe: false })
const fieldStates = reactive({ groupId: 'idle', password: 'idle' })

const updateViewport = () => {
	isMobile.value = window.innerWidth < 768
}

onMounted(() => {
	updateViewport()
	window.addEventListener('resize', updateViewport)
})

onBeforeUnmount(() => window.removeEventListener('resize', updateViewport))

const fieldInputClass = (field) => ({
	'field-success': fieldStates[field] === 'success',
	'field-error': fieldStates[field] === 'error',
})

const handleFieldInput = (field, isValid) => {
	fieldStates[field] = isValid ? 'success' : 'error'
}

const submitForm = () => {
	const validGroupId = !!form.groupId.trim()
	const validPassword = form.password.trim().length >= 8

	fieldStates.groupId = validGroupId ? 'success' : 'error'
	fieldStates.password = validPassword ? 'success' : 'error'

	if (validGroupId && validPassword) {
		console.log('Login form submitted:', form)
		router.push(isMobile.value ? '/dashboard-mobile' : '/dashboard')
	}
}
</script>

<style scoped>
.field-success {
	border-color: #16a34a !important;
	background-color: #f0fdf4 !important;
}

.field-error {
	border-color: #dc2626 !important;
	background-color: #fef2f2 !important;
}

.login-cloud {
	background:
		radial-gradient(ellipse 34% 48% at 21% 60%, rgba(255, 255, 255, 0.94) 38%, transparent 100%),
		radial-gradient(ellipse 34% 58% at 41% 42%, rgba(255, 255, 255, 0.97) 38%, transparent 100%),
		radial-gradient(ellipse 36% 52% at 62% 48%, rgba(255, 255, 255, 0.95) 38%, transparent 100%),
		radial-gradient(ellipse 31% 45% at 81% 62%, rgba(255, 255, 255, 0.9) 38%, transparent 100%),
		radial-gradient(ellipse 56% 40% at 50% 74%, rgba(255, 255, 255, 0.82) 38%, transparent 100%);
	filter: blur(26px);
	opacity: 0.98;
}

@keyframes copy-rise {
	from { opacity: 0; transform: translateY(12px); }
	to { opacity: 1; transform: translateY(0); }
}

.animate-copy-rise {
	animation: copy-rise 0.65s cubic-bezier(0.22, 1, 0.36, 1) both;
}
</style>
