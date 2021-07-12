<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="glossy">

      <q-toolbar>
        <q-btn v-if="$route.fullPath.includes('/chat')"
               v-go-back.single
               icon="arrow_back" flat dense label="Back"/>

        <q-btn v-if="$route.fullPath.includes('/home')"
               v-go-back.single
               icon="add" flat dense label="צור קבוצה"/>

          <q-input v-if="$route.fullPath.includes('/users')"
                   class="q-input"
                   rounded outlined
                   dir="rtl"
                   label=": חיפוש"
                   flat dense
                   standout="bg-white"
                   v-model="selectedUser"
                   @input="startSearch(selectedUser)"
          >
            <template>
              <q-icon class="icon-close" v-if="selectedUser !== ''" name="close" @click="selectedUser = ''" />
              <q-icon class="icon-search" name="search" color="dark"/>
            </template>
          </q-input>

        <q-toolbar-title class="absolute-center"> {{ title }}
        </q-toolbar-title>

        <q-btn v-if="isConnected === true"
               class="absolute-right q-pr-sm"
               icon="account_circle"
               flat dense
               label="התנתק"
               @click="logout()"/>

      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view/>
    </q-page-container>

  </q-layout>
</template>

<script>
import Home from "./views/Home";
import firebaseAuth from "./middleware/firebase/firestore/authentication"
import {mapState, mapMutations, mapActions,mapGetters} from 'vuex'

export default {
  name: 'LayoutDefault',
  components: {Home},
  data() {
    return {
      isConnected: true,
      selectedUser:''
    }
  },

  computed: {
    ...mapState('users', ['users']),
    ...mapGetters('users', ['filterSomething']),

    title() {
      let currentPath = this.$route.fullPath
      if (currentPath == '/') return 'כניסה'
      else if (currentPath == '/home') return 'דף הבית'
      else if (currentPath == '/users') return 'משתמשים'
      else if (currentPath == '/chat/:id') return 'צאט'
    }
  },

  methods: {
    ...mapMutations('users', ['getFilteredUsers']),

    startSearch(val){
      this.getFilteredUsers(val);
    },


    async logout() {
      await firebaseAuth.LogOut();
      this.isConnected = false
      await this.$router.push('/');
    },

  },

}
</script>

<style scoped>
.q-input {
  max-width: 100px;
}
.icon-search {
  font-size: 15px;
  margin-top: 10px;
}
.icon-close{
  font-size: 15px;
  margin-top: 10px;
}
</style>
