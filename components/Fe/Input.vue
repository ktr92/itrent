<template>
  <div v-click-outside="handleClickOutside" class="block">
    <div
      v-if="label"
      class="
        flex
        items-center
        leading-normal
        text-2sm text-black text-opacity-85
        mb-2
      "
    >
      {{ label }}
    </div>
    <div
      class="relative border rounded-lg flex items-center"
      :class="{
        'bg-lavender-blush border-sunset-orange': error.length,
        'bg-white border-black border-opacity-15': !error.length,
        'bg-white border-sunset-orange': error.length && isActive,
        'fe-input--disabled': disabled
      }"
    >
      <input
        ref="input"
        v-model="inputVal"
        v-maska="mask"
        :type="type"
        :name="name"
        :disabled="disabled"
        class="fe-input"
        @focus="onFocus"
        @blur="onBlur"
        @maska="
          $emit('raw-value', $event.target.getAttribute('data-mask-raw-value'))
        "
        @input="handleInput"
      >
      <div v-if="icon" class="w-10 h-6 flex flex-shrink-0">
        <svg-icon
          :name="icon"
          class="m-auto w-3 h-3 fill-current text-black text-opacity-25"
        />
      </div>
      <div
        class="
          absolute
          z-0
          transform
          -translate-y-1/2
          max-w-full
          whitespace-nowrap
          overflow-ellipsis overflow-hidden
          focus:outline-none
        "
        :class="[
          isActive
            ? 'bg-white top-0 left-3 text-xs px-1'
            : 'top-1/2 left-0 text-2sm px-4',
          error.length ? 'text-sunset-orange' : 'text-black text-opacity-25'
        ]"
      >
        {{ placeholder }}
      </div>
    </div>
    <div
      v-if="description || errors.length"
      class="leading-5 text-xs ml-4 mt-1"
      :class="[
        error.length ? 'text-sunset-orange' : 'text-black text-opacity-45'
      ]"
    >
      {{ error.length ? error : description }}
    </div>
  </div>
</template>

<script>
import { maska } from 'maska'

export default {
  name: 'FeInput',
  directives: { maska },
  props: {
    label: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    name: {
      type: String,
      default: null
    },
    value: {
      type: [String, Number],
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: null
    },
    description: {
      type: String,
      default: ''
    },
    errors: {
      type: Array,
      default: () => []
    },
    mask: {
      type: String,
      default: ''
    },
    debounceTime: {
      type: Number,
      default: 500
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      isFocused: false,
      rawContent: '',
      timerHandle: null
    }
  },
  computed: {
    inputVal: {
      get () {
        return this.value
      },
      set (value) {
        this.$emit('input', value)
        if ('$nuxt' in this) { this.$nuxt.$emit('fieldChanged') }
      }
    },
    isActive () {
      return !(!this.inputVal || this.inputVal.length === 0)
    },
    error () {
      return this.isFocused || !this.errors.length ? '' : this.errors[0]
    }
  },
  methods: {
    onFocus () {
      this.isFocused = true
    },
    onBlur () {
      this.$emit('blur')
      this.isFocused = false
    },
    handleClickOutside () {
    },
    handleInput () {
    }
  }
}
</script>

<style lang="scss">
  .fe-input {
    @apply
    relative
    z-10
    w-full
    h-11
    px-4
    rounded-lg
    bg-transparent
    text-2sm text-black text-opacity-85
    focus:outline-none;

    &--disabled {
      @apply pointer-events-none bg-gray-50;
    }

    &-hint-list {
      @apply
      absolute
      left-0
      z-20
      w-full
      bg-white
      py-1
      shadow
      transform
      translate-y-1
      max-h-48
      overflow-y-auto;

      top: 43px;

      &__item {
        @apply
        cursor-pointer
        py-1.5
        px-4
        odd:bg-catskill-white
        hover:bg-elm hover:bg-opacity-10
        transition-colors;

        &--blur {
          filter: blur(3px);
          -webkit-filter: blur(3px);
        }

        &__content {
          @apply leading-normal
          text-2sm
          text-black
          text-opacity-85
          whitespace-normal
          overflow-hidden
          overflow-ellipsis
          font-semibold
          flex
          flex-col;

          &--sub {
            @apply font-normal text-gray-400 text-sm;
          }
        }
      }
    }
  }
</style>
