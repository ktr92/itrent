<template>
  <div v-click-outside="hideDropdown" class="fe-select">
    <div
      class="flex border rounded-lg"
      :class="{
        'fe-select__error-wrapper': !!error,
        'fe-select__error-wrapper--active': !!error && isActive,
        'fe-select--disabled': disabled,
      }"
    >
      <input
        v-model="keyword"
        type="text"
        class="fe-select__input"
        :readonly="this.default"
        :disabled="disabled"
        @focus="showDropdown"
      >
      <div class="fe-select__button-dropdown" @click="showDropdown">
        <svg-icon
          name="chevron-down"
          class="m-auto w-3 h-3 fill-current text-black text-opacity-25"
        />
      </div>
      <div
        class="fe-select__placeholder"
        :class="[
          !!error ? 'fe-select__placeholder--error' : '',
          isActive || keyword.length
            ? 'fe-select__placeholder--active'
            : 'fe-select__placeholder--inactive',
        ]"
      >
        {{ placeholder }}
      </div>
    </div>
    <ul v-if="isActive" class="fe-select-list">
      <template v-for="(option, index) in filteredList">
        <li
          v-if="!limit || index < limit"
          :key="option ? option.val : `filtered_list_${index}`"
          class="fe-select-list__item"
          @click.stop="updateOption(option)"
        >
          <div class="fe-select-list__item-text">
            {{ option.name }}
          </div>
          <div v-if="option.additionally" class="fe-select-list__additional">
            <div
              v-for="(additional, index) in option.additionally"
              :key="additional ? additional.val : `additionally_${index}`"
              class="fe-select-list__additional-text"
            >
              {{ additional.name }}
            </div>
          </div>
        </li>
      </template>
      <li v-if="!filteredList.length" class="fe-select-list__empty">
        <div class="fe-select-list__empty-text">
          Не найдено
        </div>
      </li>
    </ul>
    <div v-if="error" class="fe-select__error-text">
      {{ error }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    options: {
      type: [Array, Object],
      default: null
    },
    value: {
      type: [String, Number],
      default: ''
    },
    default: {
      type: Boolean,
      default: false
    },
    returnObject: {
      type: Boolean,
      default: false
    },
    errors: {
      type: [Array, Object],
      default: () => []
    },
    limit: {
      type: Number,
      default: 0
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      isActive: false,
      keyword: '',
      selectedOption: {}
    }
  },
  computed: {
    inputVal: {
      get () {
        return this.value
      },
      set (value) {
        this.keyword = value.name
        this.$emit(
          'input',
          this.returnObject ? this.selectedOption : value.val
        )
      }
    },
    filteredList () {
      return this.search()
    },
    error: {
      get () {
        return this.errors && this.errors.length && this.errors[0]
          ? typeof this.errors[0] === 'object' &&
            Object.keys(this.errors[0]).length === 0
            ? ''
            : this.errors[0]
          : ''
      }
    }
  },
  watch: {
    options () {
      if (this.default && this.isEmpty(this.value) && this.options.length) {
        this.updateOption(this.filteredList[0])
      }
    },
    value (newValue, old) {
      if (newValue !== '') {
        const option = {
          val: newValue,
          name: this.nameFromVal(this.options, newValue)
        }
        this.updateOption(option, true)
      }
    }
  },
  mounted () {
    if (this.default && this.isEmpty(this.value) && this.options.length) {
      this.updateOption(this.filteredList[0], false)
    }
    this.keyword = this.nameFromVal(this.options, this.value)
  },
  methods: {
    isEmpty (str) {
      return !str || str.length === 0
    },
    isEmptyObject (obj) {
      return Object.keys(obj).length === 0
    },
    updateOption (option, ignoreEmit) {
      this.selectedOption = option
      this.inputVal = option
      this.isActive = false
      this.$nuxt.$emit('fieldChanged')
      if (!ignoreEmit) {
        this.$emit('change', this.selectedOption)
      }
    },
    search () {
      const filteredList = this.options.filter((item) => {
        return this.keyword
          .toLowerCase()
          .split(' ')
          .every(v => item.name.toLowerCase().includes(v))
      })
      return this.default ? this.options : filteredList
    },
    showDropdown () {
      this.isActive = true
      if (!this.default) { this.keyword = '' }
    },
    nameFromVal (options, val) {
      const value = options.filter(item => item.val === val)
      this.selectedOption = () => {
        this.selectedOption = value
        this.inputVal = value
      }
      return value[0] ? value[0].name : ''
    },
    hideDropdown () {
      if (!this.isActive) {
        return
      }
      this.isActive = false
      if (!this.keyword.length) {
        this.inputVal = { name: '', val: '' }
        if (
          this.selectedOption &&
          Array.isArray(this.selectedOption) &&
          this.selectedOption.length === 0
        ) {
          return
        }
        this.selectedOption = []
        this.$emit('change', this.selectedOption)
      }
    }
  }
}
</script>
<style lang="scss">
.fe-select {
  @apply block relative;

  &-list {
    @apply absolute
      top-11
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

    &__item {
      @apply cursor-pointer
        py-1.5
        px-4
        odd:bg-catskill-white
        hover:bg-elm hover:bg-opacity-10
        transition-colors;

      &-text {
        @apply leading-normal
          text-2sm text-black text-opacity-85
          whitespace-nowrap
          overflow-hidden overflow-ellipsis;
      }
    }

    &__additional {
      @apply flex flex-wrap -mx-3;

      &-text {
        @apply leading-5
          text-2xs text-black text-opacity-45
          px-3
          whitespace-nowrap
          overflow-hidden overflow-ellipsis;
      }
    }

    &__empty {
      @apply cursor-pointer
        py-1.5
        px-4
        odd:bg-catskill-white
        hover:bg-elm hover:bg-opacity-10
        transition-colors;

      &-text {
        @apply leading-normal
          text-2sm text-black text-opacity-85
          whitespace-nowrap
          overflow-hidden overflow-ellipsis;
      }
    }
  }

  &__input {
    @apply relative
      z-10
      w-full
      h-11
      pl-4
      rounded-lg
      bg-transparent
      text-2sm text-black text-opacity-85
      focus:outline-none;

    &--disabled {
      @apply pointer-events-none bg-gray-50;
    }
  }

  &__button-dropdown {
    @apply relative
      w-10
      h-11
      flex
      flex-shrink-0;
  }

  &__placeholder {
    @apply absolute
      z-0
      transform
      -translate-y-1/2
      max-w-full
      whitespace-nowrap
      overflow-ellipsis overflow-hidden
      focus:outline-none
      text-black
      text-opacity-25;

    &--active {
      @apply bg-white
        top-0
        left-3
        text-xs
        px-1;
    }

    &--inactive {
      @apply top-6
        left-0
        text-2sm
        px-4;
    }

    &--error {
      @apply text-sunset-orange;
    }
  }

  &__error-text {
    @apply text-xs
      text-sunset-orange
      ml-4
      leading-5;
  }
  &__error-wrapper {
    @apply bg-lavender-blush border-sunset-orange;

    &--active {
      @apply bg-white border-sunset-orange;
    }
  }
  &--disabled {
    @apply pointer-events-none bg-gray-50;
  }
}
</style>
