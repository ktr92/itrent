<template>
  <div>
    <div class="md:border-b">
      <Calculator />
    </div>

    <div class="pt-2 mb-16" />

    <div class="flex justify-center" />
  </div>
</template>

<script>
export default {
  async asyncData ({ store }) {
    await store.dispatch('calculator/getOptionsJSON')
  },
  mounted () {

  },
  methods: {
  }
}
</script>
