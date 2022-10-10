import { createStore } from 'vuex';
import axios from 'axios';

const request = axios.create({
    baseURL: 'http://localhost:3001',
});

export default createStore({
    state: {
        quotesList: [],
    },
    getters: {
        QUOTES(state) {
            return state.quotesList;
        },
    },
    mutations: {
        SET_QUOTES_TO_STATE: (state, quotesList) => {
            state.quotesList = quotesList;
        },
    },
    actions: {
        fetchQuotes({ commit }) {
            return request
                .get('/quotesList')
                .then(quotesList => {
                    commit('SET_QUOTES_TO_STATE', quotesList.data);
                    return quotesList;
                })
                .catch(err => {
                    return new Error(err);
                });
        },
    },
});