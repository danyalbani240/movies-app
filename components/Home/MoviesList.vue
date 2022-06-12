<template>
  <div
    class="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 movies-list px-3 md:px-0"
  >
    <HomeMovieCard
      :title="movie.title"
      :release_date="movie.release_date"
      :cover="movie.poster_path"
      v-for="(movie, index) in movies"
      :key="movie.id"
      :id="movie.id"
      :tags="moviesGenres[index]"
    />
  </div>
</template>

<script>
export default {
  props: ['movies'],
  data() {
    return {
      allGenres: [],
      moviesGenres: [],
    }
  },
  async fetch() {
    this.allGenres = await this.$axios
      .$get(
        'https://api.themoviedb.org/3/genre/movie/list?api_key=f62f750b70a8ef11dad44670cfb6aa57'
      )
      .then((data) => data.genres)
    //getting genres for movie cards
    this.movies.forEach((movie) => {
      const movieGenres = []
      for (const id of movie.genre_ids) {
        const genre = this.allGenres.find((genre) => genre.id === id).name
        movieGenres.push(genre)
      }
      this.moviesGenres.push(movieGenres)
    })
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
