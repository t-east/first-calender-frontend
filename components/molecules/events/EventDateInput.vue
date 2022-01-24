<template>
  <div>
    <div>
      <div class="flex">
        <div class="mr-2">
          <AtomInput
            v-model="$data.fromd"
            type="datetime-local"
            class="w-2/3"
          />
          {{ $data.idate }}
        </div>
        <div class="flex">
          <!-- <AtomInput
            v-model="$data.fromd"
            class="mb-2 w-1/3"
            @change="updateDate"
          />
          <div class="mx-1 mb-2">:</div>
          <AtomInput
            v-model="$data.fromd"
            class="mb-2 w-1/3"
            @change="updateDate"
          /> -->
        </div>
      </div>
      <div class="flex">
        <div class="mr-2">
          <AtomInput
            v-model="$data.tod"
            type="datetime-local"
          />
        </div>
        <div class="flex">
          <!-- <AtomInput
            v-model="$props.value.toHour"
            class="mb-2 w-1/3"
            @change="updateDate"
          />
          <div class="mx-1 mb-2">:</div>
          <AtomInput
            v-model="$props.value.toMinute"
            class="mb-2 w-1/3"
            @change="updateDate"
          /> -->
        </div>
      </div>
    </div>
    <!-- <AtomCheckbox
      text="範囲を指定"
      :checked="$props.value.hasRange"
      @input="$props.value.hasRange=!$props.value.hasRange"
    />
    <AtomCheckbox
      text="時刻を含む"
      :checked="$props.value.isAllday"
      @input="$props.value.isAllday=!$props.value.isAllday"
    /> -->
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
    value: { type: Object as Vue.PropType<EventDate>, required: false}
  },
  computed: {
    idate(): EventDate {
      return this.$props.value;
    }
  },
  data() {
    return {
      fromd: '',
      tod: '',
      fromMinute: '',
      toHour: '',
      toMinute: '',
      idate: this.$props.value
    }
  },
  mounted() {
    this.$data.idate = this.$props.value
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