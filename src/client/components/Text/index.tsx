import React from 'react'

import { StyledText } from './styles'

type Props = {
  className?: string
  text?: string | null
  type?: string
}

export default function Text(props: Props) {
  const { className, text, type } = props

  return (
    <StyledText className={className} type={type}>
      {text}
    </StyledText>
  )
}
