<template>
  <div v-click-outside="hide" class="pr-4 top-4 md:relative md:pr-0 md:right-4 md:top-0">
    <button
      class="
        w-8
        h-8
        rounded-full
        bg-elm
        flex
        justify-center
        items-center
        uppercase
        text-extra text-white
        focus:outline-none
      "
      @click="isActive = !isActive"
    >
      {{ userInitials }}
    </button>
    <ul
      v-if="isActive"
      class="absolute top-full right-0 bg-white shadow-md w-36 px-3 rounded-sm"
      style="z-index: 999"
    >
      <div
        class="
          w-2
          h-2
          absolute
          top-0
          right-3
          bg-white
          transform
          -translate-y-2/4
          rotate-45
        "
      />
      <li class="py-2 border-b last:border-b-0">
        <nuxt-link
          to="/profile"
          class="
            leading-normal
            text-2sm text-black text-opacity-85
            transition-colors
            hover:text-elm
          "
        >
          Профиль
        </nuxt-link>
      </li>
      <li class="py-2 border-b last:border-b-0">
        <a
          href=""
          class="
            leading-normal
            text-2sm text-black text-opacity-85
            transition-colors
            hover:text-elm
          "
          @click="logout"
        >Выйти</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: [Array, Object],
      default: () => []
    }
  },
  data () {
    return {
      isActive: false
    }
  },

  computed: {
    userInitials () {
      if (this.user.fullName !== undefined) {
        return this.user.fullName
          .split(' ')
          .map(function (item) {
            return item.charAt(0).toUpperCase()
          })
          .join('')
      }
      return ''
    }
  },

  methods: {
    hide () {
      this.isActive = false
    },
    async logout () {
      /*  await this.$auth.logout() */
    }
  }
}
</script>
