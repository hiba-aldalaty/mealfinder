<template>
  <button
    :type="type"
    :class="`
      px-6
      py-3
      font-semibold
      text-white
      bg-pink
      rounded-full
      hover:opacity-95`">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    type: {
      type: String,
      default: 'save',
    },
  },
};
</script>