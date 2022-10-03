<template>
  <div>
    <h2 class="mt-8 mb-4">
      Персональная информация
    </h2>
    <div class="my-4 w-full md:w-64">
      <ValidationObserver v-slot="{ invalid }">
        <div class="pb-2 mb-2">
          <ValidationProvider
            v-slot="{ errors }"
            class="col-span-1"
            name="Фамилия"
            :rules="{
              required: true,
            }"
          >
            <FeInput
              v-model="formData.firstname"
              :errors="errors"
              label="Фамилия"
              placeholder="Иванов Иван Иванович"
            />
          </ValidationProvider>
        </div>
        <div class="pb-2 mb-2">
          <ValidationProvider

            v-slot="{ errors }"
            class="col-span-1"
            name="Имя"
            :rules="{
              required: true,
            }"
          >
            <FeInput
              v-model="formData.lastname"
              :errors="errors"
              label="Имя"
              placeholder="Иванов Иван Иванович"
            />
          </ValidationProvider>
        </div>

        <button
          class="button button-sm w-full"
          :class="{ 'button-disabled': invalid || !signApplication }"
          :disabled="invalid || !signApplication"
          @click="checkSign"
        >
          Обновить
        </button>
      </ValidationObserver>
    </div>
    <LazyFeAlert
      v-if="message && getMessageBlock.includes('Application')"
      class="mt-4 alert"
      :type="message.type"
      :title="message.title"
      :description="message.description"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { ValidationObserver, ValidationProvider } from 'vee-validate'

export default {
  components: {
    ValidationObserver,
    ValidationProvider
  },
  data () {
    return {
      formErrors: {},
      formData: {
        firstname: 'Павел',
        lastname: 'Василенко'
      }
    }
  },
  computed: {
    ...mapGetters(['message', 'getMessageBlock'])
  }
}
</script>

<style>

</style>
