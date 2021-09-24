import firebase from 'firebase/app'
import 'firebase/auth'

import config from '../configs'

firebase.initializeApp(config.FIREBASE_CONFIG)

export const auth = firebase.auth()
