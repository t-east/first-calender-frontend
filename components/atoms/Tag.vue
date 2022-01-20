<template>
  <div class="flex bg-gray-400 rounded-lg">
      <p>{{ $props.tag.label }}</p>
      <div
        class="cursor-pointer"
        @click="$emit('delete',$props.tag.id)"
      >
        <CloseIcon />
      </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import { EventTag } from "~/interfaces/event"
export default Vue.extend({
  props: {
    event: { type: Object as Vue.PropType<EventTag>, required: true }
  },
})
</script>