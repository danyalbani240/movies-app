<template>
  <div
    class="w-full bg-neutral-gray search-container rounded-md flex items-center"
  >
    <button
      @click="$router.push({ path: '/' })"
      class="text-white bg-neutral-blue rounded-full flex items-center justify-center"
    >
      <img src="../../assets/left-arrow.svg" alt="left" />
      Back
    </button>
    <div class="ml-16">
      <p class="text-lg font-bold">Guardians of the Galaxy</p>
      <p class="text-lg">All heroes start somewhere.</p>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
button {
  margin-left: 35px;
  width: 92px;
  height: 33px;
}
button img {
  margin-left: -10px;
  margin-right: 5px;
}
</style>
