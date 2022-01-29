<template>
  <div id="app">
    <div class="container-fluid">
      <Menu /> <!-- se añade el menú -->
      <router-view/>
    </div>
    <div>
      <Footer/>
    </div>
  </div>
</template>

<script>
import Menu from './components/Menu'
import Footer from './components/Footer.vue'
export default {
  name: "app",
  components: {
      Menu,
      Footer
  }
}
</script>


<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

#nav a {
  font-weight: bold;
  color: #ffffff;
}

</style>
