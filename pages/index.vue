<template>
  <div>
    <HomeSearch />
    <HomeMoviesList :movies="movies" />
    <HomePagination />
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      page: 1,
      movies: [],
    }
  },
  watch: {
    '$route.query': '$fetch',
  },
  async fetch() {
    let page = this.$route.query.page
    if (this.$route.query.page === undefined) {
      page = 1
    }

    const results = await this.$axios.$get(
      `https://api.themoviedb.org/3/discover/movie?api_key=f62f750b70a8ef11dad44670cfb6aa57&page=${page}`
    )
    this.movies = results.results
    this.page = results.page
  },
}
</script>
