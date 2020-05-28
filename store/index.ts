import Purchase from '~/src/classes/Purchase'
import { sortArray } from '../src/helpers/SortHelper'

const purchasesData = require('../data.json')
import { GetterTree, ActionTree, MutationTree } from 'vuex'

export const state = () => ({
  purchases: Array<Purchase>(),
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  purchases: (state): Purchase[] => state.purchases,
  purchase: (state) => (id: number): Purchase | undefined => {
    return state.purchases.find((purchase: Purchase) => purchase.id === +id)
  },
}

export const mutations: MutationTree<RootState> = {
  SET_PURCHASES_DATA: (state): void => {
    let mappedProducts = purchasesData.purchases.map(purchase => new Purchase(purchase))
    state.purchases = mappedProducts
  },

  SORT_PURCHASES: (state, payload: { sortKey: string, sortType: string }): void => {
    const sortedArray = sortArray(state.purchases, payload.sortKey, payload.sortType)
    state.purchases = sortedArray
  },

  ADD_PURCHASE: (state, payload: { purchase: Purchase }): void => {
    state.purchases.push(payload.purchase)
  },

  UPDATE_PURCHASE: (state, payload: { purchase: Purchase }): void => {
    let updatedPurchase = state.purchases.find((updatedPurchase: Purchase) => payload.purchase.id === updatedPurchase.id)
    Object.assign(updatedPurchase, payload.purchase)
  },

  DELETE_PURCHASE: (state, payload: { purchase: Purchase }): void => {
    state.purchases = state.purchases.filter((purchase: Purchase) => purchase.id !== payload.purchase.id)
  },
}

