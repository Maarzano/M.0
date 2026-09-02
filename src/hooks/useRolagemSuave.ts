import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { prefereMenosMovimento } from "./usePrefereMenosMovimento";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

/** Ids que o App precisa colocar nos dois <div> da estrutura do ScrollSmoother. */
export const ID_ENVOLTORIO = "envoltorio-rolagem";
export const ID_CONTEUDO = "conteudo-rolagem";

/**
 * Rolagem com inércia: o ScrollSmoother trava o envoltório em position fixed e
 * translada o conteúdo, então a barra nativa continua existindo e todo
 * ScrollTrigger continua valendo — é o que dá o arrasto "pesado" do
 * michalgrzebisz.com sem reimplementar rolagem na mão.
 *
 * Duas consequências que valem lembrar:
 *  - position: fixed NÃO funciona dentro do conteúdo (ele está transformado).
 *    Tudo que é fixo (palco, cursor, nav, abertura) mora fora do envoltório.
 *  - position: sticky também não, pelo mesmo motivo. Por isso o cabeçalho de
 *    sessão é ancorado por timeline, não por sticky.
 *
 * Com prefers-reduced-motion o smoother não é criado e a página rola nativa.
 */
export function useRolagemSuave() {
  useLayoutEffect(() => {
    if (prefereMenosMovimento()) return;

    const smoother = ScrollSmoother.create({
      wrapper: `#${ID_ENVOLTORIO}`,
      content: `#${ID_CONTEUDO}`,
      smooth: 1.2,
      // Habilita data-speed / data-lag nos filhos (paralaxe de seção).
      effects: true,
      // Interceptar a rolagem nativa brigaria com o arrasto do crachá 3D.
      normalizeScroll: false,
    });

    /*
     * Os ScrollTriggers dos filhos são criados antes deste efeito (efeito de
     * pai roda depois do de filho no React), então as posições que eles mediram
     * são as de antes do smoother existir. Um refresh recalcula todas.
     */
    ScrollTrigger.refresh();

    return () => smoother.kill();
  }, []);
}
