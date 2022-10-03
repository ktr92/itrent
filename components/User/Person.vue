<template>
  <div class="container pt-8 pb-28">
    <div>
      <h1
        class="
          text-2xl text-black text-opacity-85
          mb-2
          text-bold
          flex
          items-center
          cursor-default
        "
      >
        Ваш профиль
      </h1>

      <div class="leading-normal text-2sm text-black text-opacity-45 my-4">
        Вы можете изменить контакты, после их увидит арендатор
      </div>

      <div>
        <ul class="border-b w-full flex justify-between">
          <li class="inline-block">
            <a
              class="nav-button"
              :class="getClass(0)"
              @click="onTab(0)"
            >Общее</a>
          </li>
          <li class="inline-block">
            <a
              class="nav-button"
              :class="getClass(1)"
              @click="onTab(1)"
            >Контакты</a>
          </li>
          <li class="inline-block">
            <a
              class="nav-button"
              :class="getClass(2)"
              @click="onTab(2)"
            >Тарифный план</a>
          </li>
          <li class="inline-block">
            <a
              class="nav-button"
              :class="getClass(3)"
              @click="onTab(3)"
            >Смена пароля</a>
          </li>
        </ul>
      </div>
      <div>
        <div v-if="index === 0">
          <LazyUserData />
        </div>
        <div v-if="index === 1">
          <LazyUserContacts />
        </div>
        <div v-if="index === 2">
          <LazyUserPlan />
        </div>
        <div v-if="index === 2">
          <LazyUserPassword />
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  data () {
    return {
      indexValue: 1
    }
  },
  computed: {

    index: {
      get () {
        return this.indexValue
      },
      set (index) {
        this.indexValue = index
      }
    }
  },
  methods: {
    getClass (index) {
      return {
        'cursor-pointer': this.index !== index,
        'nuxt-link-exact-active nuxt-link-active': this.index === index
      }
    },
    onTab (index) {
      this.index = index

      const query = Object.assign({}, this.$route.query)
      query.index = index

      this.$router.push({ query })
    }
  }

}
</script>
