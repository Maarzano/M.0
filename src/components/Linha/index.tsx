import { frasesDoHero } from "../../data/frases";
import { redesSociais } from "../../data/redes";
import FraseRotativa from "../FraseRotativa";
import SeletorLingua from "../SeletorLingua";
import {
  BlocoIdentidade,
  ColunaMarcador,
  Container,
  IconeSocial,
  Item,
  ItemFrase,
  ItemLingua,
  LinkSocial,
  Marcador,
  Nome,
  Sociais,
  Trilho,
} from "./styles";

const Linha = () => {
  return (
    <Container>
      <Trilho aria-hidden="true" />

      <Item>
        <ColunaMarcador>
          <Marcador $tamanho={38} $destaque aria-hidden="true" />
        </ColunaMarcador>
        <BlocoIdentidade>
          <Nome>Arthur Marzano_</Nome>
          <Sociais aria-label="Redes e contato">
            {redesSociais.map((rede) => (
              <LinkSocial
                key={rede.nome}
                href={rede.href}
                className="cursor-target"
                aria-label={rede.nome}
                title={rede.nome}
                {...(rede.externo
                  ? { target: "_blank", rel: "noreferrer noopener" }
                  : {})}
              >
                <IconeSocial src={rede.icone} alt="" />
              </LinkSocial>
            ))}
          </Sociais>
        </BlocoIdentidade>
      </Item>

      <ItemFrase>
        <ColunaMarcador>
          <Marcador $tamanho={29} aria-hidden="true" />
        </ColunaMarcador>
        <FraseRotativa frases={frasesDoHero} />
      </ItemFrase>

      <ItemLingua>
        <ColunaMarcador>
          <Marcador $tamanho={16} aria-hidden="true" />
        </ColunaMarcador>
        <SeletorLingua />
      </ItemLingua>
    </Container>
  );
};

export default Linha;
