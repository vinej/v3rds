import Task from "../models/Task";
import { findIndex } from "lodash";

const taskStore = {
  namespaced: true,
  state: {
    tasks: [
      {
        name: "Demo for VueJS and TS 2",
        createdAt: new Date(),
        updatedAt: new Date(),
        completed: false
      },
      {
        name: "UI design",
        createdAt: new Date(),
        updatedAt: new Date(),
        completed: "as false"
      }
    ] as Task[]
  },
  mutations: {
    setTask( state:any, task: Task) 
    { 
      const ltasks: Task[] = state.tasks;
      state.tasks.push(task) 
    },
    deleteTask(state: any, task: Task) 
    {
      const ltasks: Task[] = state.tasks;
      const taskIndex = findIndex(ltasks, task);
      ltasks.splice(taskIndex, 1);
    },
    completeTask(state: any, task: Task) {
      const ltasks: Task[] = state.tasks;
      const taskIndex = findIndex(ltasks, task);
      ltasks[taskIndex].completed = !ltasks[taskIndex].completed;
    }
  },
  actions: {
    echo(state: any) { alert('ok') }
  },
  modules: {}
};

const namespace = 'taskStore/'
export const tasks: any = {
  completeTask: namespace + taskStore.mutations.completeTask.name,
  setTask:namespace + taskStore.mutations.setTask.name,
  deleteTask:namespace + taskStore.mutations.deleteTask.name,
  echo:namespace + taskStore.actions.echo.name,
}


export default taskStore;