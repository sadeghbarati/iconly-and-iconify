<script setup lang="ts">

</script>

<template>
  <nav text-xl mt-24>
    <RouterLink class="icon-btn mx-2" to="/">
      <div i-iconly-bold-users />
    </RouterLink>

    <RouterLink class="icon-btn mx-2" to="/glass">
      <div i-glass-add />
    </RouterLink>

    <button class="icon-btn mx-2 !outline-none" @click="toggleDark()">
      <div i="carbon-sun dark:carbon-moon" />
    </button>

    <RouterLink class="icon-btn mx-2" to="/documentation">
      <div i-carbon-dicom-overlay />
    </RouterLink>

    <a class="icon-btn mx-2" rel="noreferrer" href="https://github.com/antfu/vitesse" target="_blank" title="GitHub">
      <div i-carbon-logo-github />
    </a>
  </nav>
</template>

<style>
</style>
