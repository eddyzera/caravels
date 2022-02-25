import Link from 'next/link'
import { ReactNode } from 'react'
import { NextLinkContainer } from './styled'

interface LinkProps {
  children: ReactNode
  anchor: string
}

export const NextLink = ({ children, anchor }: LinkProps) => {
  return (
    <Link href={anchor} passHref>
      <NextLinkContainer>
        { children }
      </NextLinkContainer>
    </Link>
  )
}