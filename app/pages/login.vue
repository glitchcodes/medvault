<script setup lang="ts">
  import * as z from "zod";
  import type { FormSubmitEvent } from "@nuxt/ui";

  const authSchema = z.object({
    email: z.string(),
    password: z.string(),
  }).required();

  type AuthSchema = z.infer<typeof authSchema>;

  // const auth = useFirebaseAuth()!;

  const authForm = reactive({
    email: undefined,
    password: undefined,
  });

  const isSubmitting = ref(false);
  const handleSignIn = (event: FormSubmitEvent<AuthSchema>) => {

  }
</script>

<template>
  <div class="main-container flex flex-col items-center justify-center gap-4 w-full">
    <div class="bg-slate-300 dark:bg-gray-600 rounded-lg shadow-lg w-full max-w-96 p-6">
      <div class="flex flex-col justify-center gap-4">
        <div class="bg-white dark:bg-gray-800 rounded-lg p-3 leading-[0] inline-block mx-auto shadow-md">
          <UIcon name="i-heroicons:arrow-right-start-on-rectangle-20-solid" class="w-6 h-6" />
        </div>

        <div class="text-center mb-2">
          <h1 class="font-bold text-2xl text-center mb-2">
            Sign In
          </h1>

          <p>Enter your login details to continue</p>
        </div>

        <UForm :schema="authSchema" :state="authForm" @submit="handleSignIn">
          <div class="flex flex-col gap-4 mb-3">
            <UInput
              v-model="authForm.email"
              icon="i-lucide:mail"
              placeholder="Email"
              type="email"
              size="xl"
              class="shadow"
            />
            <UInput
              v-model="authForm.password"
              icon="i-lucide:key-round"
              placeholder="Password"
              type="password"
              size="xl"
              class="shadow"
            />
          </div>

          <NuxtLink to="/" class="font-bold">
            Having trouble logging in?
          </NuxtLink>

          <UButton class="mt-8" size="xl" block type="submit" :loading="isSubmitting">
            Sign In
          </UButton>
        </UForm>
      </div>
    </div>

    <p>Copyright MedVault @ 2025</p>
  </div>
</template>

<style scoped lang="scss">
  .main-container {
    height: calc(100vh - 112px);
  }
</style>