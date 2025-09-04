import * as React from 'react'
import { Outlet, createRootRoute } from '@tanstack/react-router'
import NotFound from '../components/NotFound'
import Navbar from '../components/Navbar'

export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent : NotFound
})

function RootComponent() {
  return (
    <React.Fragment>
      <Navbar/>
      <hr className="border-gray-300" />
      <Outlet />
    </React.Fragment>
  )
}
