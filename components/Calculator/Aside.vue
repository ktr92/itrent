<template>
  <div id="proposal-list">
    <!--  <div class="border-b pb-4 mb-4">
      <div class="flex items-center mb-1">
        <h2
          class="font-semibold leading-8 text-2xl text-black text-opacity-85"
        >
          Предложения
        </h2>
      </div>
      <div class="leading-normal text-2sm text-black text-opacity-45 mb-4">
        Введите информацию по помещениям, и мы покажем вам доступные предложения.
      </div>
    </div> -->
    <LazyLayoutAlert v-if="message" :entrymessage="message" />
    <div v-if="getResultList">
      <div v-if="getResultList.length">
        <div
          v-for="(product, index) in getResultList"
          :key="`${product.token}_${index}`"
          class="pb-2 mb-2 last:mb-0 last:pb-0 last:border-b-0"
        >
          <ResultCard
            :id="'proposal-item-'.concat(product.token)"
            :logo="product.logo ? product.logo : ''"
            :title="product.title ? product.title : 'Неизвестный арендатор'"
            :rate="product.rate"
            :selected="isSealed(product)"
            class="calculator-aside__proposal-item"
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
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  props: {
    allowToChange: {
      type: Boolean,
      default: () => true
    }
  },
  data () {
    return {
      cardsResult: []
    }
  },
  computed: {
    ...mapGetters(['message']),
    ...mapGetters('result', ['getSelectedProducts', 'getResultList'])
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
