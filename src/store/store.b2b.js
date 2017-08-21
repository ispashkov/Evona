import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import {PopupWrapper} from "../components/PopupWrapper/PopupWrapper.store";
import {PopupCallback} from "../components/PopupCallback/PopupCallback.store";

export const store = new Vuex.Store({
	strict: true,
	modules: {PopupWrapper, PopupCallback}
});		