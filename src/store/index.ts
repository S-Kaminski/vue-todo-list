import Vue from 'vue'
import Vuex, { Store } from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: [
      { id: "e7865dbc-db1b-4aec-8664-b41dcf46b92e" as string, description: "Lorem ipsum" as string, important: false as boolean },
      { id: "60a788bc-4364-49fa-a938-09213c16a53d" as string, description: "dolor sit amet" as string, important: false as boolean }
    ],
    selectedTasks: [] as string[]
  },
  getters: {
    tasks (state){
      return state.tasks;
    },
    taskCount(state){
      return state.tasks.length;
    }
  },
  mutations: {
    addNewTask(state, newTask){
      state.tasks.push({
        id: newTask.id,
        description: newTask.description,
        important: newTask.important
      })
    },
    changeImportanceOfSelectedTasks(state){
      state.selectedTasks.forEach((task) => {
        const index = state.tasks.findIndex(t=>t.id===task);
        if(state.tasks[index].important === true)
          state.tasks[index].important = false;
        else
          state.tasks[index].important = true;

      })
    },
    moveSelectedTasksUp(state){
      const selectedIndexes: number[] = []; 
      state.selectedTasks.forEach((value) => {
        selectedIndexes.push(state.tasks.findIndex(v=>v.id===value))
      })
      selectedIndexes.sort();
      selectedIndexes.forEach((taskIndex) => {
        if(taskIndex > 0 && !selectedIndexes.includes(taskIndex-1))
        {
          const changedPosition = taskIndex-1;
          const element = state.tasks.splice(taskIndex,1)[0];
          state.tasks.splice(changedPosition,0,element);
          selectedIndexes[selectedIndexes.indexOf(taskIndex)] = -1;
        }
      })
    },
    moveSelectedTasksDown(state){
      const selectedIndexes: number[] = []; 
      state.selectedTasks.forEach((value) => {
        selectedIndexes.push(state.tasks.findIndex(v=>v.id===value))
      })
      selectedIndexes.sort().reverse();
      selectedIndexes.forEach((taskIndex) => {
        if(taskIndex < state.tasks.length-1 && !selectedIndexes.includes(taskIndex+1))
        {
          const changedPosition = taskIndex+1;
          const element = state.tasks.splice(taskIndex,1)[0];
          state.tasks.splice(changedPosition,0,element);
          selectedIndexes[selectedIndexes.indexOf(taskIndex)] = -1;
        }
      })
    },
    removeSelectedTask(state,id){
      const index = state.tasks.findIndex(task=>task.id === id as string);
      state.tasks.splice(index,1);
      if(state.selectedTasks.includes(id))
        state.selectedTasks.splice(state.selectedTasks.indexOf(id),1);
    
    },
    removeTasks(state){ 
      state.selectedTasks.splice(0);
      state.tasks.splice(0);
    }
    
  },
  actions: {
  },
  modules: {
  }
})
