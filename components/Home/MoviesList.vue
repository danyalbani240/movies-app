<template>
  <div class="grid grid-cols-3 movies-list">
    <HomeMovieCard
      :title="movie.title"
      :release_date="movie.release_date"
      :cover="movie.poster_path"
      v-for="(movie, index) in movies"
      :key="movie.id"
      :id="movie.id"
      :tags="movie.genre"
    />
  </div>
</template>

<script>
export default {
  props: ['movies'],
}
</script>

<style>
.movies-list {
  margin-top: 119px;
  row-gap: 35px;
  column-gap: 67px;
}
</style>
