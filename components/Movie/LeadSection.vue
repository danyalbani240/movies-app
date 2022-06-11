<template>
  <div class="lead-section flex">
    <img
      :src="`https://image.tmdb.org/t/p/original${posterPath}`"
      class="poster rounded-xl"
      alt=""
    />
    <div class="details-container grid">
      <div class="flex items-center justify-between">
        <p class="font-bold text-neutral-black">Budget</p>
        <p class="text-neutral-black">
          ${{ budget.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '’') }}
        </p>
      </div>
      <div class="flex items-center justify-between">
        <p class="font-bold text-neutral-black">Revenue</p>
        <p class="text-neutral-black">
          ${{ revenue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '’') }}
        </p>
      </div>
      <div class="flex items-center justify-between">
        <p class="font-bold text-neutral-black">Release Date</p>
        <p class="text-neutral-black">{{ releaseDate }}</p>
      </div>
      <div class="flex items-center justify-between">
        <p class="font-bold text-neutral-black">Runtime</p>
        <p class="text-neutral-black">{{ runtimeToHour }}</p>
      </div>
      <div class="flex items-center justify-between">
        <p class="font-bold text-neutral-black">Score</p>
        <p class="text-neutral-black">
          {{ score.vote_average }} ({{ score.vote_count }} votes)
        </p>
      </div>
      <div class="flex items-center justify-between">
        <p class="font-bold text-neutral-black">Genres</p>
        <p class="text-neutral-black text-sm">
          <span v-for="(genre, index) in genres">
            {{ genre.name }}
            <span v-if="index !== genres.length - 1">,</span></span
          >
        </p>
      </div>
      <div class="flex items-center justify-between">
        <p class="font-bold text-neutral-black">IMDB Link</p>
        <a
          target="_blank"
          :href="'https://www.imdb.com/title/' + imdb"
          class="link text-neutral-active underline text-sm cursor-pointer"
        >
          Link
        </a>
      </div>
      <div class="flex items-center justify-between">
        <p class="font-bold text-neutral-black">Homepage Link</p>
        <a
          target="_blank"
          :href="homePage"
          class="link text-neutral-active underline text-sm cursor-pointer"
        >
          Link
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'posterPath',
    'budget',
    'revenue',
    'releaseDate',
    'runtime',
    'score',
    'genres',
    'homePage',
    'imdb',
  ],
  computed: {
    runtimeToHour() {
      let hours = this.runtime / 60
      let minutes = Math.round((hours - Math.floor(hours)) * 60)
      return `${Math.floor(hours)}h ${minutes}m`
    },
  },
}
</script>

<style>
.lead-section {
  margin-top: 78px;
}
.poster {
  width: 330px;
  height: 495px;
  background-color: red;
}

.details-container {
  width: 606px;
  height: 302px;
  grid-template-rows: repeat(7, 1fr);
  row-gap: 18px;
  margin-left: 70px;
  margin-top: 25px;
  color: #151515;
}
</style>
