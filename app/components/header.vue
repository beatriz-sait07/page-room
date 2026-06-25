<template>
    <div class="bg-transparent w-full flex justify-center items-center px-4 py-2 min-h-30 font-bold">
        <section class="flex-1 flex flex-row-reverse md:flex-row justify-between items-center">
            <section class="w-20 h-fit">
                <img src="../assets/room-homepage-master/images/logo.svg" width="100" height="40" alt="Logo" />
            </section>
            <div v-if="isDesktop" class="flex max-w-1/2 w-1/2 h-30 min-h-30 items-center gap-">
                <section class="flex-1">
                    <ul class="w-full grid grid-cols-3 gap-4 justify-center items-between text-gray-200">
                        <li v-for="item in menuList" :key="item.name" class="relative text-center inline-block
                    after:content-[''] after:absolute after:left-1/2 after:bottom-0
                    after:h-1 after:w-full after:bg-current
                    after:origin-center after:scale-x-0
                    after:-translate-x-1/2
                    after:transition-transform after:duration-300
                    hover:after:scale-x-100 w-fit">
                            <NuxtLink :to="item.link">{{ item.name }}</NuxtLink>
                        </li>
                    </ul>
                </section>
            </div>
            <section v-else class="relative w-full">
                <Menu v-if="!menuAberto" @click="toggleMenu" class="text-gray-200 absolute top-1/2 left-3" />
                <Transition v-else name="menu-slide">
                    <div ref="menuRef">
                        <MenuHamburguer :menuAberto="menuAberto" :listaMenu="menuList"
                            @update:menuAberto="menuAberto = $event" />
                    </div>
                </Transition>
            </section>

        </section>
    </div>
</template>

<script setup lang="ts">
import { Menu } from '@lucide/vue';
import { useMediaQuery, onClickOutside } from '@vueuse/core'

const isDesktop = useMediaQuery('(min-width: 768px)')
let menuAberto = ref(false)

const toggleMenu = () => {
    menuAberto.value = !menuAberto.value
}

const menuList = [
    { name: 'Home', link: '/' },
    { name: 'Sobre', link: '/sobre' },
    { name: 'Contato', link: '/contato' }
]
const menuRef = ref<HTMLElement | null>(null)

onClickOutside(menuRef, () => {
    menuAberto.value = false
})
</script>

<style scoped>
.menu-slide-enter-active,
.menu-slide-leave-active {
    transition: transform 400ms ease-in-out, opacity 400ms ease-in-out;
}

.menu-slide-enter-from,
.menu-slide-leave-to {
    transform: translateX(-100%);
    opacity: 0;
}

.menu-slide-enter-to,
.menu-slide-leave-from {
    transform: translateX(0);
    opacity: 1;
}
</style>