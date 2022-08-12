<template>
  <div class="flex items-center  mb-2">
    <div @click="back">
      <svg-icon name="chevron-left" class="w-20xs h-20xs md:w-6 md:h-6 fill-current mr-2 cursor-pointer" />
    </div>
    <h2 class="text-2xl font-bold text-black text-opacity-85">
      {{ title }}
    </h2>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: {
    title: {
      type: String,
      default: () => {}
    }
  },
  computed: {
    ...mapGetters('applications', ['getStep'])
  },
  methods: {
    back () {
      if (this.getStep === 1) {
        this.$router.go(-1)
      } else {
        this.$store.commit('applications/changeStep', 1)
      }
    }
  }
}
</script>

<style>

</style>
