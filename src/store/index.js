import { createStore } from 'vuex';
import menuStore from './menuStore';
import plansStore from './plansStore';
import userStore from './userStore';
import appReferenceStore from './appReferenceStore';

export default createStore({
  modules: {
    menuStore,
    plansStore,
    userStore,
    appReferenceStore
  },
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  }
})
