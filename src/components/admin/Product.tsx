import { useState } from "react"
import { Link, useParams } from "react-router-dom"

import Loading from "../Loading"
import { IProduct } from "../../interface"

export default function Product() {
  const { sku } = useParams()
  const [product, setProduct] = useState<IProduct | null>(null)

  if (!product) {
    return <Loading />
  }

  return (
    <div className="container">
      <Link to=".." relative="path" className="">&larr; Back</Link>
      <div className="row">
        <div className="col-3">
          <img src={product.img[0]} alt="" />
        </div>
        <div className="col-9">

        </div>
      l</div>
    </div>
  )
}
