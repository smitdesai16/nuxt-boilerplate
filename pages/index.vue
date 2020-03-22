<template>
	<div class="container">
		<div class="row">
			<div class="col-12">
				<h1>
					Index
				</h1>
				<img v-lazy="'https://upload.wikimedia.org/wikipedia/commons/3/3f/Fronalpstock_big.jpg'" class="img-fluid">
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class IndexPage extends Vue {

}
</script>
