<template>
  <div>
    <div class="flex justify-between">
      <Calendar
        :events="$data.events"
        class="mx-4"
        @detail="selectEvent"
      />
      <EventList :events="$data.events" />
    </div>
    <EventDetailModal v-if="$data.isDetailModalActive" :event="$data.selectedEvent" @close="$data.isDetailModalActive=false" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import AtomButton from '~/components/atoms/AtomButton.vue';
import Calendar from '~/components/organism/events/Calendar.vue';
import EventList from '~/components/organism/events/EventList.vue';
import EventDetailModal from '~/components/organism/modals/EventDetailModal.vue';

export default Vue.extend({
  components: {
    AtomButton,
    Calendar,
    EventList,
    EventDetailModal
  },
  data() {
    return {
      events: [
        {
          name: '予定1',
          year: 2022,
          month: 1,
          date: 3,
          tags: [
            {
              id: 1,
              label: 'タグ1'
            },
            {
              id: 2,
              label: 'タグ2'
            },
            {
              id: 3,
              label: 'タグ3'
            }
          ]
        },
      ],
      isDetailModalActive: false,
      selectedEvent: {}
    };
  },
  methods: {
    selectEvent(event: Event) {
      this.$data.isDetailModalActive=true;
      this.$data.selectedEvent=event;
    } 
  }
});
</script>

<style scoped>
  .error {
    border: 1px solid rgba(248, 113, 113, var(--tw-text-opacity));
  }
</style>
