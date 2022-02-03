import {Card} from './Card.js';
import {FormValidator} from './FormValidator.js';
import {initialCards} from './initialCards.js';

// --------------------popup-edit--------------------
const popupEdit = document.querySelector(".popup_edit");
const profileEdit = document.querySelector(".profile__edit");
const popupClose = document.querySelector(".popup__close");
const popupFormEdit = document.querySelector(".popup__form_edit");
const profileName = document.querySelector(".profile__name");
const profilePost = document.querySelector(".profile__post");
// получаем input popup-edit
const popupInputName = document.querySelector(".popup__input_text_name");
const popupInputPost = document.querySelector(".popup__input_text_post");
// --------------------popup-add--------------------
const popupAdd = document.querySelector(".popup_add");
const popupFormAdd = document.querySelector(".popup__form_add");
const profileAdd = document.querySelector(".profile__add");
const popupAddExit = document.querySelector(".popup__close_add");

// -------------------CARD-------------------
const elementItem = document.querySelector('.element');
// получаем input popup-add
const popupInputLinkNname = document.querySelector('.popup__input_link_name');
const popupInputLinkSrc = document.querySelector('.popup__input_link_src');
// --------------------popup-image--------------------
const popupImage = document.querySelector(".popup_image");
const popupCloseImage = document.querySelector(".popup__close_image");
// const popupPicture = document.querySelector(".popup__picture");

const formList = document.querySelectorAll('.popup__form');

const setValidation  = ({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save',
  inactiveButtonClass: 'popup__save_inactive',
  inputErrorClass: 'popup__input_error',
  errorClass: 'popup__input-message_active'
});

const formValidators = {};


formList.forEach((forms) => {
  const formValidator = new FormValidator(setValidation, forms);

  formValidators[forms.name] = formValidator;
  formValidators[forms.name].enableValidation();
});


//открытие popup
function openPopup(popupOpen) {
  popupOpen.classList.add('popup_open');
  document.addEventListener('keydown',  closePopubEsc);
}


//закрытие popup
function exitModalPopup(popupExit) {
  popupExit.classList.remove('popup_open');
  document.removeEventListener('keydown',  closePopubEsc);
}


//popup-edit
function openModalPopup() {
  openPopup(popupEdit);
  popupInputName.value = profileName.textContent;
  popupInputPost.value = profilePost.textContent;
}
profileEdit.addEventListener('click', openModalPopup);


function clickClosedModal() {
	exitModalPopup(popupEdit);
}
popupClose.addEventListener('click', clickClosedModal)


//присваиваем новые значения profile__name и profile__post
function openPopupEdit(evt){
  evt.preventDefault(); //отмена дефолтной отправки формы
  profileName.textContent = popupInputName.value;
  profilePost.textContent = popupInputPost.value;
  exitModalPopup(popupEdit);
}
//при клике запускаем собития формы
popupFormEdit.addEventListener('submit', openPopupEdit);

function openModalLink() {
  openPopup(popupAdd);
}
profileAdd.addEventListener('click', openModalLink);


function openModalLinkExit() {
	exitModalPopup(popupAdd);
}
popupAddExit.addEventListener('click', openModalLinkExit);


function closePopupImg() {
	exitModalPopup(popupImage);
}

popupCloseImage.addEventListener('click', closePopupImg);


//выход по клику вне окон popup
window.onclick = function (event) {
  if (event.target === popupEdit || event.target === popupAdd || event.target === popupImage) {
    exitModalPopup(popupEdit);
    exitModalPopup(popupAdd);
    exitModalPopup(popupImage);
  }
}

//выход по клавише Esc
function closePopubEsc(evt) {
	if (evt.key === 'Escape') {
		const popupOpen = document.querySelector('.popup_open');
		exitModalPopup(popupOpen);
	}
}


// ---------------------------------------------------


initialCards.forEach((item) => {
  elementItem.prepend(createCard(item));
});


function createCard(item) {
  const card = new Card(item, '.element__card');
  const cardElement = card.generateCard();
  return cardElement;
}

function addCardItem(item) {
  elementItem.prepend(createCard(item));
}

// Обработчик «отправки» формы:
function addPopupForm (evt) {
  evt.preventDefault(); //отмена дефолтной отправки формы

  addCardItem({
		name: popupInputLinkNname.value,
		link: popupInputLinkSrc.value
	});

  exitModalPopup(popupAdd);

  //очищаем
  popupFormAdd.reset();
  formValidators[popupFormAdd.name].resetValidation();

}

//при клике запускаем собития формы добавления карточки
popupFormAdd.addEventListener('submit', addPopupForm);


export {openPopup, popupImage};
