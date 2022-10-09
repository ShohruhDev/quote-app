import { createStore } from 'vuex';
import axios from 'axios';

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
    REMOVE_FROM_CARD: (state,i) => {
      state.quotesList(i,1)
    },
    SET_QUOTES_TO_STATE: (state,quotesList) => {
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
    GET_QUOTESLIST({commit}) {
      return axios('http://localhost:3001/quotesList', {
       method: "GET"
      })
      .then((quotesList) => {
        commit('SET_QUOTES_TO_STATE', quotesList.data );
        return quotesList;
      })
    },
    DELETE_FROM_CARD({commit},i) {
    commit('REMOVE_FROM_CARD',i)
    },
  },
  modules: {
  }
})
