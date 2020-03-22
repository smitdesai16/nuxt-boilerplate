/* eslint-disable no-debugger */
/* eslint-disable no-console */
<template>
	<div class="container">
		<div class="row">
			<div class="col-12">
				<button>
					Click
				</button>
				<h1>
					Index : {{ ip }}
				</h1>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class IndexPage extends Vue {
	async asyncData({ $axios } : { $axios: any; }) {
		const ip = await $axios.$get('http://icanhazip.com')
		return { ip }
	}
}
</script>
