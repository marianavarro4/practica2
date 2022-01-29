<template>
  <div class="recursos">

    <h1 class="pb-2">
      Recursos Interns de la UdL
     </h1>  
      <p> En aquesta pàgina trobaràs recursos interns de la <strong>UdL</strong> que facilitaran la teva vida com a estudiant universitari. 
        </p>


        <!-- <div aling-v="center"> -->
      <div class="container-md">
          <b-card-group columns>
            <div columns v-for="proyecto in proyectos" :key="proyecto.id">
             <Card2 :autor="proyecto.autor" :srcimg="proyecto.srcimg" :alt="proyecto.alt" :titulo="proyecto.titulo" :texto="proyecto.texto" :url="proyecto.url"></Card2> 
            </div>
           </b-card-group>
       </div>
 </div>

</template>

<script>
import Card2 from '../components/Card2.vue' 
const lstProysJson = '../RecursosUdL.json';

export default {
  props: {  
   name: {
      type: String,
      default: 'InternsUdL'
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
    methods: {
        async fetchData() {
          const res = await fetch (lstProysJson);
          const val= await res.json();
          this.proyectos=val;
          console.log(val);
        }
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