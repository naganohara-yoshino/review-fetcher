<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import * as Card from '$lib/components/ui/card/index.js';
	import * as Field from '$lib/components/ui/field/index.js';
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';

	const id = $props.id();

	let username: string | undefined = $state();
</script>

<Card.Root class="mx-auto w-full max-w-sm">
	<Card.Header>
		<Card.Title class="text-2xl">Get Reviews</Card.Title>
		<Card.Description>Enter your username below to get your public anime reviews</Card.Description>
	</Card.Header>
	<Card.Content>
		<form
			onsubmit={(e) => {
				e.preventDefault();
				if (username !== undefined) {
					goto(resolve('/[username]/reviews', { username }));
				}
			}}
		>
			<Field.Group>
				<Field.Field>
					<Field.Label for="username-{id}">Username</Field.Label>
					<Input id="username-{id}" type="text" placeholder="sai" required bind:value={username} />
				</Field.Field>
				<Field.Field>
					<Button type="submit" class="w-full">Go</Button>
				</Field.Field>
			</Field.Group>
		</form>
	</Card.Content>
</Card.Root>
