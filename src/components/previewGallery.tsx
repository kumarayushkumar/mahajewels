import React from 'react'

interface PreviewGalleryProps {
  images: string[]
}

export const PreviewGallery: React.FC<PreviewGalleryProps> = ({ images }) => {
  images.length % 2 !== 0 ? (images = images.slice(1)) : (images = images)
  return (
    <div>
      {/* make it grid */}
      <div>
        {
        images.map((image: string, index: number) => (
          <img src={image} alt="" key={index}/>
        ))
        }
      </div>
    </div>
  )
}
