import { ButtonDefault } from '../../buttonGroups/button/styled'
import { LoggedButtonGroup } from '../loggedButtonGroup'

export const UserLogged = () => {
  let isLogged = true
  return isLogged ? ( 
    <LoggedButtonGroup />
  ) : (
    <ButtonDefault widthButton="5rem">
      Log In
    </ButtonDefault> 
  )
}
