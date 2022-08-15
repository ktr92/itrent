<template>
  <nuxt-link :to="`/enrollment/${id}`" class="block cursor-pointer py-4">
    <div class="leading-snug text-2sm text-black text-opacity-45 mb-2">
      № {{ id }} • {{ creationDate }}
    </div>
    <div class="relative flex items-center mb-2 justify-between">
      <div>
        <div
          v-if="requestParameters.length"
          class="absolute top-1/2 -left-5 transform -translate-y-1/2"
          @click.prevent="isCollapsed = !isCollapsed"
        >
          <svg-icon
            name="chevron-down"
            class="cursor-pointer w-3 h-3 fill-current text-black text-opacity-45"
            :class="{ 'transform -rotate-90': isCollapsed }"
          />
        </div>
        <h3 class="font-semibold leading-7 text-xl text-black opacity-85 mr-4">
          {{ address }} • <span class="whitespace-nowrap">{{ s }} кв.м</span>
        </h3>
      </div>
      <div class="flex items-center flex-wrap gap-2">
        <Tag type="success-outline" :text="applicationStatus" />
      </div>
    </div>
    <div class="leading-snug text-2sm text-black text-opacity-45 mb-1">
      Цена за кв.м • От {{ objectPrice }} Р <br>
      Цена за аренду • От {{ totalPrice }} Р
    </div>
    <ul v-if="!isCollapsed" class="pt-4">
      <li
        v-for="(parameters, index) in requestParameters"
        :key="index"
        class="
          relative
          pl-3
          mb-1
          last:mb-0
          leading-snug
          text-2sm text-black text-opacity-45
        "
      >
        <div
          @click="
            handleClickRequest($event, {
              enrollmentId: id,
              requestId: parameters.id,
            })
          "
        >
          <div
            class="absolute top-0 left-0 pl-0.5 h-full"
            :class="{
              'bg-tahiti-gold': parameters.status === 0,
              'bg-elm': parameters.status === 1 || parameters.status === 2,
              'bg-sunset-orange': parameters.status === 3,
            }"
          />
          <span class="hover:text-black">
            {{ parameters.bankName }} /
            <span
              class="font-semibold"
              :class="{
                'text-tahiti-gold': parameters.status === 0,
                'text-elm': parameters.status === 1 || parameters.status === 2,
                'text-sunset-orange': parameters.status === 3,
              }"
            >{{ parameters.statusText }}</span>
            • {{ parameters.proposalName }} • Ставка - {{ parameters.rate }}% •
            {{ parameters.payment | format }} Р/мес
          </span>
        </div>
      </li>
    </ul>
  </nuxt-link>
</template>

<script>
import Tag from '@/components/Ui/Tag'

export default {
  components: {
    Tag
  },
  props: {
    id: {
      type: [String, Number],
      required: true
    },
    createdAt: {
      type: String,
      default: ''
    },
    statusMap: {
      type: Object,
      required: true
    },
    status: {
      type: Number,
      required: true
    },
    enrollmentBorrowers: {
      type: Array,
      required: true
    },
    requests: {
      type: Array,
      required: false,
      default: () => []
    },
    creditType: {
      type: String,
      default: ''
    },
    address: {
      type: String,
      default: ''
    },
    propertyValue: {
      type: Number,
      default: null
    },
    objectPrice: {
      type: Number,
      default: null
    },
    s: {
      type: Number,
      default: null
    },
    term: {
      type: Number,
      default: null
    },
    paymentDown: {
      type: Number,
      default: null
    },
    leads: {
      type: [Array, Object],
      default: () => []
    },
    phone: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      isCollapsed: false
    }
  },
  computed: {
    totalPrice () {
      return this.objectPrice * this.s
    },
    creationDate () {
      const dateCreatedAt = new Date(this.createdAt)
      return dateCreatedAt.toLocaleString('ru-RU', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      })
    },
    applicationStatus () {
      return this.statusMap[this.status]
    },
    authorizedCounter () {
      const borrowersCount = this.enrollmentBorrowers.length
      let authorizedCount = 0
      this.enrollmentBorrowers.forEach((borrower) => {
        if (borrower.borrower.isAuthorized) {
          ++authorizedCount
        }
      })
      return `${authorizedCount} / ${borrowersCount}`
    },
    signatureCounter () {
      const borrowersCount = this.enrollmentBorrowers.length
      let signatureCount = 0
      this.enrollmentBorrowers.forEach((borrower) => {
        borrower.files.forEach((file) => {
          if (file.type === 'signature') {
            ++signatureCount
          }
        })
      })
      return `${signatureCount} / ${borrowersCount}`
    },
    requestParameters () {
      return this.enrollmentBorrowers[0].requests.map((request) => {
        return {
          id: request.id,
          bankName: request.proposal
            ? request.proposal.bank.name
            : request.bank.name,
          status: request.status,
          statusText: request.statusMap[request.status],
          proposalName: request.proposal?.name || null,
          rate: request.rate,
          payment: request.payment
        }
      })
    }
  },
  methods: {
    handleClickRequest (e, { enrollmentId, requestId }) {
      e.preventDefault()
      this.$router.push(
        `/enrollment/${enrollmentId}?index=2&requestId=${requestId}`
      )
    }
  }
}
</script>
