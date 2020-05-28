<template>
  <div>
    <h2>Create new purchase</h2>

    <purchase-card-edit-form
      mode="create"
      @cancel="$router.push({name: 'purchases'})"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import PurchaseCardEditForm
  from '../../components/Purchase/PurchaseCardUpdateForm.vue'

@Component({
  components: { PurchaseCardEditForm },
})
export default class CreatePurchase extends Vue {
}
</script>
