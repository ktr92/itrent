<template>
  <div class="container pt-8 pb-28 px-2">
    <div>
      <h1
        class="
          text-2xl text-black text-opacity-85
          md:mb-2
          font-bold
          flex
          items-center
          cursor-default
        "
      >
        Ваш профиль
      </h1>

      <div class="leading-normal text-2sm text-black text-opacity-45 mt-1 mb-6">
        Вы можете изменить контакты, после их увидит арендатор
      </div>

      <div class="mb-4">
        <ul class="border-b w-full flex">
          <li class="inline-block md:mr-2">
            <a
              class="nav-button text-xs md:text-2sm "
              :class="getClass(0)"
              @click="onTab(0)"
            >Общее</a>
          </li>
          <li class="inline-block md:mr-2">
            <a
              class="nav-button text-xs md:text-2sm"
              :class="getClass(1)"
              @click="onTab(1)"
            >Контакты</a>
          </li>
          <li class="inline-block md:mr-2">
            <a
              class="nav-button text-xs md:text-2sm"
              :class="getClass(2)"
              @click="onTab(2)"
            >Тарифный план</a>
          </li>
          <li class="inline-block md:mr-2">
            <a
              class="nav-button text-xs md:text-2sm"
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
        <div v-if="index === 3">
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
      indexValue: 0
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
        'nuxt-link-exact-active nuxt-link-active font-bold': this.index === index
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
