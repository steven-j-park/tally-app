<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

interface MenuItem {
  label?: string
  icon?: string
  to?: string
  separator?: boolean
}

const menuItems = ref<MenuItem[]>([
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
    label: 'Configuration',
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
    <nav class="flex-1 overflow-y-auto">
      <div class="p-2 space-y-1">
        <template v-for="(item, index) in menuItems" :key="index">
          <div v-if="item.separator" class="border-t border-surface-border my-2"></div>
          <RouterLink
            v-else
            :to="item.to!"
            class="flex items-center gap-3 px-4 py-3 text-surface-700 hover:bg-surface-100 rounded active-link"
            active-class="bg-primary text-primary-50"
          >
            <i :class="item.icon"></i>
            <span class="text-sm font-medium">{{ item.label }}</span>
          </RouterLink>
        </template>
      </div>
    </nav>
  </div>
</template>

<style scoped>
.active-link {
  transition: all 0.2s ease;
}
</style>