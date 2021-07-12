<template>
  <q-page class="flex column">
    <q-banner class="bg-grey-4 text-center">
      המשתמש/ת אינו מחובר/ת
    </q-banner>

    <div class="q-pa-md column col justify-end">
      <q-chat-message
          v-for="massage in allMessages"
          :key="massage.text"
          :name="massage.fromName"
          :text="[massage.text]"
          :sent="massage.fromMe"
      />
     <q-img :src="localImage"/>
    </div>
    <q-footer elevated>
      <q-toolbar>
        <q-form class="full-width">

          <q-input class="full-width"
                   @keydown.enter="handleEnter"
                   label="הקלד/י הודעה"
                   v-model="LocalNewMassage"
                   dir="rtl"
                   outlined
                   dense
                   bg-color="white" rounded
          >
            <template v-slot:after>
              <q-btn type="submit" @click="selectImage" round flat icon="add_a_photo" color="white"/>
              <q-btn type="submit" @click="sendLocalMassage" round dense flat icon="send" color="white"/>
            </template>
          </q-input>

          <q-file ref="imageSelector"
                  flat
                  borderless
                  v-model="localImage"
                  :filter="checkFile"
                  @rejected="onRejected"
                  v-show="false"
          />

        </q-form>
      </q-toolbar>
    </q-footer>

  </q-page>
</template>

<script>
import {mapState, mapActions, mapMutations} from "vuex";

export default {
  name: "chatBox",
  data() {
    return {
      LocalNewMassage: '',
      value: '',
      localImage: null
    }
  },
  watch: {
    localImage(newVal) {
      this.localImage = URL.createObjectURL(newVal);
    }
  },
  computed: {
    ...mapState('chat', ['allMessages', 'otherUserId']),
    ...mapState('users', ['users'])
  },

  methods: {
    ...mapActions('chat', ['sendMessage', 'getMessages']),
    ...mapMutations('chat', ['setUserIdOnChat']),

    handleEnter(event) {
      if (event.shiftKey === true && event.key === "Enter")
        this.value = `${this.value}\n`;
      else {
        event.preventDefault()
        this.sendLocalMassage();
        this.clearField();
      }
    },

    sendLocalMassage() {
      this.sendMessage({
        otherUserId: this.otherUserId,
        message: {
          text: this.LocalNewMassage,
          fromMe: true,
          from: window.user.uid,
          fromName: user.displayName,
          createdAt: new Date().getTime(),
          seen: false,
        }
      })
      this.clearField()
    },
    clearField() {
      this.LocalNewMassage = ''
      this.value = null;
    },


    selectImage() {
      this.$refs.imageSelector.pickFiles()
    },

    checkFile: function (files) {
      return files.filter(file => file.type === 'image/png' || file.type === 'image/jpeg' || file.type === 'image/jpg')
          .filter(file => file.size < 7000000)
    },

    onRejected (rejectedEntries) {
      this.$q.notify({
        type: 'negative',
        message: 'Image must be .png/.jpg/.jpeg and under 7Mb'
      })
      this.localImage = null
    },

  },
  async created() {
    if (!this.otherUserId) {
      await this.setUserIdOnChat(this.$route.params.uid)
    }
    await this.getMessages(this.otherUserId)
  }
}
</script>

<style scoped>

</style>