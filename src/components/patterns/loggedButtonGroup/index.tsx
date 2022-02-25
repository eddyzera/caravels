import styled from 'styled-components'
import { BsBell } from 'react-icons/bs'
import { ButtonDefault } from '../../buttonGroups/button/styled'
import { ButtonIcon } from '../../buttonGroups/buttonIcon/styled'

const Box = styled.div`
  display: flex;
  align-items: center;
`

export const LoggedButtonGroup = () => {
  return (
    <Box className="container-button-group">
      <ButtonDefault widthButton="10rem" marginPosition="0 1rem 0 0">
        Create Post
      </ButtonDefault>
      <ButtonIcon widthButton="2.5rem" marginPosition="0 1rem 0 0">
        <BsBell size="1.5rem" />
      </ButtonIcon>
    </Box>
  )
}