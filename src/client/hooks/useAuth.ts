import { useState, useEffect } from 'react'
import { auth } from '../services/FirebaseService'

import firebase from 'firebase/app'

export default function useAuth() {
  const [user, setUser] = useState<firebase.User | null>(null)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
      setUser(firebaseUser)
    })

    return unsubscribe
  }, [])

  return { user }
}
