import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import _ from 'lodash';

Vue.use(Vuex);


class NodebookStore extends Vuex.Store {
  constructor(options) {
    super(options);
  }
}

const nodebookStore = new NodebookStore({
  state: {
    stamp: Math.random(),
  },

  actions: {
  },
  getters: {
  },

  /* eslint-disable no-param-reassign */
  mutations: {
    TIMESTAMP(state) {
      state.stamp = Math.random();
    },
  },
  /* eslint-enable no-param-reassign */
});
export default nodebookStore;
