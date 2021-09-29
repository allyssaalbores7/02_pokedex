import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import Navigation from '../../components/Navigation'
import { Container } from './styles'

type Props = {
  children: React.ReactNode | React.ReactNodeArray
  pageTitle: string
}

export default function MainLayout(props: Props) {
  const { children, pageTitle } = props

  return (
    <HelmetProvider>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>
      <Navigation />
      <Container>{children}</Container>
    </HelmetProvider>
  )
}
