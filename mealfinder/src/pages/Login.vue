<script setup>
import Image from '../assets/img/concert.png'
import Button from '../components/Button.vue';

</script>

<template>
  <div class="bg-gradient-diagonal h-screen w-screen flex">
    <div class="basis-2/3 flex-grow flex">
        <h1>Eventify</h1>
        <div class="flex flex-col gap-3 items-center m-auto">
        <Button class="bg-pink w-[200px] h-[67px] text-[23px]">Login</Button>
        <Button class="bg-transparent w-[200px] h-[67px] text-[23px] border-2 border-white">Sign Up</Button>
        </div>
    </div>
    <div class="basis-1/3 min-w-[500px]">
        <img alt="People at a concert with fireworks and lights" class="flex object-cover w-full h-full" :src="Image"/>
    </div>
  </div>
</template>

<style scoped>

</style>
