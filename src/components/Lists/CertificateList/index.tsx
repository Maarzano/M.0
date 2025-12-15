import { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useCertificados } from "../../../hooks/useCertificados";
import { 
  ArrowButton, 
  Container, 
  Controls, 
  Dot, 
  HUDContainer, 
  Pagination, 
  CarouselArea, 
  CardWrapper 
} from "./style";
import CardCertificado from "../../Cards/CardCertificado";

const CertificateList = () => {
  const { data, loading } = useCertificados();
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  
  const isFirstRender = useRef(true);

  const handleNext = () => {
    if (!data) return;
    setCurrentIndex((prev) => (prev === data.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    if (!data) return;
    setCurrentIndex((prev) => (prev === 0 ? data.length - 1 : prev - 1));
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  const POSITIONS = {
    center: { xPercent: -50, scale: 1, opacity: 1, zIndex: 10 },
    left:   { xPercent: -130, scale: 0.85, opacity: 0.5, zIndex: 5 },
    right:  { xPercent: 30, scale: 0.85, opacity: 0.5, zIndex: 5 },
    hidden: { xPercent: -50, scale: 0.5, opacity: 0, zIndex: 0 }
  };

  const getCardState = (index: number, total: number, current: number) => {
    if (total === 2) {
      if (current === 0) {
        if (index === 0) return POSITIONS.center;
        if (index === 1) return POSITIONS.right;
      } else {
        if (index === 1) return POSITIONS.center;
        if (index === 0) return POSITIONS.left;
      }
      return POSITIONS.hidden;
    }

    const isCurrent = index === current;
    const isPrev = index === (current - 1 + total) % total;
    const isNext = index === (current + 1) % total;

    if (isCurrent) return POSITIONS.center;
    if (isPrev) return POSITIONS.left;
    if (isNext) return POSITIONS.right;
    return POSITIONS.hidden;
  };

  useGSAP(() => {
    if (!data || data.length === 0) return;
    const total = data.length;

    cardsRef.current = cardsRef.current.slice(0, total);

    data.forEach((_, i) => {
      const card = cardsRef.current[i];
      if (!card) return;

      const state = getCardState(i, total, currentIndex);

      const animConfig = {
        xPercent: state.xPercent,
        yPercent: -50,
        scale: state.scale,
        opacity: state.opacity,
        zIndex: state.zIndex,
        duration: 0.6,
        ease: "power3.out"
      };
      if (isFirstRender.current) {
        gsap.set(card, animConfig);
      } else {
        gsap.to(card, animConfig);
      }
    });

    isFirstRender.current = false;

  }, { dependencies: [currentIndex, data], scope: containerRef });

  if (loading) {
     return (
        <Container style={{ height: '70rem', justifyContent: 'center' }}>
           <p style={{ color: 'white', fontSize: '2rem' }}>Carregando certificados...</p>
        </Container>
     );
  }

  if (!data || data.length === 0) {
     return <div>Nenhum certificado encontrado.</div>;
  }

  return (
    <Container ref={containerRef}>
      <CarouselArea>
        {data.map((cert, index) => {
          return (
            <CardWrapper
              key={cert.id ?? index}
              ref={(el) => { cardsRef.current[index] = el }}
            >
              <CardCertificado 
                img={cert.img}
                titulo={cert.titulo}
                dataInicio={cert.dataInicio}
                dataFinal={cert.dataFinal}
                modalidade={cert.modalidade}
                localizacao={cert.localizacao}
                descricao={cert.descricao}
                tecnologias={cert.tecnologias}
              />
            </CardWrapper>
          );
        })}
      </CarouselArea>

      <HUDContainer>
        <Controls>
          <ArrowButton onClick={handlePrev} aria-label="Anterior">
            <img src="/assets/svg/arrow.svg" alt="<" className="first"/>
          </ArrowButton>
          
          <Pagination>
            {data.map((_, index) => (
              <Dot 
                key={index} 
                $active={index === currentIndex} 
                onClick={() => handleDotClick(index)}
              />
            ))}
          </Pagination>

          <ArrowButton onClick={handleNext} aria-label="Próximo">
             <img src="/assets/svg/arrow.svg" alt=">" />
          </ArrowButton>
        </Controls>
      </HUDContainer>
    </Container>
  );
}

export default CertificateList;