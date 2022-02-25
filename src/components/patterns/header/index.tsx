import Link from 'next/link'
import { NextLink } from '../../../infra/NextLink/NextLink'
import { ButtonDefault } from '../../buttonGroups/button/styled'
import { Container } from '../../container/styled'
import { Icon } from '../../media/icon/styled'
import { HeadingOne } from '../../typography/heading/styled'
import { Header as StyleHeader } from './style'

interface HeaderProps {
  title?: string 
}

export const Header = ({ title = 'Caravels' }: HeaderProps) => {
  return (
    <StyleHeader>
      <Container>
        <NextLink anchor='/'>
          <Icon src='/logo.svg' w='3rem' h='3rem' marginPosition='0 1rem 0 0'/>
            <HeadingOne fontSize='2rem'>
              { title }
            </HeadingOne>
        </NextLink>
        <ButtonDefault widthButton="5rem">
          Log In
        </ButtonDefault>
      </Container>
    </StyleHeader>
  )
}