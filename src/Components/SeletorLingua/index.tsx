import { useState } from "react";
import { linguas } from "../../data/linguas";
import { Bandeira, Botao, Grupo, Rotulo } from "./styles";

interface SeletorLinguaProps {
  /** Chamado com o código da língua escolhida, ex.: "pt-BR". */
  aoTrocar?: (codigo: string) => void;
}

const SeletorLingua = ({ aoTrocar }: SeletorLinguaProps) => {
  const [indice, setIndice] = useState(0);
  const atual = linguas[indice];

  const avancar = () => {
    const proximo = (indice + 1) % linguas.length;
    setIndice(proximo);
    aoTrocar?.(linguas[proximo].codigo);
  };

  return (
    <Grupo>
      <Rotulo>Lingua:</Rotulo>
      <Botao
        type="button"
        className="cursor-target"
        onClick={avancar}
        title={atual.nome}
        aria-label={`Idioma atual: ${atual.nome}. Trocar idioma.`}
      >
        <Bandeira src={atual.bandeira} alt="" />
      </Botao>
    </Grupo>
  );
};

export default SeletorLingua;
