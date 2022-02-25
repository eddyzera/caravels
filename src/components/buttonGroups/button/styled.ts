import styled from 'styled-components'

interface ButtonProps {
  widthButton?: string
  heightButton?: string

  marginPosition?: string

  backgroundButton?: string
  borderRadius?: string

  fontSize?: string
  fontWeight?: string
}

export const ButtonDefault = styled.button<ButtonProps>`
  background: ${props => props.backgroundButton || props.theme.colors['blue.600']};
  display: flex;
  align-items: center;
  justify-content: center;

  margin: ${props => props.marginPosition || '0'};

  color: ${props => props.theme.colors.white};

  width: ${props => props.widthButton || '100%'};
  height: ${props => props.heightButton || '2.5rem'};

  border: 0;
  border-radius: ${props => props.borderRadius || props.theme.radius.base};
  transition: filter 0.2s;

  font-size: ${props => props.fontSize || props.theme.fontSizes.sm};
  font-weight: ${props => props.fontWeight || props.theme.fontWeights.normal};

  svg {
    margin-right: 1rem;
  }
  
  &:hover {
    filter: brightness(0.9)
  }
`