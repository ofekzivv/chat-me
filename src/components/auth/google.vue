<template>
  <q-btn class="full-width text-white" unelevated size="md" color="red-10"  icon="fab fa-google"
         label="היכנס דרך גוגל" @click="logWithGoogle()">
  </q-btn>
</template>

<script>
import firebaseAuth from "../../middleware/firebase/firestore/authentication"

export default {
  name: "google",
  data() {
    return {}
  },
  methods: {
    async logWithGoogle() {
      await firebaseAuth.google()
      this.$router.push(`/users`)
    }
  }
}
</script>

<style scoped>

</style>