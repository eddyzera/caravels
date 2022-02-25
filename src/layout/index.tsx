import { ReactNode } from 'react'
import { Container } from '../components/container/styled'
import { Header } from '../components/patterns/header'

import styled from 'styled-components'

export const LayoutContainer = styled.div`
  background: ${props => props.theme.colors['gray.100']};
  height: calc(100vh - 5rem);
  width: 100%;
  padding: 1rem 0;
`

interface LayoutProps {
  children: ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <LayoutContainer>
        <Container>
          { children }
        </Container>
      </LayoutContainer>
    </>
  )
}