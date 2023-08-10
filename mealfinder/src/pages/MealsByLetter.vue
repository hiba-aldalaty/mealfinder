<template>
    <div class="text-pink flex flex-col gap-2 flex-wrap justify-center "> 
        <div class="flex gap-2 flex-wrap m-auto mb-10 text-xl justify-center font-semibold">
            <router-link v-for="letter of alphabet" :to="{name: 'searchByLetter', params: {letter}}" :key="letter">
                {{ letter }}
            </router-link>
        </div>
        <div class="flex flex-wrap justify-center gap-10">
            <div v-for="meal of meals" class="min-w-[200px] max-w-[400px] flex flex-col shadow rounded-md p-5 bg-orange">
                <MealCard :meal="meal" :key="meal.idMeal"/>
            </div>
        </div>
    </div>
</template>
<script setup>
import { computed } from '@vue/reactivity';
import MealCard from '../components/MealCard.vue';
import store from '../store';
import { onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const meals = computed(() => store.state.mealsByLetter);

watch(route, () => {
    store.dispatch('searchMealsByLetter', route.params.letter);
})
onMounted(() => {
    store.dispatch('searchMealsByLetter', route.params.letter);
})
</script>