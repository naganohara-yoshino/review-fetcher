<script lang="ts">
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
	let { presentedSubjects } = data;
</script>

<div>
  {#each presentedSubjects as presentedSubject }
    <div>{presentedSubject.comment}</div>
  {/each}
</div>
