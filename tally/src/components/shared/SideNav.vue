<script setup lang="ts">
import { ref } from 'vue'

const menuItems = ref([
  {
    label: 'Client List',
    icon: 'pi pi-fw pi-users',
    to: '/clients'
  },
  {
    label: 'Dashboards',
    icon: 'pi pi-fw pi-chart-bar',
    to: '/dashboards'
  },
  {
    separator: true
  },
  {
    label: 'Options',
    icon: 'pi pi-fw pi-cog',
    to: '/config'
  }
])
</script>

<template>
  <div class="flex flex-col h-screen bg-surface-ground border-r border-surface-border">
    <!-- App Name Header -->
    <div class="p-4 border-b border-surface-border">
      <h1 class="text-xl font-bold text-surface-900">Tally</h1>
    </div>

    <!-- Menu -->
    <Menu :model="menuItems" class="w-full border-0 flex-1" />
  </div>
</template>

<style scoped>
:deep(.p-menu) {
  background: transparent;
  border: none;
}

:deep(.p-menu-list) {
  padding: 0.5rem 0;
}

:deep(.p-menuitem) {
  margin: 0;
}

:deep(.p-menuitem-link) {
  padding: 0.75rem 1rem;
  border-radius: 0;
}
</style>