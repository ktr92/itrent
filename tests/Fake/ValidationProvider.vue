<template>
  <div v-bind="{ ...$props, ...$attrs }">
    <slot :errors="errors" />
  </div>
</template>

<script>
export default {
  name: 'FakeValidationProvider',
  data () {
    return {
      errors: []
    }
  }
}
</script>
