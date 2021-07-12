<template>
  <q-page class="flex">

    <q-form class="q-px-sm q-pt-xl q-pb-lg full-width">
      <q-input class="q-mb-md" v-model="email" type="email" label="Email">
        <template v-slot:prepend>
          <q-icon name="email"/>
        </template>
      </q-input>

      <q-input class="q-mb-md" v-model="username" type="username" label="Username">
        <template v-slot:prepend>
          <q-icon name="person"/>
        </template>
      </q-input>

      <q-input class="q-mb-md" v-model="password" type="password" label="Password">
        <template v-slot:prepend>
          <q-icon name="lock"/>
        </template>
      </q-input>

      <q-btn unelevated size="lg" color="primary" class="full-width text-white" label="לחץ להרשמה" @click="register()"/>
    </q-form>
  </q-page>
</template>

<script>
import firebaseAuth from "../../middleware/firebase/firestore/authentication"
import {mapState, mapActions, mapMutations} from 'vuex'


export default {
  name: "register",
  data() {
    return {
      email: '',
      username: '',
      password: '',
    }
  },
  methods: {
    register() {
      firebaseAuth.registerUser(this.email, this.password, this.username)
          .then(() => this.$router.push('/users'))
    },
  }
}
</script>

<style scoped>

</style>