<template>
  <div>
    <MovieNavigation :title="movie.title" :tagline="movie.tagline" />
    <MovieLeadSection
      v-if="movie !== []"
      :posterPath="movie.belongs_to_collection.poster_path"
      :budget="movie.budget"
      :revenue="movie.revenue"
      :releaseDate="movie.release_date"
      :runtime="movie.runtime"
      :score="{
        vote_average: movie.vote_average,
        vote_count: movie.vote_count,
      }"
      :genres="movie.genres"
      :homePage="movie.homepage"
      :imdb="movie.imdb_id"
    />
    <p class="description">
      {{ movie.overview }}
    </p>
    <MovieCredit :credits="credits" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      movie: {},
      credits: {},
    }
  },
  async fetch() {
    this.movie = await this.$axios.$get(
      `https://api.themoviedb.org/3/movie/${this.$route.params.movie}?api_key=${process.env.apiKey}`
    )
    this.credits = await this.$axios
      .$get(
        `https://api.themoviedb.org/3/movie/${this.$route.params.movie}/credits?api_key=${process.env.apiKey}`
      )
      .then((data) => data.cast)
  },
}
</script>

<style>
.description {
  color: #1e1e1e;
  margin-top: 53px;
}
</style>
