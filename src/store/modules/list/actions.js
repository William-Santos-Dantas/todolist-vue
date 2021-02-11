export default {
    addItem({ commit }, item) {
        commit('add_item', item)
    },

    deleteItem({ commit }, id) {
        commit('delete_item', id)
    },

    updateItem({ commit }, item) {
        commit('update_item', item)
    }
}