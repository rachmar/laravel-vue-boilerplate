import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import * as Cookies from "js-cookie";

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createPersistedState({
    key:'_vue',
    storage: {
        getItem: key => Cookies.get(key),
        setItem: (key, value) => Cookies.set(key, value, { expires: 3, secure: false }),
        removeItem: key => Cookies.remove(key)
      }
    })
  ],
  state: {
    user:{}
  },
  getters:{},
  mutations: {},
  actions: {},
  modules: {}
});
