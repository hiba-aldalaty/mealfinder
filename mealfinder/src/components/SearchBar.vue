<template>
    <input type="text" :value="modelValue" @change="$emit('update:modelValue', $event.target.value)" class="rounded-full border-2 border-pink w-fill px-5 py-2 w-full min-w-[300px] max-w-[600px] outline-pink text-pink font-semibold"/>
</template>
<script setup>
defineProps(['modelValue'])
defineEmits(['update:modelValue'])

</script>