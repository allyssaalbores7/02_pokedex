import React from 'react'
import { useState } from 'react'
import { Button } from '../../components'
import { auth } from '../../services/FirebaseService'
import MainLayout from '../../layouts/MainLayout'

type Props = {}

export default function DashboardPage(props: Props) {
  const [pokemons, setPokemons] = useState([])

  const signOut = async () => {
    await auth.signOut()
  }

  return (
    <MainLayout pageTitle={`Dashboard`}>
      <Button label="SIGN OUT" type="primary" onClick={signOut} />
    </MainLayout>
  )
}
