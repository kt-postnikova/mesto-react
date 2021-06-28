import React from 'react';
import { CardsContext } from '../contexts/CardsContext';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import profileAddButton from '../images/add-button.svg';
import api from '../utils/api';
import Card from './Card'


function Main(props) {

    const currentUser = React.useContext(CurrentUserContext);
    // const cards = React.useContext(CardsContext)

    // function handleCardLike(card) {
    //     const isLiked = card.likes.some(i => i._id === currentUser._id);

    //     api.changeLikeCardStatus(card._id, !isLiked)
    //         .then((newCard) => {
    //             props.setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    //         });
    // }

    // function handleCardDelete(card) {
    //     api.deleteCard(card._id)
    //         .then(res => {
    //             props.setCards((state) => {
    //                 return state.filter(newArr => {
    //                     return newArr !== card
    //                 })
    //             })
    //         })
    // }

    return (
        <main className="content page__content">
            <section className="profile content__profile">
                <div className="profile__block">
                    <div className="avatar" onClick={props.onEditAvatar}>
                        <div className="avatar__overlay"></div>
                        <img className="avatar__image" src={currentUser.avatar} alt="Аватар пользователя" />
                    </div>
                    <div className="profile__info">
                        <h1 className="profile__name">{currentUser.name}</h1>
                        <button className="profile__button" onClick={props.onEditProfile} type="button" aria-label="Редактировать профиль"></button>
                        <p className="profile__about">{currentUser.about}</p>
                    </div>
                </div>
                <button className="profile__add-button" onClick={props.onAddPlace}><img src={profileAddButton} alt="Создать"
                    className="profile__add-button-img" /></button>
            </section>
            <section id="elements" className="elements content__elements">
                {
                    props.cards.map(card =>
                    (<Card
                        key={card._id}
                        card={card}
                        currentUser={currentUser}
                        onCardClick={props.onCardClick}
                        onCardLike={props.onCardLike}
                        onCardDelete={props.onCardDelete}>
                    </Card>
                    ))
                }
            </section>
        </main >
    );
}

export default Main;