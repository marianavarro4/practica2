<template>
<div class="container">
    <h2 class="pb-2">
        Contacta amb els teus futus companys
    </h2>
    <p> En aquest formulari pots afegir el teu nom i el teu correu per contactar i que contactin amb tu els teus futurs companys. </p>

        
<!-- Formulario para añadir personas -->

        <section class="form">
            <form action="" class="text-center">
                <input v-model="nombre" @keyup.enter="crearPersona" type="text" class="form-control" placeholder="Nom i cognoms" style="margin-bottom: 20px">
                <input v-model="edad" @keyup.enter="crearPersona" type="text" name="correo" placeholder="Correu electrònic" class="form-control" style= "margin-bottom: 20px">
                
                <!-- Botón para añadir -->
                <input @click="crearPersona" type="button" value="Afegir" class="btn btn-success">
            </form>
        </section>
        
<!-- Tabla donde se muestran los datos -->
        <section class="data">
            <caption>Persones</caption>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Nom i cognoms</th>
                        <th scope="col">Correu electrònic</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(persona, index) in personas" :key="persona.id">
                        <td>
                            <span v-if="formActualizar && idActualizar == index">
                                
                                <!-- Formulario para actualizar -->
                                <input v-model="nombreActualizar" type="text" class="form-control">
                            </span>
                            <span v-else>
                                
                                <!-- Dato nombre -->
                                {{ persona.nombre }}
                            </span>
                        </td>
                        <td>
                            <span v-if="formActualizar && idActualizar == index">
                                
                                <!-- Formulario para actualizar -->
                                <input v-model="edadActualizar" type="text" class="form-control">
                            </span>
                            <span v-else>
                                <!-- Dato edad -->
                                {{ persona.edad }}
                            </span>
                        </td>
                        <td>
                            
                            <!-- Botón para guardar la información actualizada -->
                            <span v-if="formActualizar && idActualizar == index">
                                <button @click="guardarActualizacion(index)" class="btn btn-success">Guardar</button>
                            </span>
                            <span v-else>
                                
                                <!-- Botón para mostrar el formulario de actualizar -->
                                <button @click="verFormActualizar(index)" class="btn btn-warning" style="background-color: #830051!important; border-color:#830051; color: #ffffff" >Actualitzar</button>
                            </span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </section>
    </div>
</template>




    <script>
    export default {
        data() {
        return {
            // Input nombre
            nombre: '',
            // Input edad
            correo: '',
            // Ver o no ver el formulario de actualizar
            formActualizar: false,
            // La posición de tu lista donde te gustaría actualizar 
            idActualizar: -1,
            // Input nombre dentro del formulario de actualizar
            nombreActualizar: '',
            // Input edad dentro del formulario de actualizar
            edadActualizar: '',
            // Lista de personas
            personas: [] 
         }
    },
        methods: {
            crearPersona: function () {
                
                // Anyadimos a nuestra lista
                this.personas.push({
                    id: + new Date(),
                    nombre: this.nombre,
                    edad: this.edad
                });
                
                // Vaciamos el formulario de añadir
                this.nombre = '';
                this.edad = '';
            },
            verFormActualizar: function (persona_id) {
                
                // Antes de mostrar el formulario de actualizar, rellenamos sus campos
                this.idActualizar = persona_id;
                this.nombreActualizar = this.personas[persona_id].nombre;
                this.edadActualizar = this.personas[persona_id].edad;
                
                // Mostramos el formulario
                this.formActualizar = true;
            },
            guardarActualizacion: function (persona_id) {
                // Ocultamos nuestro formulario de actualizar
                this.formActualizar = false;

                // Actualizamos los datos
                this.personas[persona_id].nombre = this.nombreActualizar;
                this.personas[persona_id].edad = this.edadActualizar;
            }
        }

    }
</script>

<style>
    .container{
        margin-block-start: 100px;
        height: 81vh!important;
    }
</style>
