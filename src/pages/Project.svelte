<script>
  export let currentRoute
  export let params
  import { Route } from 'svelte-router-spa'
  import Project  from '../components/Project.svelte'
</script>

<div>
  <Route {currentRoute} {params} />
  <Project slug={currentRoute.namedParams.slug} />
</div>