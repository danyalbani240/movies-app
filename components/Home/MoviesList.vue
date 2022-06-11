<template>
  <div class="grid grid-cols-3 movies-list">
    <HomeMovieCard
      :title="movie.title"
      :release_date="movie.release_date"
      :cover="movie.poster_path"
      v-for="(movie, index) in movies"
      :key="movie.id"
      :id="movie.id"
    />
  </div>
</template>

<script>
export default {
  props: ['movies'],
  data() {
    return {
      genres: [],
    }
  },
  async fetch() {
    this.genres = await this.$axios
      .$get(
        'https://api.themoviedb.org/3/genre/movie/list?api_key=f62f750b70a8ef11dad44670cfb6aa57'
      )
      .then((data) => data.genres)
      .then(() => {})
  },
}
</script>

<style>
.movies-list {
  margin-top: 119px;
  row-gap: 35px;
  column-gap: 67px;
}
</style>
