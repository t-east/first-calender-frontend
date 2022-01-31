<template>
  <button
      class="bg-gray-300 hover:bg-wheat text-gray-600 hover:opacity-80 font-bold text-sm focus:outline-none p-2 rounded-sm"
      @click="$emit('click')"
  >
      <PlusIcon />
  </button>
</template>

<script lang="ts">
import Vue from 'vue'
import PlusIcon from '~/components/icons/PlusIcon.vue'
export default Vue.extend({
  components: {
    PlusIcon
  }
})
</script>