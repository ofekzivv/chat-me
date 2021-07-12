export default {

    setUsers: ((state, users) => {
        state.users = users;
        state.filteredUsers = users
    }),
    getFilteredUsers:(state, val) => {
        state.filteredUsers = state.users.filter(user => user.name.toLowerCase().match(val.toLowerCase()))
    }
}