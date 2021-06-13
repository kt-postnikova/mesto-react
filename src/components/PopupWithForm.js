import React from 'react';

function PopupWithForm() {
    return (
        <>
            <div className={`popup popup_typy_${props.name}`}>
                <div className="popup__container">
                    <button className="popup__close" type="button" aria-label="Закрыть"></button>
                    <form className="form" name={props.name} noValidate>
                        <h2 className="form__header">Редактировать профиль</h2>
                    </form>
                </div>
            </div>

            {/* <div className="popup popup_user-info">
                <div className="popup__container">
                    <button className="popup__close" type="button" aria-label="Закрыть"></button>
                    <form className="form" name="formEditProfile" noValidate>
                        <h2 className="form__header">Редактировать профиль</h2>
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
                        <button className="form__button" type="submit">Сохранить</button>
                    </form>
                </div>
            </div>
            <div className="popup popup_add-card">
                <div className="popup__container">
                    <button className="popup__close" type="button" aria-label="Закрыть"></button>
                    <form className="form form_type_add-place" name="formAddPlace" noValidate>
                        <h2 className="form__header form__header_type_add-place">Новое место</h2>
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
                        <button className="form__button form__button_type_add-place" type="submit">Создать</button>
                    </form>
                </div>
            </div>
            <div className="popup popup_edit-avatar">
                <div className="popup__container">
                    <button className="popup__close" type="button" aria-label="Закрыть"></button>
                    <form className="form" name="formEditAvatar" noValidate>
                        <h2 className="form__header">Обновить аватар</h2>
                        <label className="form__field form__field_under">
                            <input id="avatar-input" className="form__input form__input_type_avatar" name="link" type="url"
                                required />
                            <span className="form__error avatar-input-error"></span>
                        </label>
                        <button className="form__button" type="submit">Сохранить</button>
                    </form>
                </div>
            </div>
            <div className="popup popup_delete-card">
                <div className="popup__container">
                    <button className="popup__close" type="button" aria-label="Закрыть"></button>
                    <form className="form form_type_delete-card" name='formDeleteCard' noValidate>
                        <h2 className="form__header form__header_confirm-delete">Вы уверены?</h2>
                        <button className="form__button" type="submit">Да</button>
                    </form>
                </div>
            </div> */}
        </>
    );
}

export default PopupWithForm;