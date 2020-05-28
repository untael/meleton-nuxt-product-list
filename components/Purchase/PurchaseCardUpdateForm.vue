<template>
  <div class="purchase-card">
    <form @submit.prevent="save">
      <input required v-model="editedPurchase.name"/>
      <input required type="number" v-model="editedPurchase.price"/>
      <input required type="date" v-model="editedPurchase.purchase_date"/>
      <div>
        <button type="button" @click="$emit('cancel')">
          Cancel
        </button>
        <button type="submit" @click="$emit('updatePurchase', editedPurchase)">
          Save
        </button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import Purchase from '../../src/classes/Purchase'

@Component
export default class PurchaseCardUpdateForm extends Vue {
  @Prop({ type: Purchase }) purchase!: Purchase
  @Prop({ type: String }) mode!: 'create' | 'edit'

  editedPurchase: Purchase = new Purchase({
    id: 0,
    name: '',
    price: 0,
    purchase_date: '',
  })

  save (): void {
    if (this.mode === 'create') {
      this.$store.commit('ADD_PURCHASE', {purchase: this.editedPurchase})
      this.$router.push({ name: 'purchases' })
    } else {
      this.$emit('updatePurchase', this.editedPurchase)
    }
  }

  mounted () {
    if (this.purchase) {
      this.editedPurchase.id = this.purchase.id
      this.editedPurchase.name = this.purchase.name
      this.editedPurchase.price = this.purchase.price
      this.editedPurchase.purchase_date = this.purchase.purchase_date
    }
  }
}
</script>
