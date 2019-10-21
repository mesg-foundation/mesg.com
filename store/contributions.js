import { firestoreAction } from 'vuexfire'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyATgrQbIjFBb17pGNSvPKTrmiimphXItdc",
  authDomain: "mesg-29419.firebaseapp.com",
  databaseURL: "https://mesg-29419.firebaseio.com",
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
    await firebase.auth().signInAnonymously()
    firebase.auth().onAuthStateChanged(async user => {
      db.collection('contributions').add({
        ...contribution,
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
      })
    })
  }
}