<script setup lang="ts">
import SideNav from './components/shared/SideNav.vue'
</script>

<template>
  <div class="flex h-screen">
    <SideNav />
    <main class="flex-1 overflow-auto p-6">
      <RouterView />
    </main>
  </div>
</template>

<style scoped>

</style>