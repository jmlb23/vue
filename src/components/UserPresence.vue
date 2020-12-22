<style scoped>
.div__userinfo {
  display: flex;
}
.img__user {
  border-radius: 50%;
  height: 64px;
  width: 64px;
}

.button {
  background-color: transparent;
  color: var(--color-primary);
  border: 1px solid var(--color-primary);
  border-radius: 5px;
  height: auto;
  margin-top: auto;
  margin-bottom: auto;
  justify-self: center;
  text-decoration: none;
  padding-left: 10px;
  padding-right: 10px;
  margin-left: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
}

.button:hover {
  background-color: var(--color-primary);
  color: var(--color-secondary);
  border: 1px solid var(--color-primary);
}
.button:active {
  background-color: var(--color-primary);
  opacity: 0.8;
  background-size: 100%;
  transition: background 0s;
  color: #555555;
}
</style>

<template>
  <div class="div__userinfo">
    <router-link :to="`/profile/${username}`">
      <img :src="image" class="img__user" alt="profile" />
    </router-link>
    <div>
      <router-link :to="`/profile/${username}`">
        <span>{{ username }}</span>
      </router-link>
      <p>{{ date }}</p>
    </div>
    <button class="button" @click="onClickFollow">&plus; {{ username }}</button>
    <button class="button" @click="onClickFav">
      &hearts; Favorite Article ({{ count ?? 0 }})
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    count: Number,
    username: String,
    date: String,
    image: String,
  },
  methods: {
    onClickFav(e: Event) {
      console.log(e);
    },
    onClickFollow(e: Event) {
      console.log(e);
    },
  },
});
</script>
