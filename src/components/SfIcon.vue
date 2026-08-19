<script setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
  size: {
    type: [Number, String],
    default: 20,
  },
})
</script>

<template>
  <svg
    class="sf-icon"
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.8"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    <template v-if="name === 'arrow-up-right'">
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </template>
    <template v-else-if="name === 'arrow-right'">
      <path d="M5 12h14" />
      <path d="m14 7 5 5-5 5" />
    </template>
    <template v-else-if="name === 'arrow-up'">
      <path d="M12 19V5" />
      <path d="m7 10 5-5 5 5" />
    </template>
    <template v-else-if="name === 'phone'">
      <path d="M8.3 3.5 10 7.2 7.9 9.3a15.1 15.1 0 0 0 6.8 6.8l2.1-2.1 3.7 1.7v3a2 2 0 0 1-2 2A15.5 15.5 0 0 1 3.3 5.5a2 2 0 0 1 2-2h3Z" />
    </template>
    <template v-else-if="name === 'building'">
      <path d="M4 21V6l8-3 8 3v15" />
      <path d="M8 9h1m6 0h1M8 13h1m6 0h1M8 17h1m6 0h1M2 21h20" />
    </template>
    <template v-else-if="name === 'users'">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    </template>
    <template v-else-if="name === 'book'">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z" />
    </template>
    <template v-else-if="name === 'wallet'">
      <path d="M20 7V5a2 2 0 0 0-2-2H5a3 3 0 0 0 0 6h15v12H5a3 3 0 0 1-3-3V6" />
      <path d="M16 13h4" />
    </template>
    <template v-else-if="name === 'crown'">
      <path d="m3 7 4 4 5-7 5 7 4-4-2 12H5L3 7Z" />
      <path d="M5 19h14" />
    </template>
    <template v-else-if="name === 'smartphone'">
      <rect x="6" y="2" width="12" height="20" rx="2.5" />
      <path d="M10 18h4" />
    </template>
    <template v-else-if="name === 'monitor'">
      <rect x="2.5" y="3.5" width="19" height="14" rx="2" />
      <path d="M8 21h8M12 17.5V21" />
    </template>
    <template v-else-if="name === 'check'">
      <path d="m5 12 4 4L19 6" />
    </template>
    <template v-else-if="name === 'shield'">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
      <path d="m9 12 2 2 4-4" />
    </template>
    <template v-else-if="name === 'globe'">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
    </template>
    <template v-else-if="name === 'spark'">
      <g fill="currentColor" stroke="none" transform="translate(1.6 2.26) scale(.04)">
        <path d="M 539 0.5 L 393.5 302 L 385.5 193 L 13 504.5 L 334 148.5 L 227.5 145 Z" />
        <path d="M 263 187.5 L 192.5 266 L 1 364.5 L 140.5 262 Z" />
        <path d="M 363.5 249 L 295 359.5 L 184.5 506 L 285 318.5 Z" />
      </g>
    </template>
    <template v-else-if="name === 'clock'">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </template>
    <template v-else-if="name === 'message'">
      <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v8Z" />
    </template>
    <template v-else-if="name === 'menu'">
      <path d="M4 7h16M4 12h16M4 17h16" />
    </template>
    <template v-else-if="name === 'close'">
      <path d="m6 6 12 12M18 6 6 18" />
    </template>
  </svg>
</template>
