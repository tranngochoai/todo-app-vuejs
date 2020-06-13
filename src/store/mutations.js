export default {
  addItem: (state, payload) => {
    state['data'].push(payload)
  },
  removeItem: (state, index) => {
    state['data'].splice(index, 1)
  },
  setCompletedMutation: (state, isCompleted) => {
    let newItem = [...state['data']]
    state['data'] = newItem.filter(item => item.isCompleted)
      
  },
  deleteAllManution: (state) => {
    state['data'] = []
  }
}