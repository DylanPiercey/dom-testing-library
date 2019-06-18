import {JSDOM} from 'jsdom'

// In server side tests we use JSDOM to parse the html.
export function prepareContainer(html) {
  return JSDOM.fragment(html)
}
