<template>
  <div class="container pt-0 pb-28">
    <div>
      <div class="container pt-4 pb-28 grid grid-cols-11">
        <div v-if="enrollment" class="col-span-7 border-r">
          <div v-if="availableProposalsLength">
            <ApplicationsDetailCard :enrollment="enrollment" @openRequest="openRequest" />
          </div>
        </div>
        <div class="col-span-4 pl-9">
          <ApplicationsDetailInfo />
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  auth: false,
  props: {
    enrollment: {
      type: Object,
      default: () => null
    }
  },
  data () {
    return {
      workType: 0,
      proposal: 0,
      isCollapsedBankRequests: false
    }
  },
  computed: {
    bankList: {
      get () {
        return this.$store.state.workwithbank.bankList
      }
    },
    availableProposalsLength () {
      return this.enrollment.enrollmentBorrowers.length || 0
    }
  },

  methods: {
    openRequest (request) {
      this.$store.dispatch('applications/updateCurrentRequest', request)
    }
  }
}
</script>
