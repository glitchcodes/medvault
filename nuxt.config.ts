import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxt/test-utils',
    'nuxt-vuefire',
  ],
  vite: {
    plugins: [
      tailwindcss()
    ]
  },

  ssr: false,
  css: [
    '~/assets/css/index.css',
    '~/assets/scss/main.scss',
  ],

  vuefire: {
    config: {
      apiKey: "AIzaSyACFpZtlOcsgAEs_YAKcn5y-CfEYMBrGqI",
      authDomain: "patient-sync-19e6a.firebaseapp.com",
      appId: "1:515560366206:web:d56b9ebcf27a674143382f",
      projectId: "patient-sync-19e6a",
      storageBucket: "patient-sync-19e6a.firebasestorage.app",
      messagingSenderId: "515560366206",
      measurementId: "G-W5FT5V2QH2"
    },
    auth: {
      enabled: true
    }
  }
})