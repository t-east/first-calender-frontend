<template>
    <div>
      <div class="flex justify-center">
        <div class="my-12 py-8 px-16 bg-gray-100 w-1/2 shadow shadow-2xl border">
            <h1 class="text-xl font-bold mb-8 text-yellow-600">
                ユーザ登録
            </h1>
            <div>
              <InputForm
                label="asdf"
                placeholder="asdf"
                msg="sdfssss"
              />
            </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import InputForm from '~/components/molecules/InputForm.vue'
import AtomButton from '~/components/atoms/AtomButton.vue'
export default Vue.extend({
  components: {
    AtomButton,
    InputForm
  }

})
</script>