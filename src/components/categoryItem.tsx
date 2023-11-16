type CategoryItemProps = {
  name: string;
  image: string;
}

export const CategoryItem = ({ name, image }: CategoryItemProps): JSX.Element => {
  return (
    <div>
      <div className="category__item">
        <div className="category__item--image">
          <img src={image} alt="category" />
        </div>
        <div className="category__item--name">
          <h3 className="heading__tertiary">
            {name}
          </h3>
        </div>
      </div>
    </div>
  )
}
