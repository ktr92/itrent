<template>
  <div id="proposal-list">
    <div class="fixed overflow-x-hidden overflow-y-scroll md:overflow-auto top-0 w-full min-h-screen h-full bg-white z-50 md:static md:min-h-auto md:w-auto md:h-auto md:block" :class="[show ? 'block' : 'hidden']">
      <div class="border-b p-4 mb-6 px-3.5 md:hidden">
        <div class="flex items-center justify-between mb-1">
          <h2
            class="font-semibold leading-8 text-xl md:text-2xl text-black text-opacity-85"
          >
            Предложения
          </h2>
          <div class="mobile-aside md:hidden">
            <svg-icon name="close-outline" class="w-6 h-6 fill-current opacity-40" @click="asideToggle" />
          </div>
        </div>
      </div>
      <div class="px-3.5 md:px-2">
        <LazyFeAlert
          v-if="message"
          class="mt-2 alert"
          :type="message.type"
          :title="message.title"
          :description="message.description"
        />
        <div v-if="getReady" class="mt-2 pb-4">
          <div v-if="getResultItems.length">
            <div
              v-for="(product, index) in getResultItems"
              :id="`productlist-${index}`"
              :key="`${product.token}_${index}`"
              class="pb-2 mb-2 last:mb-0 last:pb-0 last:border-b-0"
            >
              <ResultCard
                :id="'proposal-item-'.concat(product.token)"
                :logo="product.bank.logo ? product.bank.logo.url : ''"
                :title="product.bank.title ? product.bank.title : 'Неизвестный арендатор'"
                :rate="product.rate ? product.rate: []"
                :selected="isSealed(product)"
                class="calculator-aside__proposal-item cursor-p"
                @click.native="handleSelectProduct($event, product)"
              />
            </div>
          </div>
          <div v-else>
            По вашим параметрам ничего не найдено.
          </div>
        </div>
        <div v-else>
          <div
            v-for="index in 5"
            :key="index"
            class="pb-4 mb-4 last:mb-0 last:pb-0 last:border-b-0"
          >
            <ResultCardSkeleton class="animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  props: {
    allowToChange: {
      type: Boolean,
      default: () => true
    },
    showAside: {
      type: Boolean,
      default: () => false
    }
  },
  data () {
    return {
      cardsResult: [],
      show: this.showAside
    }
  },
  computed: {
    ...mapGetters('result', ['getSelectedProducts', 'getResultItems', 'getReady', 'message'])
  },
  watch: {
    showAside (val) {
      this.show = val
    }
  },
  methods: {
    handleSelectProduct (e, product) {
      e.stopPropagation()
      if (product.requested || !this.allowToChange) {
        return
      }
      this.$store.commit('result/selectProduct', product)
    },
    isSealed (o) {
      return this.getSelectedProducts.includes(o)
    },
    asideToggle () {
      this.$emit('asideToggle')
    }
  }
}
</script>

<style lang="scss">
.calculator-aside {
  &-pagination {
    @apply flex justify-center text-sm underline text-gray-500;
    & a {
      @apply cursor-pointer;
    }
  }
  &__selected {
    @apply font-semibold
    leading-8
    text-2xl
    text-black
    text-opacity-85;
  }
}
</style>
