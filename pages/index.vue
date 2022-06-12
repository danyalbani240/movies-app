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
  // data() {
  //   return {
  //     page: 1,
  //     movies: [],
  //     totalPages: 0,
  //   }
  // },
  // watch: {
  //   '$route.query': '$fetch',
  // },
  // async fetch() {
  //   let startDate = this.$route.query.startDate
  //   let endDate = this.$route.query.endDate
  //   let url

  //   if (startDate === undefined && endDate === undefined) {
  //     url = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.apiKey}&page=${this.$route.query.page}`
  //   } else {
  //     url = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.apiKey}&page=${this.$route.query.page}&primary_release_date.lte=${endDate}&primary_release_date.gte=${startDate}`
  //   }

  //   const results = await this.$axios.$get(url)
  //   this.movies = results.results
  //   this.page = results.page
  //   this.totalPages = results.total_pages
  // },
}
</script>
