<template>
  <div
    v-if="datamessage.value"
    class="appmessage"
    :class="{'appmessage_error': typeError, 'appmessage_default': typeInfo, 'appmessage_warn': typeWarning }"
  >
    <p class="py-2 px-4 font-bold text-md">
      {{ datamessage.value }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    entrymessage: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      datamessage: { ...this.entrymessage }
    }
  },
  computed: {
    message () {
      return this.$store.getters.message
    },
    typeError () {
      return this.datamessage.type === 'error'
    },
    typeInfo () {
      return this.datamessage.type === '' || this.datamessage.type === 'info'
    },
    typeWarning () {
      return this.datamessage.type === 'warning'
    }
  },
  watch: {
    message (value) {
      this.datamessage = { ...value }
    }
  }
}
</script>

<style scoped>
  .appmessage {
    @apply my-2 absolute bottom-2 mx-2 left-0 right-0 bg-red-100 rounded-lg z-50 border-2 border-red-500 text-red-600
  }

  .appmessage_error {
    @apply text-red-600 border-red-500 bg-red-100
  }

  .appmessage_default {
    @apply text-green-600 border-green-500 bg-green-100
  }

  .appmessage_warn {
    @apply text-yellow-600 border-yellow-500 bg-yellow-100
  }
</style>
