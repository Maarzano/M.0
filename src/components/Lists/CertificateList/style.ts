import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  width: 100%;
  overflow: hidden; 
  padding: 2rem 0;
`;

export const CarouselArea = styled.div`
  position: relative;
  width: 100%;
  height: 70rem; 
  display: flex;
  justify-content: center;
  align-items: center;
  perspective: 1000px;
`;

export const CardWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  
  transform: translate(-50%, -50%);

  width: 50rem; 
  will-change: transform, opacity;
`;

export const HUDContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  width: 100%;
  max-width: 50rem;
  z-index: 20;
`;

export const Controls = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 2rem;
`;

export const ArrowButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 1rem;
  transition: transform 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    transform: scale(1.1);
  }
  img.first {
    transform: rotate(180deg);
  }
  font-size: 2.4rem; 
  color: #fff; 
  
  img {
      width: 4rem;
      height: 4rem;
  }
`;

export const Pagination = styled.div`
  display: flex;
  gap: 1rem;
`;

export const Dot = styled.button<{ $active: boolean }>`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  background-color: ${({ $active }) => ($active ? props => props.theme.colors.primary : props => props.theme.colors.background2)};
  transition: background-color 0.3s ease;
`;