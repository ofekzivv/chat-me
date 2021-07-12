<template>
<login-card></login-card>
</template>

<script>
import EmailPassword from "../components/auth/emailPassword";
import LoginCard from "../components/auth/login card";

export default {
  name: "Login",
  components: {LoginCard, EmailPassword},
  data(){
    return{

    }
  },
}
</script>

<style scoped>

</style>