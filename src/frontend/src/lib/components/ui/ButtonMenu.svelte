<script lang="ts">
	export let disabled = false;
	export let ariaLabel: string;
</script>

<button
	class="w-full text-left no-underline hover:text-blue-ribbon active:text-blue-ribbon"
	aria-label={ariaLabel}
	on:click
	{disabled}
	class:opacity-50={disabled}
>
	<slot />
</button>
