<template>
  <div>
    <main>
      <div id="calendar" />
    </main>
  </div>
</template>
<script>
export default {
  head() {
    return {
      link: [
        { rel: 'stylesheet', href: '/css/fullcalendar.min.css' }
      ]
    }
  },
  data() {
    return {
      events: [
        { title: 'event1', start: '2019-02-27' },
        { title: 'event2', start: '2019-02-28T12:00', end: '2019-02-28T14:00' },
        { title: 'event3', start: '2019-02-28T12:30:00', allDay: false }
      ]
    }
  },
  created() {
    this.$store.commit('setEvents', this.events)
  }
}
</script>