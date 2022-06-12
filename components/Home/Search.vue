<template>
  <div
    class="lg:w- mx-auto lg:mx-0 w-11/12 bg-neutral-gray search-container rounded-md flex items-center"
  >
    <form
      autocomplete="off"
      @submit.prevent="handleSearch"
      class="flex lg:block items-center w-11/12 lg:w-auto justify-between"
    >
      <input type="text" class="hidden" autocomplete="off" />
      <div class="inline-flex">
        <label for="search">Search by release date:</label>
        <Datepicker
          lang="en"
          :range="true"
          v-model="date"
          show-clear-button
          @reset="resetDate"
        />
      </div>
      <button class="text-white bg-neutral-blue search-button">Search</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: [
        this.$route.query.startDate != undefined
          ? this.$route.query.startDate
          : null,
        this.$route.query.endDate != undefined
          ? this.$route.query.endDate
          : null,
      ],
    }
  },
  methods: {
    handleSearch(e) {
      if (
        this.date[0] === undefined ||
        this.date[1] === null ||
        this.date[0] === null
      ) {
        this.$router.push('/')
        return
      }
      this.$router.push({
        path: this.$route.path,
        query: {
          page: 1,
          startDate: new Date(Date.parse(this.date[0]))
            .toISOString()
            .split('T')[0],
          endDate: new Date(Date.parse(this.date[1]))
            .toISOString()
            .split('T')[0],
        },
      })
    },
    resetDate() {
      this.date[0] = undefined
      this.date[1] = undefined
    },
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

.v-calendar {
  max-width: 221px;
  min-width: 221px !important;
  margin-left: 29px;
}
.v-calendar .input-field.long {
  max-width: 221px;
  max-height: 33px;
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
@media only screen and (max-width: 1024px) {
  .search-button {
    margin-left: 0;
  }
}
</style>
