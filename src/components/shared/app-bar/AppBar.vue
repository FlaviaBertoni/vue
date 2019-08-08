<template>
 <div class="paper">
        <nav class="muibreadcrumbs">
            <ol>
                <li v-for="(route, index) in routes" :key="index">
                    <router-link class="link" :to="route.path">{{ route.titulo }}</router-link>
                </li>
            </ol>
        </nav>
  </div>
</template>

<script>
export default {
  props: {
      routes: {
          type: Array,
          required: true,
      }
  },
}
</script>

<style lang="scss" scoped>
  .paper {
    background-color: #3c4146;
    border-bottom: 1px solid #202326;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 3rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    .muibreadcrumbs {
      ol {
        list-style: none;
        display: flex;
        padding: 0 3rem;

        li {
            margin: 0 1rem;

            a {
              text-decoration: none;
              color: rgba(255,255,255,.7);
            }
        }
      }
    }
  }
</style>
