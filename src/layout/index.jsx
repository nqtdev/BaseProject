import {Outlet} from 'react-router-dom'
import LayoutHeader from './layoutHeader'
import LayoutFooter from './layoutFooter'

const Layout = () => {
  return (
    <>
      <header>
        <LayoutHeader />
      </header>
      <body>
        <Outlet />
      </body>
      <footer>
        <LayoutFooter />
      </footer>
    </>
  )
}

export default Layout
