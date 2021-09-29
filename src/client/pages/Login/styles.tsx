import styled from 'styled-components'

import Text from '../../components/Text'

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 430px;
  margin-top: 6rem;

  img {
    width: 95%;
    margin-bottom: 2rem;
  }
`

export const FormItemContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
`

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  margin-top: 2rem;
`

export const StyledText = styled(Text)`
  color: ${(props) => props.theme.colors.error};
  margin-top: 4rem;
  line-height: 2.5;
`
