<script>
	import '../app.postcss';
	import { AppShell,LightSwitch, AppBar } from '@skeletonlabs/skeleton'
</script>

<AppShell>
	<svelte:fragment slot="header">
		<AppBar>
			<svelte:fragment slot="lead">
				<strong class="text-xl uppercase">Blog Site</strong>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<slot />
	<svelte:fragment slot="footer">
		<AppBar>
			<svelte:fragment slot="trail">
				&copy; Stuff
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
</AppShell>

