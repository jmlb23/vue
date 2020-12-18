import {
  createApp
} from "vue";
import TodoList from "./components/todo-list.vue";

const App = createApp(TodoList);

App.mount("main");