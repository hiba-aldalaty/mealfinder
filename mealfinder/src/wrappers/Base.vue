<template>
    <div class="h-full">
    <NavBar />
    <main class="px-5 py-7">
      <router-view></router-view> 
    </main>
    
  </div>
</template>
<script setup>
import NavBar from '../components/NavBar.vue'
</script>