<script setup lang="ts">
  import type { DropdownMenuItem } from "@nuxt/ui";

  const auth = useFirebaseAuth();
  const authenticatedUser = useCurrentUser()!;

  const profileStore = useProfileStore();

  // const items = [
  //   authenticatedUser.value ? [{
  //     label: authenticatedUser.value.email as string,
  //     slot: 'account',
  //     disabled: true
  //   }] : [],
  //   [{
  //     label: 'Settings',
  //     icon: 'i-heroicons-cog-8-tooth'
  //   }, {
  //     label: 'Sign out',
  //     icon: 'i-heroicons-arrow-left-on-rectangle',
  //     click: () => {
  //       auth?.signOut()
  //       navigateTo('/login');
  //     }
  //   }],
  // ];
  const items = ref<DropdownMenuItem[]>([
    authenticatedUser.value ? [{
      slot: 'account' as const,
      disabled: true
    }] : [],
    [{
      label: 'Settings',
      icon: 'i-heroicons-cog-8-tooth'
    }],
    [{
      label: 'Sign out',
      icon: 'i-heroicons-arrow-left-on-rectangle',
      onSelect: () => {
        auth!.signOut();
        navigateTo('/login');
      }
    }]
  ]);
</script>

<template>
  <UDropdownMenu :items="items">
    <UButton
      :label="profileStore.full_name"
      :avatar="{
        src: profileStore.avatar_url
      }"
      color="info"
      variant="soft"
    >
      <template v-if="!profileStore.full_name" #leading>
        <USkeleton class="h-6 w-6 rounded-full" />
      </template>

      <!-- Skeleton label when loading -->
      <template v-if="!profileStore.full_name" #default>
        <USkeleton class="h-4 w-20 rounded" />
      </template>
    </UButton>

    <template #account-label>
      <div class="text-left">
        <p>
          Signed in as
        </p>
        <p class="truncate font-medium text-gray-900 dark:text-white">
          {{ authenticatedUser!.email }}
        </p>
      </div>
    </template>
  </UDropdownMenu>
</template>

<style scoped lang="scss">

</style>