import type { Remedio } from "../../types/remedio.ts";
<<<<<<< HEAD

=======
>>>>>>> ca18e1ac3a1080d3e5939e0798948b3f1a8fcdbc

export default function CardRemedio({ remedio }: { remedio: Remedio }) {
  return (
    <div key={remedio.id}>
<<<<<<< HEAD
      <img src={remedio.imagem} alt={`Imagem de ${remedio.nome}`} />
=======
      <img src={remedio.imagem} alt={`Imagem de ${remedio.nome}`}/>
>>>>>>> ca18e1ac3a1080d3e5939e0798948b3f1a8fcdbc
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