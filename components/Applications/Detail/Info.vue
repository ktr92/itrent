<template>
  <div>
    <div
      class="mb-2 px-2 pb-2 mb-4 border-b text-md font-semibold text-black text-opacity-85 flex items-center   justify-between w-full"
    >
      <div class="flex items-center">
        <div class="h-8 w-8 pr-2 flex items-center justify-center">
          <div class="w-6 h-6 rounded-full bg-white  flex align-center justify-center">
            <span class="object-contain flex align-center justify-center">
              <img
                :src="getCurrentApplication.proposal.bank.logo"
                alt=""
                class="m-auto w-4 h-4"
              >
            </span>
          </div>
        </div>
        <div>{{ getCurrentApplication.proposal.bank.name }}</div>
      </div>
      <div class="flex items-center flex-wrap gap-2 mt-2 md:mt-0 ml-2">
        <Tag
          :type="getCurrentApplication.status"
          :text="getStatusMap[getCurrentApplication.status]"
          size="xs"
        />
      </div>
    </div>
    <div class="mb-2 text-xs text-black text-opacity-40 cursor-default">
      <span
        v-if="enrollment"
      >{{ createdAt }}</span>
    </div>
    <div class="bg-white rounded-md shadow-3xl p-4">
      <div class="text-md font-bold pb-2 border-b mb-2">
        Заявка отправлена
      </div>
      <div class="pt-2">
        <div class="flex items-center justify-between mb-2">
          <span class="pr-2 text-sm">Цена за кв.м</span>
          <span class="font-bold">От {{ getCurrentApplication.proposal.payment || "не указана" }} Р</span>
        </div>
        <div class="flex items-center justify-between mb-2">
          <span class="pr-2 text-sm">Квадратные метры</span>
          <span class="font-bold">От {{ enrollment.s || "не указана" }} кв.м</span>
        </div>
        <div class="flex items-center justify-between mb-2">
          <span class="pr-2 text-sm">Срок</span>
          <span class="font-bold"> {{ getCurrentApplication.period || "не указан" }}  </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Tag from '@/components/Ui/Tag'
import { formatDate } from '@/utils/formatDate'

export default {
  components: {
    Tag
  },
  props: {
    enrollment: {
      type: Object,
      default: null
    }
  },
  computed: {
    ...mapGetters('applications', ['getCurrentApplication', 'getStatusMap']),
    createdAt () {
      return formatDate(this.enrollment.createdAt)
    }
  }
}
</script>

<style>

</style>
