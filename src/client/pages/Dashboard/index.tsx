import React from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useState, useEffect } from 'react'
import { Button } from '../../components'
import { auth } from '../../services/FirebaseService'
import MainLayout from '../../layouts/MainLayout'
import PokeApi, { baseURL as pokeApiBaseURL } from '../../api/PokeApi'

type Props = {}

export default function DashboardPage(props: Props) {
  const [pokemons, setPokemons] = useState<any[]>([])
  const [nextUrl, setNextUrl] = useState('')
  const [totalCount, setTotalCount] = useState(0)

  useEffect(() => {
    const initializeData = async () => {
      const res = await PokeApi.getAllPokemons(pokeApiBaseURL)
      setPokemons(res.results)
      setNextUrl(res.next)
      setTotalCount(res.count)
    }

    initializeData()
  }, [])

  const fetchNextData = async () => {
    const nextData = await PokeApi.getAllPokemons(nextUrl)
    setPokemons([...pokemons, ...nextData.results])
    setNextUrl(nextData.next)
  }

  const signOut = async () => {
    await auth.signOut()
  }

  return (
    <MainLayout pageTitle={`Dashboard`}>
      <Button label="SIGN OUT" type="primary" onClick={signOut} />
      <div>
        <InfiniteScroll
          dataLength={pokemons.length} //This is important field to render the next data
          next={fetchNextData}
          hasMore={pokemons.length < totalCount}
          loader="Loading"
          endMessage="End Message"
        >
          <div className="container">
            <div className="row m-2">
              {pokemons.map((pokemon) => {
                return <p key={pokemon.id}>{pokemon.name}</p>
              })}
            </div>
          </div>
        </InfiniteScroll>
      </div>
    </MainLayout>
  )
}
