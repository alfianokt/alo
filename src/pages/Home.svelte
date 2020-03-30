<script>
  export let currentRoute
  export let params
  import { Route } from 'svelte-router-spa'
  import About from '../components/About.svelte'
  import Skills from '../components/Skills.svelte'
  import Projects from '../components/Projects.svelte'
</script>
<svelte:head>
  <title>Welcome | Alo</title>
</svelte:head>
<div>
  <Route {currentRoute} {params} />
  <About />
  <Skills />
  <Projects />
</div>