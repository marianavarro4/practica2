<template>
<div class="m1">
  <b-navbar class="menu1" toggleable="lg" type="dark" variant="primary">
    <b-navbar-brand class="titol" href="App.vue">GDDTC</b-navbar-brand>
    <b-navbar-toggle class="menu2" target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item class="nav-link" to="/elGrau">El Grau</b-nav-item>
          <b-nav-item class="nav-link" to="/blog">Blog</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-right">
        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <em>Recursos</em>
          </template>
          <b-dropdown-item to="/internsUdL">Interns UdL</b-dropdown-item>
          <b-dropdown-item to="/externsUdL">Externs UdL</b-dropdown-item>
        </b-nav-item-dropdown>
        </b-navbar-nav>
        <b-navbar-nav>
        <b-nav-item to="/futursEstudiants">Futurs Estudiants</b-nav-item>
        <b-nav-item to="/contacte">Contacte</b-nav-item>
        </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>


<script>
export default {
}
</script>


<style>

/*.router-link-exact-active, .router-link-active {
};*/
.m1 .navbar {
    top: 0;
    width: 100%;
    left: 0;
    position: fixed;
    z-index: 99;
}

.headerbar {
    margin-top: -28px;
}

.menu1{
  background-color: #830051!important;
  padding-left: 12%;
  padding-right: 3%;
};

.navbar{
    background-color: black;
};

.lg {
    align-content: right;
};

.bg-primary {
    background-color: #000000!important;
};

.navbar-expand-lg .navbar-collapse {
    display: flex!important;
    /* flex-basis: auto; */
    align-items: center;
    justify-content: flex-end!important;
}

</style>