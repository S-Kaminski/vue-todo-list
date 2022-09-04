<template>
    <div>
      <div class="container">
        <span class="count-label">Liczba zadań:</span>
        <span class="counter"> {{ $store.getters.taskCount }}</span>
      </div>
      
    </div>
  </template>
  
  <script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';
  
  @Component
  export default class HeaderComponent extends Vue {
    
  }
  </script>

  <style scoped>
    div.container {
      min-width: 60%;
      border: solid 1px;
      width: 50%;
      display: inline-block;
      text-align: right;
      padding: 20px;
      font-size: 20px;
    }
    div span.counter{
      font-weight: bold;
    }
  </style>
  