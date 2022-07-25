<template>
  <div class="border-b shadow-1xs md:shadow-none bg-white w-full py-2 md:py-4 z-50">
    <div v-if="resultCount" class="container grid grid-cols-12">
      <div class="col-span-8 pr-9 border-r flex items-center justify-end hidden md:block">
        <div>
          <p class="text-right text-2sm text-black text-opacity-45">
            Вы выбрали {{ selectedProductsCount }} арендатора, отправьте заявку, после арендатор увидит ваше предложение и возможно свяжется
          </p>
        </div>
      </div>
      <div class="col-span-12 m-auto w-full md:col-span-4 pl-3.5 pr-3.5 md:pl-9 md:pr-3.5 flex items-center">
        <div
          v-if="!show"
          class="w-full md:hidden"
          @click="asideToggle"
        >
          <FeButton
            size="sm"
            :is-disabled="!resultCount"
            class="w-full"
          >
            Показать <span v-if="resultCount" class="md:hidden">({{ resultCount }} запросов)</span>
          </FeButton>
        </div>
        <div v-else class="md:block col-span-12 m-auto w-full md:col-span-4 pl-3.5 pr-3.5 md:pl-9 md:pr-3.5 flex items-center">
          <nuxt-link
            to="/create"
            class="w-full"
          >
            <FeButton
              size="sm"
              :is-disabled="!selectedProductsCount"
              class="w-full"
            >
              Отправить заявку <span v-if="selectedProductsCount" class="md:hidden">({{ selectedProductsCount }})</span>
            </FeButton>
          </nuxt-link>
        </div>
      </div>
    </div>
    <div class="flex items-center justify-between bottom-0 w-full md:hidden">
      <LayoutNavbar />
      <UserOptions :user="authUser" />
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
    },
    allowToChange: {
      type: Boolean,
      default: () => true
    },
    showAside: {
      type: Boolean,
      default: () => true
    },
    user: {
      type: [Array, Object],
      default: () => []
    }

  },
  data () {
    return {
      show: this.showAside
    }
  },
  computed: {
    ...mapGetters('result', ['getSelectedProducts', 'getResult']),
    selectedProductsCount () {
      return this.getSelectedProducts.length
    },
    resultCount () {
      return this.getResult.products_count
    },
    authUser () {
      return {
        fullName: 'user'
      }
    }
    /*  getSelectedCountText () {
      return `Вы выбрали ${
        this.selectedProductsCount
      } ${this.getProposalWordForm(this.selectedProductsCount)}`
    } */
  },
  watch: {
    showAside (val) {
      this.show = val
    }
  },
  methods: {
    asideToggle () {
      this.$emit('asideToggle')
    }
    /* onSave () {
      if (!this.selectedProductsCount || !this.allowToChange) {
        return
      }

      this.$emit('onSave')
    } */
  }
}
</script>
