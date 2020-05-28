<template>
  <div class="purchase-card">
    <div class="purchase-card--title">
      Name: {{purchase.name}}
    </div>
    <div class="purchase-card--price">
      Price: {{purchase.price}} $
    </div>
    <div class="purchase-card--purchase-date">
      Bought: {{purchase.purchase_date}}
    </div>
    <div class="purchase-card--controls">
      <button v-if="$route.name !== 'purchases-id'" @click="$emit('viewPurchase')">
        View
      </button>
      <button @click="$emit('editPurchase')">
        Edit
      </button>
      <button @click="$emit('deletePurchase')">
        Delete
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import Purchase from '../../src/classes/Purchase'

@Component({

})
export default class PurchaseCardDisplayForm extends Vue {
  @Prop({ type: Purchase }) purchase!: Purchase
}
</script>
