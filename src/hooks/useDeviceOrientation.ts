"use client";

import { useState, useEffect } from "react";

export interface OrientationData {
  beta: number | null; // -180 to 180 (tilt front/back)
  gamma: number | null; // -90 to 90 (tilt left/right)
}

export function useDeviceOrientation() {
  const [orientation, setOrientation] = useState<OrientationData>({
    beta: null,
    gamma: null,
  });

  useEffect(() => {
    const handleOrientation = (event: DeviceOrientationEvent) => {
      setOrientation({
        beta: event.beta,
        gamma: event.gamma,
      });
    };

    if (typeof window !== "undefined" && "DeviceOrientationEvent" in window) {
      // For iOS 13+ parity, but we'll stick to a simple listener for now
      // and let the user trigger permission if needed via a button later if we want to be thorough.
      window.addEventListener("deviceorientation", handleOrientation);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("deviceorientation", handleOrientation);
      }
    };
  }, []);

  return orientation;
}
