<script setup lang="ts">
  const profileStore = useProfileStore();
  const firstName = computed(() => profileStore.profile?.first_name || "Guest");
</script>

<template>
  <UPage>
    <div class="flex justify-between items-center mb-8">
      <div>
        <h1 class="text-2xl font-bold">
          Dashboard
        </h1>
        <p>Welcome back, {{ firstName }}</p>
      </div>
      <CurrentDateTime />
    </div>

    <h5 class="font-bold mb-4">
      Quick Actions
    </h5>
    <div class="grid grid-cols-3 gap-4">
      <ButtonQuickAction to="/patients/search">
        <template #icon>
          <UIcon name="i-lucide:search" class="w-6 h-6" />
        </template>
        <template #title>
          Find Patient Records
        </template>
      </ButtonQuickAction>
      <ButtonQuickAction to="/patients/register">
        <template #icon>
          <UIcon name="i-lucide:user-plus" class="w-6 h-6" />
        </template>
        <template #title>
          Register Patient
        </template>
      </ButtonQuickAction>
      <ButtonQuickAction to="/">
        <template #icon>
          <UIcon name="i-lucide:activity" class="w-6 h-6" />
        </template>
        <template #title>
          Capture Vitals
        </template>
      </ButtonQuickAction>
    </div>
  </UPage>
</template>

<style scoped lang="scss">

</style>