<template>
  <UApp>
    <div class="h-lvh flex flex-col overflow-hidden">
      <Header class="fixed top-0 left-0 z-100 h-30  w-full md:max-w-1/2" />

      <main class="flex-1">
        <NuxtPage />
      </main>

      <Footer class="h-8 flex justify-center items-center flex-col gap-1 m-2">
        <p class="text-[8px] text-gray-200">
          v{{ nuxtConfig.public.version }}
        </p>
        <p class="text-[8px] text-gray-200">
          Desenvolvido por Beatriz Saito - 2024
        </p>
      </Footer>
    </div>
  </UApp>
</template>
<script setup>
const nuxtConfig = useRuntimeConfig()
</script>