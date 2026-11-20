<template>
  <div class="min-h-screen bg-[#f8fbf9] p-6">
    <div class="mx-auto flex h-[820px] w-full max-w-[1500px] overflow-hidden rounded-[32px] border border-[#dfeee4] bg-[#f4f9f5] shadow-[0_20px_60px_rgba(15,90,61,0.08)]">
      <aside :class="isSidebarExpanded ? 'w-[270px] px-4' : 'w-[120px] px-3'" class="relative z-20 flex shrink-0 flex-col overflow-visible border-r border-white/10 bg-[#0b4d38] py-5 transition-all duration-300 ease-in-out">
        <div class="flex min-h-0 flex-1 flex-col">
          <div :class="isSidebarExpanded ? 'gap-2 px-1' : 'gap-1'" class="flex shrink-0 items-center border-b border-white/10 pb-5">
            <img
              src="../../images/header-section-images/bannerlogo1.png"
              alt="eKikoba logo"
              class="h-16 w-16 shrink-0 object-contain"
            />
            <div v-if="isSidebarExpanded" class="flex min-w-0 flex-col leading-none text-white">
              <span class="text-[1.3rem] font-semibold lowercase">ekikoba</span>
              <span class="mt-1.5 text-[0.54rem] font-medium tracking-[0.15em] text-[#c3e3d1]">Together We Grow</span>
            </div>
            <button
              type="button"
              class="ml-auto flex shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.07] text-white/75 transition-colors hover:border-white/20 hover:bg-white/15 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b8e8c8]"
              :class="isSidebarExpanded ? 'h-7 w-7' : 'h-6 w-6'"
              :aria-expanded="isSidebarExpanded"
              :aria-label="isSidebarExpanded ? 'Collapse sidebar' : 'Expand sidebar'"
              @click="isSidebarExpanded = !isSidebarExpanded"
            >
              <svg aria-hidden="true" class="h-4 w-4 transition-transform duration-300" :class="{ 'rotate-180': !isSidebarExpanded }" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="m14 5-7 7 7 7" />
              </svg>
            </button>
          </div>

          <div :class="isSidebarExpanded ? 'overflow-y-auto' : 'overflow-visible'" class="sidebar-scrollbar min-h-0 flex-1 pr-1">
          <div v-if="isSidebarExpanded" class="min-w-0">
          <div class="mt-5 flex items-center gap-2 px-3 text-[0.64rem] font-semibold uppercase tracking-[0.2em] text-white/55">
            <span>MAIN</span>
            <span class="h-px flex-1 bg-white/10"></span>
          </div>

          <nav class="mt-2" @mouseenter="isMenuHovered = true" @mouseleave="isMenuHovered = false">
            <div
              :class="isMenuOpen ? 'border-white/10 bg-white/[0.07] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]' : 'border-transparent'"
              class="overflow-hidden rounded-xl border text-white/95 transition-all duration-300"
              @mouseenter="isMenuOpen = true"
              @mouseleave="isMenuOpen = false"
            >
              <button type="button" class="flex w-full cursor-pointer items-center justify-between gap-3 px-3 py-3 text-left" :aria-expanded="isMenuOpen" @click="isMenuOpen = !isMenuOpen">
                <div class="flex min-w-0 items-center gap-3">
                  <img src="../../images/images-Desktop-view/trans-home.svg" alt="Menu" class="h-5 w-5 object-contain" />
                  <span class="text-[0.8rem] font-medium">Menu</span>
                </div>
                <svg aria-hidden="true" :class="{ 'rotate-180': isMenuOpen }" class="h-4 w-4 text-white/55 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>

              <div :class="isMenuOpen ? 'max-h-52 pb-2' : 'max-h-0'" class="overflow-hidden transition-all duration-300 ease-out">
                <div class="space-y-1 px-2 pt-1">
                  <button type="button" @click="activeView = 'dashboard'" :class="[isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-[-8px] opacity-0', activeView === 'dashboard' ? 'bg-white/15 text-white' : '']" class="flex w-full cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-left text-white/80 transition-all duration-200 ease-out hover:bg-[#b8f4bf] hover:text-[#0b4d38] hover:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.35)]">
                    <img src="../../images/images-Desktop-view/trans-home.svg" alt="Dashboard" class="h-5 w-5 object-contain" />
                    <span class="text-[0.78rem]">Dashboard</span>
                  </button>

                  <button type="button" @click="activeView = 'mchezo'" :aria-current="activeView === 'mchezo' ? 'page' : undefined" :class="[isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-[-8px] opacity-0', activeView === 'mchezo' ? 'bg-white/15 text-white' : '']" class="flex w-full cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-left text-white/80 transition-all duration-200 ease-out hover:bg-[#b8f4bf] hover:text-[#0b4d38] hover:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.35)]">
                    <img src="../../images/images-Desktop-view/people56 (1).svg" alt="My Mchezo" class="h-5 w-5 object-contain" />
                    <span class="text-[0.78rem]">My Mchezo</span>
                  </button>

                  <button type="button" @click="activeView = 'contribution'" :aria-current="activeView === 'contribution' ? 'page' : undefined" :class="[isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-[-8px] opacity-0 pointer-events-none', activeView === 'contribution' ? 'bg-white/15 text-white' : '']" class="flex w-full cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-left text-white/80 transition-all duration-200 ease-out hover:bg-[#b8f4bf] hover:text-[#0b4d38] hover:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.35)]">
                    <img src="../../images/images-Desktop-view/trans-cash.svg" alt="My Contribution" class="h-5 w-5 object-contain" />
                    <span class="text-[0.78rem]">My Contribution</span>
                  </button>

                  <button type="button" @click="activeView = 'schedule'" :aria-current="activeView === 'schedule' ? 'page' : undefined" :class="[isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-[-8px] opacity-0 pointer-events-none', activeView === 'schedule' ? 'bg-white/15 text-white' : '']" class="flex w-full cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-left text-white/80 transition-all duration-200 ease-out hover:bg-[#b8f4bf] hover:text-[#0b4d38] hover:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.35)]">
                    <img src="../../images/images-Desktop-view/trans-calender.svg" alt="Mchezo Schedule" class="h-5 w-5 object-contain" />
                    <span class="text-[0.78rem]">Mchezo Schedule</span>
                  </button>
                </div>
              </div>
            </div>
          </nav>

          <div aria-hidden="true" :class="{ 'sidebar-divider-open': isMenuHovered }" class="mx-3 my-3 flex items-center gap-2">
            <span class="sidebar-divider-line h-px flex-1 bg-gradient-to-r from-transparent via-[#b8e8c8]/70 to-[#b8e8c8]/20"></span>
            <span class="h-1.5 w-1.5 shrink-0 rotate-45 rounded-[1px] bg-[#b8e8c8]/80 shadow-[0_0_8px_rgba(184,232,200,0.55)]"></span>
            <span class="sidebar-divider-line h-px flex-1 bg-gradient-to-l from-transparent via-[#b8e8c8]/70 to-[#b8e8c8]/20"></span>
          </div>

          <div class="mt-4 flex items-center gap-2 px-3 text-[0.64rem] font-semibold uppercase tracking-[0.2em] text-white/55">
            <span>PAYMENTS</span>
            <span class="h-px flex-1 bg-white/10"></span>
          </div>

          <div
            :class="isPaymentsOpen ? 'border-white/10 bg-white/[0.07] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]' : 'border-transparent'"
            class="mt-2 overflow-hidden rounded-xl border text-white/90 transition-all duration-300"
            @mouseenter="isPaymentsOpen = true; isPaymentsHovered = true"
            @mouseleave="isPaymentsOpen = false; isPaymentsHovered = false"
          >
            <button type="button" class="flex w-full cursor-pointer items-center justify-between gap-3 px-3 py-3 text-left" :aria-expanded="isPaymentsOpen" @click="isPaymentsOpen = !isPaymentsOpen">
              <div class="flex min-w-0 items-center gap-3">
                <img src="../../images/images-Desktop-view/trans-cash.svg" alt="Payments" class="h-5 w-5 object-contain" />
                <span class="text-[0.78rem] font-medium">Payments</span>
              </div>
              <svg aria-hidden="true" :class="{ 'rotate-180': isPaymentsOpen }" class="h-4 w-4 text-white/55 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>

            <div :class="isPaymentsOpen ? 'max-h-52 pb-2' : 'max-h-0'" class="overflow-hidden transition-all duration-300 ease-out">
              <div class="space-y-1 px-2 pt-1">
                <div :class="isPaymentsOpen ? 'translate-x-0 opacity-100' : 'translate-x-[-8px] opacity-0 pointer-events-none'" class="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-white/80 transition-all duration-200 ease-out hover:bg-[#b8f4bf] hover:text-[#0b4d38] hover:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.35)]">
                  <img src="../../images/images-Desktop-view/trans-files.svg" alt="Pay Contribution" class="h-5 w-5 object-contain" />
                  <span class="text-[0.76rem]">Pay Contribution</span>
                </div>

                <div :class="isPaymentsOpen ? 'translate-x-0 opacity-100' : 'translate-x-[-8px] opacity-0 pointer-events-none'" class="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-white/80 transition-all duration-200 ease-out hover:bg-[#b8f4bf] hover:text-[#0b4d38] hover:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.35)]">
                  <img src="../../images/images-Desktop-view/trans-payment.svg" alt="Payment History" class="h-5 w-5 object-contain" />
                  <span class="text-[0.76rem]">Payment History</span>
                </div>

                <div :class="isPaymentsOpen ? 'translate-x-0 opacity-100' : 'translate-x-[-8px] opacity-0 pointer-events-none'" class="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-white/80 transition-all duration-200 ease-out hover:bg-[#b8f4bf] hover:text-[#0b4d38] hover:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.35)]">
                  <img src="../../images/images-Desktop-view/trans-payment.svg" alt="My Fine" class="h-5 w-5 object-contain" />
                  <span class="text-[0.76rem]">My Fine</span>
                </div>

                <div :class="isPaymentsOpen ? 'translate-x-0 opacity-100' : 'translate-x-[-8px] opacity-0 pointer-events-none'" class="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-white/80 transition-all duration-200 ease-out hover:bg-[#b8f4bf] hover:text-[#0b4d38] hover:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.35)]">
                  <img src="../../images/images-Desktop-view/trans-files.svg" alt="System Payment Fee" class="h-5 w-5 object-contain" />
                  <span class="text-[0.76rem]">System Payment Fee</span>
                </div>
              </div>
            </div>
          </div>

          <div aria-hidden="true" :class="{ 'sidebar-divider-open': isPaymentsHovered }" class="mx-3 my-3 flex items-center gap-2">
            <span class="sidebar-divider-line h-px flex-1 bg-gradient-to-r from-transparent via-[#b8e8c8]/70 to-[#b8e8c8]/20"></span>
            <span class="h-1.5 w-1.5 shrink-0 rotate-45 rounded-[1px] bg-[#b8e8c8]/80 shadow-[0_0_8px_rgba(184,232,200,0.55)]"></span>
            <span class="sidebar-divider-line h-px flex-1 bg-gradient-to-l from-transparent via-[#b8e8c8]/70 to-[#b8e8c8]/20"></span>
          </div>

          <div class="mt-4 flex items-center gap-2 px-3 text-[0.64rem] font-semibold uppercase tracking-[0.2em] text-white/55">
            <span>MY INFORMATION</span>
            <span class="h-px flex-1 bg-white/10"></span>
          </div>

          <div class="mt-2 space-y-1" @mouseenter="isInformationHovered = true" @mouseleave="isInformationHovered = false">
            <div class="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-white/80 transition-colors hover:bg-white/10 hover:text-white">
              <svg aria-hidden="true" class="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="8" r="4" />
                <path d="M5 21a7 7 0 0 1 14 0" />
              </svg>
              <span class="text-[0.78rem]">My Account</span>
            </div>

            <div class="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-white/80 transition-colors hover:bg-white/10 hover:text-white">
              <svg aria-hidden="true" class="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <path d="M10 17l5-5-5-5" />
                <path d="M15 12H3" />
                <path d="M12 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-6" />
              </svg>
              <span class="text-[0.78rem]">Logout</span>
            </div>
          </div>

          <div aria-hidden="true" :class="{ 'sidebar-divider-open': isInformationHovered }" class="mx-3 my-3 flex items-center gap-2">
            <span class="sidebar-divider-line h-px flex-1 bg-gradient-to-r from-transparent via-[#b8e8c8]/70 to-[#b8e8c8]/20"></span>
            <span class="h-1.5 w-1.5 shrink-0 rotate-45 rounded-[1px] bg-[#b8e8c8]/80 shadow-[0_0_8px_rgba(184,232,200,0.55)]"></span>
            <span class="sidebar-divider-line h-px flex-1 bg-gradient-to-l from-transparent via-[#b8e8c8]/70 to-[#b8e8c8]/20"></span>
          </div>
          </div>

          <div v-else class="mt-4 flex flex-col items-center gap-1">
            <button type="button" data-tooltip="Dashboard" @click="activeView = 'dashboard'" aria-label="Dashboard" :class="activeView === 'dashboard' ? 'bg-white/15' : ''" class="sidebar-icon-tooltip group relative flex h-10 w-full cursor-pointer items-center justify-center rounded-xl transition-all duration-200 hover:bg-white/20 hover:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.12)]">
              <img src="../../images/images-Desktop-view/trans-home.svg" alt="Dashboard" class="h-5 w-5 object-contain" />
            </button>
            <button type="button" data-tooltip="My Mchezo" @click="activeView = 'mchezo'" aria-label="My Mchezo" :aria-current="activeView === 'mchezo' ? 'page' : undefined" :class="activeView === 'mchezo' ? 'bg-white/15' : ''" class="sidebar-icon-tooltip group relative flex h-10 w-full cursor-pointer items-center justify-center rounded-xl transition-all duration-200 hover:bg-white/20 hover:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.12)]">
              <img src="../../images/images-Desktop-view/people56 (1).svg" alt="My Mchezo" class="h-5 w-5 object-contain" />
            </button>
            <button type="button" data-tooltip="My Contribution" @click="activeView = 'contribution'" aria-label="My Contribution" :aria-current="activeView === 'contribution' ? 'page' : undefined" :class="activeView === 'contribution' ? 'bg-white/15' : ''" class="sidebar-icon-tooltip group relative flex h-10 w-full cursor-pointer items-center justify-center rounded-xl transition-all duration-200 hover:bg-white/20 hover:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.12)]">
              <img src="../../images/images-Desktop-view/trans-cash.svg" alt="My Contribution" class="h-5 w-5 object-contain" />
            </button>
            <button type="button" data-tooltip="Mchezo Schedule" @click="activeView = 'schedule'" aria-label="Mchezo Schedule" :aria-current="activeView === 'schedule' ? 'page' : undefined" :class="activeView === 'schedule' ? 'bg-white/15' : ''" class="sidebar-icon-tooltip group relative flex h-10 w-full cursor-pointer items-center justify-center rounded-xl transition-colors hover:bg-white/10">
              <img src="../../images/images-Desktop-view/trans-calender.svg" alt="Mchezo Schedule" class="h-5 w-5 object-contain" />
            </button>

            <span aria-hidden="true" class="my-2 h-px w-10 bg-white/10"></span>

            <div data-tooltip="Payments" class="sidebar-icon-tooltip group relative flex h-10 w-full cursor-pointer items-center justify-center rounded-xl transition-colors hover:bg-white/10">
              <img src="../../images/images-Desktop-view/trans-cash.svg" alt="Payments" class="h-5 w-5 object-contain" />
            </div>
            <div data-tooltip="Pay Contribution" class="sidebar-icon-tooltip group relative flex h-10 w-full cursor-pointer items-center justify-center rounded-xl transition-colors hover:bg-white/10">
              <img src="../../images/images-Desktop-view/trans-files.svg" alt="Pay Contribution" class="h-5 w-5 object-contain" />
            </div>
            <div data-tooltip="Payment History" class="sidebar-icon-tooltip group relative flex h-10 w-full cursor-pointer items-center justify-center rounded-xl transition-colors hover:bg-white/10">
              <img src="../../images/images-Desktop-view/trans-payment.svg" alt="Payment History" class="h-5 w-5 object-contain" />
            </div>
            <div data-tooltip="My Fine" class="sidebar-icon-tooltip group relative flex h-10 w-full cursor-pointer items-center justify-center rounded-xl transition-colors hover:bg-white/10">
              <img src="../../images/images-Desktop-view/trans-payment.svg" alt="My Fine" class="h-5 w-5 object-contain" />
            </div>
            <div data-tooltip="System Payment Fee" class="sidebar-icon-tooltip group relative flex h-10 w-full cursor-pointer items-center justify-center rounded-xl transition-colors hover:bg-white/10">
              <img src="../../images/images-Desktop-view/trans-files.svg" alt="System Payment Fee" class="h-5 w-5 object-contain" />
            </div>

            <span aria-hidden="true" class="my-2 h-px w-10 bg-white/10"></span>

            <div data-tooltip="My Account" class="sidebar-icon-tooltip group relative flex h-10 w-full cursor-pointer items-center justify-center rounded-xl transition-colors hover:bg-white/10">
              <svg aria-label="My Account" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="8" r="4" />
                <path d="M5 21a7 7 0 0 1 14 0" />
              </svg>
            </div>
            <div data-tooltip="Logout" class="sidebar-icon-tooltip group relative flex h-10 w-full cursor-pointer items-center justify-center rounded-xl transition-colors hover:bg-white/10">
              <svg aria-hidden="true" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <path d="M10 17l5-5-5-5" />
                <path d="M15 12H3" />
                <path d="M12 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-6" />
              </svg>
            </div>
          </div>
          </div>
        </div>
      </aside>
      <main class="flex min-w-0 flex-1 flex-col bg-[#f8fbf9]">
        <header class="flex h-[78px] shrink-0 items-center gap-3 border-b border-[#e3ece6] px-6 sm:px-8">
          <label class="dashboard-search group/search flex cursor-pointer items-center rounded-lg border border-[#dce8df] bg-white shadow-[0_2px_8px_rgba(19,70,48,0.04)]">
            <img
              src="../../images/images-Desktop-view/trans-search.svg"
              alt=""
              class="h-5 w-5 shrink-0 object-contain opacity-70 transition-transform duration-300 group-focus-within/search:scale-110"
            />
            <input
              type="search"
              aria-label="Search"
              placeholder="Search..."
              class="dashboard-search-input min-w-0 bg-transparent text-sm text-[#1c3d2d] outline-none placeholder:text-[#8a9b90]"
            />
          </label>
          <button
            type="button"
            aria-label="Notifications"
            class="relative ml-auto flex h-12 w-12 shrink-0 cursor-pointer items-center justify-center rounded-lg text-[#426b56] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0b4d38]"
          >
            <img src="../../images/images-Desktop-view/notification.svg" alt="" class="h-8 w-8 object-contain drop-shadow-[0_4px_8px_rgba(15,60,40,0.28)]" />
            <span aria-hidden="true" class="absolute right-2 top-2 h-2 w-2 rounded-full bg-[#d65b4a] ring-2 ring-white"></span>
          </button>
          <div ref="profileMenu" class="relative" @keydown.esc="isProfileMenuOpen = false">
            <button
              type="button"
              aria-label="Profile"
              aria-haspopup="menu"
              aria-controls="profile-menu"
              :aria-expanded="isProfileMenuOpen"
              @click="isProfileMenuOpen = !isProfileMenuOpen"
              class="flex h-12 shrink-0 cursor-pointer items-center gap-2 rounded-lg px-2 text-[#426b56] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0b4d38]"
            >
              <img src="../../images/images-Desktop-view/profile.svg" alt="" class="h-8 w-8 object-contain drop-shadow-[0_4px_8px_rgba(15,60,40,0.28)]" />
              <span class="max-w-[8rem] truncate text-sm font-medium text-[#234b36]">Username</span>
              <svg aria-hidden="true" class="h-4 w-4 shrink-0 text-[#789382] transition-transform" :class="{ 'rotate-180': isProfileMenuOpen }" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
            <Transition name="profile-menu">
              <div v-if="isProfileMenuOpen" id="profile-menu" role="menu" class="absolute right-0 top-full z-50 mt-2 w-48 overflow-hidden rounded-lg border border-[#dce8df] bg-white shadow-[0_12px_30px_rgba(15,60,40,0.16)]">
                <div class="flex items-center gap-2 px-2.5 py-2.5">
                  <div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#edf6ef] ring-1 ring-[#dce8df]">
                    <img src="../../images/images-Desktop-view/profile.svg" alt="" class="h-5 w-5 object-contain" />
                  </div>
                  <div class="min-w-0">
                    <p class="text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-[#789382]">ACCOUNT</p>
                    <p class="mt-1 truncate text-sm font-semibold text-[#163c2c]">Your profile</p>
                  </div>
                </div>
                <div class="border-t border-[#edf1ee] p-1">
                  <button
                    type="button"
                    role="menuitem"
                    @click="logout"
                    class="flex w-full cursor-pointer items-center gap-2 rounded-md px-2 py-1.5 text-left text-sm font-medium text-[#a6443d] transition-colors hover:bg-[#fff1ef] focus-visible:bg-[#fff1ef] focus-visible:outline-none"
                  >
                    <svg aria-hidden="true" class="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M10 17l5-5-5-5" />
                      <path d="M15 12H3" />
                      <path d="M12 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-6" />
                    </svg>
                    <span>Logout</span>
                  </button>
                </div>
              </div>
            </Transition>
          </div>
        </header>
        <section class="grid min-w-0 flex-1 content-start grid-cols-[minmax(0,1fr)_220px] gap-4 overflow-y-auto p-6 sm:p-8">
          <nav aria-label="Breadcrumb" class="col-span-2 -mt-6 flex w-fit items-center gap-1">
            <button
              v-if="activeView !== 'dashboard'"
              type="button"
              class="cursor-pointer rounded-md px-1.5 py-0.5 text-[10px] font-medium text-[#6d8576] transition-colors hover:text-[#2d6a4f] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0b4d38]"
              @click="activeView = 'dashboard'"
            >
              Dashboard
            </button>
            <svg v-if="activeView !== 'dashboard'" aria-hidden="true" class="h-3 w-3 text-[#9aafa0]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="m9 18 6-6-6-6" />
            </svg>
            <span aria-current="page" class="rounded-md px-1.5 py-0.5 text-[10px] font-semibold text-[#245a36]">
              {{ activeView === 'dashboard' ? 'Dashboard' : activeView === 'mchezo' ? 'My Mchezo' : activeView === 'contribution' ? 'My Contribution' : 'Mchezo Schedule' }}
            </span>
          </nav>
          <template v-if="activeView === 'dashboard'">
          <div class="flex min-w-0 flex-col gap-4">
            <article
              :style="{ backgroundImage: `url(${overviewBackground})` }"
              class="relative isolate min-h-[220px] min-w-0 overflow-hidden rounded-xl border border-[#dce8df] bg-cover bg-center p-6 shadow-[0_10px_28px_rgba(19,70,48,0.12),0_32px_56px_-28px_rgba(19,70,48,0.08)]"
            >
              <div aria-hidden="true" class="absolute inset-0 -z-10 bg-white/10"></div>
              <div aria-hidden="true" class="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_45%_75%_at_18%_50%,rgba(0,0,0,0.32)_0%,rgba(0,0,0,0.16)_54%,transparent_100%),radial-gradient(ellipse_50%_90%_at_100%_0%,rgba(0,0,0,0.3)_0%,rgba(0,0,0,0.12)_48%,transparent_100%),linear-gradient(45deg,rgba(0,0,0,0.12)_0%,rgba(0,0,0,0.06)_32%,transparent_72%)]"></div>
              <img
                src="../../images/images-Desktop-view/bottle-dash.svg"
                alt=""
                class="pointer-events-none absolute bottom-[-98px] right-[-67px] z-10 h-93 w-93 select-none object-contain opacity-95"
              />
              <div class="relative z-20 max-w-[260px]">
                <h1 class="flex items-baseline gap-1.5 whitespace-nowrap text-2xl font-semibold leading-tight">
                  <span class="text-white/95">Good Morning,</span>
                  <span class="text-3xl font-bold text-[#b8f4bf]">Joel</span>
                </h1>
                <p class="mt-2 whitespace-nowrap text-sm leading-5 text-white/80">
                  <span class="font-medium text-white/95">Together we grow,</span>
                  <span> one saving at a time.</span>
                </p>
              </div>
              <div role="group" aria-label="Dashboard statistics" class="absolute bottom-14 left-6 z-20 flex items-center gap-3">
                <div class="flex items-center gap-1">
                  <span class="relative h-10 w-10 shrink-0 overflow-hidden">
                    <img src="../../images/images-Desktop-view/pple-icon.svg" alt="" class="absolute left-1/2 top-1/2 h-[30px] w-[30px] -translate-x-1/2 -translate-y-1/2 scale-[5] object-contain" />
                  </span>
                  <div class="flex flex-col">
                    <span class="text-[10px] font-medium text-white/85">Active users</span>
                    <span class="text-base font-bold leading-tight text-white">0</span>
                  </div>
                </div>
                <div class="flex items-center gap-1">
                  <span class="relative h-10 w-10 shrink-0 overflow-hidden">
                    <img src="../../images/images-Desktop-view/welcome-section-target.svg" alt="" class="absolute left-1/2 top-1/2 h-[30px] w-[30px] -translate-x-1/2 -translate-y-1/2 scale-[5] object-contain" />
                  </span>
                  <div class="flex flex-col">
                    <span class="text-[10px] font-medium text-white/85">Total Servings</span>
                    <span class="text-base font-bold leading-tight text-white">Tsh 0</span>
                  </div>
                </div>
                <div class="flex items-center gap-1">
                  <span class="relative h-10 w-10 shrink-0 overflow-hidden">
                    <img src="../../images/images-Desktop-view/welcome-section-calender (1).svg" alt="" class="absolute left-1/2 top-1/2 h-[30px] w-[30px] -translate-x-1/2 -translate-y-1/2 scale-[5] object-contain" />
                  </span>
                  <div class="flex flex-col">
                    <span class="text-[10px] font-medium text-white/85">Next Contribution</span>
                    <span class="text-base font-bold leading-tight text-white">MM/DD/YY</span>
                  </div>
                </div>
              </div>
              <button type="button" class="absolute bottom-4 left-6 z-20 cursor-pointer rounded-md border border-white/20 bg-[#0b4d38] px-3 py-1.5 text-xs font-semibold text-white shadow-sm transition-colors hover:bg-[#136247] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                View my savings
              </button>
            </article>
            <div class="flex min-w-0 flex-wrap gap-4">
              <article aria-label="Make a contribution" class="flex h-[120px] w-[120px] shrink-0 cursor-pointer flex-col items-center justify-center gap-0.5 rounded-xl border border-[#c9dfcd] bg-[#f4faf5]">
                <div class="relative h-14 w-14 overflow-hidden rounded-full border border-[#e2eee4] bg-white">
                  <img src="../../images/images-Desktop-view/plus.svg" alt="" class="absolute left-1/2 top-1/2 h-[40px] w-[40px] -translate-x-1/2 -translate-y-1/2 scale-[3.5] object-contain" />
                </div>
                <span class="w-[96px] text-center text-[10px] font-semibold leading-tight text-[#163c2c]"><span class="block">Make a</span><span class="block">contribution</span></span>
              </article>
              <article aria-label="View transaction" class="flex h-[120px] w-[120px] shrink-0 cursor-pointer flex-col items-center justify-center gap-0.5 rounded-xl border border-[#c9dfcd] bg-[#f4faf5]">
                <div class="relative h-14 w-14 overflow-hidden rounded-full border border-[#e2eee4] bg-white">
                  <img src="../../images/images-Desktop-view/wallet.svg" alt="" class="absolute left-1/2 top-1/2 h-[40px] w-[40px] -translate-x-1/2 -translate-y-1/2 scale-[3.5] object-contain" />
                </div>
                <span class="w-[96px] text-center text-[10px] font-semibold leading-tight text-[#163c2c]"><span class="block">View</span><span class="block">transaction</span></span>
              </article>
              <article aria-label="Invite friends" class="flex h-[120px] w-[120px] shrink-0 cursor-pointer flex-col items-center justify-center gap-0.5 rounded-xl border border-[#c9dfcd] bg-[#f4faf5]">
                <div class="relative h-14 w-14 overflow-hidden rounded-full border border-[#e2eee4] bg-white">
                  <img src="../../images/images-Desktop-view/profile og plus.svg" alt="" class="absolute left-1/2 top-[47%] h-[40px] w-[40px] -translate-x-1/2 -translate-y-1/2 scale-[4] object-contain" />
                </div>
                <span class="w-[96px] whitespace-nowrap text-center text-[10px] font-semibold leading-tight text-[#163c2c]">Invite friends</span>
              </article>
              <article aria-label="Round overview" class="round-overview-card relative isolate flex h-[160px] min-w-[120px] flex-1 flex-col overflow-hidden rounded-xl border border-[#b6d7bb] bg-[#eaf5eb] p-3 shadow-[0_6px_18px_rgba(19,70,48,0.08)]">
                <span aria-hidden="true" class="card-small-shape card-small-shape-one"></span>
                <span aria-hidden="true" class="card-small-shape card-small-shape-two"></span>
                <span aria-hidden="true" class="card-small-shape card-small-shape-three"></span>
                <div class="relative z-10 flex items-center justify-between gap-2">
                  <h2 class="text-xs font-semibold text-[#2d6a4f]">Round overview</h2>
                  <div class="flex shrink-0 items-center gap-1.5">
                    <span class="text-[9px] font-medium text-[#6d8576]">Total rounds</span>
                    <span class="text-xs font-bold text-[#163c2c]">--</span>
                  </div>
                </div>
                <div class="relative z-10 mt-2 flex flex-1 flex-col justify-center border-t border-[#b6d7bb]/70 pt-1">
                  <div class="flex items-center justify-between gap-2 border-b border-[#b6d7bb]/50 px-1 py-1 last:border-0">
                    <span class="text-[10px] font-medium text-[#6d8576]">Current</span>
                    <span class="text-[11px] font-semibold text-[#163c2c]">Not set</span>
                  </div>
                  <div class="flex items-center justify-between gap-2 border-b border-[#b6d7bb]/50 px-1 py-1">
                    <span class="text-[10px] font-medium text-[#6d8576]">Next</span>
                    <span class="text-[11px] font-semibold text-[#163c2c]">Not set</span>
                  </div>
                  <div class="flex items-center justify-between gap-2 px-1 py-1">
                    <span class="text-[10px] font-medium text-[#6d8576]">Following</span>
                    <span class="text-[11px] font-semibold text-[#163c2c]">Not set</span>
                  </div>
                </div>
                <p class="relative z-10 mt-2 border-t border-[#b6d7bb]/70 pt-2 text-[10px] text-[#6d8576]"><span class="font-semibold text-[#2d6a4f]">GROUP ID:</span> Not assigned</p>
              </article>
            </div>
            <div class="dashboard-card-below-first-three flex min-w-0 flex-wrap gap-x-4 gap-y-4">
              <article aria-label="Quick Actions" class="quick-actions-card relative isolate flex h-[120px] w-[392px] max-w-full shrink-0 flex-col overflow-hidden rounded-xl border border-[#dce8df] bg-white p-3 shadow-[0_2px_8px_rgba(19,70,48,0.04)]">
                <span aria-hidden="true" class="card-small-shape card-small-shape-one"></span>
                <span aria-hidden="true" class="card-small-shape card-small-shape-two"></span>
                <span aria-hidden="true" class="card-small-shape card-small-shape-three"></span>
                <span aria-hidden="true" class="card-small-shape card-small-shape-four"></span>
                <h2 class="relative z-10 flex items-center gap-2 text-xs font-semibold text-[#163c2c]">
                  <img src="../../images/images-Desktop-view/flash-icon.svg" alt="" class="h-8 w-8 shrink-0 object-contain" />
                  <span>Quick Actions</span>
                </h2>
                <div class="relative z-10 mt-auto flex items-center gap-1">
                  <div class="quick-action-item flex w-fit cursor-pointer items-center gap-1 rounded border border-[#c9dfcd] bg-[#f4faf5] px-1 py-1 text-[11px] font-semibold text-[#163c2c]">
                    <span class="relative h-10 w-10 shrink-0 overflow-hidden">
                      <img src="../../images/images-Desktop-view/deposit-cash.svg" alt="" class="absolute left-1/2 top-1/2 h-[40px] w-[40px] -translate-x-1/2 -translate-y-1/2 scale-[4.6] object-contain" />
                    </span>
                    <span>Deposit Money</span>
                  </div>
                  <div class="quick-action-item flex w-fit cursor-pointer items-center gap-1 rounded border border-[#c9dfcd] bg-[#f4faf5] px-1 py-1 text-[11px] font-semibold text-[#163c2c]">
                    <span class="relative h-10 w-10 shrink-0 overflow-hidden">
                      <img src="../../images/images-Desktop-view/withdraw-cash.svg" alt="" class="absolute left-1/2 top-1/2 h-[40px] w-[40px] -translate-x-1/2 -translate-y-1/2 scale-[4.6] object-contain" />
                    </span>
                    <span>Withdraw</span>
                  </div>
                  <div class="quick-action-item flex w-fit cursor-pointer items-center gap-1 rounded border border-[#c9dfcd] bg-[#f4faf5] px-1 py-1 text-[11px] font-semibold text-[#163c2c]">
                    <span class="relative h-10 w-10 shrink-0 overflow-hidden">
                      <img src="../../images/images-Desktop-view/filespro-icon.svg" alt="" class="absolute left-1/2 top-1/2 h-[40px] w-[40px] -translate-x-1/2 -translate-y-1/2 scale-[4.6] object-contain" />
                    </span>
                    <span>View Statement</span>
                  </div>
                </div>
              </article>
              <article aria-label="Manage Groups" tabindex="0" class="manage-groups-card dashboard-card-below-fourth relative mr-2 h-[80px] min-w-[120px] flex-1 cursor-pointer transition-transform duration-200 hover:-translate-y-0.5">
                <div class="manage-groups-inner">
                  <div class="manage-groups-face manage-groups-front">
                    <span aria-hidden="true" class="absolute inset-y-2 left-0 z-0 w-1 rounded-r bg-[#2d6a4f]"></span>
                    <span aria-hidden="true" class="card-small-shape card-small-shape-one"></span>
                    <span aria-hidden="true" class="card-small-shape card-small-shape-two"></span>
                    <span class="relative z-10 h-10 w-10 shrink-0 overflow-hidden rounded-full border border-[#c9dfcd] bg-white">
                      <img src="../../images/images-Desktop-view/people56 (1).svg" alt="" class="absolute left-1/2 top-1/2 h-[40px] w-[40px] -translate-x-1/2 -translate-y-1/2 scale-[4.6] object-contain" />
                    </span>
                    <span class="relative z-10 text-sm font-bold text-[#163c2c]">Manage Groups</span>
                  </div>
                  <div class="manage-groups-face manage-groups-back">
                    <span aria-hidden="true" class="card-small-shape card-small-shape-one"></span>
                    <span aria-hidden="true" class="card-small-shape card-small-shape-two"></span>
                    <span class="relative z-10 h-10 w-10 shrink-0 overflow-hidden rounded-full border border-[#c9dfcd] bg-white">
                      <img src="../../images/images-Desktop-view/people56 (1).svg" alt="" class="absolute left-1/2 top-1/2 h-[40px] w-[40px] -translate-x-1/2 -translate-y-1/2 scale-[4.6] object-contain" />
                    </span>
                    <span class="relative z-10 text-sm font-bold text-[#163c2c]">Know your friends</span>
                  </div>
                </div>
              </article>
            </div>
          </div>
          <div class="flex min-w-0 flex-col gap-4">
            <article aria-label="Your savings" class="total-savings-card relative isolate flex h-[220px] w-[220px] flex-col overflow-hidden rounded-xl border border-[#b6d7bb] bg-[#eaf5eb] p-5 shadow-[0_8px_24px_rgba(19,70,48,0.1)]">
              <span aria-hidden="true" class="card-small-shape card-small-shape-one"></span>
              <span aria-hidden="true" class="card-small-shape card-small-shape-two"></span>
              <span aria-hidden="true" class="card-small-shape card-small-shape-three"></span>
              <span aria-hidden="true" class="card-small-shape card-small-shape-four"></span>
              <h2 class="relative z-10 text-sm font-semibold text-[#2d6a4f]">Your savings</h2>
              <div class="relative z-10 mt-4">
                <p class="text-xs font-medium text-[#6d8576]">Current balance</p>
                <p class="mt-1 text-3xl font-bold leading-tight text-[#0b4d38]">Tsh 0</p>
              </div>
              <div class="relative z-10 mt-auto space-y-1.5 border-t border-[#2d6a4f]/15 pt-2.5">
                <div class="flex items-center justify-between gap-2 text-xs">
                  <span class="text-[#6d8576]">Rounds saved</span>
                  <span class="font-semibold text-[#163c2c]">-- / --</span>
                </div>
                <div class="flex items-center justify-between gap-2 text-xs">
                  <span class="text-[#6d8576]">Until your turn</span>
                  <span aria-label="Unassigned rounds until your turn" class="flex items-center gap-1 rounded-full border border-[#b6d7bb]/80 bg-[#dceee0] px-2 py-1 text-[10px] font-semibold text-[#2d6a4f]">
                    <span aria-hidden="true" class="h-1.5 w-1.5 rounded-full bg-[#2d6a4f]"></span>
                    -- rounds away
                  </span>
                </div>
              </div>
            </article>
            <article aria-label="Group savings highlight" class="relative h-[180px] w-full overflow-hidden rounded-xl border border-[#dce8df] bg-white">
              <img
                src="../../images/images-Desktop-view/card.png"
                alt=""
                class="pointer-events-none absolute inset-0 h-full w-full -translate-y-1 scale-[1.35] select-none object-cover opacity-95"
              />
              <img
                src="../../images/images-Desktop-view/flower.png"
                alt=""
                class="pointer-events-none absolute bottom-[-38px] right-[-50px] z-10 h-45 w-45 select-none object-contain"
              />
              <div class="absolute inset-y-0 left-4 z-20 flex w-[116px] flex-col justify-center pr-1">
                <p class="text-[10px] font-semibold text-[#2d6a4f]">GROUP SAVINGS</p>
                <h2 class="mt-2 text-xl font-bold leading-[1.05] text-[#163c2c]">
                  <span class="block">Grow</span>
                  <span class="block">together</span>
                </h2>
                <p class="mt-2 text-[11px] leading-4 text-[#426b56]">Each round moves your group forward.</p>
              </div>
            </article>
          </div>
          </template>
          <MyMchezo v-else-if="activeView === 'mchezo'" class="col-span-2" />
          <MyContribution v-else-if="activeView === 'contribution'" class="col-span-2" :group-name="props.groupName" />
          <MySchedule v-else class="col-span-2" :group-name="props.groupName" />
        </section>
      </main>
    </div>
  </div>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import overviewBackground from '../../images/images-Desktop-view/background.png';
import MyMchezo from './sub components desktop/my_mchezo.vue';
import MyContribution from './sub components desktop/my_contribution.vue';
import MySchedule from './sub components desktop/my_ schedual.vue';

const props = defineProps({
  groupName: {
    type: String,
    default: '',
  },
});

const router = useRouter();
const activeView = ref('dashboard');
const isMenuOpen = ref(false);
const isPaymentsOpen = ref(false);
const isMenuHovered = ref(false);
const isPaymentsHovered = ref(false);
const isInformationHovered = ref(false);
const isSidebarExpanded = ref(true);
const isProfileMenuOpen = ref(false);
const profileMenu = ref(null);

function closeProfileMenuOutside(event) {
  if (profileMenu.value && !profileMenu.value.contains(event.target)) {
    isProfileMenuOpen.value = false;
  }
}

onMounted(() => document.addEventListener('pointerdown', closeProfileMenuOutside));
onBeforeUnmount(() => document.removeEventListener('pointerdown', closeProfileMenuOutside));

function logout() {
  isProfileMenuOpen.value = false;
  router.push('/login');
}
</script>

<style scoped>
.manage-groups-card {
  perspective: 1000px;
}

.manage-groups-card:focus-visible {
  outline: 2px solid #2d6a4f;
  outline-offset: 3px;
}

.manage-groups-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 650ms cubic-bezier(0.2, 0.75, 0.25, 1);
}

.manage-groups-card:hover .manage-groups-inner,
.manage-groups-card:focus-visible .manage-groups-inner {
  transform: rotateY(180deg);
}

.manage-groups-face {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  overflow: hidden;
  box-sizing: border-box;
  border: 1px solid #b6d7bb;
  border-radius: 4px;
  padding: 0.75rem;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  box-shadow: 0 4px 12px rgba(19, 70, 48, 0.1);
}

.manage-groups-front {
  background: #eaf5eb;
}

.manage-groups-back {
  justify-content: center;
  background: #edf7ee;
  transform: rotateY(180deg);
}

.card-small-shape {
  position: absolute;
  z-index: 0;
  border: 1px solid rgba(45, 106, 79, 0.2);
  transform: rotate(45deg);
  pointer-events: none;
}

.card-small-shape-one {
  width: 14px;
  height: 14px;
  background: rgba(255, 255, 255, 0.34);
}

.card-small-shape-two {
  width: 8px;
  height: 8px;
  background: rgba(201, 223, 205, 0.3);
}

.card-small-shape-three {
  width: 10px;
  height: 10px;
  background: rgba(234, 245, 235, 0.5);
}

.card-small-shape-four {
  width: 6px;
  height: 6px;
  border-color: rgba(45, 106, 79, 0.16);
  background: rgba(201, 223, 205, 0.24);
}

.total-savings-card .card-small-shape-one {
  top: 25px;
  right: 22px;
  width: 46px;
  height: 46px;
  border-color: rgba(45, 106, 79, 0.18);
  background: rgba(201, 223, 205, 0.2);
}

.total-savings-card .card-small-shape-two {
  top: 91px;
  right: 43px;
  border-color: rgba(45, 106, 79, 0.18);
  background: rgba(201, 223, 205, 0.3);
}

.total-savings-card .card-small-shape-three {
  right: 23px;
  bottom: 47px;
  border-color: rgba(45, 106, 79, 0.18);
  background: rgba(201, 223, 205, 0.3);
}

.total-savings-card .card-small-shape-four {
  right: 81px;
  bottom: 22px;
  border-color: rgba(45, 106, 79, 0.16);
  background: rgba(201, 223, 205, 0.24);
}

.total-savings-card::before {
  position: absolute;
  top: 37px;
  right: -43px;
  z-index: 0;
  width: 138px;
  height: 138px;
  border: 1px solid rgba(45, 106, 79, 0.14);
  border-radius: 50%;
  box-shadow: 0 0 0 12px rgba(45, 106, 79, 0.035), 0 0 0 27px rgba(45, 106, 79, 0.025);
  content: '';
  pointer-events: none;
}

.round-overview-card .card-small-shape-one {
  top: -23px;
  right: 22px;
  width: 68px;
  height: 68px;
  border-color: rgba(45, 106, 79, 0.14);
  background: rgba(201, 223, 205, 0.16);
}

.round-overview-card .card-small-shape-two {
  top: 45px;
  right: 48px;
}

.round-overview-card .card-small-shape-three {
  right: 17px;
  bottom: 18px;
}

.quick-actions-card .card-small-shape-one {
  top: 22px;
  right: 29%;
}

.quick-actions-card .card-small-shape-two {
  top: 44px;
  right: 22%;
}

.quick-actions-card .card-small-shape-three {
  top: 16px;
  right: 45%;
}

.quick-actions-card .card-small-shape-four {
  top: 43px;
  right: 39%;
}

.manage-groups-face .card-small-shape-one {
  top: 10px;
  right: 18px;
}

.manage-groups-face .card-small-shape-two {
  right: 38px;
  bottom: 10px;
}

.manage-groups-face::before,
.manage-groups-face::after {
  position: absolute;
  content: '';
  z-index: 0;
  transform: rotate(45deg);
  pointer-events: none;
}

.manage-groups-face::before {
  top: -38px;
  right: 18px;
  width: 76px;
  height: 76px;
  border: 1px solid rgba(45, 106, 79, 0.22);
  background: rgba(255, 255, 255, 0.24);
}

.manage-groups-face::after {
  right: 48px;
  bottom: -26px;
  width: 44px;
  height: 44px;
  border: 1px solid rgba(45, 106, 79, 0.18);
  background: rgba(201, 223, 205, 0.2);
}

.quick-actions-card::before,
.quick-actions-card::after {
  position: absolute;
  content: '';
  z-index: 0;
  transform: rotate(45deg);
  pointer-events: none;
}

.quick-actions-card::before {
  top: -38px;
  right: 18px;
  width: 76px;
  height: 76px;
  border: 1px solid rgba(45, 106, 79, 0.22);
  background: rgba(234, 245, 235, 0.38);
}

.quick-actions-card::after {
  right: 48px;
  bottom: -26px;
  width: 44px;
  height: 44px;
  border: 1px solid rgba(45, 106, 79, 0.18);
  background: rgba(201, 223, 205, 0.2);
}

.quick-action-item {
  transition: transform 180ms ease, background-color 180ms ease, border-color 180ms ease, box-shadow 180ms ease;
}

.quick-action-item:hover {
  transform: translateY(-2px);
  border-color: #9dc8a5;
  background-color: #eaf5eb;
  box-shadow: 0 3px 8px rgba(19, 70, 48, 0.12);
}

@media (prefers-reduced-motion: reduce) {
  .manage-groups-inner,
  .quick-action-item,
  .manage-groups-card {
    transition: none;
  }

  .quick-action-item:hover,
  .manage-groups-card:hover {
    transform: none;
  }
}

.dashboard-card-below-first-three {
  margin-top: -40px;
}

.dashboard-card-below-fourth {
  margin-top: 40px;
}

@media (max-width: 1140px) {
  .dashboard-card-below-first-three {
    margin-top: 0;
  }

  .dashboard-card-below-fourth {
    margin-top: 0;
  }
}

.profile-menu-enter-active,
.profile-menu-leave-active {
  transform-origin: top right;
  transition: opacity 140ms ease, transform 140ms ease;
}

.profile-menu-enter-from,
.profile-menu-leave-to {
  opacity: 0;
  transform: translateY(-4px) scale(0.98);
}

.dashboard-search {
  width: 4.5rem;
  height: 3rem;
  gap: 0;
  overflow: hidden;
  padding: 0.75rem 0.875rem;
  transition: width 360ms cubic-bezier(0.2, 0.75, 0.25, 1), gap 300ms ease, padding 300ms ease, box-shadow 250ms ease, border-color 250ms ease;
}

.dashboard-search:hover,
.dashboard-search:focus-within {
  width: min(100%, 20rem);
  gap: 0.75rem;
  padding-right: 1rem;
  padding-left: 1rem;
}

.dashboard-search-input {
  flex: 1 1 0%;
  max-width: 0;
  overflow: hidden;
  opacity: 0;
  transition: max-width 360ms cubic-bezier(0.2, 0.75, 0.25, 1), opacity 180ms ease;
}

.dashboard-search:hover .dashboard-search-input,
.dashboard-search:focus-within .dashboard-search-input {
  max-width: 40rem;
  opacity: 1;
}

.sidebar-icon-tooltip::after {
  position: absolute;
  z-index: 60;
  top: 50%;
  left: calc(100% + 0.5rem);
  width: max-content;
  max-width: 0;
  overflow: hidden;
  padding: 0.55rem 0;
  border: 1px solid transparent;
  border-radius: 0.6rem;
  background: #f8fcf9;
  box-shadow: 0 8px 22px rgba(8, 47, 34, 0.18);
  color: #174b38;
  content: attr(data-tooltip);
  font-size: 0.72rem;
  font-weight: 600;
  line-height: 1rem;
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  transform: translate(0.25rem, -50%);
  transition: max-width 280ms cubic-bezier(0.2, 0.75, 0.25, 1), padding 280ms ease, border-color 180ms ease, opacity 160ms ease, transform 160ms ease, visibility 0s linear 280ms;
  pointer-events: none;
}

.sidebar-icon-tooltip::before {
  position: absolute;
  z-index: 61;
  top: 50%;
  left: calc(100% + 0.3rem);
  width: 0.45rem;
  height: 0.45rem;
  border-bottom: 1px solid #d5e7dc;
  border-left: 1px solid #d5e7dc;
  background: #f8fcf9;
  content: '';
  opacity: 0;
  visibility: hidden;
  transform: translateY(-50%) rotate(45deg);
  transition: opacity 160ms ease, visibility 160ms ease;
  pointer-events: none;
}

.sidebar-icon-tooltip:hover::after,
.sidebar-icon-tooltip:hover::before {
  opacity: 1;
  visibility: visible;
}

.sidebar-icon-tooltip:hover::after {
  max-width: 14rem;
  padding-right: 0.75rem;
  padding-left: 0.75rem;
  border-color: #d5e7dc;
  transform: translate(0, -50%);
  transition-delay: 0s;
}

.sidebar-scrollbar {
  scrollbar-color: rgba(195, 227, 209, 0.28) transparent;
  scrollbar-width: thin;
}

.sidebar-scrollbar::-webkit-scrollbar {
  width: 4px;
}

.sidebar-scrollbar::-webkit-scrollbar-thumb {
  border-radius: 999px;
  background: rgba(195, 227, 209, 0.28);
}

.sidebar-divider-line {
  opacity: 0.4;
  transform: scaleX(0.2);
  transform-origin: center;
  transition: opacity 500ms ease, transform 500ms ease;
}

.sidebar-divider-open .sidebar-divider-line {
  opacity: 0.9;
  transform: scaleX(1);
}

.sidebar-divider-open .sidebar-divider-line:last-child {
  transition-delay: 90ms;
}

@media (prefers-reduced-motion: reduce) {
  .sidebar-divider-line {
    transition: none;
  }
}
</style>
