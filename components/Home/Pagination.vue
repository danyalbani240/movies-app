<template>
  <div class="pagination-container mb-10">
    <div class="h-10 flex items-center justify-center">
      <p class="prev cursor-pointer font-bold">Previous Page</p>
      <span class="pagination-separator"></span>
      <p class="next cursor-pointer font-bold text-neutral-active">Next Page</p>
    </div>
    <p class="mt-3.5 results text-center">Showing results 1-20</p>
  </div>
</template>

<script>
export default {}
</script>

<style>
.pagination-container {
  margin-top: 161px;
}
.pagination-separator {
  width: 1px;
  height: 40px;
  background-color: #6a6a6a;
}
.prev {
  margin-right: 30px;
  color: rgba(0, 0, 0, 0.48);
}
.next {
  margin-left: 30px;
}
.results {
  color: #989898;
}
</style>
