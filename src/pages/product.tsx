import { useParams } from "react-router-dom"

export default function Product() {
  const params = useParams<{ category: string }>()
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target && (e.target as HTMLElement).closest('.product__card')) {
      const id = (e.target as HTMLElement).closest('.product__card')?.id
      console.log(id)
    }
  }

  return (
    <div>
      <div className="product__container">
        <div className="product__hero">
          <div className="product__hero--image">
            <img src="" alt="product" />
          </div>
        </div>
        <div className="product__results">
          <div className="product__results--heading"></div>
          <div className="product__cards" onClick={handleClick}>
            {/* render product card using component */}
          </div>
        </div>
      </div>
    </div>
  )
}
