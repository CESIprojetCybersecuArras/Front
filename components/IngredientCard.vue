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
          <h3 class="font-semibold text-black pb-1">Ingrédient : {{ name }}</h3>
          <p> <span class="font-semibold">Description : </span>
          {{ description }}
          </p>
          <div class="flex w-full justify-evenly">
            <button class="mt-10 text-white font-bold bg-black py-3 rounded-md transition duration-300 p-2" @click="update">Modifier l'ingrédient</button>
            <button class="mt-10 text-white font-bold bg-black py-3 rounded-md transition duration-300 p-2" @click="remove">Supprimer l'ingrédient</button>
          </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            name: {
                type: String,
                required: true,
                default: () => 'undefined'
            },
            description: {
                type: String,
                required: true,
                default: () => 'undefined'
            },
            id: {
                type: Number,
                required: false,
                default: () => 1
            },
        },
        methods: {
            remove(){
                this.$parent.removeIngredient(this.id)
            },
            update() {
                this.$router.push('EditIngredient')
            }
        }
    }
</script>