<script lang="ts">
	import SuccessButton from '$lib/success-button.svelte';
	import DangerButton from '$lib/danger-button.svelte';

	let count = 0;

	// actions
	const increment = () => count++;
	const decrement = () => count--;
	const reset = () => (count = 0);
</script>

<div>
	test section
</div>
