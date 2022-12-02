import firebase from 'firebase/compat/app'
import 'firebase/compat/database'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'

// const admin = require('firebase-admin')

// const serviceAccount = require('../serviceAccountKey.json')

let firebaseConfig = {}

firebaseConfig = {
    apiKey: ' AIzaSyDahAZLP3Fe68j9C-7ZT9i0nAqiQWXhs_4',
    authDomain: 'tracknerd-staging.firebaseapp.com',
    databaseURL: 'https://tracknerd-staging-default-rtdb.firebaseio.com',
    projectId: 'allycare-prod',
    storageBucket: 'tracknerd-staging.appspot.com',
    appId: '1:847967007196:web:ae4df284f5560af4139f19'
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
// admin.initializeApp({
//     credential: admin.credential.cert(serviceAccount),
//     databaseURL: 'https://rootallyai-default-rtdb.firebaseio.com'
// })
const database = firebase.database(firebaseApp)
export { database }
export { firebase }
