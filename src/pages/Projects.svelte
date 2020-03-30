<script>
  export let currentRoute
  export let params
  import { Route } from 'svelte-router-spa'
  import Projects from '../components/Projects.svelte'
</script>
<svelte:head>
  <title>My Projects | Alo</title>
</svelte:head>
<div>
  <Route {currentRoute} {params} />
  <Projects />
</div>