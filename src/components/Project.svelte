<script>
	export let slug
  import { onMount } from 'svelte'
  import { converter } from '../util/showdown'
  import { getFromSlug } from '../util/api'

  let response = {}

  onMount(() => {
    getFromSlug(slug)
      .then(async res => {
				response = await res.json()
      })
  })
</script>

<svelte:head>
  <title>Project { Object.keys(response) == 0 ? '"..."' : response.data[0].title } | Alo</title>
</svelte:head>

<div id="projects">
		<p class="title">
			<a href="#projects">#</a>
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