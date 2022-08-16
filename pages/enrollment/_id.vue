<template>
  <div class="container pt-8 pb-28">
    <div>
      <h2
        class="
          text-2xl text-black text-opacity-85
          mb-6
          flex
          items-center
          cursor-default
        "
      >
        Заявка #{{ $route.params.id }}
        <span class="ml-2 text-2sm text-black text-opacity-45 cursor-default">
          &bull;
          <span
            v-if="enrollment"
            class="ml-2"
          >от {{ enrollment.getCreatedAt() }}</span></span>
      </h2>

      <div>
        <ul class="border-b w-1/2 flex justify-between">
          <li class="inline-block">
            <a
              class="nav-button"
              :class="getClass(0)"
              @click="onTab(0)"
            >Расчет ипотеки</a>
          </li>
          <li class="inline-block">
            <a
              class="nav-button"
              :class="getClass(1)"
              @click="onTab(1)"
            >Заполнение анкеты</a>
          </li>
          <li class="inline-block">
            <a
              class="nav-button"
              :class="getClass(2)"
              @click="onTab(2)"
            >Работа с банком</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {

  data () {
    return {
      indexValue: 1
    }
  },
  head () {
    return {
      title: `Заявка на ипотеку №${this.$route.params.id} | ОНЛАЙНИПОТЕКА.РФ`
    }
  },
  computed: {
    enrollment: {
      get () {
        return this.$store.state.applications.data
      }
    },
    index: {
      get () {
        return this.indexValue
      },
      set (index) {
        this.indexValue = index
      }
    }
  },
  async created () {
    this.index = Number(this.$route.query.index || 1)

    const id = { id: this.$route.params.id }
    const result = await this.getApplications(id)
    if (!result) {
      this.$router.push('/404')
    }
  },
  methods: {
    ...mapGetters('applications', ['getApplications']),
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
