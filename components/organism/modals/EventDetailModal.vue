
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
      <div class="flex justify-center text-2xl font-bold mb-4">{{ $props.event.name }}</div>
      <div class="px-16">
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
import AtomCheckbox from '~/components/atoms/AtomCheckbox.vue';
import ViewForm from '~/components/molecules/ViewForm.vue';
import BaseModal from '~/components/organism/modals/BaseModal.vue'
export default Vue.extend({
  components: {
    BaseModal,
    CloseIcon,
    AtomLabel,
    ViewForm,
    AtomButton,
    AtomCheckbox
  },
  props: {
    event: { type: Object as Vue.PropType<Event>, required: true}
  },
  computed: {
    printDate():any {
      return this.$props.event.year + '/' + this.$props.event.month + '/' + this.$props.event.date
    }
  },
  methods: {
    // TODO イベントアップデート
  }

})
</script> 