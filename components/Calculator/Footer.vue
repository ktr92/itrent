<template>
  <div class="border-t shadow-1xs md:shadow-none bg-white w-full md:py-4 z-50">
    <div v-if="resultCount" class="container grid grid-cols-12 p-2 md:pt-0">
      <div class="col-span-8 pr-8 border-r flex items-center justify-end hidden md:block">
        <div>
          <p class="text-2sm text-black text-opacity-45">
            Вы выбрали {{ getSelectedProducts.length }} арендатора, отправьте заявку, после арендатор увидит ваше предложение и возможно свяжется
          </p>
        </div>
      </div>
      <div v-if="!show" class="hidden md:block col-span-12 m-auto w-full md:col-span-4 md:pl-9 md:pr-3.5 flex items-center">
        <nuxt-link
          to="/create"
          class="w-full createbutton"
          :class="{'disabled': getSelectedProducts.length < 1}"
        >
          <FeButton
            size="sm"
            :is-disabled="getSelectedProducts.length < 1"
            class="w-full"
          >
            Отправить заявку
          </FeButton>
        </nuxt-link>
      </div>
      <div class="col-span-12 m-auto w-full md:col-span-4 pl-2 pr-2 md:pl-9 md:pr-3.5 flex items-center md:hidden">
        <div
          v-if="!show"
          class="w-full"
          @click="asideToggle"
        >
          <FeButton
            size="sm"
            :is-disabled="!resultCount"
            class="w-full font-normal"
          >
            Показать <span v-if="resultCount">({{ resultCount }} запросов)</span>
          </FeButton>
        </div>
        <div v-else class="md:block col-span-12 m-auto w-full md:col-span-4 md:pl-9 md:pr-3.5 flex items-center">
          <nuxt-link
            to="/create"
            class="w-full createbutton"
            :class="{'disabled': getSelectedProducts.length < 1}"
          >
            <FeButton
              size="sm"
              :is-disabled="!getSelectedProducts.length < 1"
              class="w-full font-normal"
            >
              Отправить заявку <span v-if="getSelectedProducts.length" class="md:hidden">({{ getSelectedProducts.length }})</span>
            </FeButton>
          </nuxt-link>
        </div>
      </div>
    </div>
    <div v-if="onScroll" class="flex items-center justify-between bottom-0 w-full md:hidden py-2 ">
      <UiNavbar />
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
      show: this.showAside,
      onScroll: false,
      scrollTimer: null
    }
  },
  computed: {
    ...mapGetters('result', ['getSelectedProducts', 'getResult']),
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
  beforeMount  () {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestory () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    asideToggle () {
      this.$emit('asideToggle')
    },
    showNavbar () {
      this.onScroll = true
    },
    hideNavbar () {
      this.onScroll = false
    },
    handleScroll () {
      if (this.scrollTimer !== null) {
        clearTimeout(this.scrollTimer)
      }
      this.showNavbar()
      this.scrollTimer = setTimeout(() => {
        this.hideNavbar()
      }, 2000)
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

<style scoped>
.disabled {
  pointer-events: none;
  cursor:not-allowed;
}
</style>
