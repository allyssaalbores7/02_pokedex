import React from 'react'

import { Container, StyledInput, StyledTextarea, TitleText } from './styles'

type ChangeEvent =
  | React.ChangeEvent<HTMLInputElement>
  | React.ChangeEvent<HTMLTextAreaElement>

type KeyboardEvent =
  | React.KeyboardEvent<HTMLInputElement>
  | React.KeyboardEvent<HTMLTextAreaElement>

type Props = {
  className?: string
  name?: string
  label?: string
  placeholder?: string
  autoComplete?: string
  rows?: number
  type?: 'text' | 'textarea' | 'number' | 'password'
  value?: string
  inputStyle?: 'outline' | 'solid'
  onChange: (value: string, name?: string) => void
  onKeyDown?: (e: KeyboardEvent) => void
}

function Input(props: Props, ref: any) {
  const {
    className,
    name,
    label,
    placeholder,
    rows,
    type = 'text',
    value,
    inputStyle = 'outline',
    autoComplete,
    onChange,
    onKeyDown,
  } = props

  function handleChange(e: ChangeEvent) {
    onChange(e.target.value, e.target.name)
  }

  if (type === 'textarea') {
    return (
      <Container>
        <TitleText text={label} type="body3-bold" />
        <StyledTextarea
          inputStyle={inputStyle}
          className={className}
          name={name}
          placeholder={placeholder}
          rows={rows}
          value={value}
          autoComplete={autoComplete}
          ref={ref as React.RefObject<HTMLTextAreaElement>}
          onChange={handleChange as any}
          onKeyDown={onKeyDown}
        />
      </Container>
    )
  }

  return (
    <Container>
      <TitleText text={label} type="body3-bold" />
      <StyledInput
        inputStyle={inputStyle}
        className={className}
        name={name}
        placeholder={placeholder}
        value={value}
        type={type}
        autoComplete={autoComplete}
        ref={ref as React.RefObject<HTMLInputElement>}
        onChange={handleChange}
        onKeyDown={onKeyDown}
      />
    </Container>
  )
}

export default React.forwardRef(Input)
