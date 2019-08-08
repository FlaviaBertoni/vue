<template>
 <div class="paper">
    <button class="button" :class="decoration">
      <slot>Default</slot>
    </button>
  </div>
</template>

<script>
export default {
  props: ['decoration'],
}
</script>

<style lang="scss" scoped>
  .button {
    border: 1px solid rgba(0, 0, 0, 0.23);
    padding: 5px 16px;
    color: rgba(0, 0, 0, 0.87);
    font-size: 0.875rem;
    min-width: 64px;
    line-height: 1.75;
    border-radius: 4px;
    letter-spacing: 0.02857em;
    text-transform: uppercase;
    cursor: pointer;
    background-color: transparent;
    user-select: none;
    outline: 0;

    &:hover {
      background-color: rgba(0, 0, 0, 0.08);
    }
  }

  .primary {
    color: #1976d2;
    border-color: rgba(25, 118, 210, 0.5);

    &:hover {
      background-color: rgba(25, 118, 210, 0.08);
    }
  }

  .secondary {
    color: #b92191;
    border-color: rgba(210, 47, 154, 0.5);

    &:hover {
      background-color: rgba(210, 47, 154, 0.08);
    }
  }
</style>
