import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../styles/dotgrow.css';

const DotGrow = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".dotGrow",
        start: "top center",
        end: "+=100%",
        scrub: true,
        pin: true,
      },
    });

    tl.to(".dotGrow", {
      scale: "38",
    }).to(".text", { x: -5500 }, "-=0.3");
  }, []);

  return (
    <div className="block">
      <div className="dotGrow"></div>
    </div>
  );
};

export default DotGrow;
