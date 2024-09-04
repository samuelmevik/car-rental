import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import HomePage from './pages/home-page/HomePage.tsx'
import AboutPage from './pages/about/AboutPage.tsx'
import ModelsPage from './pages/models/ModelsPage.tsx'
import TestimonialsPage from './pages/testimonials/TestimonialsPage.tsx'
import OurTeamPage from './pages/our-team/OurTeamPage.tsx'
import ContactPage from './pages/contact/ContactPage.tsx'

const router = createBrowserRouter([
  { path: '/', element: <HomePage />, errorElement: <div>404 Not Found</div> },
  { path: '/about', element: <AboutPage /> },
  { path: '/models', element: <ModelsPage />},
  { path: '/testimonials', element: <TestimonialsPage /> },
  { path: '/our-team', element: <OurTeamPage /> },
  { path: '/contact', element: <ContactPage /> },
], {
  basename: '/car-rental/',
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
