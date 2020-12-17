import {
  createApp
} from "vue";

import "./index.css"

const App = createApp({
  template: `<app />`
});

App.component("app", {
  data: () => {
    return {
      current: "",
      list: []
    }
  },
  computed: {
    elementsToBeDone() {
      return this.list.filter(x => !x.done).length
    }
  },
  template: `
        <div class="container">
          <input v-model="current" />
          <p>cousas por facer {{ this.elementsToBeDone }}</p>
          <button :disabled="current.length === 0" @click="add" >add</button>
          <div v-for="(element,index) in list">
            <todo-item :key="index" :todo="element.current" :done="element.done" @remove-event="remove" @check-event="isDoneListener" />
          </div>
        </div>
        `,
  methods: {
    remove(todo) {
      this.list = this.list.filter(x => x.current != todo)
    },
    isDoneListener(todo, done) {
      const index = this.list.map(x => x.current).indexOf(todo)
      console.log(index)
      this.list[index].done = done

    },
    add() {
      this.list.push({
        current: this.current,
        done: false
      })
      this.current = ""
    }
  }
})

App.component("todo-item", {
  props: {
    todo: {
      type: String,
      required: true
    },
    done: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      isDone: this.done
    }
  },
  template: `
  <div >
    <span v-if="!isDone" style="text-decoration: none">{{ todo }}</span>
    <span v-else style="text-decoration: line-through">{{ todo }}</span>
    <input style="display: inline" v-model="isDone" type="checkbox" @change="onCheck" />
    <button @click="onRemove">remove</button>
  </div>
  `,
  methods: {
    onRemove(event) {
      this.$emit('remove-event', this.todo)
    },
    onCheck(event) {
      this.$emit('check-event', this.todo, this.isDone)
    }
  },
})

App.mount("main");