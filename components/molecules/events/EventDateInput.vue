<template>
  <div class="flex">
    <div class="mr-1">日程</div>
    <AtomInput
      v-model="$data.updatedFromDate"
      class="mr-2"
    />
   <div class="mr-1">時間</div>
    <div>
      <AtomInput
        v-model="$data.updatedFromTime"
      />
      <AtomButton
        v-if="hasFromTime"
        val="クリア"
        class="mr-4"
        @click="$emit('close')"
      />
    </div>
    <div class="mr-1">日程</div>
    <div>
      <AtomInput
        v-model="$data.updatedToDate"
      />
      <AtomButton
        v-if="hasToDate"
        val="クリア"
        class="mr-4"
        @click="$emit('close')"
      />
    </div>
    <div class="mr-1">時間</div>
    <div>
      <AtomInput
        v-model="$data.updatedToTime"
      />
      <AtomButton
        v-if="hasToTime"
        val="クリア"
        class="mr-4"
        @click="$emit('close')"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import AtomInput from "~/components/atoms/AtomInput.vue"
import AtomButton from '~/components/atoms/AtomButton.vue';

export default Vue.extend({
  components: {
    AtomInput,
    AtomButton
  },
  props: {
    fromDate: { type: Date, required: false, default: null },
    fromTime: { type: Date, required: false, default: null }
  },
  data() {
    return {
			updatedFromDate: {},
      updatedFromTime: {},
      updatedToDate: {},
      updatedToTime: {}
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
      return this.$data.uploadedFromTime !== null;
    },
    hasToDate(): boolean {
      return this.$data.uploadedToDate !== null;
    },
    hasToTime(): boolean {
      return this.$data.uploadedToTime !== null;
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