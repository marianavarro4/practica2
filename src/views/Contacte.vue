<template>
  <div class="formulari">
      <section>
      <h2>Contacta amb nosaltres</h2>
      </section>
        <small>Deixan's el teu nom, correu i la raó de contacte i t'enviarem un correu per parlar-n'hi!</small>
        <section class="part2">
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Correu electrònic:"
        label-for="input-1"
        description="El teu email no es farà públic."
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          placeholder="Escriu el teu correu electrònic"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Nom i cognom:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.name"
          placeholder="Escriu el teu nom"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Raó de contacte:" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="form.food"
          :options="foods"
          required
        ></b-form-select>
      </b-form-group>

      <b-button class="boto" type="submit" variant="primary">Enviar</b-button>
    </b-form>
    </section>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          email: '',
          name: '',
          food: null,
          checked: []
        },
        foods: [{ text: 'Selecciona una opció', value: null }, 'Dubte sobre la carrera', 'Aportació al Blog', 'Problema Tècnic', 'Altres'],
        show: true
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.food = null
        this.form.checked = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>

<style>
    .formulari{
        margin-block-start: 90px;
        margin-block-end:19%;
    }
    .part2{
        text-align: left!important;
        padding-left: 15px;
        padding-right: 15px;
        padding-top: 10px;
    }
    .boto{
        background-color: #830051!important;
        border-color: #830051!important;
        margin-top: 10px;
    }
    
</style>