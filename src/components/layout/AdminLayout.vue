<script setup>
import { ref } from 'vue'
import AdminHeader from './AdminHeader.vue'
import AdminSidebar from './AdminSideBar.vue'

const isSidebarOpen = ref(false)
</script>

<template>
  <div class="admin-layout">
    <AdminSidebar :open="isSidebarOpen" @close="isSidebarOpen = false" />

    <div class="admin-layout__content">
      <AdminHeader @open-menu="isSidebarOpen = true" />
      <main>
        <RouterView />
      </main>
    </div>
  </div>
</template>
