<script setup>
    defineProps({
        data: Object
    })
</script>

<template>

    <div>
        <div class="mb-12 w-[90%] md:w-[60%] mx-auto border rounded-lg ">
            <div class="pb-4 mt-2 text-center">
                <span class="font-bold text-xl">{{ data.title }}</span>
            </div>

            <div class="mx-4 mb-4 h-12 overflow-hidden cursor-pointer" v-html="data.contents"
            @click="$event.target.classList.toggle('active')"></div>


        </div>
    </div>
</template>
