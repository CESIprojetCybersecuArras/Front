<template>
    <div class="shadow-lg hover:shadow-xl grid grid-cols-1 sm:grid-cols-6 md:grid-cols-6 lg:grid-cols-6 xl:grid-cols-6 gap-4 bg-white mb-10 rounded-xl w-1/2">
        <div class="col-span-2 sm:col-span-1 xl:col-span-1 h-1/2 ">
          <img
            alt="..."
            src="~/assets/killerBee.jpeg"
            class=" h-15 w-15 rounded-xl  mx-auto"
          />
        </div>
        <div class="col-span-2 sm:col-span-4 xl:col-span-4 p-2">
          <h3 class="font-semibold text-black pb-1">Modèle : {{ name }}</h3>
          <p> <span class="font-semibold">Description : </span>
          {{ description }}
          </p>
          <p class="pt-15"> <span class="font-semibold">Gamme : </span>
          {{ gamme }}
          </p>
          <p> <span class="font-semibold">Puht : </span>
          {{ puht }}
          </p>
          <!-- <p v-for="ingredient in ingredients" :key="ingredient.id">
              {{ ingredient.name }}
          </p> -->
          <h3 class="font-semibold text-black pb-1">Ingrédients :</h3>
          <ol>
              <li> test </li>
              <li> test </li>
              <li> test </li>
              <li> test </li>
          </ol>
          <div class="flex w-full justify-evenly">
            <button class="mt-10 text-white font-bold bg-black py-3 rounded-md transition duration-300 p-2" @click="update">Modifier le modèle</button>
            <button class="mt-10 text-white font-bold bg-black py-3 rounded-md transition duration-300 p-2" @click="remove">Supprimer le modèle</button>
          </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            name: {
                type: String,
                required: false,
                default: () => 'undefined'
            },
            description: {
                type: String,
                required: true,
                default: () => 'adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
            },
            gamme: {
                type: String,
                required: true,
                default: () => 'undefined'
            },
            puht: {
                type: Number,
                required: true,
                default: () => 0
            },
            id: {
                type: Number,
                required: false,
                default: () => 1
            }
        },
        data: () => {
            return {
                modele: {
                    name: 'undefined',
                    desc: 'undefined'
                }
            }
        },
        methods: {
            async getFreezbeData() {
                try {
                    const FreezbeIngre = await this.$axios.$get('http://localhost:8000/ingredients/')
                    this.ingredients.push(FreezbeIngre)
                } catch (error) {
                    this.error = error
                }
            },
            remove() {
                this.$parent.removeFreezbe(this.id)
            },
            update() {
                this.$router.push('EditFreezbeForm')
            }
        }
    }
</script>