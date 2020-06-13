<template>
  <div id="app">
    <div>
      <h3 class="text-center p-4">ToDo App</h3>
    </div>
    <NewTodoItem/>
    <TodoList/>
    <HandleTodo/>
    
  </div>
</template>

<script>
import TodoList from './components/TodoList.vue'
import HandleTodo from './components/HandleTodo.vue'
import NewTodoItem from './components/NewTodoItem.vue'

export default {
  name: 'App',
  components:  {
    TodoList,
    HandleTodo,
    NewTodoItem
  }
}
</script>

<style>
  #app {
    height: 500px;
    width: 400px;
    background:rgba(250, 244, 244, 0.62);
    margin: 0 auto;
    height: auto;
  }
</style>
