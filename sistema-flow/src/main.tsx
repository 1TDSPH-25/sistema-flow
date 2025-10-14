import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import Login from './routes/Login/index.tsx'
import Error from './routes/Error/index.tsx'

/* LEMBRETE PARA OS DEVS DO MENU:
  As rotas a serem criadas e adicionadas ao menu principal são:
  - /login
  - /cadastro
  Outras rotas só devem ser implementadas mediante definição oficial.
*/

const router = createBrowserRouter([
  {path: "/", element: <App/>, errorElement: <Error/>, children: [
    {path: "/login", element: <Login/>}
  ]}
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router = {router}/>
  </StrictMode>,
)
