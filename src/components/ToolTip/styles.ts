import styled from "styled-components";

export const TabWrapper = styled.div<{direction: undefined | string | number}>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: auto;

  &:hover span {
    opacity: 1;
    transform: translateY(${props => props.direction === undefined ? "-10px" : props.direction});
  }
`;

export const Tooltip = styled.span<{bg: string | undefined, cor: string | undefined}>`
  position: absolute;
  bottom: 115%;
  background-color: ${props => props.bg === undefined ? props.theme.colors.background : props.bg};
  color: ${props => props.cor === undefined ? props.theme.colors.textToB1 : props.cor};
  padding: 6px 11px;
  border-radius: 7px;
  font-size: 14px;
  white-space: nowrap;
  opacity: 0;
  transform: translateY(0);
  transition: opacity 0.3s ease, transform 0.3s ease;
  pointer-events: none;
  z-index: 9999;
`;