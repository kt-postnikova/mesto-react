import React from 'react';
import profileAddButton from '../images/add-button.svg';
import api from '../utils/api';
import Card from './Card'


function Main(props) {

    const [isUserName, setUserName] = React.useState('');
    const [isUserDescription, setUserDescription] = React.useState('');
    const [isUserAvatar, setUserAvatar] = React.useState('');

    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        api.getUserInfo()
            .then(res => {
                setUserName(res.name);
                setUserDescription(res.about);
                setUserAvatar(res.avatar);
            })
            .catch(err => {
                console.log(err);
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

    return (
        <main className="content page__content">
            <section className="profile content__profile">
                <div className="profile__block">
                    <div className="avatar" onClick={props.onEditAvatar}>
                        <div className="avatar__overlay"></div>
                        <img className="avatar__image" src={isUserAvatar} alt="Аватар пользователя" />
                    </div>
                    <div className="profile__info">
                        <h1 className="profile__name">{isUserName}</h1>
                        <button className="profile__button" onClick={props.onEditProfile} type="button" aria-label="Редактировать профиль"></button>
                        <p className="profile__about">{isUserDescription}</p>
                    </div>
                </div>
                <button className="profile__add-button" onClick={props.onAddPlace}><img src={profileAddButton} alt="Создать"
                    className="profile__add-button-img" /></button>
            </section>
            <section id="elements" className="elements content__elements">
                {
                    cards.map(card =>
                    (<Card
                        key={card._id}
                        card={card}
                        onCardClick={props.onCardClick}></Card>
                    ))
                }
            </section>
        </main >
    );
}

export default Main;