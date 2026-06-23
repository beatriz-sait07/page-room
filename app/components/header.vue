<template>
    <div>
        <section></section>
        <section class="grid grid-row justify-between"></section>
    </div>
</template>

<script setup lang="ts">
import { useMediaQuery } from '@vueuse/core'

const isDesktop = useMediaQuery('(min-width: 768px)')
const menuAberto = ref(false)
</script>

<style scoped></style>