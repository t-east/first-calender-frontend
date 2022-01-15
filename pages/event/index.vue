<template>
  <div>
    <div class="flex">
      <Calendar
        :selected-date="$data.selectedDate"
        :events="$data.events"
        class="mx-4"
      />
      <EventList :events="$data.events" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import AtomButton from '~/components/atoms/AtomButton.vue';
import Calendar from '~/components/organism/events/Calendar.vue';
import EventList from '~/components/organism/events/EventList.vue';

export default Vue.extend({
  components: {
    AtomButton,
    Calendar,
    EventList
  },
  data() {
    return {
      events: [
        {
          name: '予定1',
          year: 2022,
          month: 1,
          date: 3
        },
        {
          name: '予定2',
          year: 2022,
          month: 1,
          date: 8
        },
        {
          name: '予定3',
          year: 2022,
          month: 1,
          date: 9
        },
        {
          name: '予定4',
          year: 2022,
          month: 1,
          date: 9
        }
      ]
    };
  }
});
</script>

<style scoped>
  .error {
    border: 1px solid rgba(248, 113, 113, var(--tw-text-opacity));
  }
</style>
