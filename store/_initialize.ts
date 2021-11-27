import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'

import Books from './books'

let books: Books

const initialize = (store: Store<any>): void => {
  books = getModule(Books, store)
}

export { initialize, books }
