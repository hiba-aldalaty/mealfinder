<template>
    <div>
        <h3 class="text-[4rem] text-pink font-bold m-auto">Ingredients</h3>
        <router-link v-for="ingredient of ingredients" class="shadow rounded-md my-5 p-5" to="/">
            <div class="flex flex-col">
                <h3 class="text-xl text-orange font-semibold">{{ ingredient.strIngredient }}</h3>
                <p>{{ ingredient.strDescription }}</p>
            </div>
        </router-link>
    </div>
</template>
<script setup>
import { onMounted, ref } from 'vue';
import client from '../axiosClient';


const ingredients = ref({});

onMounted(() => {
    client.get("list.php?i=list").then(({ data }) => {
        ingredients.value = data.meals;
    })
})
</script>