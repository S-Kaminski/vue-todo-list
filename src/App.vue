<template>
  <div id="app">
    <HeaderComponent></HeaderComponent>
    <ContainerTemplate></ContainerTemplate>
    <FooterComponent></FooterComponent>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HeaderComponent from './components/HeaderComponent.vue';
import ContainerTemplate from './components/ContainerTemplate.vue';
import FooterComponent from './components/FooterComponent.vue';

@Component({
  components: {
    HeaderComponent,
    ContainerTemplate,
    FooterComponent,
  },
})
export default class App extends Vue {}
</script>

<style>
#app {
  width: 70%;
  margin: 0 auto;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
