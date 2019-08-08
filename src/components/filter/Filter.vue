<template>
  <div class="container">
    <h1>{{ title }}</h1>
    <input type="search" class="search" v-model="searchField" placeholder="Filtre por nome de usuário"/>
    <ul class="list">
        <li v-for="user in filteredUserList" :key="user.id" class="list-item">
            <panel :title="user.login" :url="user.html_url">
              <img :src="user.avatar_url" :alt="user.login"/>
            </panel>
        </li>
    </ul>
  </div>
</template>

<script>
import Panel from '../shared/panel/Panel.vue';

export default {
  components: {
    Panel,
  },
  data () {
    return {
      title: 'Github Developer REST API',
      users: [],
      searchField: '',
    }
  },
  created() {
    this.$http.get('https://api.github.com/users?per_page=100')
      .then(res => this.users = res.data, err => console.error(err));
  },
  computed: {
    filteredUserList() {
      if(this.searchField) {
        const exp = new RegExp(this.searchField.trim(), 'i');
        return this.users.filter(foto => exp.test(foto.login));
      }
      return this.users;
    }
  }
}
</script>

<style lang="scss" scoped>
  .container {
    text-align: center;
    margin: 100px 40px;
  }

  .list {
    list-style: none;
    text-align: center;
    padding-inline-start: 0;
  }

  .list .list-item {
    display: inline-block;

    img {
      width: 100%;
    }
  }

  .search {
    display: block;
    width: 100%;
    background: white;
    height: 40px;
    border: none;
    font: inherit;
    position: relative;
    padding: 0 2rem;
    border-radius: 2px;
  }
</style>

