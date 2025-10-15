import type { Remedio } from "../../types/remedio.ts";

export default function CardRemedio({ remedio }: { remedio: Remedio }) {
  return (
    <div key={remedio.id}>
      <img src={remedio.imagem} alt={`Imagem de ${remedio.nome}`}/>
      <div>
        <h2>{remedio.nome}</h2>
        <p>{remedio.descricao}</p>
      </div>
      <div>
        <span>ID: {remedio.id}</span>
        <span>Fab: {remedio.dataFabricacao}</span>
        <span>Val: {remedio.dataValidade}</span>
      </div>
    </div>
  );
}