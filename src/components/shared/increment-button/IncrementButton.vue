<template>
 <div class="paper">
    <button v-on:click="increment">
      {{ counter }}
    </button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      counter: 1,
    }
  },
  methods: {
    increment: function () {
      this.counter += 1;
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
