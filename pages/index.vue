<template>
  <div>
    <HomeSearch />
    <HomeMoviesList :movies="$store.state.movies" />
    <HomePagination :totalPages="$store.state.totalPages" />
  </div>
</template>

<script>
export default {
  name: 'IndexPage',

  watch: {
    '$route.query': 'handleQueryChange',
  },

  methods: {
    handleQueryChange() {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      let url = ''
      if (
        this.$route.query.startDate === undefined &&
        this.$route.query.endDate === undefined
      ) {
        url = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.apiKey}&page=${this.$route.query.page}`
      } else {
        url = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.apiKey}&page=${this.$route.query.page}&primary_release_date.lte=${this.$route.query.endDate}&primary_release_date.gte=${this.$route.query.startDate}`
      }
      this.$store.dispatch('getMovies', url).catch((e) => console.log(e))
    },
  },
}
</script>
