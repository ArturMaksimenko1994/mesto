import {openPopup, popupImage} from './index.js';

class Card {
  constructor(data, cardSelector){
    this._cardSelector = cardSelector;
    this._name = data.name;
    this._link = data.link;
  }


  _getTemplate(){
    // забираем разметку из HTML и клонируем элемент
    const cardElement = document
    .querySelector(this._cardSelector)
    .content
    .querySelector('.element__item')
    .cloneNode(true);

    // вернём DOM-элемент карточки
    return cardElement;
  }


  _setEventListeners() {
    this._elementImage = this._element.querySelector('.element__img');

    this._elementImage.addEventListener('click', () => {
			openPopup(popupImage);

			this._imagePreview = popupImage.querySelector('.popup__picture');
    	this._imagePreview.src = this._link;
    	this._imagePreview.alt = this._name;
    	document.querySelector('.popup__text').textContent = this._name;
		});

    //дабавляем лайк активный
    this._element.querySelector('.element__like').addEventListener('click', (evt) => {
			evt.target.classList.toggle('element__like_active');
		});

    //удаляем карточку
    this._element.querySelector('.element__delete').addEventListener('click', () => {
			this._element.remove();
		});
  }

  generateCard(){
    // Запишем разметку в приватное поле _element. Так у других элементов появится доступ к ней.
    this._element = this._getTemplate();
    this._setEventListeners();

    // Добавим данные
    this._element.querySelector('.element__img').src = this._link;
    this._element.querySelector('.element__img').alt = this._name;
    this._element.querySelector('.element__title').textContent = this._name;

    // Вернём элемент наружу
    return this._element;
  }
}



export { Card };



