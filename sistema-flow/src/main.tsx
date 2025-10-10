import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import Login from './routes/Login/index.tsx'

const router = createBrowserRouter([
  {path:"/", element:<App/>},
  {path:"/login", element:<Login/>}
]);
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <RouterProvider router = {router}/>
  </StrictMode>,
)
