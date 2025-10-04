<script setup lang="ts">
  import { platform } from "@tauri-apps/plugin-os"

  const currentPlatform = platform();
  // const user = await getCurrentUser();
  // const { fetchProfile } = useProfileStore();

  // onMounted(async () => {
  //   if (user) {
  //     await fetchProfile();
  //   }
  // })

  useHead({
    bodyAttrs: {
      class: 'overflow-hidden'
    }
  })
</script>

<template>
  <main @contextmenu.prevent>
    <WindowTitlebar v-if="currentPlatform === 'windows'" />
    <div class="mt-[56px] overflow-auto" style="height: calc(100vh - 56px)">
      <NuxtRouteAnnouncer />

      <UContainer class="py-4 sm:py-6 lg:py-8">
        <NuxtPage />
      </UContainer>

<!--      <UNotifications />-->
    </div>
  </main>
</template>