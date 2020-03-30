/**
 * endpoint
 *
 * get project
 *  action=getProject
 * get project detail
 *  action=getFromSlug&slug=<slug>
 */
import {NProgress} from './nprogress'

const url = 'https://script.google.com/macros/s/AKfycbydLZfefnT_3_SDy9ibV-gQScbTokNmF9QBIalFt32J3yBExCqq/exec'

const getProject = async () => {
  NProgress.start()
  const req = await fetch(url + '?action=getProject')
  NProgress.done()
  return req
}

const getFromSlug = async (slug) => {
  NProgress.start()
  const req = await fetch(url + '?action=getFromSlug&slug=' + slug)
  NProgress.done()
  return req
}

export { getProject, getFromSlug}