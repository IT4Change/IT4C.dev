<template>
  <footer class="bg-[#22596c] text-white py-8">
    <div class="content-width mx-auto px-4 md:px-6">
      <div class="flex flex-col md:flex-row justify-between items-center">
        <div class="mb-4 md:mb-0">
          <p class="text-sm">
            &copy; {{ currentYear }} CC BY IT4C.dev & Autoren
          </p>
        </div>
        <div class="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
          <a
            href="/impressum.html"
            class="!text-white hover:!text-gray-300 hover:!underline text-sm transition-colors"
          >
            Impressum
          </a>
          <a
            href="https://github.com/IT4Change"
            target="_blank"
            rel="noopener noreferrer"
            class="!text-white hover:!text-gray-300 hover:!underline flex items-center gap-2 text-sm transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-github"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
            GitHub
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterSection',
  computed: {
    currentYear() {
      return new Date().getFullYear();
    }
  }
}
</script>