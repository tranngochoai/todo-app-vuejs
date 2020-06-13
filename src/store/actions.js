export default {
  addItem: ({ commit }, payload) => {
    commit('addItem', payload)
  },
  removeItemAction: ({ commit }, index) => {
    commit('removeItem', index)
  },
  setCompletedAction: ({ commit }, payload) => {
    commit('setCompletedMutation', payload)
  },
  deleteAllAction: ({ commit }) => {
    commit('deleteAllManution')
  }
}