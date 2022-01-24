<template>
    <div class="flex border-4 rounded-lg m-4 py-2 px-8 justify-between">
      <div class="text-xl font-bold mr-8">{{ event.title}}</div>
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
    event: { type: Object as Vue.PropType<Event>, required: false, default: {} as Event }
  },
  computed: {
    eventDate():string{
      if (this.$props.event.date.fromDate !== null){
        return this.$props.event.date.fromDate.getFullYear().toString() + '/' + this.$props.event.date.fromDate.getMonth().toString() + '/' + this.$props.event.date.fromDate.getDate().toString();
      } else {return ''}
    }
  },
  methods: {
  }

})
</script>