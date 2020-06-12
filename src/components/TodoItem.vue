<template>
  <div>
    <b-list-group>
      <b-list-group-item>
        <input type="checkbox" id="checkbox" v-model="isCompleted">
        <span class="title">Cras justo odio</span>
        <button class="btn btn-danger btn-delete-right">delete</button>
      </b-list-group-item>
  </b-list-group>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isCompleted: false
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
</style>