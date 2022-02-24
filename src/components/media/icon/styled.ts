import styled from 'styled-components'

export interface IconProps {
  w?: string
  h?: string
}

export const Icon = styled.img<IconProps>`
  width: ${props => props.w || '20px'};
  height: ${props => props.h || '20px'};
`