<template>
  <div class="todo-list">
    <p class="text-center">you have {{data.length}} pending items</p>
    <TodoItem :data="data"/>
  </div>
</template >

<script>
import TodoItem from './TodoItem.vue'
import { mapState } from 'vuex'
export default {
  components: {
    TodoItem
  },
  computed: {
    ...mapState([
      'data'
    ])
  }
}
</script>
