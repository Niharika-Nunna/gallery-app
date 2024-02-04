import './index.css'

const ThumbnailItem = props => {
  const {thumbnailDetails, onThumbnailChange, isActive} = props
  const {thumbnailUrl, thumbnailAltText, id} = thumbnailDetails
  const activeImageClassname = isActive ? 'active image' : 'image'

  const onClicked = () => {
    onThumbnailChange(id)
  }

  return (
    <li className="image-list">
      <button className="button" type="button" onClick={onClicked}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={activeImageClassname}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
