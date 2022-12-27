import { useState } from "react";

// Control light mode from one placce

export const useMode = () => {
  const [isLightMode, setIsLightMode] = useState(false);

  return [isLightMode, setIsLightMode];
};
