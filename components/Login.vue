<template>
  <div class="m-auto w-1/2 pt-24" :style="{'background-image': `url($require('@/assets/killerBee.jpeg'))`}">
    <label class="block text-2xl text-gray-700 text-sm font-bold mx-14 mt-8">
      Identification
    </label>
    <form class="bg-white rounded px-8 pt-6 pb-8 mb-4" @submit.prevent="logIn">
      <div class="mb-4">
        <label class="block text-black text-sm font-bold mb-2" for="email">
          Adresse mail
        </label>
        <input
          id="username"
          class="
            shadow
            appearance-none
            border
            rounded
            w-full
            py-2
            px-3
            text-gray-700
            leading-tight
            focus:outline-none focus:shadow-outline
          "
          type="email"
          placeholder="Email"
          required
          name="email"
        />
      </div>
      <div class="mb-6">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="password"
        >
          Mot de passe
        </label>
        <input
          id="password"
          class="
            shadow
            appearance-none
            border 
            rounded
            w-full
            py-2
            px-3
            text-gray-700
            mb-3
            leading-tight
            focus:outline-none focus:shadow-outline
          "
          type="password"
          placeholder="*******"
          name="password"
          required
        />
      </div>
      <div class="flex items-center">
        <button
          class="
            bg-black
            hover:bg-gray-700
            text-white
            font-bold
            py-2
            px-4
            rounded
            focus:outline-none focus:shadow-outline
          "
          type="submit"
        >
          S'identifier
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password:''
    }
  },
  methods: {
    async logIn() {
      try {
        const body = {
          email: this.email,
          Password: this.password
        }
        const config = {
          headers: {'Access-Control-Allow-Origin': '*'}
        }
        const request = await this.$axios.$post('http://localhost:4000/login',body, config)
        if(!request.email.includes('@')) {
          return 'Email must contain an @'
        } 
        const user = request.email

        this.$store.commit('changeEmail', user)
        this.$store.commit('setToken', request.access_token)
        this.$store.commit('toggle')

        this.$router.push('/home')

      } catch (error) {
        this.error = error
      }
    }
  }
}
</script>
