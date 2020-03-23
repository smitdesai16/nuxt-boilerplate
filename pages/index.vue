<template>
	<div class="container-xl">
		<div class="row">
			<div class="col-12">
				<h1>
					Index {{ address }}
				</h1>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import IP from '@/model/ip'

@Component
export default class IndexPage extends Vue {
	async asyncData({ $axios } : { $axios: any; }) {
		try {
			const address = await $axios.$get('http://icanhazip.com', { timeout: 1000 })
			return new IP(address)
		} catch (exception) {
			return new IP('not found')
		}
	}
}
</script>

<style lang="scss" scoped>
h1 {
	color: $primaryColor;
}
</style>
