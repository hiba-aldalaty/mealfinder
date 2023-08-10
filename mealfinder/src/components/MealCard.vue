<template>
    <div>
        <img :src="meal.strMealThumb" class="rounded-full" :alt="meal.strMeal"/>
        <div class="py-3 mt-2">
            <h3 class="font-bold text-xl text-white mb-3">{{ meal.strMeal }}</h3>
            <div class="flex gap-1">
                <LinkButton class="bg-red-500 text-white" :href="meal.strYoutube" target="_blank">YouTube</LinkButton>
                <router-link :to="{name: 'meal', params: {id: meal.idMeal} }"
                class="border-2 font-semibold border-white w-[100px] text-center rounded-full py-2 px-2 text-white">View</router-link>
            </div>
            <div class="text-white line-clamp-4 overflow-hidden w-100 ">
                Duis consectetur nostrud velit exercitation quis ullamco ut aliqua nulla aliquip commodo. Eiusmod do dolore in elit commodo esse nostrud nisi occaecat velit velit laboris ea. Laborum ipsum voluptate nostrud magna cillum exercitation nulla commodo. Fugiat eu minim reprehenderit ex laboris ea ad aliqua qui tempor duis. Consectetur aliquip adipisicing adipisicing aliqua amet irure adipisicing id. Ullamco mollit ex ad fugiat. Est excepteur enim reprehenderit veniam amet.
            </div>
        </div>
    </div>
</template>

<script setup>
import LinkButton from '../components/LinkButton.vue';

const props = defineProps({
    meal: {
        type: Object,
        required: true,
    }
})
</script>
