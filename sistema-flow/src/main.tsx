import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import Login from './routes/Login/index.tsx'
import Error from './routes/Error/index.tsx'
import Cadastro from './routes/Cadastro/index.tsx'

/* LEMBRETE PARA OS DEVS DO MENU:
  As rotas a serem criadas e adicionadas ao menu principal são:
  - /login
  - /cadastro
  Outras rotas só devem ser implementadas mediante definição oficial.
*/

const router = createBrowserRouter([
  {path: "/", element: <App/>, errorElement: <Error/>, children: [
    {path: "/login", element: <Login/>},
    {path: "/cadastro",element: <Cadastro/>}
  ]}
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router = {router}/>
  </StrictMode>,
)
