<template>
    <div class="min-h-screen flex items-center">
        <div class="container mx-auto max-w-md shadow-md hover:shadow-lg transition duration-300">
            <div class="py-12 p-10 bg-white rounded-xl">
                <div class="mb-6">
                    <label class="mr-4 text-gray-700 font-bold inline-block mb-2" for="name">Nom</label>
                    <input v-model="Nom" type="text" class="border bg-gray-100 py-2 px-4 w-96 outline-none focus:ring-2 focus:ring-indigo-400 rounded" placeholder="Nom" />
                </div>
                <div class="mb-6">
                    <label class="mr-4 text-gray-700 font-bold inline-block mb-2" for="name">Gamme</label>
                    <input v-model="Gamme" type="text" class="border bg-gray-100 py-2 px-4 w-96 outline-none focus:ring-2 focus:ring-indigo-400 rounded" placeholder="Gamme" />
                </div>
                <div class="mb-6">
                    <label class="mr-4 text-gray-700 font-bold inline-block mb-2" for="name">Description</label>
                    <input v-model="Description" type="text" class="border bg-gray-100 py-2 px-4 w-96 outline-none focus:ring-2 focus:ring-indigo-400 rounded" placeholder="Description" />
                </div>
                <div class="mb-6">
                    <label class="mr-4 text-gray-700 font-bold inline-block mb-2" for="name">Ingrédients</label>
                    <!-- <input v-model="Ingredients" type="text" class="border bg-gray-100 py-2 px-4 w-96 outline-none focus:ring-2 focus:ring-indigo-400 rounded" placeholder="Ingrédients" /> -->
                    <ul v-for="ingr in Ingredients" :key="ingr.id" class="divide-y divide-gray-300" @click="selected(ingr.nom)">
                        <li class="p-4 hover:bg-gray-50 cursor-pointer">{{ ingr.nom }}</li>  
                    </ul>    
                </div>
                <button class="w-full mt-6 text-white font-bold bg-black hover:bg-gray-700 py-3 rounded-md transition duration-300" @click="goBack">Ajouter un modèle</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
        // async asyncData({$axios}, callback){
        //   await $axios.$get('http://localhost:8000/getAllIngredients').then((res) => {
        //     callback(null, {Ingredients: res})
        //   })
        // },
    data: () => {   
        return {
            Nom: null,
            Gamme: null,
            Description: null,
            Ingredients: [],
            Puht: null,
            ingrToAdd: [],
            active: false
        }

    },
    methods: {
        async Submit() {
            const body = {
                Nom: this.Nom,
                Gamme: this.Gamme,
                Description: this.Description,
                Puht: this.Puht,
                ingredients: this.ingrToAdd
            }
            const request = await this.$axios.$post('http://localhost:8000/createModele', body)
            return request
        },
        goBack() {
            this.$router.back()
        },
        selected(item) {
            this.ingrToAdd.push(item)
        }
    },
}
</script>
