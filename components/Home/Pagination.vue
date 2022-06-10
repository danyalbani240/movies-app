<template>
  <div class="pagination-container mb-10">
    <div class="h-10 flex items-center justify-center">
      <p
        @click="goPrevPage"
        :class="{
          'text-neutral-active cursor-pointer':
            typeof +this.$route.query.page === 'number' &&
            +this.$route.query.page !== 1,
          'passive cursor-default':
            this.$route.query.page === undefined ||
            +this.$route.query.page === 1,
        }"
        class="prev font-bold"
      >
        Previous Page
      </p>
      <span class="pagination-separator"></span>
      <p
        @click="goNextPage"
        class="next cursor-pointer font-bold text-neutral-active"
      >
        Next Page
      </p>
    </div>
    <p class="mt-3.5 results text-center">
      Showing results
      {{
        this.$route.query.page === undefined
          ? 1
          : (+this.$route.query.page - 1) * 20 + 1
      }}-{{
        this.$route.query.page === undefined ? 20 : +this.$route.query.page * 20
      }}
    </p>
  </div>
</template>

<script>
export default {
  methods: {
    goNextPage() {
      this.$router.push({
        path: this.$route.path,
        query: {
          page:
            this.$route.query.page === undefined
              ? 2
              : +this.$route.query.page + 1,
        },
      })
    },
    goPrevPage() {
      if (
        this.$route.query.page === undefined ||
        +this.$route.query.page === 1
      ) {
        return
      }
      this.$router.push({
        path: this.$route.path,
        query: {
          page: +this.$route.query.page - 1,
        },
      })
    },
  },
}
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
}
.prev.passive {
  color: rgba(0, 0, 0, 0.48);
}
.next {
  margin-left: 30px;
}
.results {
  color: #989898;
}
</style>
