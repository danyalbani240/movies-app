<template>
  <div>
    <div class="credit">
      <p class="text-black font-bold text-lg ml-1">Credit:</p>
      <p class="mt-3 text-sm">
        {{ creditDisplayText }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['credits'],
  computed: {
    creditDisplayText() {
      let firstTen = []
      for (let index = 0; index < 10; index++) {
        firstTen.push(this.credits[index].name)
      }
      return `${firstTen.join(' , ')} and ${this.credits.length - 10} more`
    },
  },
}
</script>

<style>
.credit {
  margin-top: 80px;
  color: #1e1e1e;
}
</style>
