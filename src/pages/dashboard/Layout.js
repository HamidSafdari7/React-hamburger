import { Outlet } from 'react-router-dom'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import { useState } from 'react'


const Layout = () => {
  const [openSidebar, setOpenSidebar] = useState(false);

  const openSidebarHandler = () => {
    setOpenSidebar(true);
  }

  const closeSidebarHandler = () => {
    setOpenSidebar(false);
  }

  return (
    <div>
      <Toolbar openSidebarHandler={openSidebarHandler} />
      <SideDrawer openSidebar={openSidebar} closeSidebarHandler={closeSidebarHandler} />
      <Outlet />
    </div>
  )
}

export default Layout
