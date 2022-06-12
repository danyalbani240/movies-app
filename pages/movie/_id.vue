<template>
  <div>
    <MovieNavigation :title="movie.title" :tagline="movie.tagline" />
    <MovieLeadSection
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
      :posterPath="
        this.movie.belongs_to_collection == null
          ? this.movie.poster_path
          : this.movie.belongs_to_collection.poster_path
      "
    />
    <p class="description">
      {{ movie.overview }}
    </p>
    <MovieCredit :credits="credits" />
  </div>
</template>

<script>
export default {
  // data() {
  //   return {
  //     movie: {},
  //     credits: {},
  //   }
  // },
  async asyncData({ $axios, params }) {
    const movie = await $axios.$get(
      `https://api.themoviedb.org/3/movie/${params.id}?api_key=${process.env.apiKey}`
    )
    const credits = await $axios
      .$get(
        `https://api.themoviedb.org/3/movie/${params.id}/credits?api_key=${process.env.apiKey}`
      )
      .then((data) => data.cast)
    return { credits, movie }
  },
}
</script>

<style>
.description {
  color: #1e1e1e;
  margin-top: 53px;
}
</style>
