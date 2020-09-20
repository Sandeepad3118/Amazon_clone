import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyDFuIBynqqQMKnNeDpJ9C7TwdeIKu2Vxvo",
  authDomain: "clone-d9731.firebaseapp.com",
  databaseURL: "https://clone-d9731.firebaseio.com",
  projectId: "clone-d9731",
  storageBucket: "clone-d9731.appspot.com",
  messagingSenderId: "268264229854",
  appId: "1:268264229854:web:18faded3f8ba9a4dda2b4f",
  measurementId: "G-8GE7N7HTZH",
}
const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
export { db, auth }
