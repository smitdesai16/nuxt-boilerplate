<template>
	<footer class="container-xl bg-dark text-white">
		<div class="row">
			<div class="col-4">
				<h3>asd</h3>
				<ul class="list-unstyled">
					<li>
						<nuxt-link to="/">
							Home
						</nuxt-link>
					</li>
				</ul>
			</div>
			<div class="col-4">
				<h3>asd</h3>
			</div>
			<div class="col-4">
				<h3>asd</h3>
			</div>
		</div>
		<div class="row">
			<div class="col-md-6 text-center text-md-left">
				Logo here
			</div>
			<div class="col-md-6 text-center text-md-right">
				@{{ projectStartYear }} - {{ new Date().getFullYear() }} Localhost &reg;
			</div>
		</div>
	</footer>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class Footer extends Vue {
	projectStartYear: string | undefined

	constructor() {
		super()
		this.projectStartYear = process.env.PROJECT_START_YEAR
	}
}
</script>
