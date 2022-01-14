import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // hold the recently added item and token
    // status shows if the item succeeded or failed parameters
    item: {},
    token: localStorage.getItem('token') || '',
    status: null
  },
  mutations: {
    // mutation for the loading status
    loadingMutation (state) {},
    // mutation for token being successfully authorised
    itemSuccessfulMutation (state, {token, itemObject}) {},
    // mutation for incorrectly entered parameters
    itemFailedMutation (state) {}
  },
  actions: {
    // fetch a response from the API and update the status based on mutation
    saveAction ({commit}, itemDetails) {}
  },
  modules: {
  }
})
