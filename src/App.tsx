import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home";
import Product from './pages/product';
import Header from './components/Header';
import ProductDescription from './pages/productDescription';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:category" element={<Product />} />
        <Route path="/category/:category/:id" element={<ProductDescription />} />
      </Routes>
    </BrowserRouter>
  )
}
