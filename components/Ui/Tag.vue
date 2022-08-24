<template>
  <div
    class="border rounded py-px px-2 leading-5  whitespace-nowrap"
    :class="{
      'text-sm': size === 'sm',
      'text-xs font-light': size === 'xs',
      'bg-elm border-elm text-white': setStatus === 'success',
      'border-elm text-elm': setStatus === 'success-outline',
      'bg-tahiti-gold border-tahiti-gold text-white': setStatus === 'warning',
      'border-tahiti-gold text-tahiti-gold': setStatus === 'warning-outline',
      'bg-sunset-orange border-sunset-orange text-white': setStatus === 'error',
      'border-sunset-orange text-sunset-orange': setStatus === 'error-outline',
      'bg-black bg-opacity-45 border-black border-opacity-0 text-white':
        setStatus === 'default',
      'border-black border-opacity-45 text-black text-opacity-45':
        setStatus === 'default-outline',
    }"
  >
    {{ text }}
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: Number,
      default: 0
    },
    text: {
      type: String,
      required: true
    },
    size: {
      type: String,
      default: 'sm'
    }
  },
  computed: {
    setStatus () {
      if (this.type === 1) {
        return 'success-outline'
      }
      if (this.type === 0) {
        return 'error-outline'
      }
      if (this.type === 2) {
        return 'success'
      }
      return 'default-outline'
    }
  }
}
</script>
