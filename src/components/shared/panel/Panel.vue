<template>
    <div class="panel">
        <h2 class="panel-title" @click="contentVisible = !contentVisible">{{ title }}</h2>
        <transition name="panel-fade">
          <div class="panel-content" v-show="contentVisible">
            <slot></slot>
            <a :href="url">{{ url }}</a>
          </div>
        </transition>
    </div>
</template>

<script>
export default {
  props: ['title', 'url'],
  data() {
      return {
        contentVisible: false,
      }
  }
}
</script>

<style lang="scss" scoped>
   .panel {
      padding: 0 auto;
      display: inline-block;
      margin: 5px;
      width: 12rem;
      height: 100%;
      vertical-align: top;
      text-align: center;
      box-shadow: 0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12);

     &-title {
       font-family: "Roboto", "Helvetica", "Arial", sans-serif;
       text-align: center;
       background: #ffffff;
       margin: 0;
       padding: 15px;
       text-transform: capitalize;
       cursor: pointer;
       user-select: none;
       font-weight: 400;
       line-height: 1.33;
       letter-spacing: 0em;
       font-size: 1.1rem;
    }
     &-content {
       a {
         font-size: 0.875rem;
         font-weight: 400;
         line-height: 1.43;
         color: #1976d2;
         text-decoration: none;
         vertical-align: middle;
         margin: 1rem;
         display: inline-block;
         word-break: break-word;
       }
     }
  }

  .panel-fade-enter, .panel-fade-leave-active {
    opacity: 0;
  }

  .panel-fade-enter-active {
    transition: opacity .4s;
  }

</style>
