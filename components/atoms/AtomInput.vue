<template>
  <input
    ref="input"
    class="border border-gray-400 rounded px-1 py-1 w-full"
    :placeholder="$props.placeholder"
    :disabled="$props.disabled"
    :value="$props.value"
    :type="$props.type"
    @input="$emit('input', $event.target.value)"
    @change="$emit('change', $event.target.value)"
    @blur="$emit('blur', $event.target.value)"
    @keyup.enter="$emit('onEnter')"
  >
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    disabled: { type: Boolean, required: false, default: false },
    value: { type: [String, Date, Number], required: false, default: null },
    placeholder: { type: String, required: false, default: '' },
    type: { type: String, required: false, default: '' }
  },
  methods: {
    focus (): void {
      const input: any = this.$refs.input
      input.focus()
    }
  }
})
</script>