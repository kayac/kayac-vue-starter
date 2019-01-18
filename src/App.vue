<template lang="pug">
    #app
      #nav
        router-link(to="/") Home
        router-link(to="/about") About
        router-link(to="/register") Register
      router-view
</template>
