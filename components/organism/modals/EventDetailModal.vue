
<template>
    <BaseModal>
      <div class="flex justify-end">
        <div
          class="cursor-pointer"
          @click="$emit('close')"
        >
          <CloseIcon />
        </div>
      </div>
      <AtomInput
        v-model="$data.title"
        class="flex justify-center text-2xl font-bold mb-4"
        placeholder="タイトル"
        type="text"
      />
      <div>
        <EventTags
          :tags="$data.tags"
          @new-tag="createTag"
        />
        <EventDateInput
          :date="$props.event.date"
          :time="$props.event.time"
          class="w-2/3"
        />
        <ViewForm
          label="日時"
          :value="printDate"
        />
        <p>範囲を指定</p>
        <AtomCheckbox />
        <ViewForm
          label="日時"
          :value="printDate"
        />
        <div class="flex justify-center">
          <AtomButton
            val="キャンセル"
            class="mr-4"
            @click="$emit('close')"
          />
          <AtomButton
            val="更新"
            class="mr-4"
          />
        </div>
      </div>
    </BaseModal>
</template>

<script lang="ts">
import Vue from 'vue'

import {Event} from "~/interfaces/event"

import CloseIcon from '~/components/icons/CloseIcon.vue';
import AtomLabel from '~/components/atoms/AtomLabel.vue';
import AtomButton from '~/components/atoms/AtomButton.vue';
import AtomInput from '~/components/atoms/AtomInput.vue'
import AtomInputLabel from '~/components/atoms/AtomInputLabel.vue'
import AtomInputMessage from '~/components/atoms/AtomInputMessage.vue'
import AtomCheckbox from '~/components/atoms/AtomCheckbox.vue';
import ViewForm from '~/components/molecules/ViewForm.vue';
import EventTags from '~/components/molecules/events/EventTags.vue';
import EventDateInput from '~/components/molecules/events/EventDateInput.vue';
import BaseModal from '~/components/organism/modals/BaseModal.vue'
export default Vue.extend({
  components: {
    BaseModal,
    CloseIcon,
    AtomLabel,
    ViewForm,
    AtomButton,
    AtomCheckbox,
    AtomInput,
    AtomInputLabel,
    AtomInputMessage,
    EventTags,
    EventDateInput
  },
  props: {
    event: { type: Object as Vue.PropType<Event>, required: true}
  },
  data() {
    return {
      title: '',
      url: null,
      fromDate: null,
      toDate: null,
      fromTime: null,
      toTime: null,
      reminds: [],
      tags: [],
      isOpenOnCalendar: true,
      detail: '',
      isCreateTagModalActive: false
    }
  },
  mounted() {
    this.$data.title=this.$props.event.name
    this.$data.tags=this.$props.event.tags
  },
  computed: {
    printDate():any {
      return this.$props.event.year + '/' + this.$props.event.month + '/' + this.$props.event.date
    }
  },
  methods: {
    // TODO イベントアップデート
    selectColor(): any {
      return "#" + Math.floor(Math.random() * 16777215).toString(16);
    },
    createTag() {
      this.$data.isCreateTagModalActive = true;
    }
  }

})
</script> 