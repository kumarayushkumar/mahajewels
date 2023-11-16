import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from "react-router-dom"

import Home from "./pages/Home"
import Error from "./pages/Error"
import AllProducts from "./components/admin/AllProducts"
import Product from "./components/admin/Product"
import Setting from "./components/admin/Setting"
import Protected from "./components/admin/Protected"
import Login from "./pages/admin/Login"
import Admin from "./pages/admin/Admin"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Home />} />
      <Route path="gold" element={<h1>gold</h1>} />
      <Route path="order" element={<h1>order</h1>} />

      <Route path="login" element={<Login />} />

      <Route path="admin" element={<Protected />}>
        <Route path="." element={<Admin />}>
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
