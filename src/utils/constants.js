//массив карточек
export const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

// --------------------popup-edit--------------------
// export const popupEdit = document.querySelector(".popup_edit");
export const profileEdit = document.querySelector(".profile__edit");
export const popupClose = document.querySelector(".popup__close");
export const popupFormEdit = document.querySelector(".popup__form_edit");
export const profileName = document.querySelector(".profile__name");
export const profilePost = document.querySelector(".profile__post");
// получаем input popup-edit
export const popupInputName = document.querySelector(".popup__input_text_name");
export const popupInputPost = document.querySelector(".popup__input_text_post");
// --------------------popup-add--------------------
export const popupAdd = document.querySelector(".popup_add");
export const popupFormAdd = document.querySelector(".popup__form_add");
export const profileAdd = document.querySelector(".profile__add");
export const popupAddExit = document.querySelector(".popup__close_add");

// -------------------CARD-------------------
export const elementItem = document.querySelector('.element');
// получаем input popup-add
export const popupInputLinkNname = document.querySelector('.popup__input_link_name');
export const popupInputLinkSrc = document.querySelector('.popup__input_link_src');
// --------------------popup-image--------------------
export const popupImage = document.querySelector(".popup_image");
export const popupCloseImage = document.querySelector(".popup__close_image");
// const popupPicture = document.querySelector(".popup__picture");

export const formList = document.querySelectorAll('.popup__form');

export const setValidation  = ({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save',
  inactiveButtonClass: 'popup__save_inactive',
  inputErrorClass: 'popup__input_error',
  errorClass: 'popup__input-message_active'
});


export const formValidators = {};
