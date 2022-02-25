import Link from 'next/link'
import { ReactNode } from 'react'

import styled from 'styled-components'

const NavLinkContainer = styled.a`
  display: flex;
`

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