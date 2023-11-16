import { PreviewGallery } from "../components/PreviewGallery"
import { PropertyTable } from "../components/PropertyTable"
import { IProduct } from "../interface"

export default function ProductDescription({ product }: { product: IProduct }) {
  return (
    <div>
      <div className="productDescription__container">
        <div className="preview__gallery">
          <PreviewGallery images={product.img}></PreviewGallery>
        </div>
        <div className="product__description">
          <div className="product__description--heading">
            <h1 className="heading__primary">{product.name}</h1>
          </div>
          <div className="product__description--price">
            <h2 className="heading__secondary">{product.price}</h2>
          </div>

          <div className="product__description--sku">
            <h2 className="heading__secondary">{product.sku}</h2>
          </div>

          <div className="product__description--buttons">
            <div className="button__quantity">
              <button className="button__quantity--decrement">-</button>
              <input type="text" className="input__quantity" />
              <button className="button__quantity--increment">+</button>
            </div>
            <div className="button__addtocart">
              <button className="button__addtocart--primary">Add To Cart</button>
            </div>
          </div>
        </div>
        <div className="table__container">
          <PropertyTable product={product}></PropertyTable>
        </div>
      </div>
    </div>
  )
}
