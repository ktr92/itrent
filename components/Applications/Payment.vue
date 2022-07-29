<template>
  <div>
    <div class="grid grid-cols-2 gap-4 pb-2">
      <ApplicationsPaymentCard
        v-for="item in tarifs"
        :key="item.title"
        class="col-span-2 md:col-span-1"
        :list="item.list"
        :price="item.price"
        :title="item.title"
        :currency="item.currency"
        :icon="item.icon"
        :color="item.color"
      />
    </div>
    <div class="leading-normal text-2sm text-black text-opacity-45 my-2">
      Вы будете перенаправлены на сайт платёжной системы
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tarifs: [
        {
          title: 'Разовый',
          price: '5 000',
          currency: 'р',
          list: ['Разовая заявка', 'До 10 арендаторов'],
          icon: 'fluent_home-20-regular',
          color: false,
          paylink: ''
        },
        {
          title: 'Профессиональный',
          price: '50 000',
          currency: 'р/мес',
          list: ['50 заявок', 'без ограничения по количеству арендаторов', '1 000 рублей каждая последующая заявка'],
          icon: 'fluent_building-multiple-20-regular',
          color: true,
          paylink: ''
        }
      ]
    }
  }
}
</script>

<style>

</style>
