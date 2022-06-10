<template>
  <div
    class="w-full bg-neutral-gray search-container rounded-md flex items-center"
  >
    <form autocomplete="off">
      <input type="text" class="hidden" autocomplete="off" />
      <div class="inline-flex">
        <label for="search">Search by release date:</label>
        <Datepicker lang="en" :range="true" v-model="date" />
      </div>
      <button class="text-white bg-neutral-blue search-button">Search</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: [],
    }
  },
}
</script>

<style>
.search-container {
  height: 85px;
  margin-top: 69px;
}
.search-container form label {
  margin-left: 81px;
}

.v-calendar .input-field.long {
  max-width: 221px;
  max-height: 33px;
  margin-left: 29px;
  max-width: 221px;
  min-width: 221px !important;
}

.v-calendar .input-field.long input {
  max-width: 221px;
  max-height: 33px;
  max-width: 221px;
  border: 1px solid #cfcfcf;
  border-radius: 0 !important;
}

.search-button {
  width: 74px;
  height: 33px;
  border-radius: 100px;
  margin-left: 392px;
}
</style>
