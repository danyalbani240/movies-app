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
    let startDate = this.$route.query.startDate
    let endDate = this.$route.query.endDate
    let url
    if (this.$route.query.page === undefined) {
      page = 1
    }
    if (startDate === undefined && endDate === undefined) {
      url = `https://api.themoviedb.org/3/discover/movie?api_key=f62f750b70a8ef11dad44670cfb6aa57&page=${page}`
    } else {
      url = `https://api.themoviedb.org/3/discover/movie?api_key=f62f750b70a8ef11dad44670cfb6aa57&page=${page}&primary_release_date.lte=${endDate}&primary_release_date.gte=${startDate}`
    }

    const results = await this.$axios.$get(url)
    this.movies = results.results
    this.page = results.page
  },
}
</script>
