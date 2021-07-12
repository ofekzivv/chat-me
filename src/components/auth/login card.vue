<template>
  <q-page class="flex q-pa-md">
    <q-card class="full-width">
      <q-tabs
          v-model="tab"
          dense
          class="text-grey"
          active-color="primary"
          indicator-color="primary"
          align="justify"
          narrow-indicator
      >
        <q-tab name="register" label="הרשמה"/>
        <q-tab name="login" label="התחברות"/>
      </q-tabs>
      <q-separator/>

      <q-tab-panels v-model="tab" animated>

        <q-tab-panel name="register">
          <register/>
        </q-tab-panel>

        <q-tab-panel name="login" class="flex">
          <email-password/>
        </q-tab-panel>

      </q-tab-panels>
    </q-card>
  </q-page>
</template>

<script>
import EmailPassword from "./emailPassword";
import Register from "./register";

export default {
  name: 'login-card',
  components: {Register, EmailPassword},
  data() {
    return {
      tab: 'login'
    }
  },

}
</script>

<style scoped>

</style>
