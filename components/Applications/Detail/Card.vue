<template>
  <div id="bank-proposals-list">
    <div v-for="(request, index) in proposalList" :key="index">
      <div
        class="
          py-2
          pl-2
          pr-4
          mb-2
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
        <div class="h-8 w-8 flex items-center justify-center">
          <div class="w-6 h-6 rounded-full bg-white  flex align-center justify-center">
            <span class="object-contain flex align-center justify-center">
              <img
                :src="request.proposal.bank.logo"
                alt=""
                class="m-auto w-4 h-4"
              >
            </span>
          </div>
        </div>
        <div>
          <div
            class="mb-2 px-2 text-lg font-semibold text-black text-opacity-85 flex items-center"
          >
            <div>{{ request.proposal.bank.name }}</div>
            <div class="flex items-center flex-wrap gap-2 w-32 mt-2 md:mt-0 ml-2">
              <Tag
                :type="request.status"
                :text="getStatusMap[request.status]"
                size="xs"
              />
            </div>
          </div>
          <div class="px-2 text-2sm text-black text-opacity-45">
            Цена за кв. м • От {{ request.proposal.payment }} Р / мес
          </div>
          <div class="px-2 text-2sm text-black text-opacity-45">
            Адрес: {{ enrollment.address }}
          </div>
          <div class="px-2 text-2sm text-black text-opacity-45">
            Квадратные метры • {{ enrollment.s }} кв.м
          </div>
          <div class="px-2 text-2sm text-black text-opacity-45" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import Tag from '@/components/Ui/Tag'
export default {
  components: {
    Tag
  },
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
  data () {
    return {
      currentRequest: 1
    }
  },
  computed: {
    ...mapGetters('applications', ['getCurrentApplication', 'getStatusMap']),
    proposalList () {
      return this.enrollment.enrollmentBorrowers[0].requests
    }
  },
  watch: {
    getCurrentApplication () {
      this.currentRequest = this.getCurrentApplication.id
    }
  },
  mounted () {
    this.currentRequest = this.$route.query.requestId || 1
    this.addActiveClass(this.proposalList.filter(item => item.id === Number(this.currentRequest))[0])
  },
  methods: {
    addActiveClass (request) {
      this.$store.dispatch('applications/updateCurrentApplication', request)
    },
    isActive (id) {
      return this.currentRequest === id
    }
  }
}
</script>
<style>
.activeBank {
  @apply bg-catskill-white shadow-md border-elm;
}
</style>
