<script setup lang="ts">
  import { getCurrentWindow } from "@tauri-apps/api/window";

  const appWindow = getCurrentWindow();
  const isMaximized = ref(false);

  isMaximized.value = await appWindow.isMaximized();

  const unlisten = await appWindow.onResized(async () => {
    // Update isMaximized state
    isMaximized.value = await appWindow.isMaximized();
  })

  onUnmounted(() => {
    unlisten()
  });
</script>

<template>
  <div data-tauri-drag-region class="bg-black/50 fixed flex justify-between items-center w-full min-h-[56px] top-0 left-0 z-50 pl-4 sm:pl-6 lg:pl-8 select-none fixed">
    <div class="flex flex-1 items-center gap-2" data-tauri-drag-region>
      <!-- Title -->
      <p class="text-white">
        MedVault
      </p>
      <!-- END Title -->

      <!-- Navigation -->

      <!-- END Navigation -->
    </div>

    <!-- Account Menu -->
<!--    <AccountMenu v-if="user" class="mr-4 p-2" />-->

    <UButton to="/login" color="info" variant="soft">
      Sign In
    </UButton>
    <!-- END Account Menu -->

    <div class="flex self-stretch">
      <div class="titlebar-button" @click="appWindow.minimize()">
        <UIcon name="i-lucide:minus" />
      </div>

      <div class="titlebar-button" @click="appWindow.toggleMaximize()">
        <UIcon v-if="isMaximized" name="i-lucide:minimize-2" />
        <UIcon v-else name="i-lucide:maximize" />
      </div>

      <div class="titlebar-button hover:!bg-[#e06c75]" @click="appWindow.close()">
        <UIcon name="i-lucide:x" />
      </div>
    </div>
  </div>
</template>

<style scoped>
  .titlebar-button {
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: stretch;
    color: white;
    padding: 1rem;
    cursor: pointer;
    &:last-child {
      border-top-right-radius: 4px;
    }
  }

  .titlebar-button:hover {
    background: #303030;
  }
</style>