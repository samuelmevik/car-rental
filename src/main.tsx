import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import HomePage from './pages/home-page/HomePage.tsx'

const router = createBrowserRouter([
  { path: '/', element: <HomePage />, errorElement: <div>404 Not Found</div> },
  { path: '/about', element: <HomePage /> },
  { path: '/models', element: <HomePage />},
  { path: '/About', element: <HomePage /> },
  { path: '/testimonials', element: <HomePage /> },
  { path: '/our-team', element: <HomePage /> },
  { path: '/contact', element: <HomePage /> },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
