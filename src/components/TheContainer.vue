<template>
    <div class="container">

            <span class="list-label">Lista zadań:</span><br>
            <span id="taskSpn">
                <input type="text" placeholder="Opis zadania" id="description" ref="description"/>
            <button @click="addNewTask" id="addTask">+ Dodaj</button>
            </span>
            <span id="importantSpn">
                <input type="checkbox" name="important" ref="important"/><label for="important">Ważne</label><br>
            </span>
            

            <ul>
                <li v-for="(task,index) in $store.getters.tasks" :key="task.id" class="single-task" :class="{ 'important':  task.important}"> 
                <input type="checkbox" @change="selectTask($event)" :id='task.id' :value='task.id' v-model="$store.state.selectedTasks"/>
                    {{ index+1 }}. {{ task.description }} 
                <button class="remover" @click="removeTask(task.id)">X</button>
        </li>
      </ul>
      <br>
    </div>
    
  </template>
  
  <script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';
  import { v4 as uuidv4 } from 'uuid';

  @Component
  export default class TheContainer extends Vue {
    data() {
        return {
            
        }
    }
    public addNewTask(): void {
        this.$store.commit('addNewTask',{
            id: uuidv4() as string,
            description: (this.$refs.description as HTMLInputElement).value,
            important: (this.$refs.important as HTMLInputElement).checked
        })
        console.log("Nowe zadanie zostało dodane. UUID: " + uuidv4());
    }
    public removeTask(id: string): void {
        this.$store.commit('removeSelectedTask',id);
        console.log("Usunięto zadanie "+ id);
    }
    public selectTask(e): void {
        this.$nextTick( ()=> {
            console.log("Zaznaczono zadanie "+ e.target.value)
        })
        

    }
    
  }
  </script>

  <style scoped>
div.container {
    margin-top: 5px;
    min-width: 60%;
    border: solid 1px;
    width: 50%;
    display: inline-block;
    padding: 20px;
    font-size: 15px;
}
span.list-label{
    text-decoration: underline;
    text-align: left;
    display: block;
    font-size: 15px;
}
input#description {
    padding: 10px;
    margin: 10px 0;
    border: 2px solid rgb(199, 199, 199);
    width: 30%;
    font-size:15px;    
}
button#addTask {
    appearance:none;
    -webkit-appearance:none;padding:10px;
    border:solid 1px;
    
    font-weight:600;
    border-radius:1px;
    width: 15%;
    margin-left: 1%;
}
button#addTask:hover{
    background-color:#3F51B5;
    color:#fff;

    
}
span#taskSpn{
    width:100%;
    text-align: left;
    float:left;
}
span#importantSpn {
    display:block;
    margin: 0 auto;
    float:left;
    margin: 10px 10px;
    padding-bottom: 15px;
   
}
ul {
    clear: left;
    text-align: left;
    margin: 0;
    padding: 0;
    list-style-type: none;
    width: 100%;
}
li.single-task {
    padding: 10px;
    border-bottom: 1px solid #dddddd;
}
button.remover {
    color: red;
    padding: 0;
    border: none;
    background: none;
    float: right;
    font-size: 13px;
}

button.remover:hover {
    font-weight: bold;
    
    border-style: dotted;

}
li.single-task.important {
    color: red;
}

  </style>
  