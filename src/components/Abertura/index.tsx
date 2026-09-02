import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { prefereMenosMovimento } from "../../hooks/usePrefereMenosMovimento";
import { Cortina, MarcaAbertura, MascaraMarca } from "./styles";

/** Elementos do palco que entram em cascata depois da cortina subir. */
const SELETOR_ENTRADA = "[data-entrada]";
/** O trilho, que se desenha de cima para baixo junto com a cascata. */
const SELETOR_TRILHO = "[data-trilho]";

/**
 * Abertura do site: o M.0 sobe para dentro da máscara, segura, sai por cima, a
 * cortina sobe atrás dele e a coluna do hero entra em cascata.
 *
 * A rolagem fica travada enquanto isso roda. O ScrollSmoother é criado no
 * efeito do App, que roda depois deste (efeito de pai roda depois do de
 * filho), então a trava é agendada para o quadro seguinte — aí ele já existe.
 */
const Abertura = () => {
  const cortinaRef = useRef<HTMLDivElement>(null);
  const marcaRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const cortina = cortinaRef.current;
    const marca = marcaRef.current;
    if (!cortina || !marca) return;

    /*
     * Recarregar no meio da página com a abertura rodando deixaria o palco em
     * uma pose e a rolagem em outra. O navegador restaura a posição antes do
     * primeiro quadro, então é aqui que ela precisa ser zerada.
     */
    if ("scrollRestoration" in history) history.scrollRestoration = "manual";
    window.scrollTo(0, 0);

    const entradas = gsap.utils.toArray<HTMLElement>(SELETOR_ENTRADA);
    const trilho = document.querySelector<HTMLElement>(SELETOR_TRILHO);

    if (prefereMenosMovimento()) {
      gsap.set(cortina, { autoAlpha: 0 });
      return;
    }

    /* Estado inicial antes do primeiro quadro: nada de piscada. */
    gsap.set([marca, ...entradas], { yPercent: 110 });
    gsap.set(entradas, { opacity: 0 });
    if (trilho) gsap.set(trilho, { scaleY: 0 });

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        paused: true,
        onComplete: () => {
          gsap.set(cortina, { visibility: "hidden" });
          ScrollSmoother.get()?.paused(false);
        },
      });

      tl.to(marca, { yPercent: 0, duration: 0.85, ease: "power3.out" })
        .to(marca, { yPercent: -110, duration: 0.6, ease: "power3.inOut" }, ">0.25")
        .to(cortina, { yPercent: -100, duration: 1, ease: "power4.inOut" }, "<0.15")
        .to(
          entradas,
          { yPercent: 0, opacity: 1, duration: 0.9, stagger: 0.07, ease: "power3.out" },
          "<0.35",
        );

      if (trilho) {
        tl.to(trilho, { scaleY: 1, duration: 1.1, ease: "power3.inOut" }, "<0.05");
      }

      /*
       * Um quadro de espera: dá tempo do efeito do App criar o smoother, e é
       * nele que a trava de rolagem entra.
       */
      requestAnimationFrame(() => {
        ScrollSmoother.get()?.paused(true);
        tl.play();
      });
    }, cortinaRef);

    return () => {
      ScrollSmoother.get()?.paused(false);
      ctx.revert();
    };
  }, []);

  return (
    <Cortina ref={cortinaRef} aria-hidden="true">
      <MascaraMarca>
        <MarcaAbertura ref={marcaRef}>M.0</MarcaAbertura>
      </MascaraMarca>
    </Cortina>
  );
};

export default Abertura;
