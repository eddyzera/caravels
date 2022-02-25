import { ReactNode } from 'react'
import { Container } from '../components/container/styled'
import { Header } from '../components/patterns/header'
import { LayoutContainer } from './styled'

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