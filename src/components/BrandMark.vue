<script setup>
const props = defineProps({
  tone: {
    type: String,
    default: 'light',
    validator: (value) => ['light', 'reverse'].includes(value),
  },
  compact: Boolean,
})

const logoSource = props.compact
  ? '/brand/symbol.svg'
  : props.tone === 'reverse'
    ? '/brand/logo-reverse.svg'
    : '/brand/logo-light.svg'
</script>

<template>
  <span
    class="brand-mark"
    :class="{ 'brand-mark--compact': compact }"
    role="img"
    aria-label="Starforge"
  >
    <img class="brand-mark__image" :src="logoSource" alt="" draggable="false" />
  </span>
</template>
