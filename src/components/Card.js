import React from 'react';

function Card(props) {

    function handleCardClick() {
        props.onCardClick(props.card);
    }

    // Определяем, являемся ли мы владельцем текущей карточки
    const isOwn = props.card.owner._id === props.currentUser._id;

    // Создаём переменную, которую после зададим в `className` для кнопки удаления
    const cardDeleteButtonClassName = (
        `element__trash-btn ${isOwn ? 'element__trash-btn_visible' : 'element__trash-btn_hidden'}`
    );


    // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
    const isLiked = props.card.likes.some(i => i._id === props.currentUser._id);

    // Создаём переменную, которую после зададим в `className` для кнопки лайка
    const cardLikeButtonClassName = `...`;

    return (
        <>
            <article className="element">
                <img className="element__image" onClick={handleCardClick} alt={props.card.name} src={props.card.link} />
                <button className={cardDeleteButtonClassName} type="button" aria-label="Удалить"></button>
                <div className="element__block">
                    <h2 className="element__title">{props.card.name}</h2>
                    <div className="like">
                        <button className="like__button" type="button" aria-label="Нравится"></button>
                        <span className="like__counter">{props.card.likes.length}</span>
                    </div>
                </div>
            </article>
        </>
    )
}

export default Card;