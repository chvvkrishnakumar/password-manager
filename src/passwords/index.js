import './index.css'

const Passwords = props => {
  const {details, show, deleteItem} = props
  const {userName, password, id, webSite} = details

  const onDelete = () => {
    deleteItem(id)
  }

  return (
    <li>
      <p className="profile">{webSite[0]}</p>
      <div>
        <p>{webSite}</p>
        <p>{userName}</p>
        <p>
          {show ? (
            password
          ) : (
            <img
              className="star"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
              alt="stars"
            />
          )}
        </p>
      </div>
      <button
        data-testid="delete"
        onClick={onDelete}
        className="delete"
        type="button"
      >
        <img
          className="icon"
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default Passwords
