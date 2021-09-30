<template>
  <div class=" bg-white shadow-lg rounded-lg hover:shadow-xl transition duration-200 w-4/5 h-1/2">
    <img class="rounded-t-lg h-1/2" src="../assets/killerBee.jpeg" alt="" />
    <div class="py-4 px-8 grid flex-wrap justify-items-center content-center">
      <h1 class="hover:cursor-pointer mt-2 text-gray-900 font-bold text-2xl tracking-tight">Gestion des {{ name }}</h1>
      <p class="hover:cursor-pointer py-3 text-gray-600 leading-6 text-center"> {{description}} </p>
      <div class="text-white bg-black rounded-lg  p-2 content-center w-1/2 text-center" @click="$router.push({name: name})">Consulter</div>
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
            }
        },
    }
</script>