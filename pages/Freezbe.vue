<template>
  <div id="menu" class="grid mx-auto px-4 pt-12 w-auto h-full">
      <!-- <div v-for="modele in ModelesList" :key="modele.id" class="flex flex-wrap mt-12 justify-center">
        <FreezbeCard :name="modele.name" :description="modele.description" :gamme="modele.gamme" :puht="modele.puht " />
      </div> -->
      <div class="grid w-full place-items-center content-center items-center">
        <h1 class="w-auto text-4xl pb-10 font-bold h-10vh">Gestion des Freezbes</h1>
        <button class="mb-10 text-white font-bold bg-black py-3 rounded-md transition duration-300 self-end p-2" @click="addFreezbe">Ajouter un modèle de freezbe</button>  
      </div>
      <div class="grid place-items-center content-center items-center">
        
        <FreezbeCard :name="test.name" :description="test.description" :puht="1" :gamme="test.Gamme" />
        <FreezbeCard :name="test.name" :description="test.description" :puht="1" :gamme="test.Gamme" />
      </div>
  </div>
</template>

<script>
import FreezbeCard from '../components/FreezbeCard.vue'
    export default {
  components: { FreezbeCard },
        middleware: ['auth'],
        async asyncData({$axios}, callback){
          await $axios.$get('http://localhost:4000/freezbes').then((res) => {
            callback(null, {ModelesList: res})
          })
        },
        data() {
            return {
                ModelesList: [],
                test: {
                  name:'Nom de modèle de Freezbe',
                  description: 'consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                  Gamme: 'Stylé',
                  Puht: 3
                }
            }
        },
        methods: {
            async getModelesList() {
                try {
                    const Modeles = await this.$axios.$get('http://localhost:8000/modeles')
                    this.ModelesList = Modeles
                } catch (error) {
                    this.error = error
                }
            },
            async removeFreezbe(el) {
                try {
                    const body = {id: el}
                    await this.$axios.$delete('http://localhost:8000/removeModele', body)
                    await this.ModelesList()
                } catch (error) {
                    this.error = error
                }
            },
            async updateFreezbe(Id, edit) {
              try {
                const body = {
                  id: Id,
                  body: {...edit}
                }
                await this.$axios.$delete('http://localhost:8000/updateFreezbe',body)
              } catch (error) {
                this.error = error
              }
            },
            addFreezbe() {
              this.$router.push('AddFreezbe')
            }
        }
    }
</script>