<template>
  <div class="h-screen container mx-auto flex items-center justify-center">
    <Game />
  </div>
</template>

<script lang="ts">
import Game from "./components/Game.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: { Game },
  setup() {},
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  @apply bg-gray-50
}
</style>
