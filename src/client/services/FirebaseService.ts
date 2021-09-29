import firebase from 'firebase/app'
import 'firebase/auth'

import config from '../configs'

firebase.initializeApp(config.FIREBASE_CONFIG)

// Add or Remove authentification methods here.
export const Providers = {
  google: new firebase.auth.GoogleAuthProvider(),
}

export const auth = firebase.auth()
