<template>
  <UApp>
    <div class="h-lvh flex flex-col">
      <div class="flex w-full relative h-fit">
        <Header class="fixed top-0 left-0 z-20 w-full md:max-w-[60%]" />
        <UColorModeSwitch class="w-10 fixed top-0 right-0 m-2 z-30" color="neutral" />
      </div>
      <main class="flex-1">
        <NuxtPage />
      </main>
      <Footer class="h-24 md:h-18 flex justify-center items-center flex-col gap-1 p-3">
        <p class="text-[8px] text-gray-800 dark:text-gray-200 ">
          v{{ nuxtConfig.public.version }}
        </p>
        <p class="text-[8px] text-gray-800 dark:text-gray-200">
          Desenvolvido por Beatriz Saito - 2024
        </p>
      </Footer>
    </div>
  </UApp>
</template>
<script setup>
const nuxtConfig = useRuntimeConfig()
</script>