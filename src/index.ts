import Vue, {
  App,
  createApp,
} from "vue";
import Vuex from "vuex"
import Application from "./views/Application.vue";
import { router } from "./routes";
import { store } from "./state/store";

const app: App = createApp(Application).use(router).use(store);

app.mount("main");