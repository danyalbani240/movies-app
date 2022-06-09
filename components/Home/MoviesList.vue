<template>
  <div class="grid grid-cols-3 movies-list">
    <HomeMovieCard v-for="(item, index) in Array(20)" :key="index" />
  </div>
</template>

<script>
export default {}
</script>

<style>
.movies-list {
  margin-top: 119px;
  row-gap: 35px;
  column-gap: 67px;
}
</style>
