<template>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

@Component
export default class Index extends Vue {
  created () {
    this.$router.push({ name: 'purchases' })
  }
}
</script>

