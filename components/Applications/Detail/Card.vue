<template>
  <div id="bank-proposals-list">
    <div v-for="(proposal, index) in proposalList" :key="index">
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
        :class="{ activeBank: isActive(proposal.id) || '' }"
        @click="addActiveClass(proposal)"
      >
        <div class="h-8 w-8 flex items-center justify-center">
          <img
            v-if="proposal.bank.logo"
            :src="proposal.bank.logo"
            alt=""
            class="object-contain rounded-full"
          >
        </div>
        <div>
          <div
            class="mb-2 px-2 text-lg font-semibold text-black text-opacity-85"
          >
            {{ proposal.bank.name }}
          </div>
          <div class="px-2 text-2sm text-black text-opacity-45">
            {{ proposal.name }}
          </div>
          <div class="px-2 flex text-2sm text-black text-opacity-45">
            <div class="pr-2">
              Ставка &ndash; {{ proposal.displayRate }} &percnt;
            </div>
            &bull;
            <div class="pl-2">
              {{ getPayment(proposal) | format }} Р&sol;мес
            </div>
          </div>
          <div class="px-2 text-2sm text-black text-opacity-45">
            Основной заемщик &ndash;
            {{ borrowerName }}
          </div>
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
      return this.enrollment.enrollmentBorrowers
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
