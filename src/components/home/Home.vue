<template>
  <div class="container">
    <h2 class="center">Vue.js</h2>

    <h3>Componentes</h3>
    <hr/>
    <p>
      Componente é algo que existe por si só ou em conjunto com outros componentes, em vue é uma instância reutilizável adicionada a root vue instance, a diferença entre uma instância de componente e a root é a propriedade “el” que indica a qual elemento do dom será renderizado o conteúdo do vue.
    </p>

    <p class="subtopic">Data</p>
    <p>São os atributos da instância do componente.</p>

    <IncrementButton/>
    <IncrementButton/>

    <p class="subtopic">Props</p>
    <p>
      É forma de passar os atributos do pai para os componentes filho. É “One-Way Data Flow”, ou seja, quando o atributo do pai é atualizado, a alteração flui para o filho, mas não o contrário.
    </p>

    <p class="note">
      * Alterações no data e props irão renderizar novamente a tela. O intuito deles é não precisar manipular o DOM diretamente, o Vue faz isso para nós.
    </p>

    <flat-button v-bind:decoration="buttonType"/>
    <flat-button :decoration="buttonType"/>
    <flat-button decoration="secondary"/>

    <p class="subtopic">Slot</p>
    <p>
      Útil para passar conteúdo para o filho sem prop, dentro da abertura e fechamento da tag.
    </p>

    <flat-button>Slot</flat-button>

    <p class="subtopic">Eventos</p>
    <div>
      <div class="zom-container">
        <zoom-button v-on:enlarge-text="fontSize += 0.1">+</zoom-button>
        <zoom-button v-on:enlarge-text="fontSize -= 0.1">-</zoom-button>
      </div>
      <p :style="`font-size: ${fontSize}rem`">
        Uma forma de fazer a comunicação de filho para pai é através de eventos. O pai pode registrar um listener de um evento que o filho emitir.
      </p>
    </div>

    <p><b>v-bind:</b> passar atributos dinâmicos para props.</p>
    <p><b>v-model:</b> passa o atributo como valor para um input e o atualizar automaticamente.</p>
    <p><b>v-on:</b> utilizar eventos padrões como click scroll keyup.enter</p>

    <p class="subtopic"> Condicionais e Loops</p>

    <p><b>v-if:</b> renderiza ou não o bloco.</p>
    <p><b>v-show:</b> sempre renderiza o bloco, mas esconde ou mostra com o css display.</p>
    <p><b>v-for:</b> renderiza uma lista de itens de um array ou propriedades de um objeto, é uma boa prática usar o atributo key para identificar os nós, assim o vue manterá a organização dos elementos corretamente.
    </p>

    <h3>Ciclo de Vida</h3>
    <hr/>
    <div class="lifecycle-container">
      <img src="https://br.vuejs.org/images/lifecycle.png"/>
    </div>

    <h3>Computed x Watch x Method</h3>
    <hr/>
    <p>
      <b>Method:</b>
      método que pode acessar e manipular data e acessar props do componente vue.
    </p>

    <p>
      <b>Computed: </b>
      para o template é como uma propriedade normal, faz sentido quando é necessário fazer alguma manipulação com uma propriedade ou mais, como por exemplo aplicar uma máscara. Por que usar? Computed props são mais rápidas, pois são armazenadas em cache e são atualizadas apenas quando suas dependências são alteradas, diferente de uma expressão inline ou method que seriam recalculados a cada render.
    </p>

    <p>
      <b>Watch:</b>
      método vinculado a uma prop que é chamado quando ocorre uma alteração da prop observada. Geralmente é mais indicado utilizar o computed para operações de alterar um valor quando outro é atualizado, mas em casos que é necessário um uso mais genérico o Vue oferece o watch, como por exemplo executar uma operação assíncrona para um API.
    </p>

    <input v-model="name"/>
    <p>{{ name }} é vencedor!</p>
    <p>{{ getGreeting() }}</p>
    <p>{{ greeting }}</p>

    <h3>Dojo</h3>
    <hr/>
    <p>
      Fazer um filtro para uma lista de usuários do github. Deve apresentar cards com o nome do usuário, imagem de perfil e link da página do github.
    </p>

    <p>
      <b>API:</b>
      GET
      https://api.github.com/users?per_page=100
    </p>
    <p>
      O projeto já possui o <a href="https://github.com/pagekit/vue-resource">vue-resource</a> para fazer requisições.
    </p>

    <p class="subtopic">Objetivos</p>
    <p>Exercitar a criação de componentes</p>
    <p>Usar corretamente props e datas</p>
    <p>Utilizar o clico de vida do vue</p>
    <p>Utilizar eventos</p>
    <p>Utilizar method, computed ou watch de acordo com a necessidade</p>
  </div>
</template>

<script>
import IncrementButton from '../shared/increment-button/IncrementButton.vue';
import FlatButton from '../shared/flat-button/FlatButton.vue';
import ZoomButton from '../shared/zoom-button/ZoomButton';

export default {
  components: {
    IncrementButton,
    FlatButton,
    ZoomButton
  },
  data() {
    return {
      buttonType: 'primary',
      name: '',
      fontSize: 1,
    };
  },
  beforeCreate() {
    console.warn("beforeCreate");
  },
  created() {
    console.warn("created");
  },
  beforeMount() {
    console.warn("beforeMount");
  },
  mounted() {
    console.warn("mounted");
  },
  beforeDestroy() {
    alert("destroyed");
    console.warn("beforeDestroy");
  },
  destroyed() {
    console.warn("destroyed");
  },
  methods: {
    getGreeting: function () {
      console.log("method");
      return `${this.name} é campeão!`;
    },
  },
  computed: {
    greeting() {
      console.log("computed");
      return `${this.name} é gênio!`;
    }
  },
}
</script>

<style lang="scss" scoped>
  .container {
    padding: 0 2rem;
    margin-bottom: 10rem;

    color: rgba(0, 0, 0, 0.87);
    font-size: 16px;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;

    h2 {
      text-align: center;
      font-size: 40px;
      font-weight: 400;
      line-height: 1.04;
      letter-spacing: 0em;
    }

    h3 {
      margin: 24px 0 16px;
      font-size: 30px;
      font-weight: 400;
      line-height: 1.04;
      letter-spacing: 0em;
    }

    .subtopic {
      font-size: 1.5rem;
      font-weight: 400;
      line-height: 1.33;
      letter-spacing: 0em;
    }

    .note {
      padding: 2px 0 0 8px;
      text-align: left;
      font-weight: 500;
      color: rgba(0, 0, 0, 0.54);
      font-size: 14px;
    }

    .lifecycle-container {
      padding: 1rem 10rem;
      img {
        width: 100%;
      }
    }
  }

  .zom-container {
    display: flex;
    justify-content: flex-end;
  }
</style>
