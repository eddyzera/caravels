import Link from 'next/link'
import { ReactNode } from 'react'
import { NavLinkContainer } from './styled'

interface NavLinkProps {
  children: ReactNode
  anchor: string
  isButtonLink?: boolean
}

export const NavLink = ({ children, anchor, isButtonLink = false }: NavLinkProps) => {
  return (
    <Link href={anchor} passHref>
      { isButtonLink ? ( children ) : ( 
        <NavLinkContainer>
          { children }
        </NavLinkContainer> 
      ) }
    </Link>
  )
}