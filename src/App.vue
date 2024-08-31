<script setup>
import NavBar from './components/shared/NavBar.vue'
import FooterBar from './components/shared/FooterBar.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <NavBar />
    </div>
  </header>

  <main class="w-full dark:bg-gray-900">
    <RouterView />
  </main>

  <footer>
    <FooterBar />
  </footer>
</template>
