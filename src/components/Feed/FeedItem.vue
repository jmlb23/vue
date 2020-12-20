<style scoped>
header {
  display: flex;
  flex-direction: row;
}
img{
  margin: auto;
  border-radius: 50%;
  height: 50px;
  width: 50px;
}
header > div {
  display: flex;
  flex-direction: row;
}

button {
  margin-left: auto;
  margin-top: auto;
  margin-bottom: auto;
}
</style>

<template>
  <div>
    <header>
      <router-link to="">
        <img :src="article.author.image" alt="profile"/>
      </router-link>
      <div>
        <div>
          <router-link to="">
            <span>{{ article.author.username }}</span>
          </router-link>
          <p>{{ article.updatedAt }}</p>
        </div>
        <button />
      </div>
    </header>
    <div>
      <p>{{ article.title }}</p>
      <p>{{ article.body }}</p>
    </div>
    <footer>
      <router-link to="">Read More</router-link>
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
  }
});
</script>
