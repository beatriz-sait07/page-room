<template>
    <main class="mx-auto w-full max-w-5xl px-6 py-12 mt-16 grid gap-4 text-gray-800 dark:text-gray-200">
        <h1 class="text-3xl font-semibold">Sobre</h1>
        <p class="mt-4">
            Esta pagina apresenta informacoes sobre o projeto Room e sua proposta de design de ambientes.
        </p>

        <NuxtLink
            class="flex items-center justify-center rounded-full w-8 h-8 border-2 border-gray-800 dark:border-gray-200 p-2 hover:bg-gray-800 dark:hover:bg-gray-200"
            to="/">
            <ChevronLeft stroke-width="3px" width="36px" height="36px" />
        </NuxtLink>
    </main>
</template>

<script setup lang="ts">
import { ChevronLeft } from '@lucide/vue';
import { C } from 'vue-router/dist/index-BQLwgiyK.js';
</script>