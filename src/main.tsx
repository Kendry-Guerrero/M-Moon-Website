import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import { HomePage } from './pages/HomepageFolder/HomePage.tsx'
import { AboutPage } from './pages/AboutPageFolder/AboutPage.tsx'
import { NotFoundPage } from './pages/NotFoundPage.tsx'
import { LayoutPage } from './LayoutPage.tsx'
import { FaqPage } from './pages/FaqPageFolder/FaqPage.tsx'
import { WritingsPage } from './pages/WritingsPageFolder/WritingsPage.tsx'
import { BooksPage } from './pages/BookPageFolder/BooksPage.tsx'
import { ContactPage } from './pages/ContactPageFolder/ContactPage.tsx'
import { AnimatePresence } from 'motion/react'
import './index.css'



const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutPage />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: '/about',
        element: <AboutPage />
      },
      {
        path: '/faqs',
        element: <FaqPage />
      },
      {
        path: '/writings',
        element: <WritingsPage />
      },
      {
        path: '/books',
        element: <BooksPage />
      },
      {
        path: '/contact',
        element: <ContactPage />
      }

    ],
    errorElement: <NotFoundPage />
  },



]);


createRoot(document.getElementById('root')!).render(

  <StrictMode>
    <AnimatePresence mode='wait'>
      <RouterProvider router={router} />
    </AnimatePresence>
  </StrictMode>
)
