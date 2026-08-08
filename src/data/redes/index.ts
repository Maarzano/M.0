import github from "../../assets/svg/github.svg";
import linkedin from "../../assets/svg/linkedin.svg";
import email from "../../assets/svg/email.svg";
import download from "../../assets/svg/download.svg";

export interface RedeSocial {
  nome: string;
  href: string;
  icone: string;
  /** true abre em nova aba; false é download/mailto e navega na mesma. */
  externo: boolean;
}

/*
 * Os quatro ícones são normalizados pela altura no CSS (ver LinkSocial), então
 * não carregam dimensão própria aqui: cada viewBox tem uma proporção diferente
 * e travar largura e altura por item era justamente o que os deixava com
 * tamanhos visuais distintos na fileira.
 */

// TODO(arthur): trocar os "#" pelos links reais de LinkedIn, e-mail e currículo.
export const redesSociais: RedeSocial[] = [
  {
    nome: "GitHub",
    href: "https://github.com/Maarzano",
    icone: github,
    externo: true,
  },
  {
    nome: "LinkedIn",
    href: "#",
    icone: linkedin,
    externo: true,
  },
  {
    nome: "E-mail",
    href: "#",
    icone: email,
    externo: false,
  },
  {
    nome: "Baixar currículo",
    href: "#",
    icone: download,
    externo: false,
  },
];
