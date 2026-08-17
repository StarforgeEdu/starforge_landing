<script setup>
import SfIcon from './SfIcon.vue'

const roles = [
  { icon: 'crown', name: 'CEO', detail: 'Web + mobile' },
  { icon: 'building', name: 'Manager', detail: 'Web + mobile' },
  { icon: 'users', name: 'Staff', detail: 'Web + mobile' },
  { icon: 'smartphone', name: 'Family', detail: 'Mobile app' },
]
</script>

<template>
  <section id="top" class="hero" aria-labelledby="hero-title">
    <div class="hero__field">
      <div class="hero__linework" aria-hidden="true">
        <svg viewBox="0 0 320 320">
          <path d="M160 8c21 80 67 126 147 147-80 21-126 67-147 147C139 222 93 176 13 155 93 134 139 88 160 8Z" />
          <circle cx="160" cy="155" r="108" />
          <path d="M52 47h216M52 263h216M52 47v216M268 47v216" />
        </svg>
      </div>

      <div class="hero__copy">
        <h1 id="hero-title">
          From first lesson to final decision.
        </h1>
        <p class="hero__accent">without the gaps.</p>
        <p class="hero__brand-line">
          <SfIcon name="spark" :size="15" />
          Technology built for the people shaping tomorrow.
        </p>
        <p class="hero__body">
          Starforge connects admissions, learning, finance, staff work, and leadership in one
          permission-aware platform built for education centers.
        </p>

        <div class="hero__actions">
          <a
            class="button button--porcelain"
            href="https://t.me/starforge_edu"
            target="_blank"
            rel="noreferrer"
          >
            Book a demo
            <span class="button__icon-well" aria-hidden="true">
              <SfIcon name="spark" :size="18" />
            </span>
          </a>
          <a class="button button--ghost-light" href="tel:+998990358849">
            <SfIcon name="phone" :size="19" />
            Call us
          </a>
        </div>
      </div>

      <div
        class="hero__field-note"
        aria-label="Available now on web and mobile; desktop IELTS tools coming soon"
      >
        <span>Web</span>
        <span aria-hidden="true">·</span>
        <span>Mobile</span>
        <span aria-hidden="true">·</span>
        <span>Desktop soon</span>
      </div>
    </div>

    <div class="journey" aria-label="Illustrative product journey through one education-center day">
      <div class="journey__grid" aria-hidden="true"></div>
      <p class="journey__label">Illustrative product journey</p>

      <svg class="journey-route" viewBox="0 0 920 820" preserveAspectRatio="none" aria-hidden="true">
        <path
          class="journey-route__underlay"
          d="M122 140 C126 210 168 220 242 248 C315 276 280 363 370 396 C462 430 425 519 526 554 C628 590 570 675 680 706"
        />
        <path
          class="journey-route__path"
          d="M122 140 C126 210 168 220 242 248 C315 276 280 363 370 396 C462 430 425 519 526 554 C628 590 570 675 680 706"
        />
      </svg>

      <article class="journey-station journey-station--admissions">
        <div class="journey-station__heading">
          <span class="journey-node" aria-hidden="true"><SfIcon name="spark" :size="21" /></span>
          <time datetime="08:30">08:30</time>
          <h2>Admissions</h2>
        </div>
        <div class="product-strip product-strip--admissions">
          <span class="product-strip__label">Placement review</span>
          <span class="product-strip__step"><SfIcon name="check" :size="15" /> Level assessed</span>
          <span class="product-strip__step product-strip__step--active">Group suggested</span>
        </div>
      </article>

      <article class="journey-station journey-station--classroom">
        <div class="journey-station__heading">
          <span class="journey-node" aria-hidden="true"><SfIcon name="spark" :size="21" /></span>
          <time datetime="11:00">11:00</time>
          <h2>Classroom</h2>
        </div>
        <div class="attendance-strip">
          <div>
            <strong>Today · Attendance</strong>
            <span>English · Group A</span>
          </div>
          <div class="attendance-strip__states" aria-label="Attendance states">
            <span class="attendance-dot attendance-dot--present">Present</span>
            <span class="attendance-dot attendance-dot--late">Late</span>
            <span class="attendance-dot attendance-dot--absent">Absent</span>
          </div>
        </div>
      </article>

      <div class="phone-preview" aria-label="Illustrative staff mobile workspace">
        <div class="phone-preview__top">
          <span>11:00</span>
          <span class="phone-preview__speaker" aria-hidden="true"></span>
          <span>•••</span>
        </div>
        <div class="phone-preview__brand">
          <SfIcon name="spark" :size="16" />
          <strong>My day</strong>
        </div>
        <p>Tuesday, 18 August</p>
        <div class="phone-preview__lesson">
          <time datetime="11:00">11:00</time>
          <span><strong>English · Group A</strong><small>Room 3</small></span>
        </div>
        <div class="phone-preview__lesson">
          <time datetime="13:30">13:30</time>
          <span><strong>Speaking practice</strong><small>Room 2</small></span>
        </div>
        <div class="phone-preview__nav" aria-hidden="true">
          <SfIcon name="clock" :size="15" />
          <SfIcon name="book" :size="15" />
          <SfIcon name="message" :size="15" />
        </div>
      </div>

      <article class="journey-station journey-station--finance">
        <div class="journey-station__heading">
          <span class="journey-node" aria-hidden="true"><SfIcon name="spark" :size="21" /></span>
          <time datetime="15:40">15:40</time>
          <h2>Finance</h2>
        </div>
        <div class="finance-strip">
          <div class="finance-strip__head">
            <span>Tuition ledger</span>
            <span>Status</span>
          </div>
          <div class="finance-strip__row">
            <span>Monthly tuition</span>
            <span class="status status--paid">Paid</span>
          </div>
          <div class="finance-strip__row">
            <span>Materials fee</span>
            <span class="status status--pending">Pending</span>
          </div>
        </div>
      </article>

      <article class="journey-station journey-station--leadership">
        <div class="journey-station__heading">
          <span class="journey-node" aria-hidden="true"><SfIcon name="spark" :size="21" /></span>
          <time datetime="18:20">18:20</time>
          <h2>Leadership</h2>
        </div>
        <div class="leadership-panel">
          <div class="leadership-panel__nav" aria-hidden="true">
            <SfIcon name="spark" :size="17" />
            <SfIcon name="building" :size="16" />
            <SfIcon name="users" :size="16" />
            <SfIcon name="wallet" :size="16" />
          </div>
          <div class="leadership-panel__body">
            <div>
              <span class="leadership-panel__overline">Executive overview</span>
              <strong>Today at a glance</strong>
            </div>
            <ul>
              <li><SfIcon name="check" :size="15" /> Branch views aligned</li>
              <li><SfIcon name="check" :size="15" /> Attendance published</li>
              <li><SfIcon name="clock" :size="15" /> Decisions awaiting review</li>
            </ul>
          </div>
        </div>
      </article>

      <aside class="role-legend" aria-label="Role-specific product views">
        <div v-for="role in roles" :key="role.name" class="role-legend__item">
          <span class="role-legend__icon"><SfIcon :name="role.icon" :size="18" /></span>
          <span><strong>{{ role.name }}</strong><small>{{ role.detail }}</small></span>
        </div>
      </aside>
    </div>
  </section>
</template>
