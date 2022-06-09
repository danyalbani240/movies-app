<template>
  <div>
    <HomeSearch />
    <HomeMoviesList :movies="movies.results" />
    <HomePagination />
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  async asyncData({ params, $axios }) {
    if (params.page === undefined) {
      const movies = await $axios.$get(
        `https://api.themoviedb.org/3/discover/movie?api_key=f62f750b70a8ef11dad44670cfb6aa57`
      )
      return { movies }
    }
  },
}
</script>
