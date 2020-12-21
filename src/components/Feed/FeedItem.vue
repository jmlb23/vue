<style scoped>
header {
  display: flex;
  flex-direction: row;
}

img {
  border-radius: 50%;
  height: 50px;
  width: 50px;
  margin-right: 5px;
  border: 1px solid black;
  margin-top: auto;
  margin-bottom: auto;
}

header > div {
  display: flex;
  flex-direction: row;
  width: 100%;
}

button {
  margin-left: auto;
  margin-top: auto;
  margin-bottom: auto;
  color: var(--text-color);
  background-color: var(--color-primary);
  border: 1px solid black;
  padding: 5px 15px 5px 15px;
  border-radius: 5px;
  background-position: center;
  transition: background 0.8s;
}

button:active {
  background-color: #ffbb93;
  background-size: 100%;
  transition: background 0s;
  color: #555555;
}
</style>

<template>
  <div>
    <header>
      <router-link :to="`/profile/${article.author.username}`">
        <img :src="article.author.image" alt="profile" />
      </router-link>
      <div>
        <div>
          <router-link :to="`/profile/${article.author.username}`">
            <span>{{ article.author.username }}</span>
          </router-link>
          <p>{{ article.updatedAt }}</p>
        </div>
        <button>&hearts; {{ article.favoritesCount }}</button>
      </div>
    </header>
    <div>
      <p>{{ article.title }}</p>
      <p>{{ article.description }}</p>
    </div>
    <footer>
      <router-link :to="`/article/${article.slug}`">Read More</router-link>
    </footer>
  </div>
  <hr />
</template>

<script lang="ts">
import { ArticleFeed } from "@/src/data/ArticleDTOS";
import Vue, { defineComponent } from "vue";

export default defineComponent({
  props: {
    article: {
      type: Object as () => ArticleFeed,
    },
  },
});
</script>
