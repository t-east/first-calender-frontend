<template>
  <div class="fixed inset-0 rounded-xl flex shadow-lg items-center justify-center z-10">
    <div class="bg-gray-100 text-black py-4 px-12 w-5/6 h-5/6 rounded-2xl relative">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
});
</script>
