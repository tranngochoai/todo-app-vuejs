<template>
  <div id="app">
    <div>
      <h3 class="text-center p-4">ToDo App</h3>
    </div>
    <TodoList/>
    <TodoItem/>
    <HandleTodo/>
    <NewTodoItem/>
  </div>
</template>

<script>
import TodoList from './components/TodoList.vue'
import TodoItem from './components/TodoItem.vue'
import HandleTodo from './components/HandleTodo.vue'
import NewTodoITem from './components/NewTodoItem.vue'

export default {
  name: 'App',
  components:  {
    TodoList,
    TodoItem,
    HandleTodo,
    NewTodoITem
  }
}
</script>

<style>
  #app {
    height: 500px;
    width: 400px;
    background: rgb(207, 205, 205);
    margin: 0 auto
  }
</style>
