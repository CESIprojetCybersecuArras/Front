<template>
  <div id="menu"  class="grid mx-auto px-4 pt-12 w-auto h-full">
      <!-- <div v-for="ingredient in ingredientsList" :key="ingredient.id" class="flex flex-wrap mt-12 justify-center">
          <IngredientCard :name="ingredient.name" :description="ingredient.description" />
      </div> -->
      <div class="grid w-full place-items-center content-center items-center">
        <h1 class="w-auto text-4xl pb-10 font-bold h-10vh">Gestion des Ingrédients</h1>
        <button class="mb-10 text-white font-bold bg-black py-3 rounded-md transition duration-300 self-end p-2" @click="addIngredient">Ajouter un ingrédient</button>  
      </div>
      <div class="grid place-items-center content-center items-center">
          <IngredientCard />
          <IngredientCard />
      </div>
  </div>
</template>

<script>
    export default {
        middleware: ['auth'],
        // async asyncData({ $axios}, callback) {
        //     await $axios.$get('http://localhost:8000/getAllIngredients').then((res)=> {
        //         callback(null, {ingredientsList: res})
        //     })
        // },
        data() {
            return {
                ingredientsList: []
            }
        },
        methods: {
            async getIngredientsList() {
                try {
                    const ingredients = await this.$axios.$get('http://localhost:8000/ingredients')
                    this.ingredientsList = ingredients
                } catch (error) {
                    this.error = error
                }
            },
            async removeIngredient(el) {
                try {
                    const body = {id: el}
                    await this.$axios.$delete('http://localhost:8000/removeIngredient', body)
                    await this.getIngredientsList()
                } catch (error) {
                    this.error = error
                }
            },
            addIngredient() {
              this.$router.push('AddIngredient')
            }          
        }
    }
</script>