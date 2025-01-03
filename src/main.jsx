import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Routes'
import { HelmetProvider } from 'react-helmet-async'
// import { HelmetProvider } from 'react-helmet-async'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <HelmetProvider> */}
    <HelmetProvider>
       <RouterProvider router={router} />

    </HelmetProvider>
  {/* </HelmetProvider> */}
  </StrictMode>,
)
