import { useCallback, useMemo, useState, type ReactNode } from "react";
import {
  ContextoSessaoAtiva,
  SESSAO_PADRAO,
  type RotulosSessao,
} from "./sessaoAtiva";

const ProvedorSessaoAtiva = ({ children }: { children: ReactNode }) => {
  const [atual, setAtual] = useState<RotulosSessao>(SESSAO_PADRAO);

  const ativar = useCallback((rotulos: RotulosSessao) => {
    setAtual((anterior) =>
      anterior.sessao === rotulos.sessao && anterior.subsessao === rotulos.subsessao
        ? anterior
        : rotulos,
    );
  }, []);

  const valor = useMemo(() => ({ atual, ativar }), [atual, ativar]);

  return (
    <ContextoSessaoAtiva.Provider value={valor}>{children}</ContextoSessaoAtiva.Provider>
  );
};

export default ProvedorSessaoAtiva;
