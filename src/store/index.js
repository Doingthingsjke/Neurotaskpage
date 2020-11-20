import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    quantity: [],
    departments: [],
    chartdata: {},
  },
  mutations: {
    SET_QUANTITY: (state, quantity) => {
      state.quantity = quantity
    },
    SET_DEPARTMENTS: (state, departments) => {
      state.departments = departments
    },
    SET_CHARTDATA: (state, chartdata) => {
      state.chartdata = chartdata
    },
  },
  actions: {
    async GET_QUANTITY({ commit }) {
      return axios('http://localhost:3000/quantity', {
        method: 'GET',
      }).then((response) => {
        commit('SET_QUANTITY', response.data)
      })
    },
    async GET_DEPARTMENTS({ commit }) {
      return axios('http://localhost:3000/departments', {
        method: 'GET',
      }).then((response) => {
        commit('SET_DEPARTMENTS', response.data)
      })
    },
    async GET_CHARTDATA({ commit }) {
      return axios('http://localhost:3000/chartdata', {
        method: 'GET',
      }).then((response) => {
        commit('SET_CHARTDATA', response.data)
      })
    },

    GET_KEYS_FROM_QUANTITY(object, value) {
      return Object.entries(object).find((i) => i[1] === value)
    },
  },
  getters: {
    QUANTITY(state) {
      return state.quantity
    },
    DEPARTMENTS(state) {
      return state.departments
    },
    CHARTDATA(state) {
      return state.chartdata
    },
  },
  modules: {},
})
