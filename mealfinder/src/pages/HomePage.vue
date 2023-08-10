<template>
    <div class="flex flex-col">
    <h3 class="text-[4rem] text-pink font-bold">Random Meals</h3>
    <div class="flex flex-wrap justify-center gap-10">
        <div v-for="meal of meals" class="min-w-[200px] max-w-[400px] flex flex-col shadow rounded-md p-5 bg-orange">
            <MealCard :meal="meal" :key="meal.idMeal"/>
        </div>
    </div>
    </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import client from "../axiosClient";
import MealCard from "../components/MealCard.vue";

const meals = ref([]);

onMounted(async () => {
  for (let i = 0; i < 10; i++) {
    client
      .get(`random.php`)
      .then(({ data }) => meals.value.push(data.meals[0]));
  }
});
</script>
