<template>
  <div>
    <div class="full bg-wheat">
      <div class="py-96 flex justify-center">
        <div>
          <h id="titlefont" class="text-8xl">Calendar App</h>
          <AtomButton
            val="キャンセル"
            class="mr-4"
            @click="$data.isRegisterModalActive=true"
          />
        </div>
      </div>
    </div>
    <RegisterModal
      v-if="$data.isRegisterModalActive"
      @close="$data.isRegisterModalActive=false"
      @register="register"
    />
  </div>
</template>

<script lang="ts">

import Vue from 'vue'
import InputForm from '~/components/molecules/InputForm.vue'
import AtomButton from '~/components/atoms/AtomButton.vue'
import RegisterModal from '~/components/organism/RegisterModal.vue'
export default Vue.extend({
  layout: 'welcome',
  components: {
    AtomButton,
    InputForm,
    RegisterModal
  },
  data() {
    return {
      isRegisterModalActive: false
    }
  },
  methods: {
    register() {
      this.$data.isRegisterModalActive=false
      this.$router.push('/event')
    }
  }

})
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Caveat');
  #titlefont{
    font-family: 'Caveat', cursive;
  }
  .full {
    position: relative;
    width: 100%;
    min-height: 100vh;
  }

</style>