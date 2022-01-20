<template>
  <div
    class="flex font-bold border border-dotted text-gray-600 border-gray-600 rounded-lg"
    @click="$emit('new-tag')"
  >
    <p>+ New</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
})
</script>