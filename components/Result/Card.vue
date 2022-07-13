<template>
  <div class="program-card" :class="[selected ? 'border-elm' : 'border-transparent']">
    <div class="border-b pb-2">
      <div class="relative">
        <div class="absolute top-0 -left-8 flex w-6 h-6 rounded-full">
          <svg-icon
            v-if="selected"
            name="check-circle"
            class="w-6 h-6 fill-current text-elm"
          />
          <span v-else class="object-contain">
            <img
              :src="logo"
              alt=""
              class="m-auto w-4 h-4"
            >
          </span>
        </div>
        <span
          class="leading-normal text-2sm font-bold"
          :class="[selected ? 'text-elm' : 'text-black text-opacity-85']"
        > {{ title }}</span>
      </div>
    </div>

    <div class="py-2">
      <div class="flex  mb-2 last:mb-0">
        <div class="leading-5 text-2xs text-black text-opacity-45 mr-auto">
          Цена за кв.м
        </div>
        <div
          class="
            leading-normal
            text-2sm text-black text-opacity-85 text-right font-bold
            program-card__rate
          "
        >
          <template v-if="rate.length">
            <div v-for="price in rate" :key="price" class="pb-2">
              {{ price }}
            </div>
          </template>
          <template v-else>
            не указана
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    logo: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    rate: {
      type: Array,
      required: true
    },
    selected: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {

    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.object-contain {
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  width: 24px;
  height: 24px;
  border-radius: 50%;
}
.program-card {
  @apply bg-white
  rounded-lg
  shadow-3xl
  pl-10
  pt-2
  pr-2
  border-3;

  &__badge {
    @apply rounded-full inline-block bg-cyan mr-1 w-1.5 h-1.5 mb-0.5;

    margin-top: -14px;
  }
  &-subsidy {
    @apply pb-2;

    padding-top: 10px;
    &__title {
      @apply text-2xs text-black text-opacity-45;
    }
    &__item {
      @apply grid items-center;

      grid-template-columns: 10px auto 30px;
      padding-top: 5px;
      padding-bottom: 5px;

      &-text {
        @apply text-black text-2xs;
      }
    }
  }
  &__payment-schedule-icon {
    @apply w-5
    h-5
    fill-current
    text-black text-opacity-25
    ml-1.5
    cursor-pointer;
  }
}
</style>
