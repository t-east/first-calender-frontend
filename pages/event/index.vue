<template>
  <div class="w-full">
    <div class="flex">
      <div class="w-2/3 p-4">
        <Calendar
          :events="$data.events"
          @detail="selectEvent"
        />
      </div>
      <div class="w-1/3 p-4">
        <EventList
          :events="$data.events"
          @detail="selectEvent"
        />
      </div>
    </div>
    <EventDetailModal v-if="$data.isDetailModalActive" :input-event="$data.selectedEvent" @close="$data.isDetailModalActive=false" />
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
          title: '予定1',
          date: {
            fromDate: new Date(2022,2,18, 1, 14),
            toDate: new Date(2022,2,18, 1,30),
            hasRange: false,
            isAllday: false
          },
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
        {
          title: '予定2',
          date: {
            fromDate: new Date(2022,2,18, 4, 24),
            toDate: new Date(2022,2,18, 1,30),
            hasRange: true,
            isAllday: false
          },
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
