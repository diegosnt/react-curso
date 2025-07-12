import { useEffect } from "react";

useEffect(() => {
    console.log("primera ejecucion useEffect")
    return () => {
      // Limpieza del efecto             //(opcional)
    };
  }, []);