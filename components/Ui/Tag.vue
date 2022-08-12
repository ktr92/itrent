<template>
  <div
    class="border rounded py-px px-2 leading-5 text-sm"
    :class="{
      'bg-elm border-elm text-white': type === 'success',
      'border-elm text-elm': type === 'success-outline',
      'bg-tahiti-gold border-tahiti-gold text-white': type === 'warning',
      'border-tahiti-gold text-tahiti-gold': type === 'warning-outline',
      'bg-sunset-orange border-sunset-orange text-white': type === 'error',
      'border-sunset-orange text-sunset-orange': type === 'error-outline',
      'bg-black bg-opacity-45 border-black border-opacity-0 text-white':
        type === 'default',
      'border-black border-opacity-45 text-black text-opacity-45':
        type === 'default-outline',
    }"
  >
    {{ text }}
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'default'
    },
    text: {
      type: String,
      required: true
    }
  }
}
</script>
