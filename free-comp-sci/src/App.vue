<script setup>
import HelloWorld from './components/HelloWorld.vue'
import AboutMe from './components/AboutMe.vue'
import NavBar from './components/shared/NavBar.vue'
import FooterBar from './components/shared/FooterBar.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <NavBar />
    </div>
  </header>

  <main>
    <HelloWorld />
    <AboutMe />
  </main>

  <footer>
    <FooterBar />
  </footer>
</template>
