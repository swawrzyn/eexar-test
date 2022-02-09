<template>
  <td
    class="w-8 h-6 align-middle text-center text-xs cursor-pointer select-none shadow-sm hover:shadow-md hover:bg-yellow-100 active:bg-yellow-300 border transition-all border-gray-100"
    :class="{
      'bg-yellow-200': pulse === 'yellow',
      'bg-green-200': pulse === 'green',
    }"
    @click="$emit('tile-click', coordinates)"
  >
    {{ num > 0 ? num : "" }}
  </td>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, toRefs, watch } from "vue";

export default defineComponent({
  props: {
    coordinates: {
      required: true,
      type: Array,
    },
    num: {
      required: true,
      type: Number,
    },
  },
  emits: ["tile-click"],
  setup(props) {
    const { num } = toRefs(props);
    const pulse = ref("");

    watch(num, (newVal, oldVal) => {
      if (newVal > oldVal) {
        pulse.value = "yellow";
        setTimeout(() => {
          pulse.value = "";
        }, 500);
      } else if (oldVal != 0 && newVal == 0) {
        pulse.value = "green";
        setTimeout(() => {
          pulse.value = "";
        }, 1500);
      }
    });

    return { pulse };
  },
});
</script>
