import styled from 'styled-components'

interface CardProps {
  w?: string
  textAlign?: string
  paddingPosition?: string
}

export const Card = styled.div<CardProps>`
  background: ${props => props.theme.colors.white};
  max-width: 100%;
  width: ${props => props.w || '40rem'};
  padding: ${props => props.paddingPosition || '4rem'};
  text-align: ${props => props.textAlign || 'center'};
  border-radius: ${props => props.theme.radius.md};
`