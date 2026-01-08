import { TabWrapper, Tooltip } from "./styles";

interface PropsToolTip {
    children: React.ReactNode;
    label: string;
    direction?: number | string | undefined;
    bg?: string;
    cor?: string;
}

const ToolTipTab: React.FC<PropsToolTip> = ({ children, label, direction, bg, cor}) => {
  return (
    <TabWrapper direction={direction}>
      {children}
      <Tooltip  bg={bg} cor={cor}>{label}</Tooltip>
    </TabWrapper>
  );
};



export default ToolTipTab;
