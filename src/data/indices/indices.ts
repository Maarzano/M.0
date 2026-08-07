import type { navegacaoItens } from "../../layout/Navegacao/types";
import People from "../../assets/svg/people.svg?react";
import Code from "../../assets/svg/code.svg?react";
import Contact from "../../assets/svg/contact.svg?react";

export const indicesData: navegacaoItens[] = [
    {
        nome: "Sobre mim",
        icon: People,
        cor: "#fff",
        rota: "/",
    },
    {
        nome: "Portfólio",
        icon: Code,
        cor: "#fff",
        rota: "/",
    },
    {
        nome: "Contato",
        icon: Contact,
        cor: "#fff",
        rota: "/",
    },
]as const;