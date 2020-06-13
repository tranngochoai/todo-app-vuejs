<template>
  <div>
    <b-form @submit.prevent="onAddItem">
      <b-form-group
        id="input-group-1"
        label-for="input-1">
        <b-form-input
          class="w-75 d-inline-block ml-3"
          id="input-1"
          v-model="newText"
          type="text"
          required
          placeholder="Enter text">
          </b-form-input>
        <button 
          class="btn btn-primary float-right mr-3"
          @submit="onAddItem"> Add</button>
      </b-form-group>
    </b-form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      newText: ''
    }
  },
  methods: {
    ...mapActions([
      'addItem'
    ]),
    onAddItem (index) {
      const payload = {
        id: '1',
        title: this.newText,
        isCompleted: false
      }
      this.addItem(payload)
      this.newText = ''
    }
  }
}
</script>

<style >
</style>