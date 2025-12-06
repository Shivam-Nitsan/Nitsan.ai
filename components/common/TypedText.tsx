"use client";

import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function TypedText({ strings = [] }) {
  const el = useRef<HTMLSpanElement | null>(null);
  const typedInstance = useRef<Typed | null>(null);

  useEffect(() => {
    if (el.current) {
      typedInstance.current = new Typed(el.current, {
        stringsElement: "#typed-strings",
        loop: true,
        typeSpeed: 60,
        backSpeed: 30,
        backDelay: 2500
      });
    }

    return () => typedInstance.current?.destroy();
  }, []);

  return (
    <>
      <span id="typed-strings">
        {strings.map((text, idx) => (
          <b key={idx}>{text}</b>
        ))}
      </span>
      <span id="typed" ref={el} />
    </>
  );
}
