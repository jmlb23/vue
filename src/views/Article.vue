<style scoped>
header {
  display: flex;
  padding: 50px 0 50px 0;
  margin: 0;
  background-color: var(--color-secondary);
  flex-direction: column;
}

h1 {
  padding-left: 20%;
  padding-right: 20%;
}

.div__body {
  padding-left: 20%;
  padding-right: 20%;
}

footer {
  display: flex;
}

.center {
  margin-left: auto;
  margin-right: auto;
}

.padding {
  padding-left: 20%;
  padding-right: 20%;
}

hr {
  margin-left: 20%;
  margin-right: 20%;
  margin-top: 50px;
}
</style>
<template>
  <div>
    <header>
      <h1>{{ article?.title }}</h1>
      <user-presence
          :count="article?.favoritesCount"
          :date="article?.updatedAt"
          :image="article?.author.image"
          :username="article?.author?.username"
          class="padding"
      />
    </header>
    <div class="div__body">
      <p>{{ article?.body }}</p>
    </div>
    <hr/>
    <footer>
      <user-presence
          :count="article?.favoritesCount"
          :date="article?.updatedAt"
          :image="article?.author?.image"
          :username="article?.author?.username"
          class="center"
      />
    </footer>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import UserPresence from "../components/UserPresence.vue";
import {apiClient} from "../data/Api";
import {ArticleFeed} from "../data/ArticleDTOS";
import {isOther} from "../data/Error";

export default defineComponent({
  components: {
    "user-presence": UserPresence,
  },
  props: {
    slug: {
      type: String,
      required: true,
    },
  },
  data(): { article: ArticleFeed | undefined } {
    return {
      article: undefined,
    };
  },
  methods: {
    getArticles() {
      apiClient
          .getArticle(this.slug)
          .then((x) => (isOther(x) ? (this.article = x) : x));
    },
  },
  mounted() {
    this.getArticles();
  },
});
</script>
