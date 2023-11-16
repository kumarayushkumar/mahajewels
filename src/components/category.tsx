import { ProductCategory } from "../interface"
import { CategoryItem } from "./CategoryItem"

export default function Category() {
  return (
    <div>
      <div className="category__container">
        <div className="category__heading">
          <h2 className="heading__secondary">Shop By Category</h2>
          <p>Browse through your favourite categories. We've got them all</p>
        </div>
        <div className="category__list">
          <ul className="list">
            {Object.values(ProductCategory).map(category => (
              <CategoryItem name={category} image="" />
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
