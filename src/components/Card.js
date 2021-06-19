import React from 'react';

function Card(props) {

    function handleCardClick() {
        props.onCardClick(props.card);
    }

    return (
        <>
            <article className="element">
                <img className="element__image" onClick={handleCardClick} alt={props.card.name} src={props.card.link} />
                <button className="element__trash-btn" type="button" aria-label="Удалить"></button>
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