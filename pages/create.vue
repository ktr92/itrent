<template>
  <div
    class="container pt-2 md:pt-8 md:pb-52 md:grid "
    style="grid-template-columns: 2fr 1fr; align-items: start"
  >
    <div
      ref="applicationFormWrapper"
      class="pb-12 md:pb-0 md:grid md:grid-cols-6 application-form-wrapper md-sticky"
    >
      <div class="col-span-7 px-3.5 md:pr-0 md:pl-0">
        <UiTitle title="Формирование заявки" />
        <div class="leading-normal text-2sm text-black text-opacity-45 mb-4">
          Для отображения вашей заявки для арендодателей, заполните поля ниже и создайте заявку
        </div>

        <UiProgress :current-step="getStep" :total-steps="totalSteps" />

        <ApplicationsCreateForm v-if="getStep === 1" />
        <ApplicationsPayment v-if="getStep === 2" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      totalSteps: 2
    }
  },
  computed: {
    ...mapGetters('result', ['getSelectedProducts']),
    ...mapGetters('applications', ['getStep'])
  },
  mounted () {
    if (this.getSelectedProducts.length < 1) {
      this.$router.push('/calculator')
    }
  }

}
</script>

<style>

</style>
