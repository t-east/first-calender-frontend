<template>
    <div class="flex bg-white p-1">
			<div v-for="tag of $data.tagList" :key="tag.id">
				<Tag
					class="m-2"
					@delete="deleteTag"
					:tag="tag"
				/>
			</div>
				<NewTag
					class="m-2"
					@dnew-tag="createTag"
				/>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

import { EventTag } from '~/interfaces/event';

import Tag from '~/components/atoms/Tag.vue'
import NewTag from '~/components/atoms/NewTag.vue'

export default Vue.extend({
  components: {
    Tag,
    NewTag,
  },
  props: {
    tags: { type: Array as Vue.PropType<EventTag[]>, required: true }
  },
  data() {
    return {
			title: null,
      tagList: [] as EventTag[]
    }
  },
	watch: {
		tags(value) {
			this.$data.tagList=value;
		}
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