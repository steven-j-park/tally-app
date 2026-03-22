<script setup lang="ts">
import SideNav from './components/shared/SideNav.vue'
</script>

<template>
  <div class="flex h-screen">
    <SideNav />
    <main class="flex-1 overflow-auto">
      <div class="p-6">
        <h2 class="text-2xl font-bold mb-4">Welcome to Tally</h2>
        <p>Select an option from the menu to get started.</p>
      </div>
    </main>
  </div>
</template>

<style scoped>

</style>