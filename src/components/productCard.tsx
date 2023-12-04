type ProductCardProps = {
  id: string
  name: string
  price: string
  image: string
}

export default function ProductCard({
  id,
  name,
  price,
  image
}: ProductCardProps): JSX.Element {
  return (
    <div className="product__card" id={id}>
      <div className="product__card--image">
        <img src={image} alt="product" />
      </div>
      <div className="product__card--name">
        <h3 className="heading__tertiary">{name}</h3>
      </div>
      <div className="product__card--price">
        <h3 className="heading__tertiary">{price}</h3>
      </div>
    </div>
  )
}
