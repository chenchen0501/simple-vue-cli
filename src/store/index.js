import Vue from "vue";
import Vuex from "vuex";
import modules from './modules'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    test1: '123'
  },
  modules
});
