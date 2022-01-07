import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export const state = () => ({
  events: null
})
export const mutations = {
  setEvents(state, data) {
    state.events = data
  }
}