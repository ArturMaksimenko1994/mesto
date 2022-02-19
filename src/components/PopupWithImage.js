import Popup from './Popup.js';
// Открытие Image в попапе
export default class PopupWithImage extends Popup {
	constructor(popupSelector) {
		super(popupSelector);
		this._popupTitle = this._popup.querySelector('.popup__text');
		this._popupImage = this._popup.querySelector('.popup__picture');
	}
	// Вставляем данные для попапа с img
	open(name, link) {
		// Открытие попапа
		super.open();
		this._popupImage.src = link;
		this._popupImage.alt = name;
		this._popupTitle.textContent = name;
	}
}
