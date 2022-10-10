import { createStore } from 'vuex';
import axios from 'axios';

const request = axios.create({
  baseURL: 'http://localhost:3001'
})

export default createStore({
  state: {
    dialogVisible: false,
    removeDialog : false,
    quotesList: []
  },
  getters: {
     QUOTES(state) {
      return state.quotesList;
    },
    getDialogVisible: (state) => state.dialogVisible,
    getRemoveDialogVisible: (state) => state.removeDialog,
  },
  mutations: {
    REMOVE_QUOTE: (state, id) => {
      state.quotesList(i, 1)
    },
    SET_QUOTES_TO_STATE: (state, quotesList) => {
     state.quotesList = quotesList;
    },
    showDialog(state) {
      state.dialogVisible = true;
    },
    hideDialog(state) {
      state.dialogVisible = false;
    },
    showRemoveDialog(state) {
      state.removeDialog = true;
    },
    hideRemoveDialog(state) {
      state.removeDialog = false;
    },
  },
  actions: {
    fetchQuotes({ commit }) {
      return request.get('/quotesList')
      .then((quotesList) => {
        commit('SET_QUOTES_TO_STATE', quotesList.data );
        return quotesList;
      })
      .catch((err) => {
        return new Error(err)
      })
    },
    removeQuote({ commit }, id) {
      return request.delete(`/quotesList/${id}`)
        .then((res) => {
          console.log('delete response: ', res);
          commit('REMOVE_QUOTE', id)
          return res
        })
        .catch((err) => {
          return new Error(err)
        })
    },
  },
  modules: {
  }
})
