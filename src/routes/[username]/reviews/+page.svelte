<script lang="ts">
	import SubjectCard from '$lib/components/SubjectCard.svelte';
	import type { PageProps } from './$types';
	import * as Dialog from '$lib/components/ui/dialog/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import { Textarea } from '$lib/components/ui/textarea/index.js';

	let { data }: PageProps = $props();
	let { presentedSubjects, nickname } = data;

	let reviewsText = $derived(
		presentedSubjects
			.map((s) => {
				return [
					`Name: ${s.name}`,
					`Release Time: ${s.release_time}`,
					`Completion Time: ${s.completion_time}`,
					`Rating: ${s.rating}`,
					`Tags: ${s.tags.join(', ')}`,
					`Comment: ${s.comment}`
				].join('\n');
			})
			.join('\n\n')
	);
</script>

<div class="container mx-auto max-w-7xl px-4 py-8">
	<div class="mb-8 flex items-center justify-between">
		<h1 class="text-3xl font-bold tracking-tight">{nickname}'s Reviews</h1>
		<div class="flex items-center gap-4">
			<Dialog.Root>
				<Dialog.Trigger>
					{#snippet child({ props })}
						<Button variant="outline" {...props}>Export Reviews</Button>
					{/snippet}
				</Dialog.Trigger>
				<Dialog.Content class="sm:max-w-[625px]">
					<Dialog.Header>
						<Dialog.Title>Export Reviews</Dialog.Title>
						<Dialog.Description>Copy the reviews content below.</Dialog.Description>
					</Dialog.Header>
					<div class="grid gap-4 py-4">
						<Textarea value={reviewsText} readonly class="h-[500px] font-mono" />
					</div>
					<Dialog.Footer>
						<Dialog.Close>
							{#snippet child({ props })}
								<Button variant="default" {...props}>Close</Button>
							{/snippet}
						</Dialog.Close>
					</Dialog.Footer>
				</Dialog.Content>
			</Dialog.Root>
			<div class="text-sm text-muted-foreground">
				{presentedSubjects.length} Anime with Comment
			</div>
		</div>
	</div>

	<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
		{#each presentedSubjects as presentedSubject}
			<SubjectCard {presentedSubject} />
		{/each}
	</div>
</div>
