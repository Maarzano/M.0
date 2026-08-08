import { useEffect, useState } from "react";

export interface OpcoesMaquinaDeEscrever {
  /**
   * Precisa ter identidade estável entre renders — use uma constante de módulo
   * ou useMemo. Um array literal inline reinicia o efeito a cada render e o
   * texto nunca sai do lugar.
   */
  frases: string[];
  /** Milissegundos por caractere ao digitar. */
  velocidadeDigitacao?: number;
  /** Milissegundos por caractere ao apagar. Costuma ser mais rápido. */
  velocidadeApagar?: number;
  /** Pausa com a frase inteira na tela, antes de começar a apagar. */
  pausaNoFim?: number;
  /** Pausa com a linha vazia, antes de digitar a próxima. */
  pausaEntreFrases?: number;
}

function usePrefereMenosMovimento(): boolean {
  const [prefere, setPrefere] = useState(
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );

  useEffect(() => {
    const consulta = window.matchMedia("(prefers-reduced-motion: reduce)");
    const aoMudar = (evento: MediaQueryListEvent) => setPrefere(evento.matches);
    consulta.addEventListener("change", aoMudar);
    return () => consulta.removeEventListener("change", aoMudar);
  }, []);

  return prefere;
}

/**
 * Datilografa a frase atual, segura, apaga caractere a caractere e passa para a
 * próxima — em loop. Cada passo é um setTimeout isolado, então trocar de estado
 * cancela o timer pendente e o ciclo nunca acumula dois agendamentos.
 *
 * Com prefers-reduced-motion o ciclo não roda: mostra a primeira frase parada.
 */
export function useMaquinaDeEscrever({
  frases,
  velocidadeDigitacao = 70,
  velocidadeApagar = 35,
  pausaNoFim = 2200,
  pausaEntreFrases = 400,
}: OpcoesMaquinaDeEscrever) {
  const [indice, setIndice] = useState(0);
  const [texto, setTexto] = useState("");
  const [apagando, setApagando] = useState(false);
  const semMovimento = usePrefereMenosMovimento();

  useEffect(() => {
    if (semMovimento || frases.length === 0) return;

    const alvo = frases[indice % frases.length];

    // Frase inteira na tela: segura e começa a apagar.
    if (!apagando && texto === alvo) {
      const id = setTimeout(() => setApagando(true), pausaNoFim);
      return () => clearTimeout(id);
    }

    // Linha vazia: segura e avança para a próxima frase.
    if (apagando && texto === "") {
      const id = setTimeout(() => {
        setApagando(false);
        setIndice((atual) => (atual + 1) % frases.length);
      }, pausaEntreFrases);
      return () => clearTimeout(id);
    }

    const id = setTimeout(
      () =>
        setTexto((atual) =>
          apagando
            ? alvo.slice(0, atual.length - 1)
            : alvo.slice(0, atual.length + 1),
        ),
      apagando ? velocidadeApagar : velocidadeDigitacao,
    );
    return () => clearTimeout(id);
  }, [
    frases,
    indice,
    texto,
    apagando,
    semMovimento,
    velocidadeDigitacao,
    velocidadeApagar,
    pausaNoFim,
    pausaEntreFrases,
  ]);

  if (semMovimento) {
    return { texto: frases[0] ?? "", digitando: false };
  }

  return { texto, digitando: !apagando };
}
