import firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/firebase-auth'
import 'firebase/storage'

require('firebase/firestore')
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyDeUsrsFhE7rjH4FJdppZQ10TZNkOXmLaA',
  authDomain: 'shop-3f3cc.firebaseapp.com',
  databaseURL: 'https://shop-3f3cc.firebaseio.com',
  projectId: 'shop-3f3cc',
  storageBucket: 'shop-3f3cc.appspot.com',
  messagingSenderId: '804570071814',
  appId: '1:804570071814:web:7aa1eed3b427a747d39487'
}
// Initialize Firebase//firebase.initializeApp(firebaseConfig
// export const fb = firebase.initializeApp(firebaseConfig)

// export const db = firebase.firestore()

const fb = firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()

export { fb, db }
