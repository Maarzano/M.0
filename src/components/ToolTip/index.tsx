import { TabWrapper, Tooltip } from "./styles";

interface PropsToolTip {
    children: React.ReactNode;
    label: string;
    direction?: number
}

const ToolTipTab: React.FC<PropsToolTip> = ({ children, label, direction }) => {
  return (
    <TabWrapper direction={direction}>
      {children}
      <Tooltip>{label}</Tooltip>
    </TabWrapper>
  );
};



export default ToolTipTab;
