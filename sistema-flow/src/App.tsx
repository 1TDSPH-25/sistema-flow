import { Outlet } from 'react-router-dom';
import Cabecalho from './components/Cabecalho/Cabecalho';
// Mantido para estilos globais, se houver.
 
export default function App() {
  return (
    <div className="app-container">
      <main>
        <Cabecalho />
        <Outlet />
      </main>
    </div>
  );
}