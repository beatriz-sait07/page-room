<template>
    <div class="w-2/3 bg-black/80  z-1 h-screen absolute top-0 p-3" @click="toggleMenu">
        <X @click="toggleMenu" class="text-gray-100 " />
        <ul class="w-full grid grid-rows-3 gap-5 justify-center items-between text-gray-200">
            <li v-for="item in props.listaMenu" :key="item.name" class="relative text-center inline-block"
                :class="props.listaMenu?.length ? 'border-b-2 border-gray-500' : ''">
                <NuxtLink :to="item.link">{{ item.name }}</NuxtLink>
            </li>
        </ul>
        <p class="w-full text-[8px] text-gray-300 absolute bottom-3 text-center">v{{ nuxtConfig.public.version }}</p>
        <!-- backdrop-blur-md -->
    </div>
</template>

<script setup lang="ts">
import { X } from '@lucide/vue';
const props = defineProps<{
    menuAberto?: boolean
    listaMenu?: { name: string, link: string }[]
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