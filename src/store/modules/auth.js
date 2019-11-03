import api from '../../api/imgur'
import qs from 'querystring'
import { router } from '../../main'

const state = {
  token: window.localStorage.getItem('imgur_token') // initial value
};

const getters = {
  isLoggedIn: state => !!state.token
  // flip null/string to bolean
};

const mutations = {
  // first argument must be state
  // other argument is given by actions
  setToken: (state, token) => {
    state.token = token
  }
};

// wire up state的instance和action
const actions = {
  // first argument gurantee: commit function from vuexinstance
  // which is used to call mutations
  logout: ({ commit }) => {
    commit('setToken', null) // token argument
    window.localStorage.removeItem('imgur_token')
  },

  finalizeLogin({ commit }, hash) {
    const query = qs.parse(hash.replace('#', ''))
    commit('setToken', query.access_token) // token from the url
    window.localStorage.setItem('imgur_token', query.access_token)
    router.push('/') // this method does not cause reload
  },

  login: () => {
    api.login()
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};