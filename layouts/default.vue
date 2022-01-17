<template>
  <div class="font-family">
    <header class="fixed w-full top-0 flex items-center bg-wheat flex-wrap z-50">
      <div class="flex-1 ml-4 my-4">
        <NuxtLink to="/datsumo" class="text-col_14 text-moca font-bold text-xl">
          スケジュール管理アプリ（仮題）
        </NuxtLink>
      </div>
      <div class="inline-flex pr-4 md:pr-8">
        <div class="inline-flex cursor-pointer text-white " @click="$data.isUserMenuActive=!$data.isUserMenuActive">
          <div class="hidden md:inline-flex md:w-auto">
            ユーザ名
          </div>
					<ChevronDownIcon />
        </div>
      </div>
    </header>
    <div class="flex">
			<UserMenuModal
			  v-if="$data.isUserMenuActive"
				class="absolute"
				@close="$data.isUserMenuActive=false"
			/>
      <Nuxt class="mt-16" />
    </div>
    <footer class="bg-gray-50 pt-8">
      <div class="px-8">
        <div v-for="(menu, idx) in $data.footMenus" :key="idx">
          <NuxtLink :to="menu.to" class="w-full flex items-center py-4 cursor-pointer">
            <p class="text-gray-400 w-full">
              {{ menu.name }}
            </p>
            <div class="flex justify-end">
              aa
            </div>
          </NuxtLink>
        </div>
      </div>
      <div class="w-full pt-30px pb-40px text-center text-10px text-gray-400">
        Copyright © {{ new Date().getFullYear() }}  駅近ドットコム All Rights Reserved.
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import UserMenuModal from '~/components/molecules/user/modal/UserMenuModal.vue'
import ChevronDownIcon from '~/components/icons/ChevronDownIcon.vue'

export default Vue.extend({
  components: {
		UserMenuModal,
		ChevronDownIcon
  },
  data() {
    return {
      isUserMenuActive: false,
    };
  },
  methods: {}
});
</script>

<style scoped>
.font-family {
  font-family: 'Hiragino Kaku Gothic ProN';
}
</style>
