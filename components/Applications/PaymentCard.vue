<template>
  <div class="rounded shadow-1card p-4 relative pb-14">
    <div class="mb-2 flex justify-center" :class="{'text-elm': color}">
      <div>
        <svg-icon :name="icon" class="fill-current w-14 h-14" :class="{'fill-elm': color}" />
      </div>
    </div>
    <div class="text-center text-lg font-bold text-opacity-85 mb-2" :class="{'text-elm': color}">
      {{ title }}
    </div>
    <div class="text-center text-2xl font-bold text-opacity-85 mb-2" :class="{'text-elm': color}">
      {{ price }} {{ currency }}
    </div>
    <div class="pt-2 border-t mt-2 mb-8">
      <ul>
        <li v-for="item in list" :key="item" class="flex mb-2">
          <span class="pt-1">
            <svg-icon name="check" class="fill-elm w-4 h-4" />
          </span>
          <span class="pl-2 text-md">{{ item }}</span>
        </li>
      </ul>
    </div>
    <div class="absolute bottom-4 left-4 right-4">
      <FeButton
        size="sm"
        class="w-full"
      >
        Оплатить
      </FeButton>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => {}
    },
    title: {
      type: String,
      default: ''
    },
    price: {
      type: String,
      default: ''
    },
    currency: {
      type: String,
      default: 'р'
    },
    icon: {
      type: String,
      default: 'fluent_home-20-regular'
    },
    color: {
      type: Boolean,
      default: false
    },
    paylink: {
      type: String,
      default: ''
    }
  }
}
</script>

<style>

</style>
