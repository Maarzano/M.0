import { defaultTheme } from "../../styles/theme";
import { NavContainer, NavItem } from "./styles";
import type { navegacaoItens } from "./types";

interface BarraNavegacaoProps {
    itens: navegacaoItens[];
}

const BarraNavegacao= ({itens}: BarraNavegacaoProps) => {
    return (
        <NavContainer data-nav>
            {itens.map((item) => {
                const Icone = item.icon;
                return (
                    <NavItem
                        key={item.nome}
                        corHover={defaultTheme.colors.primary}
                        onClick={() => null}
                        className="cursor-target"
                    >
                        <Icone />
                </NavItem>
                )

            })}
        </NavContainer>
    );
};

export default BarraNavegacao;
