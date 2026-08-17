<script setup>
import { nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import BrandMark from './components/BrandMark.vue'
import HeroJourney from './components/HeroJourney.vue'
import SfIcon from './components/SfIcon.vue'
import SiteHeader from './components/SiteHeader.vue'

const menuOpen = ref(false)
const activeSection = ref('top')
const appReady = ref(false)
const isScrolled = ref(false)
const scrollProgress = ref(0)
const currentYear = new Date().getFullYear()

const platformAreas = [
  {
    icon: 'users',
    title: 'Admissions & placement',
    body: 'Move from intake and level assessment into a clear placement decision, with permissioned review where the workflow requires it.',
    details: ['Intake', 'Tests', 'Placement'],
  },
  {
    icon: 'book',
    title: 'Learning & attendance',
    body: 'Keep groups, lessons, attendance, exams, materials, and published academic results connected around each learner.',
    details: ['Groups', 'Attendance', 'Exams'],
  },
  {
    icon: 'message',
    title: 'People & work',
    body: 'Give staff role-aware workspaces for tasks, meetings, messaging, requests, forms, and the routines that move a center forward.',
    details: ['Tasks', 'Messages', 'Meetings'],
  },
  {
    icon: 'wallet',
    title: 'Finance & leadership',
    body: 'Bring tuition, expenses, payroll, approvals, branch context, and reporting into the views used for operational decisions.',
    details: ['Finance', 'Approvals', 'Reports'],
  },
  {
    icon: 'building',
    title: 'Content & operations',
    body: 'Support permissioned library workflows, protected materials, print jobs, notifications, and multi-branch operations.',
    details: ['Library', 'Printing', 'Branches'],
  },
]

const plans = [
  { name: 'Basic', price: '100' },
  { name: 'Pro', price: '159' },
  { name: 'Max', price: '200' },
]

let observer
let scrollFrame

const closeMenu = () => {
  menuOpen.value = false
}

const onKeydown = async (event) => {
  if (event.key === 'Escape' && menuOpen.value) {
    closeMenu()
    await nextTick()
    document.querySelector('.menu-toggle')?.focus()
  }
}

const updateScrollState = () => {
  const top = window.scrollY
  const scrollable = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1)
  isScrolled.value = top > 90
  scrollProgress.value = Math.min(Math.max(top / scrollable, 0), 1)
  scrollFrame = undefined
}

const onScroll = () => {
  if (scrollFrame) return
  scrollFrame = requestAnimationFrame(updateScrollState)
}

const cleanPageUrl = () => {
  window.history.replaceState(null, '', `${window.location.pathname}${window.location.search}`)
}

const onInternalLink = (event) => {
  const link = event.target.closest('a[href^="#"]')
  if (!link) return

  const selector = link.getAttribute('href')
  const target = selector && document.querySelector(selector)
  if (!target) return

  event.preventDefault()
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  target.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth', block: 'start' })
  cleanPageUrl()

  if (link.classList.contains('skip-link')) {
    requestAnimationFrame(() => target.focus({ preventScroll: true }))
  }
}

const scrollToTop = () => {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  window.scrollTo({ top: 0, behavior: reducedMotion ? 'auto' : 'smooth' })
}

watch(menuOpen, async (isOpen) => {
  document.body.classList.toggle('menu-is-open', isOpen)
  await nextTick()

  if (isOpen) {
    document.querySelector('#mobile-menu a')?.focus()
  }
})

onMounted(() => {
  window.addEventListener('keydown', onKeydown)
  window.addEventListener('scroll', onScroll, { passive: true })
  document.addEventListener('click', onInternalLink)
  updateScrollState()
  if (window.location.hash) cleanPageUrl()

  observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

      if (visible?.target?.id) activeSection.value = visible.target.id
    },
    {
      rootMargin: '-18% 0px -62% 0px',
      threshold: [0, 0.15, 0.35, 0.65],
    },
  )

  document.querySelectorAll('main section[id]').forEach((section) => observer.observe(section))
  requestAnimationFrame(() => {
    appReady.value = true
  })
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKeydown)
  window.removeEventListener('scroll', onScroll)
  document.removeEventListener('click', onInternalLink)
  if (scrollFrame) cancelAnimationFrame(scrollFrame)
  observer?.disconnect()
  document.body.classList.remove('menu-is-open')
})
</script>

<template>
  <div class="app-shell" :class="{ 'app-ready': appReady }">
    <a class="skip-link" href="#main-content">Skip to content</a>

    <SiteHeader
      :menu-open="menuOpen"
      :active-section="activeSection"
      :scrolled="isScrolled"
      :scroll-progress="scrollProgress"
      @toggle-menu="menuOpen = !menuOpen"
      @close-menu="closeMenu"
    />

    <main id="main-content" tabindex="-1">
      <HeroJourney />

      <section id="platform" class="relay-section" aria-labelledby="relay-title">
        <div class="section-shell relay-section__intro">
          <h2 id="relay-title">One source of truth. The right view for every role.</h2>
          <p>
            Starforge connects CEO and staff experiences across web and mobile, with a dedicated
            mobile app for families—all centered on the same organization and permission model.
          </p>
        </div>

        <div class="section-shell relay-stage" aria-label="Connected Starforge products">
          <article class="relay-pane relay-pane--leadership">
            <div class="relay-pane__topline">
              <span class="relay-pane__product"><SfIcon name="crown" :size="18" /> CEO</span>
              <span>Web + mobile</span>
            </div>
            <h3>Lead from the office—or wherever the day takes you.</h3>
            <div class="relay-pane__interface relay-pane__interface--leadership" aria-hidden="true">
              <span class="interface-nav"></span>
              <span class="interface-block interface-block--wide"></span>
              <span class="interface-block"></span>
              <span class="interface-block"></span>
              <span class="interface-lines"></span>
            </div>
          </article>

          <div class="relay-connector relay-connector--one" aria-hidden="true">
            <span></span><SfIcon name="spark" :size="24" />
          </div>

          <article class="relay-pane relay-pane--staff">
            <div class="relay-pane__topline">
              <span class="relay-pane__product"><SfIcon name="users" :size="18" /> Staff</span>
              <span>Web + mobile</span>
            </div>
            <h3>Work inside the right role, branch, and permission scope.</h3>
            <div class="relay-pane__interface relay-pane__interface--staff" aria-hidden="true">
              <span class="interface-sidebar"></span>
              <span class="interface-task"></span>
              <span class="interface-task"></span>
              <span class="interface-task"></span>
            </div>
          </article>

          <div class="relay-connector relay-connector--two" aria-hidden="true">
            <span></span><SfIcon name="spark" :size="24" />
          </div>

          <article class="relay-pane relay-pane--mobile">
            <div class="relay-pane__topline">
              <span class="relay-pane__product"><SfIcon name="smartphone" :size="18" /> Family</span>
              <span>Mobile only</span>
            </div>
            <h3>A dedicated family experience, without a separate web portal.</h3>
            <div class="relay-pane__interface relay-pane__interface--mobile" aria-hidden="true">
              <span class="mobile-notch"></span>
              <span class="mobile-line"></span>
              <span class="mobile-card"></span>
              <span class="mobile-card"></span>
              <span class="mobile-nav"></span>
            </div>
          </article>
        </div>

        <p class="section-shell relay-section__truth">
          CEO and staff: web + mobile · Family: mobile only · Backend permissions stay authoritative.
        </p>
      </section>

      <section id="day-flow" class="system-section" aria-labelledby="system-title">
        <div class="section-shell system-section__layout">
          <div class="system-section__intro">
            <h2 id="system-title">Your center is not one workflow.</h2>
            <p>
              Starforge connects the work between departments, classes, people, and decisions—so
              each team can move without losing the wider context.
            </p>
            <a class="text-link" href="#pricing">
              See the plans
              <SfIcon name="arrow-right" :size="19" />
            </a>
          </div>

          <div class="system-list">
            <article v-for="area in platformAreas" :key="area.title" class="system-row">
              <span class="system-row__icon"><SfIcon :name="area.icon" :size="22" /></span>
              <div class="system-row__copy">
                <h3>{{ area.title }}</h3>
                <p>{{ area.body }}</p>
                <ul aria-label="Included product areas">
                  <li v-for="detail in area.details" :key="detail">{{ detail }}</li>
                </ul>
              </div>
              <SfIcon class="system-row__arrow" name="arrow-up-right" :size="21" />
            </article>
          </div>
        </div>
      </section>

      <section id="ielts" class="ielts-section" aria-labelledby="ielts-title">
        <div class="section-shell ielts-section__intro">
          <div>
            <h2 id="ielts-title">Schedule the mock. Share one code. Start together.</h2>
            <p class="ielts-section__eyebrow">
              <span aria-hidden="true"></span>
              Coming soon · Desktop IELTS tools
            </p>
          </div>
          <p>
            A teacher or team member with permission uploads or selects an IELTS mock exam,
            schedules it, and receives a generated room code. Students enter that code in the
            desktop Mock Room to open the assigned test.
          </p>
        </div>

        <div class="section-shell ielts-stage">
          <ol class="ielts-steps" aria-label="IELTS mock scheduling flow">
            <li>
              <span class="ielts-step__number">01</span>
              <span class="ielts-step__icon"><SfIcon name="book" :size="21" /></span>
              <span><strong>Choose the mock</strong><small>Upload a test or select one inside Starforge.</small></span>
            </li>
            <li>
              <span class="ielts-step__number">02</span>
              <span class="ielts-step__icon"><SfIcon name="clock" :size="21" /></span>
              <span><strong>Schedule the room</strong><small>Set the test details and start time.</small></span>
            </li>
            <li>
              <span class="ielts-step__number">03</span>
              <span class="ielts-step__icon"><SfIcon name="spark" :size="21" /></span>
              <span><strong>Generate a code</strong><small>Starforge creates a random room code to share.</small></span>
            </li>
            <li>
              <span class="ielts-step__number">04</span>
              <span class="ielts-step__icon"><SfIcon name="arrow-right" :size="21" /></span>
              <span><strong>Students enter</strong><small>The assigned test opens inside the desktop Mock Room.</small></span>
            </li>
          </ol>

          <article class="mock-room" aria-label="Illustrative IELTS Mock Room preview">
            <div class="mock-room__toolbar">
              <span><SfIcon name="monitor" :size="18" /> Starforge IELTS</span>
              <span class="mock-room__status"><i aria-hidden="true"></i> Scheduled</span>
            </div>
            <div class="mock-room__surface">
              <div class="mock-room__heading">
                <div>
                  <span>Desktop Mock Room</span>
                  <h3>IELTS Academic mock</h3>
                </div>
                <span class="mock-room__date"><small>Starts</small>20 Aug · 09:00</span>
              </div>

              <div class="mock-room__code">
                <span>Illustrative generated code</span>
                <strong>SF-4827</strong>
                <small>Share this code with the assigned students</small>
              </div>

              <div class="mock-room__entry">
                <div>
                  <span>Student Mock Room</span>
                  <strong>Enter room code</strong>
                </div>
                <code>SF-4827</code>
                <span class="mock-room__open">Open test <SfIcon name="arrow-right" :size="17" /></span>
              </div>
            </div>
          </article>
        </div>

        <p class="section-shell ielts-section__note">
          In progress — this is a workflow preview, not an availability claim.
        </p>
      </section>

      <section class="ai-section" aria-labelledby="ai-title">
        <div class="section-shell ai-section__layout">
          <div class="ai-section__mark" aria-hidden="true">
            <SfIcon name="spark" :size="82" />
            <span></span>
          </div>
          <div class="ai-section__copy">
            <h2 id="ai-title">AI assistance, inside the work.</h2>
            <p>
              Starforge includes AI-assisted product areas. Where a workflow uses them, suggestions
              appear inside the existing permission and approval structure—not beside it as a
              disconnected tool.
            </p>
          </div>
          <ol class="ai-flow" aria-label="Illustrative assisted workflow">
            <li><span>Suggest</span><small>AI-supported input</small></li>
            <li><span>Review</span><small>Permissioned person</small></li>
            <li><span>Decide</span><small>Recorded workflow</small></li>
          </ol>
        </div>
      </section>

      <section class="foundation-section" aria-labelledby="foundation-title">
        <div class="section-shell">
          <h2 id="foundation-title">Built around the center you actually run.</h2>
          <div class="foundation-rail">
            <article>
              <SfIcon name="building" :size="25" />
              <div><h3>Multi-branch by design</h3><p>Organization, branch, and department context stay connected.</p></div>
            </article>
            <article>
              <SfIcon name="shield" :size="25" />
              <div><h3>Permission-aware</h3><p>Navigation helps people focus; the backend remains authoritative.</p></div>
            </article>
            <article>
              <SfIcon name="globe" :size="25" />
              <div><h3>Three working languages</h3><p>Existing staff products support Uzbek, Russian, and English.</p></div>
            </article>
          </div>
        </div>
      </section>

      <section id="pricing" class="pricing-section" aria-labelledby="pricing-title">
        <div class="section-shell pricing-section__intro">
          <h2 id="pricing-title">Three plans. Clear starting prices.</h2>
          <p>
            Plan scope and billing cadence are confirmed directly with your center. No hidden
            feature matrix is implied here—talk with us and choose from the supplied package prices.
          </p>
        </div>

        <div class="section-shell pricing-grid">
          <article v-for="plan in plans" :key="plan.name" class="plan">
            <div class="plan__top">
              <h3>{{ plan.name }}</h3>
              <span>Starforge plan</span>
            </div>
            <p class="plan__price">
              <span class="plan__currency">$</span><strong>{{ plan.price }}</strong>
            </p>
            <p class="plan__caption">Package price</p>
            <div class="plan__rule" aria-hidden="true"></div>
            <p class="plan__note">
              Confirm modules, limits, billing cadence, and rollout directly with Starforge.
            </p>
            <a
              class="button button--plan"
              :href="`https://t.me/starforge_edu?text=${encodeURIComponent(`Hello Starforge, I want to discuss the ${plan.name} plan.`)}`"
              target="_blank"
              rel="noreferrer"
            >
              Discuss {{ plan.name }}
              <SfIcon name="arrow-up-right" :size="19" />
            </a>
          </article>
        </div>
      </section>

      <section id="contact" class="contact-section" aria-labelledby="contact-title">
        <div class="contact-section__pattern" aria-hidden="true">
          <svg viewBox="0 0 640 320">
            <path d="M320 6c42 160 134 252 294 294-160 42-252 134-294 294C278 434 186 342 26 300 186 258 278 166 320 6Z" />
            <circle cx="320" cy="300" r="205" />
          </svg>
        </div>

        <div class="section-shell contact-section__layout">
          <div>
            <h2 id="contact-title">Let’s map Starforge to your center.</h2>
            <p>
              Tell us how your branches, teams, and daily work are organized. We’ll continue the
              conversation directly.
            </p>
          </div>

          <div class="contact-section__actions">
            <a
              class="button button--porcelain button--large"
              href="https://t.me/starforge_edu"
              target="_blank"
              rel="noreferrer"
            >
              Message on Telegram
              <SfIcon name="arrow-up-right" :size="20" />
            </a>
            <a class="button button--ghost-light button--large" href="tel:+998990358849">
              <SfIcon name="phone" :size="20" />
              +998 99 035 88 49
            </a>
          </div>
        </div>

        <div class="section-shell contact-links" aria-label="Other ways to contact Starforge">
          <a href="mailto:edustarforge@gmail.com">
            <span>Email</span><strong>edustarforge@gmail.com</strong><SfIcon name="arrow-up-right" :size="18" />
          </a>
          <a href="https://www.instagram.com/starforge_edu/" target="_blank" rel="noreferrer">
            <span>Instagram</span><strong>@starforge_edu</strong><SfIcon name="arrow-up-right" :size="18" />
          </a>
          <a href="https://t.me/starforge_edu" target="_blank" rel="noreferrer">
            <span>Telegram</span><strong>@starforge_edu</strong><SfIcon name="arrow-up-right" :size="18" />
          </a>
        </div>
      </section>
    </main>

    <button
      class="back-to-top"
      :class="{ 'back-to-top--visible': isScrolled }"
      type="button"
      :aria-hidden="!isScrolled"
      :tabindex="isScrolled ? 0 : -1"
      aria-label="Back to top"
      @click="scrollToTop"
    >
      <span>Back to top</span>
      <SfIcon name="arrow-up" :size="19" />
    </button>

    <footer class="site-footer">
      <div class="section-shell site-footer__layout">
        <a href="#top" aria-label="Back to Starforge home"><BrandMark /></a>
        <p>Technology built for the people shaping tomorrow.</p>
        <span>© {{ currentYear }} Starforge</span>
      </div>
    </footer>
  </div>
</template>
