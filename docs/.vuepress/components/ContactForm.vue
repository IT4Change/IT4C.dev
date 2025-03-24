<template>
  <p class="text-gray-600 dark:text-gray-300 mb-8">
    Wir freuen uns auf deine Nachricht. Als Ansprechpartner steht dir
    <strong>Ulf Gebhardt</strong> für deine Fragen gerne zur Verfügung.
  </p>

  <div class="grid grid-cols-1 md:grid-cols-5 gap-8">
    <!-- Left side: Portrait - takes 2/5 of space -->
    <div
      class="flex flex-col items-center md:items-end md:self-start md:col-span-2 md:sticky md:top-8"
    >
      <img
        src="/images/portrait/ulf-gebhardt.jpg"
        alt="Ulf Gebhardt"
        class="rounded-lg shadow-md w-75 h-auto mb-6"
      />
    </div>

    <!-- Right side: Contact form - takes 3/5 of space -->
    <div class="md:col-span-3">
      <h3 class="mb-4">Telefon</h3>
      <div class="flex-col gap-2 mb-8">
        <p class="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="phone-number h-5 w-5 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
          <a href="tel:+4915784841600" class="phone-number hover:!underline">+49 15784841600</a>
        </p>
      </div>

      <h3 class="mb-4">Nachricht</h3>
      <form @submit.prevent="handleSubmit">
        <div v-if="submitSuccess" class="my-4 p-3 bg-green-100 text-green-700 rounded-md mb-4">
          Deine Nachricht wurde erfolgreich gesendet. Vielen Dank!
        </div>

        <div v-if="submitError" class="my-4 p-3 bg-red-100 text-red-700 rounded-md mb-4">
          {{ submitError }}
        </div>

        <div class="my-4">
          <input
            id="name"
            v-model="form.name"
            type="text"
            placeholder="Name"
            required
            minlength="2"
            maxlength="35"
            class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:highlight focus:border-transparent"
          />
        </div>
        <div class="my-4">
          <input
            id="email"
            v-model="form.email"
            type="email"
            placeholder="E-Mail"
            required
            class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:highlight focus:border-transparent"
          />
        </div>
        <div class="my-4">
          <input
            id="phone"
            v-model="form.phone"
            type="tel"
            placeholder="Telefon"
            minlength="8"
            class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:highlight focus:border-transparent"
          />
        </div>
        <div class="my-4">
          <textarea
            id="message"
            v-model="form.message"
            rows="4"
            placeholder="Deine Nachricht"
            required
            minlength="5"
            class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:highlight focus:border-transparent"
          />
        </div>
        <div class="my-4 flex justify-end">
          <button
            type="submit"
            :disabled="isSubmitting"
            class="text-white py-2 px-6 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:highlight focus:ring-offset-2"
          >
            <span v-if="isSubmitting">Wird gesendet...</span>
            <span v-else>Nachricht senden</span>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'

const form = reactive({
  name: '',
  email: '',
  phone: '',
  message: '',
})

const isSubmitting = ref(false)
const submitSuccess = ref(false)
const submitError = ref('')

const handleSubmit = async () => {
  try {
    isSubmitting.value = true
    submitError.value = ''

    const response = await fetch('/api/mail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        telephone: form.phone || undefined, // Send undefined if empty to match optional schema
        text: form.message,
      }),
    })

    if (response.status !== 200) {
      throw new Error('Bei der Kommunikation mit dem Server ist ein Fehler aufgetreten.')
    }
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
    submitError.value =
      error instanceof Error ? error.message : 'Ein unbekannter Fehler ist aufgetreten'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style>
.phone-number {
  color: var(--highlight-color);
}
.focus\:highlight:focus {
  --tw-ring-color: var(--highlight-color);
}
button {
  background-color: var(--highlight-color);
  &:hover {
    background-color: color-mix(in srgb, var(--highlight-color), black 15%);
  }
}
</style>
