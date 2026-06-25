<template>
    <div class="w-2/3 bg-transparent backdrop-blur-lg shadow-lg shadow-gray-200 dark:shadow-gray-800 z-1 h-screen absolute top-0 py-6 px-4 left-0"
        @click="toggleMenu">
        <X @click="toggleMenu" :class="props.colorX || 'white'" class="absolute left-3 top-6 -translate-y-1/2" />
        <ul class="w-full grid grid-rows-3 gap-5 justify-center items-between text-gray-800 dark:text-gray-200">
            <li v-for="item in props.listaMenu" :key="item.name" class="relative text-center inline-block"
                :class="props.listaMenu?.length ? 'border-b-2 border-gray-700 dark:border-gray-300' : ''">
                <NuxtLink :to="item.link">{{ item.name }}</NuxtLink>
            </li>
        </ul>
        <p class="w-full text-[8px] text-gray-300 dark:text-gray-700 absolute bottom-3 text-center">v{{
            nuxtConfig.public.version }}</p>
        <!-- backdrop-blur-md -->
    </div>
</template>

<script setup lang="ts">
import { X } from '@lucide/vue';
const props = defineProps<{
    menuAberto?: boolean
    listaMenu?: { name: string, link: string }[]
    colorX?: string
}>()

const emit = defineEmits<{
    (e: 'update:menuAberto', value: boolean): void
}>()

const toggleMenu = () => {
    console.log('toggleMenu called')
    emit('update:menuAberto', false)
}

const nuxtConfig = useRuntimeConfig()
</script>

<style scoped></style>