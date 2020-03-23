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
