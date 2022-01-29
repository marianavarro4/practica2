<template>
  <div class="recursos">

    <h1 class="pb-2">
      Recursos externs a la UdL
     </h1>  
      <p> En aquesta pàgina trobaràs recursos <strong>externs</strong> a la UdL que facilitaran la teva vida com a estudiant universitari.
        </p>
        <!-- <div aling-v="center"> -->
      <div class="container-md">
          <b-card-group columns>
            <div columns v-for="proyecto in proyectos" :key="proyecto.id">
             <Card2 :autor="proyecto.autor" :srcimg="proyecto.srcimg" :alt="proyecto.alt" :titulo="proyecto.titulo" :texto="proyecto.texto" :url="proyecto.url"></Card2> 
            </div>
           </b-card-group>
       </div>

<!--
    <b-container class="bv-example-row">
      <b-row aling-v="center">
      <b-col v-for="proyecto in proyectos" :key="proyecto.id">
        <Card2 :img-src="proyecto.imagen" :img-alt="proyecto.alt" :title="proyecto.titulo" :texto="proyecto.texto" :url="proyecto.url"></Card2> 
      </b-col>
     </b-row>
    </b-container>
-->
 </div>

</template>

<script>
import Card2 from '../components/Card2.vue' 
//(para utilizar en localhos)
//const lstProysJson = '/public/../proyectosWD2021.json';
//para utilizar en produccion
const lstProysJson = '../RecursosExterns.json';

export default {
  props: {  
   name: {
      type: String,
      default: 'ExternsUdL'
    }
  },
  components: {
        Card2
      },
  data() {
      return {
        proyectos:[],
        githubPage: 1,
        page: 1,
        loading: false,
        perPage: 5
      }
    },
    mounted() {
      this.fetchData()
    },
    /*
    computed: {
      showRepos() {
        let start = (this.page - 1) * this.perPage;
        let end = start + this.perPage;
        return this.repositories.slice(start, end);
      },
      lastPage() {
        let length = this.repositories.length;
        return length / this.perPage;
      }
    },*/
    methods: {
        async fetchData() {
          const res = await fetch (lstProysJson);
          const val= await res.json();
          this.proyectos=val;
          console.log(val);
        }
      /*
      fetchData() {
        this.loading = true;
        axios.get(lstProysJson + this.githubPage)
          .then(({data}) => {
            this.repositories = this.repositories.concat(data.items);
            this.loading = false;
          })
          .catch((err) => {
            throw err;
          })
      },
      prevPage() {
        this.page--;
        window.scrollTo({top: 0, behavior: 'smooth'});
      },
      nextPage() {
        if (this.page == this.lastPage - 1) {
          this.githubPage++;
          this.fetchData();
        }
        this.page++;
        window.scrollTo({top: 0, behavior: 'smooth'});
      }
      */
    }
  }
</script>

<style>
.recursos{
  margin-block-start: 80px;
  margin-block-end:10px;
}
  h1 {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
</style>