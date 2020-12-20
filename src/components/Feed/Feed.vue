<style scoped>
ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
}
li{
  margin-right: 5px;
  color: var(--color-primary);
  padding: 5px;
}
.feed__container {
  width: 100%;
  margin-right: 20px;
}
</style>

<template>
  <div class="feed__container">
    <header>
      <ul>
        <li>Global Feed</li>
        <li v-if="tag !== undefined && tag !== ''">{{ tag }}</li>
      </ul>
      <hr />
    </header>
    <feed-item v-for="article in feed" :key="article.slug" :article="article" />
    <footer></footer>
  </div>
</template>

<script lang="ts">
import { ArticlesFeed, ArticleFeed } from "@/src/data/ArticleDTOS";
import Vue, { defineComponent } from "vue";
import FeedItem from "./FeedItem.vue";
export default defineComponent({
  components: {
    "feed-item": FeedItem,
  },
  props: {
    tag: {
      type: String,
    },
    feed: {
      type: Array as () => ArticleFeed[],
    },
  },
});
</script>
