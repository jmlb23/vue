import {
  App,
  createApp,
} from "vue";

import Application from "./views/Application.vue";
import { router } from "./routes";

const app: App = createApp(Application).use(router);

app.mount("main");