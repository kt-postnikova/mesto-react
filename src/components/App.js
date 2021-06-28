import React from 'react';
import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import ImagePopup from './ImagePopup';
import api from '../utils/api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { CardsContext } from '../contexts/CardsContext';


function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);

  const [selectedCard, setSelectedCard] = React.useState(null);
  const [cards, setCards] = React.useState([]);

  const [currentUser, setCurrentUser] = React.useState('');

  //const cards = React.useContext(CardsContext)


  React.useEffect(() => {
    api.getUserInfo()
      .then(userInfo => {
        setCurrentUser(userInfo);
      })
  }, [])

  React.useEffect(() => {
    api.getCards()
      .then(res => {
        setCards(res);
      })
      .catch(err => {
        console.log(err);
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

  function handleUpdateUser(card) {
    api.editUserInfo(card)
      .then(res => {
        setCurrentUser(res)
      })

    setEditProfilePopupOpen(false);
  }

  function handleUpdateAvatar(card) {
    api.editAvatar(card)
      .then(res => {
        setCurrentUser(res)
      })

    setEditAvatarPopupOpen(false)
  }




  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    api.changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
      });
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id)
      .then(res => {
        setCards((state) => {
          return state.filter(newArr => {
            return newArr !== card
          })
        })
      })
  }

  function handleAddPlaceSubmit(card) {
    api.createCard(card)
      .then(newCard => {
        setCards([newCard, ...cards])
      })

    setAddPlacePopupOpen(false);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <CardsContext.Provider value={cards}>
        <Header />
        <Main
          onEditAvatar={handleEditAvatarClick}
          onAddPlace={handleAddPlaceClick}
          onEditProfile={handleEditProfileClick}
          onCardClick={handleCardClick}
          cards={cards}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
          setCards={setCards}
        />
        <Footer />
        {/* <PopupWithForm
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
        </PopupWithForm> */}

        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}>
        </EditProfilePopup>

        {/* <PopupWithForm
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
        </PopupWithForm> */}
        {/* <PopupWithForm
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
        </PopupWithForm> */}

        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onAddPlace={handleAddPlaceSubmit}>
        </AddPlacePopup>
        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}>
        </EditAvatarPopup>
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
      </CardsContext.Provider>
    </CurrentUserContext.Provider>
  )
}

export default App;
