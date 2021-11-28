import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'

import { BookProps } from '@/entities'
import { $axios } from '@/utils/nuxt-instance'

interface ShowProps {
  id: number
}

@Module({ name: 'books', stateFactory: true, namespaced: true })
export default class Books extends VuexModule {
  private books = [] as BookProps[]
  private book = {} as BookProps

  public get $all() {
    return this.books
  }

  public get $single() {
    return this.book
  }

  @Mutation
  SET_SINGLE(book: BookProps) {
    this.book = book
  }

  @Mutation
  SET_ALL(books: BookProps[]) {
    this.books = books
  }

  @Action
  public async index() {
    const books = await $axios.$get('/books')
    this.context.commit('SET_ALL', books)
  }

  @Action
  public async show({ id }: ShowProps) {
    const book = await $axios.get(`/books/${id}`)
    this.context.commit('SET_SINGLE', book)
  }
}
