<template>
    <div class="flex border-4 rounded-lg m-4 py-2 px-8 justify-between">
      <div class="text-xl font-bold mr-8">{{ event.name}}</div>
      <div>{{ eventDate }}</div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

import { Event } from '~/interfaces/event';

export default Vue.extend({
  components: {
  },
  props: {
    event: { type: Object as Vue.PropType<Event>, required: true }
  },
  computed: {
    eventDate():string{
      return this.$props.event.year.toString() + '/' + this.$props.event.month.toString() + '/' + this.$props.event.date.toString();
    }
  },
  methods: {
  }

})
</script>