import firestore from '../../middleware/firebase/firestore/users'
import firebaseInstance from '../../middleware/firebase';

export default {
    getUsers: async ({commit}, uid) => {
        const users = await firestore.getAllUsers();
        let newArray = [];

        for (let i = 0; i < users.length; i++) {
            let index = users[i];
            if (index.uid !== uid) {
                newArray.push(index)
            }
        }
        commit('setUsers', newArray)
    },
}