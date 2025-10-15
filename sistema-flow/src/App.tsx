import { Outlet } from 'react-router-dom';
import './App.css'; // Mantido para estilos globais, se houver.

export default function App() {
  return (
    <div className="app-container">
      <main>
        <Outlet />
      </main>
    </div>
  );
}

