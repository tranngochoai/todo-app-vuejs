<template>
  <div class="todo-list">
    <p class="text-center">you have 1 pending items</p>
    <TodoItem/>
  </div>
</template>

<script>
import TodoItem from './TodoItem.vue';
export default {
  components: {
    TodoItem
  }
}
</script>
