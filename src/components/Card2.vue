<template>
  <div>
      <b-card
        :title="titulo"
        :img-src="srcimg"
        :img-alt="alt"
        img-top
        :footer="autor"
        tag="proyecto"
        style="max-width: 20rem;"
        class="mb-2"
      >
      
        <!--
      <b-link to="/">
      <h4> titulo {{titulo}} kk</h4>
        </b-link>
        -->

        <b-card-text>
          {{texto}}
        </b-card-text>

        <b-button class="boto"
          v-b-tooltip.hover
          title="Ir a la página del proyecto"
          variant="primary"
          :href="url"
          >Visitar pàgina oficial</b-button>

      </b-card>

      
  </div>
</template>

<script>
export default {
  props: ["id", "autor", "titulo", "srcimg", "alt", "texto", "url"]
};
</script>

<style>
.boto{
  background-color: #830051!important;
  border-color: #830051!important;
}
</style>