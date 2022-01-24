<template>
	<div>
		<div class="flex bg-white p-1">
				<div v-for="tag of $data.tagList" :key="tag.id">
					<Tag
						class="m-2"
						@delete="deleteTag"
						:tag="tag"
					/>
				</div>
				<NewTagModal
					class="m-2"
					@add-tag="createTag"
				/>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'

import { EventTag } from '~/interfaces/event';

import Tag from '~/components/atoms/Tag.vue'
import NewTagModal from '~/components/molecules/user/modal/NewTagModal.vue'

export default Vue.extend({
  components: {
    Tag,
		NewTagModal
  },
  props: {
    tags: { type: Array as Vue.PropType<EventTag[]>, required: true }
  },
  data() {
    return {
			title: null,
			tagList: [] as EventTag[],
			isCreateTagModalActive: false
    }
  },
	mounted() {
		this.$data.tagList=this.$props.tags
	},
  methods: {
		deleteTag(id: number) {
			console.log(id);
		},
		createTag(tag:EventTag) {
			
		}
  }

})
</script>