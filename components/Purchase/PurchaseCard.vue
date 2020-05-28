<template>
  <div v-if="purchase">
    <purchase-card-display-form
      v-if="displayMode"
      :purchase="purchase"
      @editPurchase="editPurchase"
      @deletePurchase="deletePurchase"
      @viewPurchase="viewPurchase"
    />
    <purchase-card-update-form
      v-if="editMode"
      :purchase="purchase"
      mode="edit"
      @cancel="displayPurchase"
      @updatePurchase="updatePurchase"
    />
  </div>
  <div v-else style="padding: 20px">
    Wrong link
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import Purchase from '../../src/classes/Purchase'
import PurchaseCardDisplayForm from './PurchaseCardDisplayForm.vue'
import PurchaseCardUpdateForm from './PurchaseCardUpdateForm.vue'

@Component({
  components: { PurchaseCardUpdateForm, PurchaseCardDisplayForm },
})
export default class PurchaseCard extends Vue {
  @Prop({ type: Purchase }) purchase!: Purchase

  displayMode: boolean = true
  editMode: boolean = false

  displayPurchase (): void {
    this.displayMode = true
    this.editMode = false
  }

  editPurchase (): void {
    this.displayMode = false
    this.editMode = true
  }

  updatePurchase (purchase: Purchase): void {
    this.$store.commit('UPDATE_PURCHASE', { purchase: purchase })
    this.displayPurchase()
  }

  deletePurchase (): void {
    this.$store.commit('DELETE_PURCHASE', { purchase: this.purchase })
    this.$router.push({
      name: 'purchases',
    })
  }

  viewPurchase (): void {
    this.$router.push({
      name: 'purchases-id',
      params: { id: `${this.purchase.id}` },
    })
  }
}
</script>

<style lang="scss">

</style>
