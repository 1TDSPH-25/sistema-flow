import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom'
import App from './App.tsx'
import Home from './routes/Home/index.tsx'
import Error from './routes/Error/index.tsx'
import Login from './routes/Login/index.tsx'
import Cadastro from './routes/Cadastro/index.tsx'
import PaginaRemedios from './routes/Remedios/index.tsx'
import './globals.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="cadastro" element={<Cadastro />} />
          <Route path="remedios" element={<PaginaRemedios />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </HashRouter>
  </StrictMode>
)