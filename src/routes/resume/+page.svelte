<script>
	import { data, title } from '@data/resume';

	import Chip from '$lib/components/Chip/Chip.svelte';
	import CommonPage from '$lib/components/CommonPage.svelte';
</script>

<CommonPage {title}>
	<div class="resume">
		{#if data}
			<div class="pdf-container">
				<object data={data} type="application/pdf" aria-label="Embedded PDF" class="pdf-object">
				</object>
			</div>
		{:else}
			<Chip>Ooops! no CV at the moment.</Chip>
		{/if}
	</div>
</CommonPage>

<style lang="scss">
	.resume {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 20px;
		padding: 1em;
		border-radius: 12px;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

		.pdf-container {
			width: 100%;
			max-width: 800px;
			height: 100vh;
			border: 1px solid #ddd;
			border-radius: 12px;
			overflow: hidden;

			.pdf-object {
				width: 100%;
				height: 100%;
			}
		}
	}
</style>
