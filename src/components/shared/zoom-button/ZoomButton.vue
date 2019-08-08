<template>
 <div class="paper">
    <button v-on:click="$emit('enlarge-text')">
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  props: ['decoration'],
}
</script>

<style lang="scss" scoped>
</style>
