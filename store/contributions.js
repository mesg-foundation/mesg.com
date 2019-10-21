import { firestoreAction } from 'vuexfire'
import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  projectId: "mesg-29419",
}

const db = firebase
  .initializeApp(firebaseConfig)
  .firestore()

export const states = () => ({
  list: []
})

export const getters = {
  all: (state) => state.list
}

export const actions = {
  bind: firestoreAction(({ bindFirestoreRef }) => {
    return bindFirestoreRef(
      'list',
      db.collection('contributions').orderBy('createdAt', 'desc')
    )
  }),
  create: async ({ }, contribution) => {
    collection.add({
      ...contribution,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    })
  }
}