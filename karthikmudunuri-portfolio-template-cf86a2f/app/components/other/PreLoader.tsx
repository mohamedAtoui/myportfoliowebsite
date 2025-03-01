import React, { useEffect } from "react";
import gsap from "gsap";

const PreLoader: React.FC = () => {
  useEffect(() => {
    const tl = gsap.timeline();

    tl.to(".texts-container", {
      duration: 0,
      opacity: 1,
      ease: "Power3.easeOut",
    })
      .from(".texts-container span", {
        duration: 0.8,
        y: 70,
        skewY: 10,
        ease: "Power3.easeOut",
      })
      .to(".preloader", {
        duration: 1,
        height: "0vh",
        ease: "Power3.easeOut",
      })
      .to(".preloader", {
        duration: 0,
        css: { display: "none" },
      });
  }, []);

  return (
    <div
      className="preloader"
      style={{
        height: "100vh",
        width: "100%",
        background: "#000000",
        color: "#e5ebf2",
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 55,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        className="texts-container"
        style={{
          height: "60px",
          opacity: 0,
        }}
      >
        <span className="text-xl font-bold">Welcome</span>
      </div>
    </div>
  );
};

export default PreLoader;