<template>
  <div class="text-center my-5">
      <button 
        class="btn" 
        @click="showCompleted">
        {{!isShowCompleted ? 'show completed' : 'Show All' }}
      </button>
      <button class="btn" @click="deleteAllData">clear all</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      isShowCompleted: false
    }
  },
  methods: {
    ...mapActions([
      'setCompletedAction',
      'deleteAllAction'
    ]),
    showCompleted () {
      let { isShowCompleted, setCompletedAction } = this
      if(!isShowCompleted)
        setCompletedAction()
      isShowCompleted = ! isShowCompleted
    },
    deleteAllData () {
      this.deleteAllAction()
    }
  }
}
</script>