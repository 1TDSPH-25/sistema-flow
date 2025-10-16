import { Outlet } from 'react-router-dom';
import Cabecalho from './components/Cabecalho/Cabecalho';
import Rodape from './components/Rodape/Rodape';
// Mantido para estilos globais, se houver.

export default function App() {
  return (
    <div className="app-container">
        <Cabecalho />
        <Outlet />
        <Rodape />
    </div>
  );
}