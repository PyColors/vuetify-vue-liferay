import Vue from "vue";
import App from "./App";

import vuetify from "./plugins/vuetify";
import { store } from "./store";

/**
 * This is the main entry point of the portlet.
 *
 * See https://tinyurl.com/js-ext-portlet-entry-point for the most recent
 * information on the signature of this function.
 *
 * @param  {Object} params a hash with values of interest to the portlet
 * @return {void}
 */
export default function index({
  portletNamespace,
  contextPath,
  portletElementId
}) {
  store.state.portletNamespace = portletNamespace;
  store.state.contextPath = contextPath;
  store.state.portletElementId = portletElementId;

  new Vue({
    vuetify,
    store,
    el: `#${portletElementId}`,
    render: h => h(App)
  });
}
