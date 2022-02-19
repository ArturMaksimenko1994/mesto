// Открытие и закрытие попапа
export default class Popup {
	constructor(popupSelector) {
		this._popup = document.querySelector(popupSelector);
		this._handleEscClose = this._handleEscClose.bind(this);
	}

	// уникальное открытие попапа
	open() {
		this._popup.classList.add('popup_open');
		document.addEventListener('keydown',  this._handleEscClose);
	}

	// уникальное закрытие попапа
	close() {
		document.removeEventListener('keydown',  this._handleEscClose);
		this._popup.classList.remove('popup_open');
	}

	// Выход попапа клавишей ESC
	_handleEscClose(evt) {
		if (evt.key === 'Escape') {
			this.close();
		}
	}

	// Закрытие попапов
	setEventListeners() {
		// Клик по крестику popup
		this._popupClose = this._popup.querySelector('.popup__close');
		this._popupClose.addEventListener('click', () => {
			this.close()
		});
		// Клик по оверлею
		this._popup.addEventListener('click', (evt) => {
			if (evt.target.classList.contains('popup')) {
				this.close();
			}
		});
	}
}
