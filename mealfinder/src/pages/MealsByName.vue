<template>
    <div>
        <div class="my-3 w-100 flex justify-center">
            <SearchBar type="text" placeholder="Search for a meal..." v-model="name" @update:modelValue="search"/>
        </div>
        <div class="flex flex-wrap justify-center gap-10">
            <div v-for="meal of meals" class="basis-1/3 min-w-[200px] max-w-[400px] flex flex-col shadow rounded-md p-5 bg-orange">
                <MealCard :meal="meal"/>
            </div>
        </div>
    </div>
    
</template>
<script setup>
import SearchBar from "../components/SearchBar.vue";
import { computed } from "@vue/reactivity";
import { ref, onMounted } from "vue";
import store from "../store";
import { useRoute } from "vue-router";
import MealCard from "../components/MealCard.vue";

const route = useRoute();
const name = ref('');
const meals = computed(() => store.state.searchedMeals);

function search() {
    console.log(name.value)
    if (name.value) {
        store.dispatch('searchMeals', name.value);
    } else {
        store.commit("setSearchedMeals", []);
    }
}

onMounted(() => {
    name.value = route.params.name;
    if (name.value) {
        search();
    }
})
</script>