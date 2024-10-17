import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './css/styleBase.css'
import './css/index.css'
import {RouterProvider} from 'react-router-dom'
import Routers from 'routes'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={Routers} />
  </StrictMode>,
)
