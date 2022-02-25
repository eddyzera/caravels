import styled from 'styled-components'

interface CardProps {
  w?: string
}

export const Card = styled.div<CardProps>`
  background: ${props => props.theme.colors.white};
  max-width: '100%';
  width: ${props => props.w || '40rem'};
  padding: 2rem;
`