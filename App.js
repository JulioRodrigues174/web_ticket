
import { useState } from "react";
import Totem from "./components/Totem";
import Painel from "./components/Painel";
import Atendente from "./components/Atendente";
import "./App.css";

export default function App() {
  const [filaSP, setFilaSP] = useState([]);
  const [filaSG, setFilaSG] = useState([]);
  const [filaSE, setFilaSE] = useState([]);
  const [historico, setHistorico] = useState([]);

  const emitirSenha = (tipo) => {
    const data = new Date();
    const YY = String(data.getFullYear()).slice(-2);
    const MM = String(data.getMonth() + 1).padStart(2, "0");
    const DD = String(data.getDate()).padStart(2, "0");

    const seq = Math.floor(1000 + Math.random() * 9000);
    const senha = `${YY}${MM}${DD}-${tipo}${seq}`;

    if (tipo === "SP") setFilaSP([...filaSP, senha]);
    if (tipo === "SG") setFilaSG([...filaSG, senha]);
    if (tipo === "SE") setFilaSE([...filaSE, senha]);
  };

  const chamarProximo = () => {
    let chamada = null;

    if (filaSP.length > 0) {
      chamada = filaSP[0];
      setFilaSP(filaSP.slice(1));
    } else if (filaSE.length > 0) {
      chamada = filaSE[0];
      setFilaSE(filaSE.slice(1));
    } else if (filaSG.length > 0) {
      chamada = filaSG[0];
      setFilaSG(filaSG.slice(1));
    }

    if (chamada) {
      const novoHist = [chamada, ...historico];
      setHistorico(novoHist.slice(0, 5));
    }
  };

  return (
    <div className="container">
      <h1>Sistema de Atendimento</h1>

      <div className="grid">
        <Totem emitirSenha={emitirSenha} />
        <Painel historico={historico} />
        <Atendente chamarProximo={chamarProximo} />
      </div>
    </div>
  );
}
