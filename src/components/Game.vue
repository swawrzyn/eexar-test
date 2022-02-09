<template>
  <div class="w-full flex flex-col items-center justify-center">
    <div class="w-full flex items-center justify-center">
      <div class="w-1/2 flex flex-col items-start justify-start">
        <div class="text-3xl font-bold">EEXAR Technical Test</div>
        <span>By: Stefan Wawrzyn</span>
      </div>
      <div class="w-1/2 flex items-center justify-end">
        <button
          type="button"
          class="bg-blue-500 hover:bg-blue-700 active:bg-blue-900 text-white px-4 py-2 rounded font-bold transition-colors shadow hover:shadow-md active:shadow-lg"
          @click="restart = true"
          :disabled="restart"
        >
          Restart
        </button>
      </div>
    </div>
    <GameBoard v-model:restart="restart"></GameBoard>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import GameBoard from "./GameBoard.vue";

export default defineComponent({
  setup() {
    const restart = ref(false);

    return { restart };
  },
  components: { GameBoard },
});
</script>
