
<script setup>
import axios from 'axios'
import { reactive, watch } from '@vue/runtime-core';

const state = reactive({
    data: {},
    game: '730'
 })

const fetchSteamData = (appID) => {
    axios.get('https://cors-anywhere.herokuapp.com/https://api.steampowered.com/ISteamNews/GetNewsForApp/v0002/?appid=' + appID + '&count=15&maxlength=10000&format=json')
        .then(response => state.data = response.data )
}

fetchSteamData(state.game)

watch(() => state.game, newValue => {
    if (newValue) {
        fetchSteamData(newValue)
    }
})
</script>

<template>
    <h1 class="text-center text-5xl mb-24">NEWS</h1>

    <select id="game" v-model="state.game">
        <option value="730">CS:GO</option>
        <option value="252490">Rust</option>
        <option value="578080">PUBG</option>
    </select>
    <div v-if="state.data.appnews?.newsitems">
        <div
            class="mb-12 w-[90%] md:w-[60%] mx-auto border-[1px] rounded-lg"
            v-for="(item, index) in state.data.appnews?.newsitems"
            :key="index"
        >
            <div class="pb-4 mt-2 text-center">
                <span class="font-bold text-xl">{{ item.title }}</span>
            </div>
            <div class="mx-4 mb-4" v-html="item.contents"></div>
        </div>
    </div>
</template>
