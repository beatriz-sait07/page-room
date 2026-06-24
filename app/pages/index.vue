<template>
    <div class="h-[100lvh] w-full bg-black/40" id="app">
        <main class="w-full h-full">
            <section class="w-full h-fit text-gray-300 text-xs font-inter">
                <article class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <section>
                        <img class="w-full h-full object-cover"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgMdSZXKsCRUte3x9UCGVt64qSek-iffcbJ_vqAIeMZcA98H6orbQ5uMA&s=10"
                            alt="" />
                    </section>

                    <section class="flex flex-col justify-start">
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

                        <NuxtLink to="/contato">
                            Entre em contato
                        </NuxtLink>
                    </section>
                </article>
                <article class="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgMdSZXKsCRUte3x9UCGVt64qSek-iffcbJ_vqAIeMZcA98H6orbQ5uMA&s=10" />
                    <section>
                        <h1 class="text-2xl font-bold">SOBRE NOSSOS MÓVEIS</h1>
                        <p>Nossa coleção multifuncional une design e funcionalidade para atender ao seu gosto pessoal.
                            Torne cada ambiente único ou escolha um tema coeso que melhor reflita seus interesses e o
                            que o inspira. Encontre as peças de mobiliário de que precisa, desde estilos tradicionais
                            até contemporâneos — ou qualquer opção intermediária.
                            Nossos especialistas em produtos estão à disposição para ajudá-lo a criar o ambiente dos
                            seus sonhos.</p>
                    </section>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgMdSZXKsCRUte3x9UCGVt64qSek-iffcbJ_vqAIeMZcA98H6orbQ5uMA&s=10" />
                </article>
            </section>

        </main>
    </div>
</template>