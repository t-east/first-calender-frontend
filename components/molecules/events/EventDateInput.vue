<template>
  <div>
    <div :class="{'justify-center':$data.hasRange}">
      <div class="flex">
        <div class="mr-2">
          <!-- <div class="mr-1">日程</div> -->
          <AtomInput
            v-model="$data.date.fromDate"
            type="date"
            class="w-2/3"
          />
        </div>
        <div v-if="$data.hasTime" class="flex">
          <AtomInput
            v-model="$data.fromHour"
            class="mb-2 w-1/3"
            @change="updateDate"
          />
          <div class="mx-1 mb-2">:</div>
          <AtomInput
            v-model="$data.fromMinute"
            class="mb-2 w-1/3"
            @change="updateDate"
          />
        </div>
      </div>
      <div v-if="$data.hasRange" class="flex">
        <div class="mr-2">
          <!-- <div class="mr-1">日程</div> -->
          <AtomInput
            v-model="$data.date.toDate"
            type="date"
          />
        </div>
        <div v-if="$data.hasTime" class="flex">
          <AtomInput
            v-model="$data.toHour"
            class="mb-2 w-1/3"
            @change="updateDate"
          />
          <div class="mx-1 mb-2">:</div>
          <AtomInput
            v-model="$data.toMinute"
            class="mb-2 w-1/3"
            @change="updateDate"
          />
        </div>
      </div>
    </div>
    <AtomCheckbox
      text="範囲を指定"
      :checked="$data.hasRange"
      @input="$data.hasRange=!$data.hasRange"
    />
    <AtomCheckbox
      text="時刻を含む"
      :checked="$data.hasTime"
      @input="$data.hasTime=!$data.hasTime"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import {EventDate} from "~/interfaces/event"

import AtomInput from "~/components/atoms/AtomInput.vue"
import AtomButton from '~/components/atoms/AtomButton.vue';
import AtomCheckbox from '~/components/atoms/AtomCheckbox.vue';

export default Vue.extend({
  components: {
    AtomInput,
    AtomButton,
    AtomCheckbox
  },
  props: {
    inputDate: { type: Object as Vue.PropType<EventDate>, required: true}
  },
  data() {
    return {
      date: {} as EventDate,
      fromHour: '',
      fromMinute: '',
      toHour: '',
      toMinute: '',
    }
  },
  mounted() {
    this.$data.date = this.$props.inputDate
    this.$data.fromHour = this.$data.date.fromDate.getHours();
    this.$data.fromMinute = this.$data.date.fromDate.getMinutes();
    this.$data.toHour = this.$data.date.toDate.getHours();
    this.$data.toMinute = this.$data.date.toDate.getMinutes();
  },
  methods: {
    updateDate() {
      if (!this.$data.isAllday) {
        this.$data.fromDate.setHours(this.$data.fromHour);
        this.$data.fromDate.setMinutes(this.$data.fromMinute);
        if (this.$data.date.hasRange) {
          this.$data.toDate.setHours(this.$data.toHour);
          this.$data.toDate.setMinutes(this.$data.toMinute);
        }
      }
    },
		deleteTag(id: number) {
			console.log(id);
		},
		createTag() {
			this.$emit('new-tag')

		}
  }

})
</script>