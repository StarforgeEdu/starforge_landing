<script setup>
import BrandMark from './BrandMark.vue'
import SfIcon from './SfIcon.vue'

defineProps({
  menuOpen: Boolean,
  activeSection: {
    type: String,
    default: 'top',
  },
  scrolled: Boolean,
  scrollProgress: {
    type: Number,
    default: 0,
  },
})

const emit = defineEmits(['toggle-menu', 'close-menu'])

const links = [
  { label: 'Platform', href: '#platform', section: 'platform' },
  { label: 'IELTS Mock', href: '#ielts', section: 'ielts' },
  { label: 'Pricing', href: '#pricing', section: 'pricing' },
]
</script>

<template>
  <header
    class="site-header"
    :class="{ 'site-header--open': menuOpen, 'site-header--scrolled': scrolled }"
    :style="{ '--scroll-progress': scrollProgress }"
  >
    <div class="site-header__bar">
      <a class="site-header__brand" href="#top" aria-label="Starforge home" @click="emit('close-menu')">
        <BrandMark />
      </a>

      <nav class="site-header__nav" aria-label="Primary navigation">
        <a
          v-for="link in links"
          :key="link.href"
          :href="link.href"
          :aria-current="activeSection === link.section ? 'location' : undefined"
        >
          {{ link.label }}
        </a>
      </nav>

      <a
        class="button button--small button--terracotta site-header__cta"
        href="https://t.me/starforge_edu"
        target="_blank"
        rel="noreferrer"
      >
        Talk to Starforge
        <SfIcon name="arrow-up-right" :size="18" />
      </a>

      <button
        class="menu-toggle"
        type="button"
        :aria-expanded="menuOpen"
        aria-controls="mobile-menu"
        :aria-label="menuOpen ? 'Close navigation menu' : 'Open navigation menu'"
        @click="emit('toggle-menu')"
      >
        <span class="menu-toggle__icons" aria-hidden="true">
          <span class="menu-toggle__icon menu-toggle__icon--menu">
            <SfIcon name="menu" :size="22" />
          </span>
          <span class="menu-toggle__icon menu-toggle__icon--close">
            <SfIcon name="close" :size="22" />
          </span>
        </span>
      </button>
    </div>

    <div
      id="mobile-menu"
      class="mobile-menu"
      :aria-hidden="!menuOpen"
      :inert="!menuOpen"
    >
      <nav aria-label="Mobile navigation">
        <a
          v-for="link in links"
          :key="link.href"
          :href="link.href"
          :aria-current="activeSection === link.section ? 'location' : undefined"
          @click="emit('close-menu')"
        >
          <span>{{ link.label }}</span>
          <SfIcon name="arrow-right" :size="19" />
        </a>
      </nav>

      <div class="mobile-menu__actions">
        <a
          class="button button--terracotta mobile-menu__cta"
          href="https://t.me/starforge_edu"
          target="_blank"
          rel="noreferrer"
          @click="emit('close-menu')"
        >
          Book a demo
          <SfIcon name="arrow-up-right" :size="19" />
        </a>
        <a class="button button--nav-call" href="tel:+998990358849" @click="emit('close-menu')">
          <SfIcon name="phone" :size="18" />
          Call
        </a>
      </div>
    </div>
  </header>
</template>
