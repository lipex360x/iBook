import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'

import { BookProps } from '@/entities'

@Module({ name: 'books', stateFactory: true, namespaced: true })
export default class Books extends VuexModule {
  private books = [] as BookProps[]

  public get $count() {
    return this.books
  }

  // @Action
  // public async index() {}

  // @Action
  // public async create() {}

  // @Action
  // public async show() {}

  // @Action
  // public async update() {}

  // @Action
  // public async destroy() {}
}
