import React, { useEffect, useRef, useMemo, type ReactNode, type RefObject } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { StyledH2, StyledP } from './styles.ts';

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealProps {
  children: ReactNode;
  scrollContainerRef?: RefObject<HTMLElement>;
  enableBlur?: boolean;
  baseOpacity?: number;
  blurStrength?: number;
  containerClassName?: string;
  textClassName?: string;
  wordAnimationEnd?: string;
  wordAnimationStart?: string;
  fontSize?: string;
  textAlign?: string;
  stagger?: number;
  showQuotes?: boolean;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  scrollContainerRef,
  enableBlur = false,
  baseOpacity = 0.1,
  blurStrength = 4,
  containerClassName = '',
  textClassName = '',
  wordAnimationEnd,
  wordAnimationStart = 'top bottom-=20%',
  fontSize = '',
  textAlign = "left",
  stagger = 10,
  showQuotes = false
}) => {
  const containerRef = useRef<HTMLHeadingElement>(null);

  const splitText = useMemo(() => {
    const text = typeof children === 'string' ? children : '';
    
    return text.split(/(\s+)/).map((part, index) => {
      if (part.match(/^\s+$/)) return ' ';

      return (
        <span key={index} style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
          {part.split('').map((char, charIndex) => (
            <span className="char" key={charIndex} style={{ display: 'inline-block' }}>
              {char}
            </span>
          ))}
        </span>
      );
    });
  }, [children]);

  const computedEnd = useMemo(() => {
    if (wordAnimationEnd) return wordAnimationEnd;

    const textLength = typeof children === 'string' ? children.length : 0;

    if (textLength < 100) {
      return '+=400'; 
    } 
    
    return 'bottom bottom-=10%'; 
  }, [children, wordAnimationEnd]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const scroller = scrollContainerRef && scrollContainerRef.current ? scrollContainerRef.current : window;
    const charElements = el.querySelectorAll<HTMLElement>('.char');

    gsap.fromTo(
      charElements,
      { opacity: baseOpacity, willChange: 'opacity' },
      {
        ease: 'none',
        opacity: 1,
        stagger: stagger,
        scrollTrigger: {
          trigger: el,
          scroller,
          start: wordAnimationStart,
          end: computedEnd,
          scrub: true
        }
      }
    );

    if (enableBlur) {
      gsap.fromTo(
        charElements,
        { filter: `blur(${blurStrength}px)` },
        {
          ease: 'none',
          filter: 'blur(0px)',
          stagger: stagger,
          scrollTrigger: {
            trigger: el,
            scroller,
            start: wordAnimationStart,
            end: computedEnd,
            scrub: true
          }
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [scrollContainerRef, enableBlur, baseOpacity, wordAnimationEnd, wordAnimationStart, blurStrength, stagger, computedEnd]);

  return (
    <StyledH2 ref={containerRef} className={containerClassName}>
      <StyledP 
        className={textClassName}
        size={fontSize}
        textAlign={textAlign}
        $showQuotes={showQuotes}
      >
        {splitText}
      </StyledP>
    </StyledH2>
  );
};

export default ScrollReveal;