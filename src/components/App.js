import React from 'react';
import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import Card from './Card';
import api from '../utils/api';

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);

  const [cards, setCards] = React.useState([]);
  const [selectedCard, setSelectedCard] = React.useState(null);


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


  React.useEffect(() => {
    api.getCards()
      .then(res => {
        setCards(res);
      })
  })

  return (
    <>
      <Header />
      <Main
        onEditAvatar={handleEditAvatarClick}
        onAddPlace={handleAddPlaceClick}
        onEditProfile={handleEditProfileClick}

        onCardClick={handleCardClick}
        cards={cards}
      />
      <Footer />
      <PopupWithForm
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        name="user-info"
        title="Редактировать профиль">
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
        title="Новое место">
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
        title="Обновить аватар">
        <label className="form__field form__field_under">
          <input id="avatar-input" className="form__input form__input_type_avatar" name="link" type="url"
            required />
          <span className="form__error avatar-input-error"></span>
        </label>
      </PopupWithForm>
      <PopupWithForm
        name="delete-card"
        title="Вы уверены?">

      </PopupWithForm>
      <ImagePopup
        card={selectedCard}
        onClose={closeAllPopups}
      >
      </ImagePopup>
    </>
  )
}

export default App;
