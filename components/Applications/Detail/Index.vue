<template>
  <div class="container pt-0 pb-28">
    <div>
      <div class="container pt-4 pb-28 grid grid-cols-11">
        <div v-if="enrollment" class="col-span-6">
          <div v-if="availableProposalsLength">
            <LazyApplicationsDetailCard :enrollment="enrollment" />
          </div>
        </div>
        <div class="col-span-5 pl-6 ml-6 border-l">
          <LazyApplicationsDetailInfo v-if="getCurrentApplication" :enrollment="enrollment" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
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
    ...mapGetters('applications', ['getCurrentApplication', 'getStatusMap']),

    bankList: {
      get () {
        return this.$store.state.workwithbank.bankList
      }
    },
    availableProposalsLength () {
      return this.enrollment.enrollmentBorrowers.length || 0
    }
  }
}
</script>
