"use client";
import React, { useRef, useEffect } from 'react';
import p5 from 'p5';

interface P5WrapperProps {
  sketch: (p: p5) => void;
}

const P5Wrapper: React.FC<P5WrapperProps> = ({ sketch }) => {
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
    let p5Instance = new p5(sketch, canvasRef.current as HTMLElement);

    // Cleanup P5 instance on component unmount
    return () => {
      p5Instance.remove();
    };
  }
  }, [sketch]);
  

  return <div ref={canvasRef} />;
};

export default P5Wrapper;
