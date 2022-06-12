export const state = () => ({
  movies: [],
  allGenres: [],
})

export const getter = {
  getCounter(state) {
    return state.counter
  },
}

export const mutations = {
  setMovies(state, movies) {
    state.movies = movies
  },
  setPage(state, page) {
    state.page = page
  },
  setTotalPages(state, totalPages) {
    state.totalPages = totalPages
  },
  setAllGenres(state, allGenres) {
    state.allGenres = allGenres
  },
  setMoviesGenres(state) {
    //adding genres to the movies
    for (const movie of state.movies) {
      const genre = []
      movie.genre_ids.forEach((id) => {
        genre.push(state.allGenres.find((genre) => genre.id === id).name)
      })
      movie.genre = genre
    }
  },
}

export const actions = {
  async nuxtServerInit(context, nuxtContext) {
    //get the first movies by url queries
    let url = ''
    if (
      nuxtContext.query.startDate === undefined &&
      nuxtContext.query.endDate === undefined
    ) {
      url = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.apiKey}&page=${nuxtContext.query.page}`
    } else {
      url = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.apiKey}&page=${nuxtContext.query.page}&primary_release_date.lte=${nuxtContext.query.endDate}&primary_release_date.gte=${nuxtContext.query.startDate}`
    }

    //   const results = await this.$axios.$get(url)
    //   this.movies = results.results
    //   this.page = results.page
    //   this.totalPages = results.total_pages
    await nuxtContext.$axios
      .$get(url)
      .then((res) => {
        context.commit('setMovies', res.results)
        context.commit('setPage', res.page)
        context.commit('setTotalPages', res.total_pages)
      })
      .catch((e) => console.log(e))
    //getting the genres
    await nuxtContext.$axios
      .$get(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.apiKey}`
      )
      .then((res) => {
        context.commit('setAllGenres', res.genres)
        context.commit('setMoviesGenres')
      })
      .catch((e) => console.log(e))
  },
}
