<template>
  <div class="inline">
    <div>
      <ValidationObserver>
        <div>
          <ValidationProvider
            v-slot="{ errors }"
            name="сообщение"
            rules="min:3|max:255"
            class="grid grid-cols-12 relative"
          >
            <FeInput
              v-model="message"
              type="text"
              name="сообщение"
              placeholder="Отправить сообщение"
              :errors="errors.concat(extraErrors)"
              class="col-span-12 message-input"
              @input="extraErrors = []"
            />
            <div class="message__attach-button">
              <div
                class="
                  w-10
                  h-11
                  flex
                  items-center
                  float-right
                  cursor-pointer
                  opacity-90
                  hover:opacity-100
                  paperclip-container
                "
                @click="addFiles"
              >
                <svg-icon
                  name="paperclip"
                  class="
                    inline-block
                    w-6
                    h-4
                    ml-2
                    cursor-pointer
                    text-black text-opacity-85
                    fill-current
                  "
                />
              </div>
            </div>
            <div class="message__send-button">
              <div
                v-if="!isLoading"
                class="
                  w-12
                  h-11
                  flex
                  items-center
                  float-right
                  bg-elm
                  rounded
                  cursor-pointer
                  opacity-90
                  hover:opacity-100
                "
                @click="send"
              >
                <svg-icon
                  name="arrow"
                  class="inline-block w-8 h-6 ml-2 cursor-pointer"
                />
              </div>
              <div v-else class="w-15 h-10 flex items-center rounded" />
            </div>
          </ValidationProvider>
        </div>
      </ValidationObserver>
    </div>
    <FeFile
      v-show="attachments.length > 0"
      :id="7"
      ref="messageFiles"
      :uploaded-files="attachments"
      :max-files-limit="20"
      multiple
      :ignore-errors="false"
      class="mb-8 mt-4 message-file"
      :type="'message'"
      :acceptable-types="[
        'application/pdf',
        'heic',
        'image/bmp',
        'image/jpeg',
        'image/jpg',
        'image/png',
      ]"
      @onFileUploaded="onFile('uploaded', $event)"
      @onFileRemoved="onFile('removed', $event)"
    />
  </div>
</template>
<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate'

export default {
  name: 'FeMessage',
  components: {
    ValidationObserver,
    ValidationProvider
  },
  props: {
    request: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      attachments: [],
      errorList: [],
      text: '',
      loading: false
    }
  },
  computed: {
    extraErrors: {
      get () {
        return this.errorList
      },
      set (errors) {
        this.errorList = errors
      }
    },
    isLoading: {
      get () {
        return this.loading
      },
      set (loading) {
        this.loading = loading
      }
    },
    message: {
      get () {
        return this.text
      },
      set (text) {
        this.text = text
      }
    }
  },
  methods: {
    send () {
      if (!this.message || this.message.length === 0) {
        this.extraErrors = ['Введите сообщение для отправки в банк.']

        return
      }

      if (this.message.length <= 3 || this.message.length > 255) {
        return
      }

      this.loading = false // true

      /* this.$services.bankService
        .sendMessage(this.request, this.message, this.attachments)
        .then((log) => {
          this.message = ''
          this.attachments = []
          this.$emit('onSend', log)
        })
        .finally(() => (this.loading = false)) */
    },
    addFiles () {
      if (this.$refs.messageFiles) {
        this.$refs.messageFiles.$el[0].click()
      }
    },
    onFile (action, files) {
      switch (action) {
        case 'uploaded':
          this.attachments.push(...files)
          break
        case 'removed':
          this.attachments = this.attachments.filter((attachment) => {
            return (
              `${attachment.name}.${attachment.ext}` !==
              `${files.id}.${files.ext}`
            )
          })
          break
      }
    }
  }
}
</script>

<style lang="scss">
.message-input input {
  margin-right: 66px;
}

%message__button {
  position: absolute;
  top: 0.05em;
  z-index: 20;
}

.message__attach-button {
  @extend %message__button;

  right: 3.15em;
}

.message__send-button {
  @extend %message__button;

  right: 0.05em;
}
</style>
