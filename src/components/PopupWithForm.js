import React from 'react';

function PopupWithForm(props) {

    return (
        <>
            <div className={`popup popup_type_${props.name} ${props.isOpen ? ('popup_opened') : ''}`}>
                <div className="popup__container">
                    <button className="popup__close" onClick={props.onClose} type="button" aria-label="Закрыть"></button>
                    <form className="form" id={props.name} name={props.name} noValidate>
                        <h2 className="form__header">{props.title}</h2>
                        {props.children}
                        <button className="form__button" type="submit">Сохранить</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default PopupWithForm;