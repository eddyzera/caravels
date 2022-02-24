import { Container } from '../../container/styled'
import { HeadingOne } from '../../typography/heading/styled'
import { Header as StyleHeader } from './style'

interface HeaderProps {
  title?: string 
}

export const Header = ({ title = 'caravels' }: HeaderProps) => {
  return (
    <StyleHeader>
      <Container>
        <HeadingOne>
          { title }
        </HeadingOne>
      </Container>
    </StyleHeader>
  )
}