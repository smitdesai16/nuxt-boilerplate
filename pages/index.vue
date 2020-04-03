<template>
	<div class="container-xl">
		<div class="row">
			<div class="col-12">
				<h1>
					Index {{ address }}
				</h1>
				<p class="text-right text-sm-center text-md-left text-lg-center text-xl-right">
					{{ baseUrl }} {{ $mq }}
				</p>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class IndexPage extends Vue {
	baseUrl: string | undefined
	address: string | undefined

	constructor() {
		super()
		this.baseUrl = process.env.BASE_URL
		this.address = ''
	}

	async mounted() {
		try {
			const value = await this.$axios.$get('https://icanhazip.com', { timeout: 1000 })
			this.address = value
		} catch (exception) {
			this.address = 'not found'
		}
	}

	head() {
		return {
			title: 'Smit Desai',
			meta: [
				{ hid: 'description', name: 'description', content: 'My custom description' }
			]
		}
	}
}
</script>

<style lang="scss" scoped>
h1 {
	color: $primaryColor;
}
</style>
