<template>
  <NuxtLink :to="{ name: 'movie', params: { movie: id } }">
    <div class="movie-card bg-neutral-slate rounded-md flex cursor-pointer">
      <img
        :src="'https://image.tmdb.org/t/p/w500/' + cover"
        class="card-cover h-full rounded-l-md bg-red-300"
      />
      <div class="card-details">
        <h2 class="movie-name text-base font-bold">{{ title }}</h2>
        <p class="movie-date flex items-center text-xs">
          <img src="../../assets/calender-icon.svg" alt="calender" />
          {{ release_date }}
        </p>
        <div class="genere-list flex flex-wrap items-center">
          <p v-for="tag in tags" class="text-xs flex items-center flex-wrap">
            <span>{{ tag }}</span
            ><span class="seperator rounded-full"></span>
          </p>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script>
export default {
  props: ['title', 'release_date', 'cover', 'tags', 'id'],
}
</script>

<style>
.movie-card {
  width: 295px;
  height: 195px;
  padding: 3px 4px;
  border: 1px solid #c4c4c4;
}
.card-cover {
  min-width: 128px;
}
.card-details {
  margin-left: 11px;
}
.card-details h2 {
  margin-top: 13px;
  height: 60%;
}
.movie-date {
  color: #4e4e4e;
  margin-bottom: 14px;
}
.movie-date img {
  margin-right: 7px;
}
.genere-list {
  color: #505050;
}
.seperator {
  background: #505050;
  width: 4px;
  height: 4px;
  margin: 0 6px;
}
.genere-list > p:last-child .seperator {
  display: none;
}
</style>
