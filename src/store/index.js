import { createStore } from 'vuex'

export default createStore({
  state: {
    dialogVisible: false,
    removeDialog : false,
  },
  getters: {
    getDialogVisible: (state) => state.dialogVisible,
    getRemoveDialogVisible: (state) => state.removeDialog,
  },
  mutations: {
    showDialog(state) {
      state.dialogVisible = true
    },
    hideDialog(state) {
      state.dialogVisible = false
    },
    showRemoveDialog(state) {
      state.removeDialog = true
    },
    hideRemoveDialog(state) {
      state.removeDialog = false
    },
  },
  actions: {
  },
  modules: {
  }
})
