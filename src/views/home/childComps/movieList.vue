<template>
  <div class="movie">
    <movie-list-item
      v-for="item in movies"
      :key="item.mId"
      :movieItem="item"
    ></movie-list-item>
  </div>
</template>

<script>
import MovieListItem from "./movieListItem";

export default {
  name: "MovieList",
  data() {
    return {};
  },
  components: {
    MovieListItem,
  },
  props: {
    movies: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style  scoped>
.movie {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 2px;
}
</style>
