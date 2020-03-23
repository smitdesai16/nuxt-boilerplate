<template>
	<div>
		<NavBar />
		<nuxt />
	</div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import NavBar from '@/components/NavBar.vue'

@Component({
	components: { NavBar }
})
export default class DefaultLayout extends Vue {

}
</script>

<style lang="scss">
html.wf-opensans-n4-active body {
	font-family: 'Open Sans';
}

html.wf-barlow-n6-active h1 {
	font-family: 'Barlow';
}
</style>
