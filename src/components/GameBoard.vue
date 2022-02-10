<template>
  <div :key="updateKey" class="bg-white shadow-lg">
    <tr v-for="(row, rowIndex) in board" :key="`row-${rowIndex + 1}`">
      <GameTile
        v-for="(cell, cellIndex) in row"
        :key="`cell-${rowIndex + 1}:${cellIndex + 1}`"
        :coordinates="[rowIndex, cellIndex]"
        :num="cell"
        @tile-click="tileClick([rowIndex, cellIndex])"
      ></GameTile>
    </tr>
  </div>
</template>

<script lang="ts">
import GameTile from "./GameTile.vue";
import {
  defineComponent,
  reactive,
  Ref,
  ref,
  shallowReactive,
  shallowRef,
  toRefs,
  watch,
} from "vue";
import { handleTileClick } from "./game-board";
import { make2dArray } from "../utils/array";

export default defineComponent({
  components: { GameTile },
  props: {
    restart: {
      default: false,
      type: Boolean,
    },
  },
  emits: ["update:restart"],
  setup(props, { emit }) {
    let board = shallowReactive(make2dArray(0, 50, 50));
    const updateKey = ref(0);

    const { restart } = toRefs(props);

    watch(restart, (newVal, oldVal) => {
      if (newVal) {
        for (const [rowIndex, row] of board.entries()) {
          board[rowIndex] = row.map((x) => 0);
        }
        emit("update:restart", false);
      }
    });

    const tileClick = async (coordinates: number[]) => {
      const newBoard = await handleTileClick(board, coordinates);

      for (const [rowIndex, row] of newBoard.entries()) {
        board[rowIndex] = row;
      }
    };

    return { board, tileClick, updateKey };
  },
});
</script>
