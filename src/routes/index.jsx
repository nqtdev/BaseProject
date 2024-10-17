import {createBrowserRouter} from 'react-router-dom'
import ErrorPage from 'pages/errorPage'
import Layout from 'layout/index'
import DashBoard from 'pages/dashBoard'

const Routers = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/dashboard',
        element: <DashBoard />,
      },
      {
        path: '/*',
        element: <ErrorPage />,
      },
    ],
  },
])
export default Routers
