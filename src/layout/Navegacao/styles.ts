import styled from "styled-components";


interface NavItemProps {
  corHover: string;
}

export const NavItem = styled.div<NavItemProps>`
  background: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  color: ${props => props.theme.colors.textToB1};

  svg {
    width: 3rem;
    height: 3rem;
  }

  &:hover {
    transform: scale(1.2);
    color: ${props => props.corHover};
  }
`;

export const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 2.5rem 4rem;
  gap: 2rem;
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 999;
`;