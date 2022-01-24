<template>
  <textarea
    ref="area"
    :name="name"
    :value="value"
    :placeholder="placeholder"
    :rows="rows"
    :cols="cols"
    @input="$emit('input', $data.text)"
  />
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    value: { type: String, required: true },
    name: { type: String, required: true },
    placeholder: { type: String, required: false },
    rows: { type: Number, required: false },
    cols: { type: Number, required: false }
  },
  data() {
    return {
      text: ''
    }
  },
  watch: {
    textareaVal() {
      this.adjustHeight();
    }
  },
  methods: {
    adjustHeight() {
      const textarea: any = this.$refs.area;
      const resetHeight = new Promise(function(resolve) {
        resolve(textarea.style.height = 'auto')
      });
      resetHeight.then(function(){
        textarea.style.height = textarea.scrollHeight + 'px'
      });
    },
    update(text:string) {
      this.$emit('input', text)
    }
  }
})
</script>