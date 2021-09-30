<template>
  <div id="menu" class="grid mx-auto px-4 pt-12 w-auto h-full">
      <!-- <div v-for="procede in ProcedesList" :key="procede.id" class="flex flex-wrap mt-12 justify-center">
          <ProcedeCard :name="procede.name" :description="procede.description" :freezbe-id="procede.id"/>
      </div> -->
      <div class="grid w-full place-items-center content-center items-center">
        <h1 class="w-auto text-4xl pb-10 font-bold h-10vh">Gestion des procédés</h1>
        <button class="mb-10 text-white font-bold bg-black py-3 rounded-md transition duration-300 self-end p-2" @click="addProcede">Ajouter un procédé</button> 
      </div>
      <div class="grid place-items-center content-center items-center">
          <ProcedeCard />
          <ProcedeCard />
      </div>    
  </div>
</template>

<script>
    export default {
        middleware: ['auth'],
        // async asyncData({$axios}, callback){
        //   await $axios.$get('http://localhost:8000/getAllProcedes').then((res) => {
        //     callback(null, {ModelesList: res})
        //   })
        // },
        data() {
            return {
                ProcedesList: []
            }
        },
        methods: {
            async getProcedesList() {
                try {
                    const procedesList = await this.$axios.$get('http://localhost:8000/procedes')
                    this.procedesList = procedesList
                } catch (error) {
                    this.error = error
                }
            },
            async removeProcede(el) {
                try {
                    const body = {id: el}
                    await this.$axios.$delete('http://localhost:8000/removeProcede', body)
                    await this.getProcedesList()
                } catch (error) {
                    this.error = error
                }
            },
            addProcede() {
              this.$router.push('AddProcede')
            }
        }
    }
</script>