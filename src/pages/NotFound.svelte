<script>
  export let currentRoute
  export let params
  import { Route } from 'svelte-router-spa'
</script>

<div>
  <Route {currentRoute} {params} />
  <p>Uppss page not found.</p>
  <a href="/" class="nes-btn">Back</a>
</div>