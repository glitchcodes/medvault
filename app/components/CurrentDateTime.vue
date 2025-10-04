<script setup lang="ts">
const dateTime = ref<string>();

const updateDateTime = () => {
  const now = new Date();

  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  };
  dateTime.value = now.toLocaleDateString('en-PH', options);
};

onMounted(() => {
  updateDateTime();

  const interval = setInterval(() => {
    updateDateTime();
  }, 1000);

  onUnmounted(() => {
    clearInterval(interval);
  });
})
</script>

<template>
  <div class="text-end">
    <h1 class="text-lg font-bold">
      Current Day/Time
    </h1>
    <p>{{ dateTime }}</p>
  </div>
</template>

<style scoped lang="scss">

</style>