<template>
  <div class="container pt-0 pb-28">
    <div class="min-h-full">
      <div class="container pt-4 pb-28 grid grid-cols-11 min-h-full ">
        <div v-if="enrollment" class="col-span-6 min-h-full">
          <div v-if="availableProposalsLength">
            <LazyApplicationsDetailCard :enrollment="enrollment" />
          </div>
        </div>
        <div class="col-span-5 pl-6 ml-6 border-l  md:min-h-screen relative">
          <LazyApplicationsDetailInfo v-if="getCurrentApplication" :enrollment="enrollment" />
          <div class=" pt-4  md:absolute bottom-0 w-full pr-6">
            <FeMessage />
            <p class="text-xs text-black text-opacity-45 pl-4 pt-1">
              Сообщение уйдет на почту арендатора
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import FeMessage from '@/components/Fe/Message.vue'
export default {
  components: {
    FeMessage
  },
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

<style scoped>
@media (min-width: 768px) {
  .md\:min-h-screen {
    min-height: calc(100vh - 250px) !important;
  }
}

</style>
