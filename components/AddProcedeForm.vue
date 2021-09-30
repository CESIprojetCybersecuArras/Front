<template>
    <div class="min-h-screen flex items-center">
        <div class="container mx-auto max-w-md shadow-md hover:shadow-lg transition duration-300">
            <div class="py-12 p-10 bg-white rounded-xl">
                <div class="mb-6">
                    <label class="mr-4 text-gray-700 font-bold inline-block mb-2" for="name">Nom</label>
                    <input v-model="Nom" type="text" class="border bg-gray-100 py-2 px-4 w-96 outline-none focus:ring-2 focus:ring-indigo-400 rounded" placeholder="Nom" />
                </div>
                <div class="mb-6">
                    <label class="mr-4 text-gray-700 font-bold inline-block mb-2" for="name">Modèle freezbe</label>
                    <input v-model="Modele" type="text" class="border bg-gray-100 py-2 px-4 w-96 outline-none focus:ring-2 focus:ring-indigo-400 rounded" placeholder="Modele" />
                </div>
                <div class="mb-6">
                    <label class="mr-4 text-gray-700 font-bold inline-block mb-2" for="name">Description</label>
                    <input v-model="Description" type="text" class="border bg-gray-100 py-2 px-4 w-96 outline-none focus:ring-2 focus:ring-indigo-400 rounded" placeholder="Descripton" />
                </div>
                <div class="mb-6">
                    <label class="mr-4 text-gray-700 font-bold inline-block mb-2" for="name">Etapes et descriptions validations tests</label>
                    <input v-model="Etapes" type="text" class="border bg-gray-100 py-2 px-4 w-96 outline-none focus:ring-2 focus:ring-indigo-400 rounded" placeholder="étapes" />
                </div>
                <button class="w-full mt-6 text-white font-bold bg-black hover:bg-gray-700 py-3 rounded-md transition duration-300" @click="goBack">Ajouter un procédé</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            Nom: 'undefined',
            Description: '',
            Modele: '',
            Etapes: ''
        }
    },
    methods: {
        async Submit() {
            const body = {
                Nom: this.Nom,
                Modele: this.Modele,
                Etapes: this.Etapes,
                Description: this.Description
            }
            const request = await this.$axios.$post('http://localhost:8000/createProcede',body)
            return request
        },
        goBack() {
            this.$router.back()
        }
    }
}
</script>