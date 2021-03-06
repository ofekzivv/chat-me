import Vue from "vue";
import Vuex from 'vuex'
import auth from './auth'
import users from './users'
import chat from './chat'

Vue.use(Vuex)

export default new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
    modules: {
        auth,
        users,
        chat
    }
})