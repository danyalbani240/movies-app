<template>
  <div class="lead-section flex">
    <img src="" class="poster rounded-xl" alt="" />
    <div class="details-container grid">
      <div class="flex items-center justify-between">
        <p class="font-bold text-neutral-black">Budget</p>
        <p class="text-neutral-black">$170’000’000</p>
      </div>
      <div class="flex items-center justify-between">
        <p class="font-bold text-neutral-black">Revenue</p>
        <p class="text-neutral-black">$772’776’600</p>
      </div>
      <div class="flex items-center justify-between">
        <p class="font-bold text-neutral-black">Release Date</p>
        <p class="text-neutral-black">2014-07-30</p>
      </div>
      <div class="flex items-center justify-between">
        <p class="font-bold text-neutral-black">Runtime</p>
        <p class="text-neutral-black">2h 1m</p>
      </div>
      <div class="flex items-center justify-between">
        <p class="font-bold text-neutral-black">Score</p>
        <p class="text-neutral-black">7.9 (23563 votes)</p>
      </div>
      <div class="flex items-center justify-between">
        <p class="font-bold text-neutral-black">Genres</p>
        <p class="text-neutral-black text-sm">
          Action, Science Fiction, Adventure
        </p>
      </div>
      <div class="flex items-center justify-between">
        <p class="font-bold text-neutral-black">IMDB Link</p>
        <p class="link text-neutral-active underline text-sm cursor-pointer">
          Link
        </p>
      </div>
      <div class="flex items-center justify-between">
        <p class="font-bold text-neutral-black">Homepage Link</p>
        <p class="link text-neutral-active underline text-sm cursor-pointer">
          Link
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
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
