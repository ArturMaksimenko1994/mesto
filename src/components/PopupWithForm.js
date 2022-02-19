import Popup from './Popup.js';
// Работа с формами:
export default class PopupWithForm extends Popup {
	constructor(popupSelector, submitForm) {
		super(popupSelector);
		this._submitform = submitForm;
		this._form = this._popup.querySelector('.popup__form');
    this._inputList = this._popup.querySelectorAll('.popup__input');
	}

	// Проходимся по всем полям
	_getInputValues() {
		this._formValues = {};

		this._inputList.forEach((input) => {
			this._formValues[input.name] = input.value;
		});

		return this._formValues;
	}

	// Проходит закрытие по иконке
	setEventListeners() {
		super.setEventListeners();
		this._form.addEventListener('submit', (evt) => {
			// Сброс стандартных настроек:
			evt.preventDefault();
			// Подставляем значения
			this._submitform(this._getInputValues());
		});
	}

	// Очистка формы при закрытии попапа
	close() {
		super.close();
		this._form.reset();
	}
}
