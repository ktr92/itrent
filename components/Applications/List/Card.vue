<template>
  <nuxt-link :to="`/enrollment/${id}`" class="block cursor-pointer py-4 px-4 md:px-0">
    <div class="leading-snug text-2sm text-black text-opacity-45 mb-2">
      № {{ id }} • {{ creationDate }}
    </div>
    <div class="relative flex items-start md:items-center mb-2 md:justify-between">
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
        <h3 class="font-semibold leading-7  text-md md:text-xl text-black opacity-85 mr-4">
          {{ address }} • <span class="whitespace-nowrap">{{ s }} кв.м</span>
        </h3>
      </div>
      <div class="flex items-center flex-wrap gap-2 w-32 mt-2 md:mt-0 ">
        <Tag
          :type="status"
          :text="getStatusMap[status]"
        />
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
              'bg-tahiti-gold': parameters.status === 1,
              'bg-elm': parameters.status === 2,
              'bg-sunset-orange': parameters.status === 0,
            }"
          />
          <span class="hover:text-black">
            {{ parameters.bankName }} /
            {{ parameters.proposalName }} /
            {{ parameters.payment }} за кв.м /
            Цена за аренду От {{ parameters.paymentTotal }} Р /
            <span
              class="font-semibold"
              :class="{
                'text-tahiti-gold': parameters.status === 1,
                'text-elm': parameters.status === 2,
                'text-sunset-orange': parameters.status === 0,
              }"
            >{{ parameters.statusText }}</span>
          </span>
        </div>
      </li>
    </ul>
  </nuxt-link>
</template>

<script>
import { mapGetters } from 'vuex'
import Tag from '@/components/Ui/Tag'
import { formatDate } from '@/utils/formatDate'
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
    /*  statusMap: {
      type: Object,
      required: true
    }, */
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
    ...mapGetters('applications', ['getStatusMap']),
    totalPrice () {
      return this.objectPrice * this.s
    },
    creationDate () {
      return formatDate(this.createdAt)
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
          statusText: this.getStatusMap[request.status],
          proposalName: request.proposal?.name || null,
          payment: request.proposal.payment,
          paymentTotal: request.proposal.payment * this.s
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
