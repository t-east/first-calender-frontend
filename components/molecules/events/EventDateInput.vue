<template>
  <div>
    <div :class="{'justify-center':$data.hasRange}">
      <div class="flex">
        <div class="mr-2">
          <!-- <div class="mr-1">日程</div> -->
          <AtomInput
            v-model="$data.updatedFromDate"
            type="date"
            class="w-2/3"
          />
        </div>
        <div v-if="$data.hasTime" class="flex">
          <AtomInput
            v-model="$data.updatedToTime"
            class="mb-2 w-1/3"
          />
          <div class="mx-1 mb-2">:</div>
          <AtomInput
            v-model="$data.updatedToTime"
            class="mb-2 w-1/3"
          />
        </div>
      </div>
      <div v-if="$data.hasRange" class="flex">
        <div class="mr-2">
          <!-- <div class="mr-1">日程</div> -->
          <AtomInput
            v-model="$data.updatedToDate"
            type="date"
          />
        </div>
        <div v-if="$data.hasTime" class="flex">
          <AtomInput
            v-model="$data.updatedToTime"
            class="mb-2 w-1/3"
          />
          <div class="mx-1 mb-2">:</div>
          <AtomInput
            v-model="$data.updatedToTime"
            class="mb-2 w-1/3"
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
    fromDate: { type: Date, required: false, default: null },
    fromTime: { type: Date, required: false, default: null }
  },
  data() {
    return {
			updatedFromDate: '',
      updatedFromTime: '',
      updatedToDate: '',
      updatedToTime: '',
      hasRange: false,
      hasTime: false
    }
  },
	watch: {
		fromDate(value) {
			this.$data.updatedFromDate=value;
		},
    fromTime(value) {
			this.$data.updatedFromTime=value;
		},
    ToDate(value) {
			this.$data.updatedToDate=value;
		},
    ToTime(value) {
			this.$data.updatedToTime=value;
		}
  },
  computed: {
    hasFromTime(): boolean {
      return this.$data.updatedFromTime !== '';
    },
    hasToDate(): boolean {
      return this.$data.updatedToDate !== '';
    },
    hasToTime(): boolean {
      return this.$data.updatedToTime !== '';
    }
  },
  methods: {
		deleteTag(id: number) {
			console.log(id);
		},
		createTag() {
			this.$emit('new-tag')

		}
  }

})
</script>