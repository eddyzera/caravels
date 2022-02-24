import { Container } from '../../container/styled'
import { Icon } from '../../media/icon/styled'
import { HeadingOne } from '../../typography/heading/styled'
import { Header as StyleHeader } from './style'

interface HeaderProps {
  title?: string 
}

export const Header = ({ title = 'caravels' }: HeaderProps) => {
  return (
    <StyleHeader>
      <Container>
        <Icon src='/logo.svg' w='10rem' h='10rem' />
        <HeadingOne>
          { title }
        </HeadingOne>
      </Container>
    </StyleHeader>
  )
}