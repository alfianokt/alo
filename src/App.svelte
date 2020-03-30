<script>
	import { Router } from 'svelte-router-spa'
  import { routes } from './routes'
	import Header from './components/Header.svelte'
	import Footer from './components/Footer.svelte'
	import Contact from './components/Contact.svelte'
</script>

<Header />
<div class="container">
	<div class="main-content">
		<Router {routes} />
		<div style="margin-top: 25px;">
			<Contact />
		</div>
	</div>
		<Footer />
</div>