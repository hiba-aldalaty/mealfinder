<template>
    <div>
        <h2 class="font-bold">Instructions</h2>
        {{ meal.strInstructions }}
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
