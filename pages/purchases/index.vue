<template>
  <div class="shopping-list" v-if="purchases.length">
    <div>
      <button @click="$router.push({name: 'purchases-create'})">
        Create
      </button>
    </div>

    <div class="shopping-list--button">
      <button @click="sortByDate">
        Sort by date
      </button>
      <button @click="sortByPrice">
        Sort by price
      </button>
    </div>

    <div class="shopping-list__content">
      <button
        class="shopping-list__pagination-button"
        @click="prevPage"
      >
        ❮
      </button>
      <purchase-list
        :purchases="paginatedPurchases"
        :pageNumber="pageNumber"
      />
      <button
        class="shopping-list__pagination-button"
        @click="nextPage"
      >
        ❯
      </button>
    </div>
  </div>
  <div class="shopping-list" v-else>
    You have no any purchase. Come back after you spend your money :3
    <div>
      <button @click="$router.push({name: 'purchases-create'})">
        Create
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import PurchaseList from '../../components/Purchase/PurchaseList.vue'
import { RootState, mutations, getters } from '../../store'
import Purchase from '../../src/classes/Purchase'

@Component({
  components: { PurchaseList },
})
export default class Purchases extends Vue {

  pageNumber: number = 0
  purchasesPerPageCount: number = 2
  sortedByDate: boolean = false
  sortedByPrice: boolean = false

  nextPage (): void {
    if (this.pageNumber < this.pageCount - 1) this.pageNumber++
  }

  prevPage (): void {
    if (this.pageNumber !== 0) this.pageNumber--
  }

  sortByPrice (): void {
    this.sortedByPrice = !this.sortedByPrice
    if (this.sortedByPrice) {
      this.$store.commit('SORT_PURCHASES', {
        sortKey: 'price',
        sortType: 'asc',
      })
    } else {
      this.$store.commit('SORT_PURCHASES', {
        sortKey: 'price',
        sortType: 'desc',
      })
    }
  }

  sortByDate (): void {
    this.sortedByDate = !this.sortedByDate
    if (this.sortedByDate) {
      this.$store.commit('SORT_PURCHASES', {
        sortKey: 'purchase_date',
        sortType: 'asc',
      })
    } else {
      this.$store.commit('SORT_PURCHASES', {
        sortKey: 'purchase_date',
        sortType: 'desc',
      })
    }
  }

  get purchases (): Purchase[] {
    return this.$store.getters['purchases'] as ReturnType<typeof getters.purchases>
  }

  get pageCount (): number {
    return Math.ceil(this.purchases.length / this.purchasesPerPageCount)
  }

  get start (): number {
    return this.pageNumber * this.purchasesPerPageCount
  }

  get end (): number {
    return this.start + this.purchasesPerPageCount
  }

  get paginatedPurchases (): Purchase[] {
    let paginatedPurchases: Purchase[] = this.purchases
    let purchases: Purchase[] = paginatedPurchases.slice(this.start, this.end)
    if (!purchases.length && this.purchases.length) {
      this.prevPage()
      purchases = paginatedPurchases.slice(this.start, this.end)
    }
    return purchases
  }
}
</script>

<style lang="scss">
.shopping-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  &--button {
    padding: 5px;
  }
  &__content {
    display: flex;
    align-items: center;

    .shopping-list__pagination-button {
      width: 40px;
      height: 40px;
      background-color: lightgrey;
      transition: ease-in-out background-color 0.2s;
      border: 1px solid transparent;
      border-radius: 50%;
    }
    button:hover {
      outline: none;
      transition: ease-in-out background-color 0.2s;
      background-color: grey;
    }
  }
}
</style>
