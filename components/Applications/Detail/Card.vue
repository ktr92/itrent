<template>
  <div id="bank-proposals-list">
    <div v-for="(request, index) in proposalList" :key="index">
      <div
        class="
          py-2
          pl-2
          pr-4
          cursor-pointer
          flex
          justify-start
          rounded-l-lg
          border-r-3 border-transparent
          hover:bg-catskill-white hover:shadow-md hover:border-elm
          focus:bg-catskill-white focus:shadow-md focus:border-elm
        "
        :class="{ activeBank: isActive(request.id) || '' }"
        @click="addActiveClass(request)"
      >
        <div class="h-8 w-8 flex items-center justify-center" />
        <div>
          <div
            class="mb-2 px-2 text-lg font-semibold text-black text-opacity-85"
          >
            {{ request.proposal.bank.name }}
          </div>
          <div class="px-2 text-2sm text-black text-opacity-45">
            {{ request.proposal.name }}
          </div>
          <div class="px-2 flex text-2sm text-black text-opacity-45">
            <div class="pr-2" />
            &bull;
            <div class="pl-2" />
          </div>
          <div class="px-2 text-2sm text-black text-opacity-45" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'BankProposals',
  props: {
    newBank: {
      type: Object,
      default: null
    },
    enrollment: {
      type: Object,
      default: null
    },
    borrowerName: {
      type: String,
      default: ''
    }
  },
  computed: {
    proposalList () {
      return this.enrollment.enrollmentBorrowers[0].requests
    }
  },
  methods: {
    addActiveClass (proposal) {
      this.$emit('openBankProposal', proposal)
      this.$forceUpdate()
    },
    isActive (id) {
      return true
    }
  }
}
</script>
<style>
.activeBank {
  @apply bg-catskill-white shadow-md border-elm;
}
</style>
