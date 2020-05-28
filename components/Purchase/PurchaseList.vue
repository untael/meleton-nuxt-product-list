<template>
  <div class="purchase-list">
    <purchase-card
      v-for="(purchase,i) in purchases"
      :key="i"
      :purchase="purchase"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import PurchaseCard from './PurchaseCard.vue'
import Purchase from '../../src/classes/Purchase'

@Component({
  components: { PurchaseCard },
})
export default class PurchaseList extends Vue {
  @Prop({ type: Array, required: true }) purchases!: Purchase
  @Prop({ type: Number, required: true }) pageNumber!: number

}
</script>

<style lang="scss">
.purchase-list {
  display: flex;
}
</style>
