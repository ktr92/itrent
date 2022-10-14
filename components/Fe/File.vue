<template>
  <form
    ref="fileform"
    enctype="multipart/form-data"
    class="flex items-center justify-center text-center mb-4"
    @drag.prevent
    @dragstart.prevent
    @dragend.prevent
    @dragenter.prevent
    @dragover.prevent
    @dragleave.prevent
    @drop.prevent="drop"
  >
    <div
      class="
        p-4
        border
        rounded-lg
        hover:bg-catskill-white hover:shadow-md
        cursor-pointer
        w-full
      "
    >
      <input
        :id="'newFileField' + id"
        :ref="'imageInput' + id.toString()"
        type="file"
        :multiple="multiple"
        class="w-px h-px opacity-0 overflow-hidden absolute"
        @change="addFileToList"
      >
      <div
        v-if="errors.length > 0"
        class="flex flex-col mb-4"
      >
        <p v-for="error in errors" :key="error" class="text-red-400 text-sm">
          {{ error }}
        </p>
      </div>
      <label
        v-if="files.length === 0"
        :for="'newFileField' + id"
        class="cursor-pointer text-2sm"
      >
        Для загрузки перетащите файлы в эту область, или
        <span
          class="inline-block text-blue-400"
        >выберите их со своего устройства</span>
      </label>
      <div class="flex" :class="{ 'justify-center': showModal }">
        <div class="top-0 flex flex-wrap" :class="{ 'pl-2': !showModal }">
          <div
            v-if="showModal"
            class="flex items-center justify-center h-20 pb-2"
          >
            <button
              type="button"
              class="mr-16 border-sunset-orange bg-sunset-orange delete-button"
              @click="removeFile(deleteIndex)"
            >
              Удалить
            </button>
            <button
              type="button"
              class="delete-button border-elm bg-elm"
              @click="closeModal()"
            >
              Отмена
            </button>
          </div>
          <div v-for="(file, index) in fileUrls" v-else :key="index">
            <div class="mr-2 flex items-start mb-2">
              <div class="flex flex-col w-20" @click="openMedia(file)">
                <img
                  v-if="isImage(file.ext) && file.url"
                  :src="file.url"
                  class="mr-1 w-14 h-14"
                >
                <img
                  v-else-if="isImage(file.ext) && file.body"
                  :src="`data:image/png;base64,${file.body}`"
                  class="mr-1 w-14 h-14"
                >
                <svg-icon
                  v-else
                  name="file-text"
                  class="
                    cursor-pointer
                    block
                    w-14
                    h-14
                    text-black text-opacity-85
                    fill-current
                  "
                />
                <div
                  class="
                    text-xs text-black text-opacity-25
                    truncate
                    text-ellipsis
                    whitespace-nowrap
                  "
                >
                  {{ `${file.name}.${file.ext}` }}
                </div>
              </div>
              <div
                class="leading-none text-black text-opacity-2"
                @click="openModal(index)"
              >
                <svg-icon
                  name="cross-delete"
                  class="cursor-pointer block w-2 h-2 fill-current"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          v-if="
            !showModal &&
              files.length !== 0 &&
              acceptableTypes[0] !== 'application/pdf' &&
              files.length < maxFilesLimit
          "
          class="flex flex-col items-center text-xs text-black text-opacity-25"
          @click.prevent="openFileUpload"
        >
          <div
            class="
              w-14
              h-14
              bg-graybg
              rounded
              flex
              justify-center
              items-center
              text-black text-opacity-25 text-2xl
              font-bold
            "
          >
            &plus;
          </div>
          Добавить
        </div>
      </div>
    </div>
    <fe-media-viewer
      v-if="showMediaViewer"
      :file="selectedFile"
      :file-interface="fileInterface"
      :route-id="$route.params.id"
      @close="handleCloseMediaViewer"
    />
  </form>
</template>
<script>
import Vue from 'vue'

const toBase64 = file =>
  new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = error => reject(error)
  })

const File = Vue.extend({
  name: 'File',
  props: {
    fileInterface: {
      type: Object,
      default: null
    },
    id: {
      type: Number
    },
    type: {
      type: String,
      default: ''
    },
    uploadedFiles: {
      type: Array,
      default: () => []
    },
    uploadErrors: {
      type: Array,
      default: () => []
    },
    acceptableTypes: {
      type: Array,
      default: () => []
    },
    methodName: {
      type: String,
      default: ''
    },
    multiple: {
      type: Boolean,
      default: false
    },
    maxFilesLimit: {
      type: Number,
      default: 1
    },
    ignoreErrors: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      count: this.multiple ? null : 1,
      files: [],
      fileUrls: [],
      showModal: false,
      deleteIndex: null,
      errors: [],
      borrowerId: 0,
      fileData: [],
      showMediaViewer: false,
      selectedFile: null
    }
  },
  watch: {
    uploadedFiles () {
      this.init()
    },
    uploadErrors (errors) {
      if (errors.length > 0) {
        this.files = this.files.filter(file => file?.id)
        this.fileUrls = this.fileUrls.filter(file => file?.id)
      }
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      this.files = []
      this.fileUrls = []
      for (const file of this.uploadedFiles) {
        switch (true) {
          case this.isImage(file.ext) && file.public === false:
            this.getPrivateImageUrl(file.id).then(async (url) => {
              await this.fileUrls.push({
                url,
                name: file.name || file.id,
                ext: file.ext,
                id: file.id
              })
              await this.files.push({
                id: file.id,
                ext: file.ext
              })
            })
            break
          default:
            this.fileUrls.push({
              id: file.id,
              name: file.name || file.id,
              ext: file.ext,
              body: file.body ? file.body : null
            })
            this.files.push({
              id: file.id ? file.id : file.name,
              ext: file.ext
            })
            break
        }
      }
    },
    async addFileToList (event) {
      this.errors = []
      if (this.files.length >= this.maxFilesLimit || !event.target.files) {
        return
      }

      let files = Array.from(event.target.files)
      files = files.filter(file => this.validate(file))

      const filesTotal = files.length + this.files.length
      if (filesTotal > this.maxFilesLimit) {
        const filesNumToPick = this.maxFilesLimit - this.files.length
        const filesCopy = [...files]
        files = filesCopy.splice(0, filesNumToPick)
        if (!this.ignoreErrors) {
          filesCopy.forEach((excessFile) => {
            this.errors.push(`${excessFile.name} превышен лимит. Максимальное кол-во файлов ${this.maxFilesLimit}`)
          })
        }
      }

      const uploadData = []
      for (let i = 0; i < files.length; i++) {
        const fileType = files[i].type.toString()
        this.files.push(files[i])
        const base64 = await toBase64(files[i])
        const nameSplit = files[i].name.split('.')
        const ext = nameSplit.pop()
        const name = nameSplit.join('.')

        this.fileUrls.push({ url: base64, name, ext })
        uploadData.push({
          name,
          ext,
          body: base64.replace(`data:${fileType};base64,`, '')
        })
        this.fileData.push(uploadData)
      }
      event.target.value = ''
      const fileNames = JSON.parse(JSON.stringify(this.fileUrls))
      this.$emit('onCurrentFiles', fileNames)

      this.$emit(
        'onFileUploaded',
        !this.multiple ? uploadData[0] : uploadData
      )
    },
    validate (file) {
      if (!file) {
        return false
      }
      const nameSplit = file.name.split('.')
      const ext = nameSplit.pop()
      const fileType = file.type.toString() || ext
      if (!this.acceptableTypes.includes(fileType)) {
        if (!this.ignoreErrors) {
          this.errors.push(`${file.name} Имеет неверный формат`)
        }
        return false
      }
      // больше 5mb
      if (file.size > 5242880) {
        if (!this.ignoreErrors) {
          this.errors.push(`Размер ${file.name} превышает 5мб`)
        }
        return false
      }

      return true
    },
    removeFile (index) {
      const removeId = this.files[index]
      this.closeModal()

      this.fileUrls.splice(index, 1)
      this.files.splice(index, 1)
      this.fileData.splice(index, 1)

      this.$emit('onFileRemoved', removeId)
    },
    openModal (index) {
      this.deleteIndex = index
      this.showModal = true
    },
    closeModal () {
      this.showModal = false
      this.deleteIndex = null
    },
    async getPrivateImageUrl (fileId) {
      const fileUrl = await this.fileInterface.getPrivateImageUrl(
        fileId,
        this.$route.params.id
      )
      return fileUrl
    },
    drop (event) {
      event.target.files = event.dataTransfer.files
      this.addFileToList(event)
    },
    openFileUpload () {
      this.$refs['imageInput' + this.id].click()
    },
    isImage (ext) {
      if (['jpeg', 'jpg', 'png', 'webp', 'bmp'].includes(ext)) {
        return true
      }
      return false
    },
    openMedia (file) {
      this.selectedFile = file
      this.showMediaViewer = !!this.selectedFile
    },
    handleCloseMediaViewer () {
      this.showMediaViewer = false
    }
  }
})
export default File
</script>
<style scoped>
.delete-button {
  @apply py-2.5 px-6 rounded-lg leading-snug focus:outline-none align-middle hover:opacity-50 font-medium text-white;
}
</style>
