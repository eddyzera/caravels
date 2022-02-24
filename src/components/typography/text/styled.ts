import styled from 'styled-components'

interface TextProps {
  fontSize?: string
  fontWeights?: number
  color?: string
}

export const Text = styled.p<TextProps>`
  font-size: ${props => props.fontSize || props.theme.fontSizes.sm};
  font-weight: ${props => props.fontWeights || props.theme.fontWeights.normal};
  color: ${props => props.color || props.theme.colors['gray.700']};
`