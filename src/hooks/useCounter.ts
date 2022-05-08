import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";

export const useCounter = ({ maxCount = 1 }) => {
  
  const [counter, setCounter] = useState(5);
  const elementToAnimate = useRef<any>(null);
  const tl = useRef(gsap.timeline());
  const handleClick = () => {
    setCounter((c) => Math.min(c + 1, maxCount));
  };

  useLayoutEffect(() => {
   
    if (!elementToAnimate.current) return;

    tl.current
      .to(elementToAnimate.current, { y: -54, ease: "ease.out" })
      .to(elementToAnimate.current, {
        x: 240,
        duration: 0.7,
        ease: "bounce.out",
      })
      .to(elementToAnimate.current, {
        color: "green",
        duration: 0.7,
        ease: "bounce.out",
      })
      .pause();
  }, []);

  useEffect(() => {
    if (counter < maxCount) return;
    tl.current.play(); 
  }, [counter, maxCount]);

  return {
    counter,
    handleClick,
    elementToAnimate,
  };
};
