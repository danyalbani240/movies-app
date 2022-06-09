<template>
  <div
    class="w-full bg-neutral-gray search-container rounded-md flex items-center"
  >
    <form autocomplete="off">
      <input type="text" class="hidden" autocomplete="off" />
      <label for="search">Search by release date:</label>
      <input class="pl-2" type="text" id="search" />
      <button class="text-white bg-neutral-blue search-button">Search</button>
    </form>
  </div>
</template>

<script>
export default {}
</script>

<style>
.search-container {
  height: 85px;
  margin-top: 69px;
}
.search-container form label {
  margin-left: 81px;
}
.search-container form input {
  margin-left: 29px;
  width: 221px;
  height: 33px;
  border: 1px solid #cfcfcf;
}
.search-button {
  width: 74px;
  height: 33px;
  border-radius: 100px;
  margin-left: 392px;
}
</style>
