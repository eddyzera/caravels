import styled from 'styled-components'

interface HeadingProps {
  fontSize?: string
  fontWeights?: number
  color?: string
  marginPosition?: string
}

export const HeadingOne = styled.h1<HeadingProps>`
  font-size: ${props => props.fontSize || props.theme.fontSizes.md};
  font-weight: ${props => props.fontWeights || props.theme.fontWeights.normal};
  color: ${props => props.color || props.theme.colors['gray.900']};
  margin: ${props => props.marginPosition || '0'};
`

export const HeadingTwo = styled.h1<HeadingProps>`
  font-size: ${props => props.fontSize || props.theme.fontSizes.md};
  font-weight: ${props => props.fontWeights || props.theme.fontWeights.normal};
  color: ${props => props.color || props.theme.colors['gray.900']};
  margin: ${props => props.marginPosition || '0'};
`

export const HeadingThree = styled.h1<HeadingProps>`
  font-size: ${props => props.fontSize || props.theme.fontSizes.md};
  font-weight: ${props => props.fontWeights || props.theme.fontWeights.normal};
  color: ${props => props.color || props.theme.colors['gray.900']};
  margin: ${props => props.marginPosition || '0'};
`

export const HeadingFour = styled.h1<HeadingProps>`
  font-size: ${props => props.fontSize || props.theme.fontSizes.md};
  font-weight: ${props => props.fontWeights || props.theme.fontWeights.normal};
  color: ${props => props.color || props.theme.colors['gray.900']};
  margin: ${props => props.marginPosition || '0'};
`

export const HeadingFive = styled.h1<HeadingProps>`
  font-size: ${props => props.fontSize || props.theme.fontSizes.md};
  font-weight: ${props => props.fontWeights || props.theme.fontWeights.normal};
  color: ${props => props.color || props.theme.colors['gray.900']};
  margin: ${props => props.marginPosition || '0'};
`

export const HeadingSix = styled.h1<HeadingProps>`
  font-size: ${props => props.fontSize || props.theme.fontSizes.md};
  font-weight: ${props => props.fontWeights || props.theme.fontWeights.normal};
  color: ${props => props.color || props.theme.colors['gray.900']};
  margin: ${props => props.marginPosition || '0'};
`