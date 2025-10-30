import { useState, useEffect } from 'react';
import type { Remedio } from '../../types/remedio';
 
 
export default function PaginaRemedios() {
  const [remedios, setRemedios] = useState<Remedio[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
 
  useEffect(() => {
    const fetchRemedios = async () => {
      try {
        const response = await fetch('http://localhost:3001/remedios');
        if (!response.ok) {
          throw new Error('Falha ao buscar os dados. O servidor está online?');
        }
        const data: Remedio[] = await response.json();
        setRemedios(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('Um erro inesperado ocorreu.');
        }
      } finally {
        setLoading(false);
      }
    };
    fetchRemedios();
  }, []);
 
  const renderContent = () => {
    if (loading) {
      return <p className="remedios-loading">Carregando remédios...</p>;
    }
 
    if (error) {
      return (
        <div className="remedios-error">
          <p>Erro: {error}</p>
        </div>
      );
    }
 
    if (remedios.length === 0) {
      return <p className="remedios-empty">Nenhum remédio encontrado.</p>;
    }
 
    return remedios.map((remedio) => (
      <div key={remedio.id} className="remedio-card">
        <img
          src={remedio.imagem}
          alt={`Imagem de ${remedio.nome}`}
          className="remedio-card-image"
        />
 
        <div className="remedio-card-body">
          <h2 className="remedio-card-title">{remedio.nome}</h2>
          <p className="remedio-card-description">{remedio.descricao}</p>
 
          <div className="remedio-card-footer">
            <small className="remedio-card-date">
              Fabricação: {new Date(remedio.dataFabricacao).toLocaleDateString()}
            </small>
            <small className="remedio-card-date">
              Validade: {new Date(remedio.dataValidade).toLocaleDateString()}
            </small>
          </div>
        </div>
      </div>
    ));
  };
 
  return (
    <main className="remedios-page">
      <h1 className="remedios-title">Nossos Remédios</h1>
      <div className="remedios-grid">
        {renderContent()}
      </div>
    </main>
  );
}