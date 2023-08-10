<template>
    <div class="p-10 pt-5 justify-center flex flex-col gap-2 items-center">
        <div class="w-100 m-auto max-w-[900px]">
            <h1 class="text-[4rem] text-pink font-bold m-auto mb-10">{{  meal.strMeal }}</h1>
            <img :src="meal.strMealThumb" alt="meal.strMeal" class="rounded-xl shadow w-[100%]"/>
            <div class="flex flex-wrap gap-4 w-full my-2">
                <LinkButton class="bg-red-500 text-white" :href="meal.strYoutube" target="_blank">YouTube</LinkButton>
                <LinkButton class="bg-white text-pink border-pink border-2" :href="meal.strSource" target="_blank">View Original Source</LinkButton>
            </div>
            <MealMeta :meal="meal"/>
            <IngredientsAndMeasures :meal="meal"/>
            <MealInstructions :meal="meal" />
        </div>
    </div>

</template>
<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import LinkButton from '../components/LinkButton.vue';
import client from '../axiosClient';
import IngredientsAndMeasures from '../components/IngredientsAndMeasures.vue';
import MealMeta from '../components/MealMeta.vue';
import MealInstructions from '../components/MealInstructions.vue';

const route = useRoute();
const meal = ref({});

onMounted(() => {
    client.get(`lookup.php?i=${route.params.id}`).then(({ data }) => {
        console.log(data)
        meal.value = data.meals[0] || {};
    })
})

</script>