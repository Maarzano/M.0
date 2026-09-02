import { useEffect, useState } from "react";

const CONSULTA = "(prefers-reduced-motion: reduce)";

/**
 * Leitura pontual, para quem só precisa decidir uma vez — dentro de um
 * useLayoutEffect que monta timeline, por exemplo. Não reage a mudanças.
 */
export function prefereMenosMovimento(): boolean {
  return typeof window !== "undefined" && window.matchMedia(CONSULTA).matches;
}

/** Versão reativa: re-renderiza quando o usuário troca a preferência do SO. */
export function usePrefereMenosMovimento(): boolean {
  const [prefere, setPrefere] = useState(prefereMenosMovimento);

  useEffect(() => {
    const consulta = window.matchMedia(CONSULTA);
    const aoMudar = (evento: MediaQueryListEvent) => setPrefere(evento.matches);
    consulta.addEventListener("change", aoMudar);
    return () => consulta.removeEventListener("change", aoMudar);
  }, []);

  return prefere;
}
