import Vue, {
  App,
  createApp,
  InjectionKey,
} from "vue";
import Application from "./views/Application.vue";
import { router } from "./routes";
import { State, store } from "./state/store";
import { Store } from "vuex";

const app: App = createApp(Application).use(router).use(store)
app.mount("main");