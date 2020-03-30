import NProgress from 'nprogress'

NProgress.configure({
  showSpinner: false,
  template: '<div class="bar" role="bar"><progress class="nes-progress is-pattern" style="height: 10px;" value="100" max="100"></progress></div>'
});

export { NProgress }