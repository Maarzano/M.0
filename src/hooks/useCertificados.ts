import { useEffect, useState } from "react";
import { certificadosMock } from "../data/Certificates/index.mock";

export const useCertificados = () => {
   const [data, setData] = useState(certificadosMock);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      setTimeout(() => {
         setData(certificadosMock);
         setLoading(false);
      }, 1000);
   }, []);

   return { data, loading };
}