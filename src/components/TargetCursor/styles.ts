import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 0;
  height: 0;
  pointer-events: none;
  z-index: 9999;
  mix-blend-mode: difference;
  transform: translate(-50%, -50%);
`;

export const Dot = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 4px;
  height: 4px;
  background: ${props => props.theme.colors.primary};
  border-radius: 50%;
  transform: translate(-50%, -50%);
  will-change: transform;
`;

export const BaseCorner = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 12px;
  height: 12px;
  border: 3px solid ${props => props.theme.colors.primary};
  will-change: transform;
`;

export const CornerTL = styled(BaseCorner)`
  transform: translate(-150%, -150%);
  border-right: none;
  border-bottom: none;
`;

export const CornerTR = styled(BaseCorner)`
  transform: translate(50%, -150%);
  border-left: none;
  border-bottom: none;
`;

export const CornerBR = styled(BaseCorner)`
  transform: translate(50%, 50%);
  border-left: none;
  border-top: none;
`;

export const CornerBL = styled(BaseCorner)`
  transform: translate(-150%, 50%);
  border-right: none;
  border-top: none;
`;