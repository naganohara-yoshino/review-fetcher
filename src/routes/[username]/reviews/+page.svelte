<script lang="ts">
	import SubjectCard from '$lib/components/SubjectCard.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
	let { presentedSubjects, nickname } = data;
</script>

<div class="container mx-auto max-w-7xl px-4 py-8">
	<div class="mb-8 flex items-center justify-between">
		<h1 class="text-3xl font-bold tracking-tight">{nickname}'s Reviews</h1>
		<div class="text-sm text-muted-foreground">
			{presentedSubjects.length} Anime with Comment
		</div>
	</div>

	<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
		{#each presentedSubjects as presentedSubject}
			<SubjectCard {presentedSubject} />
		{/each}
	</div>
</div>
