<script setup lang="ts">
definePageMeta({
   middleware: ['customer-only'],
});
</script>

<template>
   <main>
      <h1 class="text-3xl font-bold">
         Customer only page
      </h1>
   </main>
</template>

<style scoped>

</style>
