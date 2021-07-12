<template>
  <q-page class="flex q-pa-md">
    <q-list class="full-width" separator>

      <section v-for="user in filteredUsers" :key="user.id">
        <q-item clickable v-ripple @click="sendToChat(user.uid)">
          <q-item-section avatar>
            <q-avatar color="primary" text-color="white">
              {{ user.name.charAt(0) }}
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label>{{ user.name }}</q-item-label>
          </q-item-section>

          <q-item-section side>
            <q-badge :color="user.online ? 'light-green-5' : 'red-10'">
              {{ user.online ? 'Online' : 'Offline' }}
            </q-badge>
          </q-item-section>
        </q-item>
      </section>

    </q-list>
  </q-page>
</template>

<script>
import {mapState, mapActions, mapMutations, mapGetters} from 'vuex'


export default {
  name: 'users-list',
  data() {
    return {
      selectedUser:'',
    }
  },
  computed: {
    ...mapState('users', ['users','filteredUsers']),
    ...mapMutations('users',['setUsers']),
  },

  methods: {
    ...mapMutations('chat', ['setUserIdOnChat']),
    ...mapActions('users', ['getUsers']),

    async sendToChat(uid) {
      await this.setUserIdOnChat(uid)
      await this.$router.push(`/chat/${uid}`)
    },
  },
  async created() {
    await this.getUsers(window.user.uid)
  }
}
</script>

<style scoped>

</style>