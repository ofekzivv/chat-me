export default {
    filterSomething: ((state, value)=> {
        return state.users.filter(user => user.name.match(value))
    })
}