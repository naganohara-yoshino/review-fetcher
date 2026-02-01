<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import type { PresentedSubject } from '$lib/schemas/presented-subject';

	let { presentedSubject }: { presentedSubject: PresentedSubject } = $props();
</script>

<Card.Root class="h-full w-full transition-all hover:shadow-md">
	<Card.Header>
		<div class="flex items-start justify-between">
			<div class="space-y-1">
				<Card.Title
					class="text-xl leading-tight font-bold decoration-primary/30 decoration-2 hover:underline"
				>
					{presentedSubject.name}
				</Card.Title>
				<Card.Description class="text-xs">
					Released: {presentedSubject.release_time}
				</Card.Description>
			</div>
			<div
				class="mx-4 flex h-8 min-w-8 items-center justify-center rounded-md bg-primary/10 px-1.5 text-sm font-bold text-primary shadow-sm"
			>
				{presentedSubject.rating}
			</div>
		</div>
	</Card.Header>
	<Card.Content class="flex grow flex-col gap-4">
		<div class="text-sm text-muted-foreground">
			<span class="font-medium text-foreground/80">Completed:</span>
			{presentedSubject.completion_time}
		</div>

		{#if presentedSubject.comment}
			<p class="line-clamp-4 text-sm leading-relaxed text-muted-foreground italic">
				"{presentedSubject.comment}"
			</p>
		{/if}

		<div class="mt-auto flex flex-wrap gap-2 pt-2">
			{#each presentedSubject.tags as tag}
				<span
					class="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground transition-colors hover:bg-secondary/80"
				>
					#{tag}
				</span>
			{/each}
		</div>
	</Card.Content>
</Card.Root>
