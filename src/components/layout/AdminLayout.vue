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

      <main class="admin-main">
        <RouterView />
      </main>
    </div>
  </div>
</template>

<style scoped>
.admin-layout {
  min-height: 100vh;
  background: var(--color-bg);
}

.admin-layout__content {
  min-height: 100vh;
  margin-left: 250px;
}

.admin-main {
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 40px 48px 64px;
}
</style>
