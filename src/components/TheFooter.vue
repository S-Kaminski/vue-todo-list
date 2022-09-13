<template>
    <div id="main">
        <br>
        <div id="leftColumn">
            <button @click="moveSelectedTasksUp">W górę</button>
            <button @click="moveSelectedTasksDown">W dół</button>
        </div>
        <div id="rightColumn">
            <button @click="changeToImportant">Oznacz jako ważne</button>
            <button @click="removeAllTasks">Wyczyść</button>
        </div>
      
    </div>
  </template>
  
  <script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';
  
  @Component
  export default class TheFooter extends Vue {
    public changeToImportant(): void {
        this.$store.commit('changeImportanceOfSelectedTasks');
    }
    public removeAllTasks(): void{
        this.$store.commit('removeTasks');
    }
    public moveSelectedTasksUp(): void{
        this.$store.commit('moveSelectedTasksUp');
    }
    public moveSelectedTasksDown(): void{
        this.$store.commit('moveSelectedTasksDown');
    }
  }
  </script>

  <style scoped>
div#main {
    margin-top: 5px;
    min-width: 60%;
    border: solid 1px;
    width: 50%;
    
    display: inline-block;
    padding: 0px 20px 0px 20px;
    font-size: 15px;
}
div#leftColumn {
    text-align: left;
    float:left;
    width: 50%;
}
div#rightColumn {
    text-align: right;
    float:right;
    width: 50%;
}

button{
    appearance:none;
    -webkit-appearance:none;padding:10px;
    border:solid 1px;
    font-weight:600;
    border-radius:1px;
    margin-left: 1%;
    margin-bottom: 5%;
    min-width: 100px;
}

button:hover{
    background-color:#3F51B5;
    color:#fff;
}
  </style>
  