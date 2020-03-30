<script>
	export let slug
  import { onMount } from 'svelte'
  import { converter } from '../util/showdown'
  import { getFromSlug } from '../util/api'

	let title = "..."
  let response = {}

  onMount(() => {
    getFromSlug(slug)
      .then(async res => {
				response = await res.json()
      })
	})

	$: title = () => {
		return Object.keys(response).length != 0 ?
			response.code == 200 ?
				response.data[0].title :
				"tidak ditemukan!" :
			'"..."'
	}
</script>

<svelte:head>
  <title>Project {title()} | Alo</title>
</svelte:head>

<div id="project">
		<p class="title">
			<a href="#project">#</a>
			Project
		</p>
		{#if Object.keys(response) == 0}
			<p>...</p>
		{:else}
			{#if response.code == 200}
				{@html converter.makeHtml(response.data[0].description)}
			{:else}
				<p>Project tidak ditemukan!</p>
			{/if}
		{/if}
</div>