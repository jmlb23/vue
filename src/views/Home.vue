<style scoped>
.home__div__banner {
  background-color: var(--color-primary);
  width: 100%;
  height: 10em;
  text-align: center;
}

.home__div__container {
  width: 90%;
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  margin-left: auto;
  margin-right: auto;
}

ul {
  margin-right: auto;
  margin-left: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  width: 30%;
}

li {
  list-style: none;
  padding: 10px;
  margin: 5px;
  background-color: var(--color-primary);
  border: 2px solid var(--color-secondary);
  border-radius: 5px;
}

li:active {
  background-color: #ffbb93;
  background-size: 100%;
  transition: background 0s;
  color: #555555;
}

.home__div {
  margin: 0;
  padding: 0;
}

.home__feed__menu {
  width: 90%;
  padding: 0;
  margin: 0;
  margin-left: auto;
  margin-right: auto;
  display: flex;
}
.home__feed__separator {
  width: 90%;
}
.home__feed__menu > p {
  margin-right: 5px;
  color: var(--color-primary);
  padding: 5px;
}
</style>

<template>
  <div class="home__div">
    <div class="home__div__banner">
      <h1>Home</h1>
    </div>
    <loader
      :width="100"
      :height="100"
      v-if="tags.length === 0 || articles.length === 0"
    />
    <div v-else>
      <div class="home__feed__menu">
        <p>Global Feed</p>
        <p v-if="tagSelected !== undefined && tagSelected !== ''">
          {{ tagSelected }}
        </p>
      </div>
      <hr class="home__feed__separator" />
      <div class="home__div__container">
        <feed :feed="articles" />
        <tag-list @selected="onTagSelected" :tags="tags" />
      </div>
      <ul>
        <li
          :key="p"
          @click="onPageSelected(p)"
          v-for="p in Array.from(Array(pages).keys())"
        >
          {{ p }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Feed from "../components/Feed/Feed.vue";
import TagsList from "../components/Tags/TagsList.vue";
import { apiClient } from "../data/Api";
import { ArticleFeed } from "../data/ArticleDTOS";
import { isOther } from "../data/Error";
import Loader from "../components/Loader.vue";

export default defineComponent({
  components: {
    "tag-list": TagsList,
    loader: Loader,
    feed: Feed,
  },
  data() {
    return {
      tag: "",
      tagSelected: "",
      page: 0,
      pages: 0,
      tags: [] as string[],
      articles: [] as ArticleFeed[],
    };
  },
  methods: {
    onPageSelected(page: number) {
      this.page = page;
      this.getAsyncArticles(page, this.tagSelected).then(
        (x) => (this.articles = x)
      );
    },
    async getAsyncArticles(
      page: number,
      tag: string | undefined
    ): Promise<ArticleFeed[]> {
      const articles = await apiClient.getArticles(page, tag);
      return isOther(articles) ? articles.articles : [];
    },
    async getAsyncTags() {
      const tags = await apiClient.getTags();
      return isOther(tags) ? tags : [];
    },
    async getAsyncCount(): Promise<number> {
      const articles = await apiClient.getArticles(this.page);
      return isOther(articles) ? articles.articlesCount : 0;
    },
    onTagSelected(tag: string) {
      console.log(tag);
      this.tagSelected = tag;
      this.getAsyncArticles(this.page, tag).then((x) => (this.articles = x));
    },
  },
  mounted() {
    this.getAsyncTags().then((x) => (this.tags = x));
    this.getAsyncArticles(this.page, undefined).then(
      (x) => (this.articles = x)
    );
    this.getAsyncCount().then((x) => (this.pages = x / 20));
  },
});
</script>
