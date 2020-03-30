import * as Pages from './pages'

const routes = [
  {
    name: '/',
    component: Pages.Home
  },
  {
    name: 'project',
    component: Pages.Projects
  },
  {
    name: 'project/:slug',
    component: Pages.Project
  },
  {
    name: 'projects',
    component: Pages.Projects
  },
  {
    name: '(.+?)',
    component: Pages.NotFound
  }
]

export { routes }