<template>
    <header class="bg-gradient-horizontal h-24 shadow-md flex justify-between items-center">
      <router-link :to="{name: 'Home'}"><Logo class="mx-4"/></router-link>
      <div class="flex items-center gap-1">
        <router-link class="px-2 h-full hover:bg-purple-200 text-white font-semibold text-center" :to="{name: 'searchByName'}">
          Search Meals
        </router-link>
        <router-link class="px-2 h-full hover:bg-purple-200 text-white font-semibold text-center" :to="{name: 'searchByLetter'}">
          Meals by Letter
        </router-link>
        <router-link class="px-2 h-full hover:bg-purple-200 text-white font-semibold text-center" :to="{name: 'searchByIngredient'}">
          Meals by Ingredient
        </router-link>
      </div>
    </header>
</template>
<script setup>
import Logo from '../assets/Logo.vue'
</script>