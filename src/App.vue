<template>
  <div id="app">
    <TheHeader></TheHeader>
    <TheContainer></TheContainer>
    <TheFooter></TheFooter>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TheHeader from './components/TheHeader.vue';
import TheContainer from './components/TheContainer.vue';
import TheFooter from './components/TheFooter.vue';

@Component({
  components: {
    TheHeader,
    TheContainer,
    TheFooter,
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
