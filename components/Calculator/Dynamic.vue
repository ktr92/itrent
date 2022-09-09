<template>
  <div
    class="grid grid-cols-2 gap-4 pb-4"
  >
    <div
      v-for="(dynamicOption) in sortedDynamicOptions"
      :key="dynamicOption.alias"
      :class="[{ 'col-span-2 md:col-span-1 pt-2': dynamicOption.smallSize, 'col-span-2 pt-2': !dynamicOption.smallSize, 'border-t pt-4': dynamicOption.bordered}, {}]"
    >
      <template
        v-if="dynamicOption.type === 'FeSelect'"
      >
        <ValidationProvider
          v-slot="{ errors }"
          :rules="dynamicOption.rules"
          :name="dynamicOption.name"
        >
          <FeSelect
            :id="dynamicOption.alias"
            v-model="dynamicModel[dynamicOption.alias]"
            :options="dynamicOption.items"
            :errors="errors.concat(apiErrors[dynamicOption.alias])"
            :placeholder="dynamicOption.name"
            :default="dynamicOption.default"
            @change="onInput"
          />
        </ValidationProvider>
      </template>
      <template
        v-if="dynamicOption.type === 'FeRangeInput'"
      >
        <ValidationProvider
          v-slot="{ errors }"
          :rules="dynamicOption.rules"
          :name="dynamicOption.name"
        >
          <FeRangeInput
            :id="dynamicOption.alias"
            v-model="dynamicModel[dynamicOption.alias]"
            class="fe-rangeiput"
            :label="dynamicOption.name"
            :min="dynamicOption.min"
            :max="dynamicOption.max"
            :step="1"
            :offers="dynamicOption.offers"
            :errors="errors.concat(apiErrors[dynamicOption.alias])"
            :placeholder="dynamicOption.name"
            :caption="dynamicOption.caption"
            :readonly="!allowToChange"
            @input="onInput"
          />
        </ValidationProvider>
      </template>
      <template v-if="dynamicOption.type === 'FeSwitch'">
        <ValidationProvider>
          <div
            class="w-full flex items-center leading-normal text-2sm text-black text-opacity-85 mr-auto justify-between"
          >
            {{ dynamicOption.name }}

            <FeSwitch
              v-model="dynamicModel[dynamicOption.alias]"
              :readonly="!allowToChange"
            />
          </div>
        </ValidationProvider>
      </template>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
