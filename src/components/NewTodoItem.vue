<template>
  <div>
    <b-form @submit.prevent="onSubmit">
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
        <button class="btn btn-primary float-right mr-3"> Add</button>
      </b-form-group>
    </b-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      newText: ''
    }
  },
  methods: {
    onSubmit () {

    }
  }
}
</script>

<style >
</style>