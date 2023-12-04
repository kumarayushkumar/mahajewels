import React from 'react'
import { IProduct } from '../interface'

interface PropertyTableProps {
  product: IProduct
}

export const PropertyTable: React.FC<PropertyTableProps> = ({ product }) => {
  return (
    <div>
      <table className="propertyTable">
        <thead>
          <th>Property</th>
          <th>Value</th>
        </thead>
        <tbody>
          {Object.entries(product).map(([key, value]) => {
            return (
              <tr>
                <td>{key}</td>
                <td>{value}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
