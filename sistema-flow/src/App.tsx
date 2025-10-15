import { Outlet } from 'react-router-dom';
import './App.css'; // Mantido para estilos globais, se houver.

function App() {
  return (
    <div className="app-container">
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;