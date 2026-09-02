import { createContext, useContext, useEffect, type RefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export interface RotulosSessao {
  /** Sessão: "Sobre mim", "Portfólio", "Contato". */
  sessao: string;
  /** Sub-sessão: "Minha frase do dia", "Apresentação"... */
  subsessao?: string;
}

export interface ValorSessaoAtiva {
  atual: RotulosSessao;
  ativar: (rotulos: RotulosSessao) => void;
}

/*
 * O cabeçalho de sessão vive no palco fixo, longe das seções que ele descreve.
 * O contexto é o fio entre os dois: cada seção registra um ScrollTrigger e
 * anuncia seus rótulos quando entra na faixa central da viewport.
 *
 * O padrão é a primeira sub-sessão: no hero o cabeçalho está invisível, e
 * quando ele aparece já é essa a sessão que está chegando.
 */
export const SESSAO_PADRAO: RotulosSessao = {
  sessao: "Sobre mim",
  subsessao: "Minha frase do dia",
};

export const ContextoSessaoAtiva = createContext<ValorSessaoAtiva>({
  atual: SESSAO_PADRAO,
  ativar: () => {},
});

export const useSessaoAtiva = () => useContext(ContextoSessaoAtiva).atual;

/**
 * Marca a seção do ref como a ativa enquanto ela cruza o meio da tela.
 * Recebe strings soltas, não objeto, para o efeito não reiniciar a cada render.
 */
export function useRegistraSessao(
  ref: RefObject<HTMLElement | null>,
  sessao: string,
  subsessao?: string,
) {
  const { ativar } = useContext(ContextoSessaoAtiva);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const gatilho = ScrollTrigger.create({
      trigger: el,
      start: "top 45%",
      end: "bottom 45%",
      onToggle: (self) => {
        if (self.isActive) ativar({ sessao, subsessao });
      },
    });

    return () => {
      gatilho.kill();
    };
  }, [ref, sessao, subsessao, ativar]);
}
