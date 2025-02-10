<template>
  <form class="space-y-4" @submit.prevent="handleSubmit">
    <div>
      <label class="block text-gray-700 mb-2" for="name">Name</label>
      <input type="text" id="name" v-model="form.name" class="w-full p-2 border rounded">
    </div>
    <div>
      <label class="block text-gray-700 mb-2" for="email">E-Mail</label>
      <input type="email" id="email" v-model="form.email" class="w-full p-2 border rounded">
    </div>
    <div>
      <label class="block text-gray-700 mb-2" for="phone">Telefon</label>
      <input type="tel" id="phone" v-model="form.phone" class="w-full p-2 border rounded">
    </div>
    <div>
      <label class="block text-gray-700 mb-2" for="message">Nachricht</label>
      <textarea id="message" v-model="form.message" rows="4" class="w-full p-2 border rounded"></textarea>
    </div>
    <button type="submit" class="w-full bg-green-700 text-white py-2 px-4 rounded hover:bg-green-600">
      Nachricht senden
    </button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        phone: '',
        message: ''
      }
    }
  },
  methods: {
    handleSubmit() {
      console.log('Form submitted:', this.form)
      // Add form submission logic here
    }
  }
}
</script>
