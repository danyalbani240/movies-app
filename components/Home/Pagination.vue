<template>
  <div class="pagination-container mb-10">
    <div class="h-10 flex items-center justify-center">
      <p
        @click="goPrevPage"
        :class="{
          'text-neutral-active cursor-pointer transition hover:text-black':
            typeof +this.$route.query.page === 'number' &&
            +this.$route.query.page !== 1,
          'passive cursor-not-allowed ':
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
        class="next cursor-pointer font-bold transition"
        :class="{
          'passive cursor-not-allowed': isItLastPage,
          'hover:text-black text-neutral-active ': !isItLastPage,
        }"
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
  props: ['totalPages'],
  methods: {
    goNextPage() {
      if (this.isItLastPage) {
        return
      }
      this.$router.push({
        path: this.$route.path,
        query: {
          ...this.$route.query,
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
          ...this.$route.query,
          page: +this.$route.query.page - 1,
        },
      })
    },
  },
  computed: {
    isItLastPage() {
      if (this.totalPages === +this.$route.query.page) {
        return true
      } else {
        return false
      }
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
.next.passive {
  color: rgba(0, 0, 0, 0.48);
}
.next {
  margin-left: 30px;
}
.results {
  color: #989898;
}
</style>
