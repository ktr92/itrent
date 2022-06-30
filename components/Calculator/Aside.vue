<template>
  <div id="proposal-list">
    <div class="border-b pb-4 mb-4">
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
    </div>
    <div v-if="cardsReady">
      <div v-if="cardsResult.length">
        <ResultCard />
      </div>
      <div v-else>
        По вашим параметрам ничего не найдено.
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      cardsReady: false,
      cardsResult: []
    }
  },
  computed: {
    ...mapGetters(['message'])
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
