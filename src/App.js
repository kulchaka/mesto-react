function App() {
  return (
    <div className="App">
      <header className="header root__section">
        <img src="./images/logo_3.png" alt="mesto logo" className="logo"/>
      </header>
      <div className="profile root__section">
        <div className="user-info">
          <div className="user-info__photo">
            <p className="user-info__change">Change logo</p>
          </div>
          <div className="user-info__data">
            <h1 className="user-info__name"></h1>
            <p className="user-info__job"></p>
            <button
                data-id="popup-edit"
                type="submit"
                className="user-info__place-edit"
            >
              Edit
            </button>
          </div>
          <button data-id="popup" className="button user-info__button">
            +
          </button>
        </div>
      </div>
      <div className="places-list root__section">

      </div>

      <div className="popup popup-avatar">
        <div className="popup-avatar__content">
          <img
              data-id="popup-avatar"
              src="./images/close.svg"
              alt=""
              className="popup-avatar__close"
          />
          <h3 className="popup-avatar__title">Update logo</h3>
          <form
              className="popup__form-valid popup-avatar__form"
              name="new"
              noValidate
          >
            <input
                data-id="popup-avatar__link"
                id="link"
                type="url"
                name="link"
                className="popup-avatar__input popup-avatar__input_type_link-url"
                placeholder="link to change avatar"
                required
                pattern="(^https?:\/\/)?[a-z0-9~_\-\.]{2,}\.[a-z]{1,9}[aA-zZ0-9~_\-\./?=&]+"
            />
            <span className="popup-error popup-avatar__name-error"></span>
            <button
                type="submit"
                id="popup-avatar__button"
                className="button popup-avatar__button"
                disabled
            >
              Save
            </button>
          </form>
        </div>
      </div>

      <div className="popup popup_add">
        <div className="popup__content">
          <img
              data-id="popup"
              src="./images/close.svg"
              alt=""
              className="popup__close"
          />
          <h3 className="popup__title">New photo with title</h3>
          <form
              id="form"
              className="popup__form-valid popup__form"
              name="new"
              noValidate
          >
            <input
                data-id="popup__name"
                id="name"
                type="text"
                minLength="2"
                maxLength="30"
                name="name"
                className="popup__input popup__input_type_name"
                placeholder="Name"
                required
            />
            <span id="error-name" className="popup-error popup__name-error"></span>
            <input
                data-id="popup__link"
                id="link"
                type="url"
                name="link"
                className="popup__input popup__input_type_link-url"
                placeholder="link image"
                required
                pattern="(^https?:\/\/)?[a-z0-9~_\-\.]{2,}\.[a-z]{1,9}[aA-zZ0-9~_\-\./?=&]+"
            />
            <span id="error-link" className="popup-error popup__link-error"></span>
            <button
                id="button"
                data-name="popup"
                type="submit"
                className="button popup__button"
                disabled
            >
              +
            </button>
          </form>
        </div>
      </div>

      <div className="popup popup-edit">
        <div className="popup-edit__content">
          <img
              data-id="popup-edit"
              src="./images/close.svg"
              alt=""
              className="popup-edit__close"
          />
          <h3 className="popup-edit__title">Edit Profile</h3>
          <form
              className="popup__form-valid popup-edit__form"
              name="new"
              noValidate
          >
            <input
                data-id="popup-edit__name"
                id="user-name"
                type="text"
                minLength="2"
                maxLength="30"
                name="name"
                className="popup-edit__input popup-edit__input_type_name"
                placeholder="Name"
                required
            />
            <span className="popup-error popup-edit__name-error"></span>
            <input
                data-id="popup-edit__dscr"
                id="user-name"
                type="text"
                minLength="2"
                maxLength="30"
                name="link"
                className="popup-edit__input popup-edit__input-dscr"
                placeholder="About Me"
                required
            />
            <span
                className="popup-error popup-edit__info-error popup-edit__dscr-error"
            ></span>
            <button
                type="submit"
                id="popup-edit__button"
                className="button popup-edit__button"
                disabled
            >
              Save
            </button>
          </form>
        </div>
      </div>

      <div className="popup popup-image">
        <div className="popup-image__content">
          <img alt="" className="popup-image__picture"/>
          <img src="./images/close.svg" alt="" className="popup-image__close"/>
        </div>
      </div>
      <footer className="footer">
        <p className="footer__text">Andriy Kulchytskyi</p>
      </footer>
    </div>
  );
}

export default App;
