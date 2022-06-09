<template>
  <div class="movie-card bg-neutral-slate rounded-md flex cursor-pointer">
    <div class="card-cover h-full rounded-l-md bg-red-300"></div>
    <div class="card-details">
      <h2 class="movie-name text-base font-bold">Inception</h2>
      <p class="movie-date flex items-center text-xs">
        <img src="../../assets/calender-icon.svg" alt="calender" />
        2014-10-22
      </p>
      <p class="genere-list text-xs flex items-center flex-wrap">
        <span>Action</span><span class="seperator rounded-full"></span
        ><span>Adventure</span><span class="seperator rounded-full"></span
        ><span>Sci-Fi</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {}
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
}
.movie-date {
  color: #4e4e4e;
  margin-top: 88px;
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
</style>
