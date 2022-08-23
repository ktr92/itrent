<template>
  <div class="container pt-0 pb-28">
    <div>
      <div class="container pt-4 pb-28 grid grid-cols-11">
        <div v-if="enrollment" class="col-span-5 border-r">
          <div v-if="availableProposalsLength">
            <h1
              v-if="enrollment.enrollmentBorrowers"
              class="
                text-2sm text-black text-opacity-85
                border-b
                pb-2
                mb-2
                mt-4
              "
            >
              ({{ availableProposalsLength }})
            </h1>
            <ApplicationsDetailCard :enrollment="enrollment" />
          </div>
        </div>
        <div class="col-span-6 pl-9">
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
    async loadEnrollment () {
      const id = { id: this.$route.params.id }

      try {
        return await this.getEnrollment(id)
      } catch (error) {
        this.$sentry.captureException(error)

        return Promise.resolve(null)
      }
    },
    openBankProposal (proposal) {
      this.$services.bankService
        .getRequiredDocuments(proposal.bank.id)
        .then((response) => {
          this.$store.commit('workwithbank/setRequiredDocuments', response)
        })
      this.workType = 1
      this.updateCurrentProposal(proposal)
      this.updateCurrentRequest(null)

      const query = Object.assign({}, this.$route.query)
      query.proposalId = proposal.id
      delete query.requestId
      this.$router.push({ query })
    },
    openOtherBankProposal (bank) {
      this.$services.bankService
        .getRequiredDocuments(bank.id)
        .then((response) => {
          this.$store.commit('workwithbank/setRequiredDocuments', response)
        })
      this.workType = 1
      this.updateCurrentBank(bank)
      this.updateCurrentRequest(null)
      this.updateCurrentProposal(null)

      const query = Object.assign({}, this.$route.query)
      delete query.proposalId
      delete query.requestId
      this.$router.push({ query })
    }
  }
}
</script>
