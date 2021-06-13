import React from 'react';
import profileAddButton from '../images/add-button.svg';


function Main(props) {

    function handleEditAvatarClick() {
        document.querySelector('.popup_edit-avatar').classList.add('popup_opened');
    }

    function handleEditProfileClick() {
        document.querySelector('.popup_user-info').classList.add('popup_opened');
    }

    function handleAddPlaceClick() {
        document.querySelector('.popup_add-card').classList.add('popup_opened');
    }


    return (
        <main className="content page__content">
            <section className="profile content__profile">
                <div className="profile__block">
                    <div className="avatar" onClick={handleEditAvatarClick}>
                        <div className="avatar__overlay"></div>
                        <img className="avatar__image" src=" " alt="Аватар пользователя" />
                    </div>
                    <div className="profile__info">
                        <h1 className="profile__name">Жак-Ив Кусто</h1>
                        <button className="profile__button" onClick={handleEditProfileClick} type="button" aria-label="Редактировать профиль"></button>
                        <p className="profile__about">Исследователь океана</p>
                    </div>
                </div>
                <button className="profile__add-button" onClick={handleAddPlaceClick}><img src={profileAddButton} alt="Создать"
                    className="profile__add-button-img" /></button>
            </section>
            <section className="elements content__elements">
            </section>
        </main>
    );
}

export default Main;