import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'

import Home from './pages/Home'
import Error from './pages/Error'
import AllProducts from './components/admin/AllProducts'
import Product from './components/admin/Product'
import Setting from './components/admin/Setting'
import Protected from './components/admin/Protected'
import Login from './pages/admin/Login'
import Admin from './pages/admin/Admin'
import Layout from './components/Layout'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/category/:category" element={<Product />}>
          {/* <Route path="/:sku" element={<ProductDescription />} /> */}
        </Route>
      </Route>

      <Route path="login" element={<Login />} />

      <Route path="admin" element={<Protected />}>
        <Route element={<Admin />}>
          <Route path="products">
            <Route index element={<AllProducts />} />
            <Route path=":sku" element={<Product />} />
          </Route>
          <Route path="setting" element={<Setting />} />
        </Route>
      </Route>

      <Route path="*" element={<Error />} />
    </Route>
  )
)

export default function App() {
  return <RouterProvider router={router} />
}
