<style scoped>
.feed__container {
  width: 100%;
  margin-right: 20px;
}
</style>

<template>
  <div class="feed__container">
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
    feed: {
      type: Array as () => ArticleFeed[],
    },
  },
});
</script>
