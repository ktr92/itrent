<template>
  <div
    class="
      bg-white
      rounded-lg
      shadow
      px-10
      py-2
      border-3 border-transparent
    "
  >
    <div class="border-b pb-2">
      <div class="relative">
        <div
          class="absolute bg-gray-200 top-0 -left-8 flex w-6 h-6 rounded-full"
        />
      </div>
      <div
        class="
          leading-5
          text-2xs text-black text-opacity-45
          w-full
          h-6
          rounded
          bg-gray-200
        "
      />
    </div>

    <!--    border-b-->
    <div class="py-2">
      <div class="flex items-center mb-2 last:mb-0">
        <div
          class="
            leading-5
            text-2xs text-black text-opacity-45 text-gray-200
            bg-gray-200
            rounded
            mr-auto
          "
        >
          Цена за кв.м
        </div>
        <div
          class="
            leading-normal
            text-2xs text-black text-opacity-85 text-right text-gray-200
            rounded
            bg-gray-200
          "
        >
          от 5000 руб / мес
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>
