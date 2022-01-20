<template>
  <div class="flex p-1 bg-gray-400 rounded-lg">
      <p class="mr-1">{{ $props.tag.label }}</p>
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

import CloseIcon from '~/components/icons/CloseIcon.vue';
export default Vue.extend({
  components: {
		CloseIcon
  },
  props: {
    tag: { type: Object as Vue.PropType<EventTag>, required: true }
  },
})
</script>