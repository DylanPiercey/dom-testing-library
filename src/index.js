import {getQueriesForElement} from './get-queries-for-element'
import * as queries from './queries'
import * as queryHelpers from './query-helpers'

export * from './queries'
export {getDefaultNormalizer} from './matches'
export * from './get-node-text'
export * from './get-queries-for-element'
export * from './query-helpers'
export * from './pretty-dom'
export {configure} from './config'

export {
  getQueriesForElement as within,
  // export query utils under a namespace for convenience:
  queries,
  queryHelpers,
}
