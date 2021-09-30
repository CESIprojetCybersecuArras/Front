<template>
<div class="flex flex-wrap">
  <div class="grid w-full place-items-center content-center items-center">
  <h1 class="w-auto text-4xl pt-10 font-bold h-10vh">killerBee ERP </h1> 
  </div>
  <div class="flex flex-wrap bg-white-500 w-full h-full items-center">
    <div v-for="page in pages" :key="page.id" class="flex flex-wrap w-1/3 justify-center">
      <Card :name="page.name" :description="page.description" />
    </div>
  </div>
</div>
</template>

<script>
  export default {
    middleware: ['auth'],
    data() {
      return {
        pages: [
          {
            id:1,
            name: 'Freezbe',
            description: 'Accès à la page pour consulter, modifier ou faire tout autre action sur la liste des modèles de freezbes.'
          },
          {
            id:2,
            name: 'Ingredients',
            description: 'Accès à la page pour consulter, modifier ou faire tout autre action sur la liste des modèles de ingrédients.'
          },
          {
            id: 3,
            name: 'Procedes',
            description: 'Accès à la page pour consulter, modifier ou faire tout autre action sur la liste des modèles de procédés.'
          }
        ]
      }
    }
  }
</script>