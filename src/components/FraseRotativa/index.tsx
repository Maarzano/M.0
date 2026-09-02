import { Cursor, Texto } from "./styles";
import { useMaquinaDeEscrever } from "./useMaquinaDeEscrever";

interface FraseRotativaProps {
  /** Identidade estável: constante de módulo ou useMemo. */
  frases: string[];
  className?: string;
}

const FraseRotativa = ({ frases, className }: FraseRotativaProps) => {
  const { texto } = useMaquinaDeEscrever({ frases });

  return (
    <Texto className={className}>
      {texto}
      <Cursor aria-hidden="true">_</Cursor>
    </Texto>
  );
};

export default FraseRotativa;
