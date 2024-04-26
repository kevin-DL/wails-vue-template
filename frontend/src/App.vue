<script setup>
import { RouterView, RouterLink } from 'vue-router'
import { IsLoggedIn } from '../wailsjs/go/main/Auth'
import { ref, onMounted } from 'vue'


const loggedIn = ref(false)

onMounted(() => {
  IsLoggedIn().then(val => {
    loggedIn.value = val
  })
})

</script>

<template>
  <header>
    <nav>
      <ul>
        <li v-if="loggedIn">
          Logged In
        </li>
        <li v-else>
          <RouterLink to="/"> Home </RouterLink>
          <RouterLink to="/login"> Log in </RouterLink>
          <RouterLink to="/protected"> Protected </RouterLink>
        </li>
      </ul>
    </nav>
  </header>
  <aside>
    <RouterLink to="/"> Home </RouterLink>
    <RouterLink to="/login"> Log in </RouterLink>
    <RouterLink to="/protected"> Protected </RouterLink>
  </aside>
  <main>
    <RouterView />
  </main>
</template>

<style></style>
