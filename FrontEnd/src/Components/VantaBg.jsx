import { useEffect, useRef } from "react";
import NET from "vanta/dist/vanta.net.min";
import * as THREE from "three";


function VantaBg() {
  const vantaRef = useRef(null);

  useEffect(() => {
    const effect = NET({
      el: vantaRef.current,
      THREE: THREE,
      color: 0xffffff,
      backgroundColor: 0x111111,
      points: 4,
      maxDistance: 18,
      spacing: 20
    });

    return () => {
      if (effect) effect.destroy();
    };
  }, []);

  return (
    <div
      ref={vantaRef}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -1
      }}
    />
  );
}

export default VantaBg;