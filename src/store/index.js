import Vue from "vue";
import Vuex from "vuex";

import state from "@/store/state";
import * as mutations from "@/store/mutations";
import * as actions from "@/store/actions";
import * as getters from "@/store/getters";

Vue.use(Vuex);

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});
