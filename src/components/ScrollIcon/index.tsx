import { StyledWrapper } from './styles.ts'

const ScrollIcon = () => {
  return (
    <StyledWrapper>
      <div className="scrolldown cursor-target">
        <div className="chevrons">
          <div className="chevrondown" />
          <div className="chevrondown" />
        </div>
      </div>
    </StyledWrapper>
  );
}



export default ScrollIcon;
