<template>
  <q-btn class="full-width text-white" unelevated size="md" color="blue" icon="fab fa-facebook"
         @click="logInFacebook()"> היכנס דרך פייסבוק
  </q-btn>
</template>

<script>
import firebaseAuth from "../../middleware/firebase/firestore/authentication"

export default {
  name: "facebook",
  data() {
    return {}
  },
  methods: {
    async logInFacebook() {
      await firebaseAuth.facebook()
      this.$router.push(`/users`)

    }
  }
}
</script>

<style scoped>

</style>