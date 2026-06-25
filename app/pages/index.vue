<template>
    <div class="h-full w-full" id="app">
        <main class="w-full h-full">
            <section class="w-full h-full text-gray-300 text-xs font-inter">
                <article class="grid grid-cols-1 md:grid-cols-[60%_1fr] gap-4">
                    <section class="carousel-hero w-full h-full relative">
                        <UCarousel ref="carouselRef" v-slot="{ item }"
                            :items="isDesktop ? itemsCarrosselDesk : itemsCarrosselMobile"
                            :ui="{ root: 'h-full w-full', viewport: 'h-full', container: 'h-full' }"
                            class="w-full h-full">
                            <img :src="item" class="w-full h-full object-cover block" loading="lazy">
                        </UCarousel>
                        <div v-if="!isDesktop" class="absolute bottom-0 right-0 flex z-10 h-fit!">
                            <button @click="carouselRef?.emblaApi?.scrollPrev()"
                                class="w-14 h-14 bg-black flex items-center justify-center hover:bg-neutral-700 transition-colors">
                                <ChevronLeft class="text-white w-5 h-5" />
                            </button>
                            <button @click="carouselRef?.emblaApi?.scrollNext()"
                                class="w-14 h-14 bg-black flex items-center justify-center hover:bg-neutral-700 transition-colors">
                                <ChevronRight class="text-white w-5 h-5" />
                            </button>
                        </div>
                    </section>

                    <section class="flex flex-col justify-center gap-6 py-4 relative px-6">
                        <h1 class="text-2xl font-bold">
                            Descubra maneiras inovadoras de decorar
                        </h1>

                        <p>
                            Fornecemos qualidade, conforto e estilo incomparáveis para
                            proprietários de imóveis em todo o país. Nossos especialistas
                            combinam forma e função para dar vida à sua visão. Crie um quarto
                            em seu próprio estilo com nossa coleção e faça da sua propriedade
                            um reflexo de você e do que você ama.
                        </p>

                        <NuxtLink to="/contato" class="flex items-center gap-4 text-xl mb-4">
                            Entre em contato
                            <MoveRight stroke-width="1px" width="36px" height="36px" />
                        </NuxtLink>
                        <div v-if="isDesktop" class="absolute bottom-0! -left-4 flex z-10">
                            <button @click="carouselRef?.emblaApi?.scrollPrev()"
                                class="w-10 h-10 bg-black flex items-center justify-center hover:bg-neutral-700 transition-colors">
                                <ChevronLeft class="text-white w-5 h-5" />
                            </button>
                            <button @click="carouselRef?.emblaApi?.scrollNext()"
                                class="w-10 h-10 bg-black flex items-center justify-center hover:bg-neutral-700 transition-colors">
                                <ChevronRight class="text-white w-5 h-5" />
                            </button>
                        </div>
                    </section>
                </article>
                <article class="grid grid-cols-1 md:grid-cols-[30%_1fr_30%] gap-4 w-full h-1/4">
                    <img :src="imgDark" class="w-full object-cover h-full" />
                    <section class="flex-1 flex flex-col justify-center gap-4 px-6 py-2">
                        <h1 class="text-2xl font-bold">SOBRE NOSSOS MÓVEIS</h1>
                        <p>Nossa coleção multifuncional une design e funcionalidade para atender ao seu gosto pessoal.
                            Torne cada ambiente único ou escolha um tema coeso que melhor reflita seus interesses e o
                            que o inspira. Encontre as peças de mobiliário de que precisa, desde estilos tradicionais
                            até contemporâneos — ou qualquer opção intermediária.
                            Nossos especialistas em produtos estão à disposição para ajudá-lo a criar o ambiente dos
                            seus sonhos.</p>
                    </section>
                    <img :src="imgLight" class="w-full object-cover h-full" />
                </article>
            </section>
        </main>
    </div>
</template>
<script setup lang="ts">
import { useMediaQuery } from '@vueuse/core'
import { MoveRight, ChevronLeft, ChevronRight } from '@lucide/vue';

const carouselRef = ref()
const isDesktop = useMediaQuery('(min-width: 768px)')
import hero1Desk from '~/assets/room-homepage-master/images/desktop-image-hero-1.jpg'
import hero2Desk from '~/assets/room-homepage-master/images/desktop-image-hero-2.jpg'
import hero3Desk from '~/assets/room-homepage-master/images/desktop-image-hero-3.jpg'

import hero1Mobile from '~/assets/room-homepage-master/images/mobile-image-hero-1.jpg'
import hero2Mobile from '~/assets/room-homepage-master/images/mobile-image-hero-2.jpg'
import hero3Mobile from '~/assets/room-homepage-master/images/mobile-image-hero-3.jpg'

import imgDark from '~/assets/room-homepage-master/images/image-about-dark.jpg'
import imgLight from '~/assets/room-homepage-master/images/image-about-light.jpg'
const itemsCarrosselDesk = [
    hero1Desk,
    hero2Desk,
    hero3Desk
]

const itemsCarrosselMobile = [
    hero1Mobile,
    hero2Mobile,
    hero3Mobile
]
</script>
<style scoped>
.carousel-hero :deep(> div),
.carousel-hero :deep(> div > div),
.carousel-hero :deep(> div > div > div) {
    height: 100%;
}
</style>