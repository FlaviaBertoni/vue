<template>
  <div class="body">
    <app-bar :routes="routes"/>
    <router-view class="view"></router-view>
  </div>
</template>

<script>
import { routes } from './routes';
import AppBar from './components/shared/app-bar/AppBar.vue';
export default {
  components: {
    AppBar,
  },
  computed: {
    routes() {
      return routes;
    }
  }
}
</script>

<style scoped>
  .body {
    font-family: Helvetica, sans-serif;
    margin: 0 auto;
    width: 96%;
  }
  .view {
     margin: 6rem 0 0 0;
  }
</style>
