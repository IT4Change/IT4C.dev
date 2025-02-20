<template>
  <form class="space-y-4" @submit.prevent="handleSubmit">
    <div>
      <input
          type="text"
          id="name"
          v-model="form.name"
          placeholder="Name"
          class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
      >
    </div>
    <div>
      <input
          type="email"
          id="email"
          v-model="form.email"
          placeholder="E-Mail"
          class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
      >
    </div>
    <div>
      <input
          type="tel"
          id="phone"
          v-model="form.phone"
          placeholder="Telefon"
          class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
      >
    </div>
    <div>
      <textarea
          id="message"
          v-model="form.message"
          rows="4"
          placeholder="Ihre Nachricht"
          class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
      ></textarea>
    </div>
    <div class="flex justify-end">
      <button
          type="submit"
          class="bg-green-700 text-white py-2 px-6 rounded-md hover:bg-green-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
      >
        Nachricht senden
      </button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

const form = reactive({
  name: '',
  email: '',
  phone: '',
  message: ''
})

const handleSubmit = () => {
  console.log('Form submitted:', form)
  // Add form submission logic here
}
</script>