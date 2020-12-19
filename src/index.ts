import {
  App,
  createApp,
} from "vue";

import TodoList from "./components/TodoList.vue";
import { router } from "./routes";

const app: App = createApp(TodoList).use(router);

app.mount("main");