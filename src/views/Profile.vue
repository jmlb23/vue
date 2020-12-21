<template>
  <div>
    <header>
      <img class="profile__img" :src="profile?.image" />
      <p class="profile__name">{{ profile?.username }}</p>
      <button class="profile__follow">
        <b class="profile__plus">&plus;</b
        ><span>Follow {{ profile?.username }}</span>
      </button>
    </header>
    <footer>
      <ul class="profile__menu">
        <li class="profile__menu__item">
          <router-link :to="`/profile/${username}`">My articles</router-link>
        </li>
        <li class="profile__menu__item">
          <router-link :to="`/profile/${username}/favorites`"
            >Favorite articles</router-link
          >
        </li>
      </ul>
      <feed :feed="feeds" />
    </footer>
  </div>
</template>

<script lang="ts">
import Vue, { defineComponent } from "vue";
import Feed from "../components/Feed/Feed.vue";
import { apiClient } from "../data/Api";
import { isOther } from "../data/Error";
import { Profile } from "../data/ProfileDTOS";
import { ArticleFeed } from "../data/ArticleDTOS";

type ProfileData = {
  profile: Profile | undefined;
  feeds: ArticleFeed[];
};

export default defineComponent({
  components: { Feed },
  props: {
    username: String,
  },
  data(): ProfileData {
    return {
      profile: undefined,
      feeds: [],
    };
  },
  methods: {
    getCurrentProfile() {
      apiClient
        .getProfile(this.username ?? "")
        .then((x) => (isOther(x) ? (this.profile = x) : x))
        .catch(console.error);
    },
    getArticles(favs: boolean) {
      apiClient
        .getArticles(
          0,
          undefined,
          favs ? this.username : undefined,
          favs ? undefined : this.username
        )
        .then((x) => (isOther(x) ? (this.feeds = x.articles) : x));
    },
  },
  mounted() {
    this.getCurrentProfile();
    this.getArticles(this.$route.path.includes("favorites"));
  },
  watch: {
    $route() {
      this.getArticles(this.$route.path.includes("favorites"));
    },
  },
});
</script>

<style scoped>
header {
  padding: 20px 15% 20px 15%;
  background-color: var(--color-secondary);
}

footer {
  padding: 20px 15% 20px 15%;
}
.profile__img {
  display: flex;
  margin-left: auto;
  margin-right: auto;
  border-radius: 50%;
  height: 200px;
  width: 200px;
}
.profile__name {
  text-align: center;
}

.profile__follow {
  display: flex;
  margin-left: auto;
  background-color: transparent;
  color: var(--color-primary);
  border: 1px solid var(--color-primary);
  border-radius: 5px;
  padding-right: 20px;
  padding-left: 20px;
  padding-top: 5px;
  padding-bottom: 5px;
}

.profile__follow:hover {
  background-color: var(--color-primary);
  color: var(--color-secondary);
  border: 1px solid var(--color-primary);
}
.profile__follow:active {
  background-color: var(--color-primary);
  opacity: 0.8;
  background-size: 100%;
  transition: background 0s;
  color: #555555;
}
.profile__plus {
  margin-right: 5px;
}

.profile__menu {
  display: inline-flex;
  border-bottom: 1px solid var(--color-secondary);
  margin: 0;
  padding: 0;
  width: 100%;
  margin-bottom: 10px;
}

.profile__menu__item {
  list-style: none;
  margin-right: 10px;
  padding: 10px;
}
</style>
