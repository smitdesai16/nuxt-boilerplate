<template>
	<div>
		<nuxt-link to="/">
			home
		</nuxt-link>
		<nuxt-link to="/about">
			about
		</nuxt-link>
		<nuxt />
	</div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class DefaultLayout extends Vue {

}
</script>
