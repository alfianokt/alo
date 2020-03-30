<script>
  import { onMount } from 'svelte'

  let scrollPos

  onMount(() => {
    document.addEventListener('scroll', () => {
      scrollPos = document.documentElement.scrollTop || document.body.scrollTop;
    })
  })
</script>

<header class:sticky={scrollPos > 50}>
  <div class="container">
    <div class="nav-brand">
      <a href="/">
        <h1><i class="snes-jp-logo brand-logo"></i>Alo</h1>
      </a>
      <p>Personal information website.</p>
    </div>
    <div class="social-buttons">
      <p>Contact me</p>
      <div class="share">
        <a href="mailto:alfianokt104@gmail.com" target="_blank" rel="norefere"><i class="nes-icon gmail"></i></a>
        <a href="https://facebook.com/alfianokt104" target="_blank" rel="norefere"><i class="nes-icon facebook"></i></a>
        <a href="https://instagram.com/alfian_oktafireza" target="_blank" rel="norefere"><i class="nes-icon instagram"></i></a>
        <a href="https://wa.me/6285155214271" target="_blank" rel="norefere"><i class="nes-icon whatsapp"></i></a>
      </div>
    </div>
  </div>
</header>