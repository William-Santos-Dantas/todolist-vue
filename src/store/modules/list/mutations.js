export default {
    add_item(state, item) {
        state.items.push(item)
    },
    delete_item(state, id) {
        state.items = state.items.filter((item) => item.id != id)
    },
    update_item(state, item) {
        const index = state.items.findIndex(it => it.id == item.id)
        state.items[index] = item
        const items = [...state.items]
        state.items = {}
        state.items = items
    }
}