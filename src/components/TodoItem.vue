<template>
  <div>
    <b-list-group>
      <b-list-group-item 
        v-for="(item, index) in data" 
        :key="index">
        <input type="checkbox" id="checkbox" v-model="item.isCompleted">
        <span 
          class="title"
          :class="{isActive: item.isCompleted}">{{ item.title }}</span>
        <button 
          class="btn btn-danger btn-delete-right"
          @click="removeItem(index)">delete</button>
      </b-list-group-item>
  </b-list-group>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: {
    data: Array
  },
  data () {
    return {
      isCompleted: false
    }
  },
  methods: {
    ...mapActions([
      'removeItemAction'
    ]),
    removeItem (index) {
      this.removeItemAction(index)
    }
  }
}
</script>

<style>
  .list-group {
    margin: 15px
  }
  .title {
    position: absolute;
    left: 70px
  }
  .btn-delete-right {
    position: absolute;
    right: 0;
    top: 4px;
  }
  .isActive {
    text-decoration: line-through;
    color: rgba(175, 175, 175, 0.63);
  }
</style>