import './App.css'
import { createBrowserRouter, createRoutesFromChildren, Route, RouterProvider } from 'react-router-dom'
import RootLayout from './layout/RootLayout'

// pages 
import Resipes from './pages/resipes/Resipes'
import Resipe from './pages/resipe/Resipe'

function App() {

  const routes = createBrowserRouter(
    createRoutesFromChildren(
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Resipes />} />
        <Route path=':id' element={<Resipe />} />
      </Route>
    )
  )

  return (
    <RouterProvider router={routes} />
  )
}

export default App
