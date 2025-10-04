<script setup lang="ts">
  const props = defineProps({
    to: {
      type: String,
      required: true
    }
  });
</script>

<template>
  <LazyNuxtLink :to="props.to">
    <UCard class="card">
      <div class="icon bg-blue-400/30 inline-block rounded-md leading-[0] p-2 mb-4">
        <slot name="icon" />
      </div>
      <h5 class="text-lg">
        <slot name="title" />
      </h5>
    </UCard>
  </LazyNuxtLink>
</template>

<style scoped lang="scss">
  .card {
    .icon {
      transition: 0.3s;
    }
    &:hover .icon {
      @apply bg-blue-500;
    }
  }
</style>