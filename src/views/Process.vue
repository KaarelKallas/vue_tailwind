<script setup>
    import NewsItem from "../components/NewsItem.vue";
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
    <div class="border mx-auto w-52 rounded-md mb-6 px-1 py-1">
        <span>Choose a game: </span>
        <select id="game" class="bg-sky-100 rounded-md" v-model="state.game">
        <option value="730">CS:GO</option>
        <option value="252490">Rust</option>
        <option value="578080">PUBG</option>
        </select>
    </div>
    <div>
         <NewsItem v-for="(item, index) in state.data.appnews?.newsitems" :key="index" :data="item"/>
    </div>



</template>
