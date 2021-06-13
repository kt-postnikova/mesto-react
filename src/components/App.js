import React from 'react';
import headerLogo from '../images/logo.svg';
import profileAddButton from '../images/add-button.svg';

function App() {
  return (
    <>


      <div className="popup popup_show-image">
        <figure className="popup__block">
          <button className="popup__close popup__close_type_show-image" type="button" aria-label="Закрыть"></button>
          <img className="popup__image" alt=" " src="#" />
          <figcaption className="popup__caption"></figcaption>
        </figure>
      </div>


    </>
  );
}

export default App;
