import type { Remedio } from "../../types/remedio.ts";
import './globals.css';

export default function CardRemedio({ remedio }: { remedio: Remedio }) {
  return (
    <div key={remedio.id} className="card-remedio">
      <img className="card-remedio-imagem" src={remedio.imagem} alt={`Imagem de ${remedio.nome}`} />
      <div className="card-remedio-corpo">
        <h2 className="card-remedio-titulo">{remedio.nome}</h2>
        <p className="card-remedio-descricao">{remedio.descricao}</p>
      </div>
      <div className="card-remedio-tags">
        <span className="card-remedio-tag">ID: {remedio.id}</span>
        <span className="card-remedio-tag">Fab: {remedio.dataFabricacao}</span>
        <span className="card-remedio-tag">Val: {remedio.dataValidade}</span>
      </div>
    </div>
  );
}