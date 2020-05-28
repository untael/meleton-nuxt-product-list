<template>
  <div class="purchase-display">
    <div class="purchase-display__navigation">
      <button @click="backToList">
        Back to list
      </button>
    </div>
    <purchase-card :purchase="purchase"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import Purchase from '../../src/classes/Purchase'
import { RootState, getters } from '../../store'
import PurchaseCard from '../../components/Purchase/PurchaseCard.vue'

@Component({
  components: { PurchaseCard },
})
export default class ProductDisplay extends Vue {

  get purchase () {
    const purchaseId: string = this.$route.params.id
    const purchase: Purchase = this.$store.getters['purchase'](purchaseId) as ReturnType<typeof getters.purchase>
    return purchase
  }

  backToList (): void {
    this.$router.push({ name: 'purchases' })
  }

  fetch ({ store, route }) {
    store.commit('SET_PURCHASES_DATA')
  }
}
</script>

<style lang="scss">
.purchase-display {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
