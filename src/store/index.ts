import { createStore } from "vuex";
import taskStore from "./task"

const store = createStore({
  modules: {
    taskStore
  }
});

export default store;
