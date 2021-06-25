import React from 'react';
import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import api from '../utils/api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';


function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);

  const [selectedCard, setSelectedCard] = React.useState(null);

  const [currentUser, setCurrentUser] = React.useState('');

  React.useEffect(() => {
    api.getUserInfo()
      .then(userInfo => {
        setCurrentUser(userInfo);
      })
  }, [])


  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setEditAvatarPopupOpen(false);

    setSelectedCard(null)
  }

  function handleCardClick(card) {
    setSelectedCard(card)
  }


  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Header />
      <Main
        onEditAvatar={handleEditAvatarClick}
        onAddPlace={handleAddPlaceClick}
        onEditProfile={handleEditProfileClick}
        onCardClick={handleCardClick}
      />
      <Footer />
      <PopupWithForm
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        name="user-info"
        title="Редактировать профиль"
        button="Сохранить">
        <label className="form__field">
          <input id="name-input" className="form__input form__input_type_name" name="name" type="text"
            minLength="2" maxLength="40" required />
          <span className="form__error name-input-error"></span>
        </label>
        <label className="form__field">
          <input id="about-input" className="form__input form__input_type_about" name="about" type="text"
            minLength="2" maxLength="200" required />
          <span className="form__error about-input-error"></span>
        </label>
      </PopupWithForm>
      <PopupWithForm
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        name="add-card"
        title="Новое место"
        button="Создать">
        <label className="form__field">
          <input id="title-input" className="form__input form__input_type_title" name="title" type="text"
            placeholder="Название" minLength="1" maxLength="30" required />
          <span className="form__error title-input-error"></span>
        </label>
        <label className="form__field">
          <input id="link-input" className="form__input form__input_type_link" name="link" type="url"
            placeholder="Ссылка на картинку" required />
          <span className="form__error link-input-error"></span>
        </label>
      </PopupWithForm>
      <PopupWithForm
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        name="edit-avatar"
        title="Обновить аватар"
        button="Сохранить">
        <label className="form__field form__field_under">
          <input id="avatar-input" className="form__input form__input_type_avatar" name="link" type="url"
            required />
          <span className="form__error avatar-input-error"></span>
        </label>
      </PopupWithForm>
      <PopupWithForm
        name="delete-card"
        title="Вы уверены?"
        button="Да">

      </PopupWithForm>
      <ImagePopup
        card={selectedCard}
        onClose={closeAllPopups}
      >
      </ImagePopup>
    </CurrentUserContext.Provider>
  )
}

export default App;
