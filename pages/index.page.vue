<template>
  <h1>Welcome to <code>vite-plugin-ssr</code></h1>
  This page is:
  <ul>
    <li>Rendered to HTML.</li>
    <li>Interactive. <Counter /></li>
  </ul>
  <p>
    We <code>export const clientRouting = true</code> to enable Client Routing.
    <button @click="navigate('/star-wars')">Random Page</button>
  </p>
</template>

<script lang="ts" setup>
import Counter from '../components/Counter.vue'
import { navigate } from 'vite-plugin-ssr/client/router'

</script>
