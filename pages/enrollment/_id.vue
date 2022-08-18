<template>
  <div class="container pt-8 pb-28">
    <div>
      <h2
        class="
          text-2xl text-black text-opacity-85 font-bold
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
          >от {{ createdAt }}</span></span>
      </h2>
      <ApplicationsDetail :enrollment="enrollment" />
    </div>
  </div>
</template>
<script>
import { formatDate } from '@/utils/formatDate'

export default {

  data () {
    return {
      indexValue: 1,
      result: null,
      id: null
    }
  },
  head () {
    return {
      title: `Заявка №${this.$route.params.id} | ОНЛАЙНАРЕНДА`
    }
  },
  computed: {
    enrollment () {
      return this.$store.getters['applications/getApplication'](this.id)
    },
    index: {
      get () {
        return this.indexValue
      },
      set (index) {
        this.indexValue = index
      }
    },
    createdAt () {
      return formatDate(this.enrollment.createdAt)
    }
  },
  created () {
    this.index = Number(this.$route.query.index || 1)
    this.id = Number(this.$route.params.id)
    this.result = this.$store.getters['applications/getApplication'](this.id)
    if (!this.result) {
      this.$router.push('/404')
    }
  },
  methods: {
    getClass (index) {
      return {
        'cursor-pointer': this.index !== index,
        'nuxt-link-exact-active nuxt-link-active': this.index === index
      }
    }
  }
}
</script>
