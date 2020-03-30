<script>
  import { onMount } from 'svelte'
  import { getProject } from '../util/api'

  let response = {}
  let slugs = []

  onMount(() => {
    getProject()
      .then(async res => {
				response = await res.json()
        slugs = Object.keys(response.data)
      })
  })
</script>

<div id="projects">
		<p class="title">
			<a href="#projects">#</a>
			Projects
		</p>
		<p>
      Project that I have been working on (click for detail).
    </p>
		<ul class="nes-list is-circle">
			{#if slugs.length == 0}
				<li>...</li>
				<li>...</li>
			{:else}
				{#each slugs as slug}
					<li>
						<a href={"/project/"+slug}>{response.data[slug].title}</a>
					</li>
				{/each}
			{/if}
		</ul>
</div>