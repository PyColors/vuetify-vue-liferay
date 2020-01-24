import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    portletNamespace: "",
    contextPath: "",
    portletElementId: ""
  }
});

export default store;
