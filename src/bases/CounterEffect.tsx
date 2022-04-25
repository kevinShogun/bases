import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const MAXIMUN_VALUE = 10;

export const CounterEffect = () => {
  const [counter, setCounter] = useState(5);
  const counterHTML = useRef<HTMLHeadingElement>(null);

  const handleClick = () => {
    setCounter((c) => Math.min(c + 1, MAXIMUN_VALUE));
  };

  useEffect(() => {
    if (counter < 10) return;

    console.log(
      "%cEste es el valor máximo",
      "color: red; background-color: white; padding: 2"
    );

    const tl = gsap.timeline();

    tl.to(counterHTML.current, {y: -54, ease: 'ease.out'})
    .to(counterHTML.current, {x: 240,duration: 0.7, ease: 'bounce.out'})
    .to(counterHTML.current, {color: "red" ,duration: 0.7, ease: 'bounce.out'})


  }, [counter]);
  return (
    <>
      <h1>CounterEffect: </h1>
      <h2 ref={counterHTML}>
        {counter}
        </h2>
      <button className="" onClick={handleClick}>
        + 1
      </button>
    </>
  );
};
