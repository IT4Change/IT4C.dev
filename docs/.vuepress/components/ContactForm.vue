<template>
  <form class="space-y-4" @submit.prevent="handleSubmit">
    <div v-if="submitSuccess" class="p-3 bg-green-100 text-green-700 rounded-md mb-4">
      Deine Nachricht wurde erfolgreich gesendet. Vielen Dank!
    </div>

    <div v-if="submitError" class="p-3 bg-red-100 text-red-700 rounded-md mb-4">
      {{ submitError }}
    </div>

    <div>
      <input
          type="text"
          id="name"
          v-model="form.name"
          placeholder="Name"
          required
          minlength="2"
          maxlength="35"
          class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
      >
    </div>
    <div>
      <input
          type="email"
          id="email"
          v-model="form.email"
          placeholder="E-Mail"
          required
          class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
      >
    </div>
    <div>
      <input
          type="tel"
          id="phone"
          v-model="form.phone"
          placeholder="Telefon"
          minlength="8"
          class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
      >
    </div>
    <div>
      <textarea
          id="message"
          v-model="form.message"
          rows="4"
          placeholder="Ihre Nachricht"
          required
          minlength="5"
          class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
      ></textarea>
    </div>
    <div class="flex justify-end">
      <button
          type="submit"
          :disabled="isSubmitting"
          class="bg-green-700 text-white py-2 px-6 rounded-md hover:bg-green-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:bg-green-300 disabled:cursor-not-allowed"
      >
        <span v-if="isSubmitting">Wird gesendet...</span>
        <span v-else>Nachricht senden</span>
      </button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'

const form = reactive({
  name: '',
  email: '',
  phone: '',
  message: ''
})

const isSubmitting = ref(false)
const submitSuccess = ref(false)
const submitError = ref('')

const handleSubmit = async () => {
  try {
    isSubmitting.value = true
    submitError.value = ''

    const response = await fetch('/mail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        telephone: form.phone || undefined, // Send undefined if empty to match optional schema
        text: form.message
      })
    })

    const result = await response.json()

    if (!response.ok) {
      throw new Error(result.error || 'Fehler beim Senden der Nachricht')
    }

    // Clear form on success
    form.name = ''
    form.email = ''
    form.phone = ''
    form.message = ''

    submitSuccess.value = true
    setTimeout(() => {
      submitSuccess.value = false
    }, 5000) // Hide success message after 5 seconds

  } catch (error) {
    submitError.value = error instanceof Error ? error.message : 'Ein unbekannter Fehler ist aufgetreten'
  } finally {
    isSubmitting.value = false
  }
}
</script>