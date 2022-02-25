import { NavLink } from '../../../infra/NavLink'
import { ButtonDefault } from '../../buttonGroups/button/styled'
import { Container } from '../../container/styled'
import { Icon } from '../../media/icon/styled'
import { HeadingOne } from '../../typography/heading/styled'

import styled from "styled-components"

const HeaderStyle = styled.header`
  background: ${props => props.theme.colors.white};

  height: 5rem;
  width: 100%;

  padding: 0 2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    margin-left: auto;
  }
`

interface HeaderProps {
  title?: string 
}

export const Header = ({ title = 'Caravels' }: HeaderProps) => {
  return (
    <HeaderStyle>
      <Container>
        <NavLink anchor='/'>
          <Icon src='/logo.svg' w='3rem' h='3rem' marginPosition='0 1rem 0 0'/>
            <HeadingOne fontSize='2rem'>
              { title }
            </HeadingOne>
        </NavLink>
        <ButtonDefault widthButton="5rem">
          Log In
        </ButtonDefault>
      </Container>
    </HeaderStyle>
  )
}