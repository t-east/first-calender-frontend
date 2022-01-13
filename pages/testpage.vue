<template>
    <div>
      <div class="flex justify-center">
        <div class="my-12 py-8 px-16 rounded-lg bg-gray-100 w-1/2 shadow shadow-2xl border">
            <h1 class="text-2xl font-bold mb-8 text-green-600">
                ユーザ登録
            </h1>
            <div>
              <InputForm
                v-model="$data.userName"
                label="ユーザ名"
                placeholder="◎◎文字以内で入力してください"
                msg="注意書きです！！！！！！！！！！！！！！！！！！！！！！"
                class="mb-4"
              />
              <InputForm
                v-model="$data.email"
                label="メールアドレス"
                placeholder=""
                class="mb-4"
              />
              <InputForm
                label="パスワード"
                type="password"
                v-model="$data.password"
                placeholder="◎◎文字以内で入力してください"
                msg="注意書きです！！！！！！！！！！！！！！！！！！！！！！"
                class="mb-4"
              />
              <InputForm
                label="誕生日"
                type="date"
                v-model="$data.birthday"
                placeholder="◎◎文字以内で入力してください"
                msg="注意書きです！！！！！！！！！！！！！！！！！！！！！！"
                class="mb-4"
              />
              <AtomButton
                val="送信"
                @click="registerUser"
              />
            </div>
            <div>{{$data.test}}</div>
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
  },
  data() {
      return {
          test: '',
          userName: '',
          email: '',
          password: '',
          birthday: '',
      }
  },
  mounted() {
      // @ts-ignore
    this.$axios.$get(`api/user/`)
      .then((res:any) => {
        this.$data.test = res;
      });
  },
  methods: {
      async registerUser() {
      try {
        // @ts-ignore
        await this.$axios.$post('/api/user', {
          "email": this.$data.email,
          "password": this.$data.password,
          "user_name": this.$data.userName,
          "birthday": this.$data.birthday,
        });

      } catch (error) {
        console.log(error)
        return;
      }
    },
  }

})
</script>