<template>
  <q-page class="flex full-width">
    <q-form class="q-px-sm q-pt-xl q-pb-lg full-width">

      <q-input class="q-mb=md" v-model="email" type="email" label="Email">
        <template v-slot:prepend>
          <q-icon name="email"/>
        </template>
      </q-input>
      <br>

      <q-input class="q-mb=md" v-model="password" type="password" label="Password">
        <template v-slot:prepend>
          <q-icon name="lock"/>
        </template>
      </q-input>
      <br>
      <q-btn unelevated size="md" color="primary" class="full-width text-white" label="היכנס" @click="login"/>
      <google/>
      <facebook/>

    </q-form>
  </q-page>
</template>

<script>
import firebaseAuth from "../../middleware/firebase/firestore/authentication"
import Google from "./google";
import Facebook from "./facebook";
// import {mapActions,mapMutations,mapState}


export default {
  name: "emailPassword",
  components: {Facebook, Google},
  data() {
    return {
      email: '',
      username: '',
      password: '',
    }
  },
  methods: {
    async login() {
      await firebaseAuth.logInEmailPassword(this.email, this.password)
      await this.$router.push('/users')
    },
  },
}
</script>

<style scoped>
</style>
