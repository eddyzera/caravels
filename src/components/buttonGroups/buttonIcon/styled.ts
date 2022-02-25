import styled from 'styled-components'

interface ButtonIconProps {
  widthButton?: string
  heightButton?: string

  marginPosition?: string

  backgroundButton?: string
  borderRadius?: string

  fontSize?: string
  fontWeight?: string
}

export const ButtonIcon = styled.a<ButtonIconProps>`
  background: ${props => props.theme.colors.white};

  display: flex;
  align-items: center;
  justify-content: center;

  margin: ${props => props.marginPosition || '0'};

  color: ${props => props.theme.colors['gray.900']};

  width: ${props => props.widthButton || '100%'};
  height: ${props => props.heightButton || '2.5rem'};

  border: 0;
  border-radius: ${props => props.borderRadius || props.theme.radius.base};
  transition: filter 0.2s;

  font-size: ${props => props.fontSize || props.theme.fontSizes.sm};
  font-weight: ${props => props.fontWeight || props.theme.fontWeights.normal};

  cursor: pointer;

  transition: all 0.2s;

  &:hover {
    background: #03466e24;
    color: ${props => props.theme.colors['blue.600']}
  }
`