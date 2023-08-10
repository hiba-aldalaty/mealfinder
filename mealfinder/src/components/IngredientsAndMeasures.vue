<template>
        <div class="flex flex-wrap gap-10">
            <div>
                <h2 class="font-bold">Ingredients</h2>
                <ul>
                    <template v-for="(el, indx) of new Array(20)">
                        <li v-if="meal[`strIngredient${indx + 1}`]">
                           {{ indx + 1 }}. {{meal[`strIngredient${indx + 1}`]}}
                        </li>
                    </template>
                </ul>
            </div>
            <div>
                <h2 class="font-bold">Measures</h2>
                <ul>
                    <template v-for="(el, indx) of new Array(20)">
                        <li v-if="meal[`strMeasure${indx + 1}`]">
                           {{meal[`strMeasure${indx + 1}`]}}
                        </li>
                    </template>
                </ul>
            </div>
        </div>
</template>
<script setup>
const props = defineProps({
    meal: {
        type: Object,
        required: true,
    }
})
</script>