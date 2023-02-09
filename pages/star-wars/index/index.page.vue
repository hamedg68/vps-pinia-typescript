<template>
  <h1>Star Wars Movies</h1>
  <ol>
    <li v-for="item in movieStore.moviesList" :key="item.id">
      <a :href="'/star-wars/' + item.id">{{ item.title }}</a> ({{ item.release_date }})
    </li>
  </ol>
  <!-- <p>Source: <a href="https://star-wars.brillout.com">star-wars.brillout.com</a>.</p>
  <p>Data can be fetched by using the <code>onBeforeRender()</code> hook.</p> -->
</template>

<script lang="ts" setup>
import { onMounted, onServerPrefetch } from 'vue'
import { useMovieStore } from './movieStore'

const movieStore = useMovieStore()

onMounted(() => {
  if (!movieStore.moviesList) {    
    movieStore.fetchStarWarsMovies()
  }
})

onServerPrefetch(async () => {
  await movieStore.fetchStarWarsMovies()
})
</script>
