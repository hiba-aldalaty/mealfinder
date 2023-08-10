<template>
    <div class="flex flex-wrap gap-5">
        <p><b>Category:</b> {{ meal.strCategory }}</p>
        <p><b>Area:</b> {{ meal.strArea }}</p>
        <p><b>Tags:</b> {{ meal.strTags }}</p>
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
