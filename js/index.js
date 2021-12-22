// ----------popup----------
let popupEdit = document.querySelector(".popup_edit");
let profileEdit = document.querySelector(".profile__edit");
let popupClose = document.querySelector(".popup__close");
// ----------editing a profile----------
let popupForm = document.querySelector(".popup__form");
let profileName = document.querySelector(".profile__name");
let profilePost = document.querySelector(".profile__post");
let popupInputName = document.querySelector(".popup__input_text_name");
let popupInputPost = document.querySelector(".popup__input_text_post");

//открытие попап
function openPopup(popupOpen) {
  popupOpen.classList.add('popup_open');
}

function openModalPopup() {
  openPopup(popupEdit);

  popupInputName.value = profileName.textContent;
  popupInputPost.value = profilePost.textContent;
}

profileEdit.addEventListener('click', openModalPopup);

//закрытие попап
function exitModalPopup(popupExit) {
  popupExit.classList.remove('popup_open');
}

function clickClosedModal() {
	exitModalPopup(popupEdit);
}

popupClose.addEventListener('click', clickClosedModal)

//присваиваем новые значения profile__name и profile__post
function formPopupEdit(evt){
  evt.preventDefault(); //отмена дефолтной отправки формы
  profileName.textContent = popupInputName.value;
  profilePost.textContent = popupInputPost.value;
  exitModalPopup(popupEdit);
}
//выход по клику вне окна popup
window.onclick = function (event) {
  if (event.target === (popupEdit)) {
    exitModalPopup(popupEdit);
  }
}

//при клике запускаем собития формы
popupForm.addEventListener('submit', formPopupEdit);







// ------------------------------POPUP-EDIT------------------------------
let popupAdd = document.querySelector(".popup_add");
let profileAdd = document.querySelector(".profile__add");
let popupAddExit = document.querySelector(".popup_add_exit");
let popupSaveAdd = document.querySelector(".popup__save_add");
// получаем input popup-add
let popupLinkName = document.querySelector(".popup__input_link_name");
let popupLinkSrc = document.querySelector(".popup__input_link_src");

function openModalLink() {
  openPopup(popupAdd);

}

function openModalLinkExit() {
	exitModalPopup(popupAdd);
}

// function formPopupAdd(evt){
//   evt.preventDefault(); //отмена дефолтной отправки формы

//   exitModalPopup(popupAdd);
// }


// popupSaveAdd.addEventListener('submit', formPopupAdd)
popupAddExit.addEventListener('click', openModalLinkExit)
profileAdd.addEventListener('click', openModalLink)


// -------------------CARD-------------------
const elementItem = document.querySelector('.element');
const popupInputLinkNname = document.querySelector('.popup__input_link_name');
console.log(popupInputLinkNname)
const popupInputLinkSrc = document.querySelector('.popup__input_link_src');
console.log(popupInputLinkSrc)
// const popupSaveAdd = document.querySelector('.popup__save_add');

// const popupImage = document.querySelector('.popup_modal_img');
// const popupCloseImage = document.querySelector('.popup__closed_modal_img');
// const popupImageSrc = document.querySelector('.popup__image');
// const popupParagraph = document.querySelector('.popup__paragraph');

//массив из спринта 6 карточек
const initialCards = [
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

// Создание 6 карточек:
initialCards.forEach ((e) => {
    prependCard(e.name, e.link)
});

function creatingСard(name, link) {
  const elementСard = document.querySelector(".element__card").content;
  const elementClone = elementСard.querySelector(".element__item").cloneNode(true);
  const elementImg = elementClone.querySelector(".element__img");

  const elementTitle = elementClone.querySelector(".element__title");

  const elementLike = elementClone.querySelector(".element__like");
  const elementDelete = elementClone.querySelector(".element__delete");

  elementImg.src = link;
  elementImg.alt = name;
  elementTitle.textContent = name;

  //запускаем собитые по клику, лайкаем фото
  elementLike.addEventListener('click', (like) => {
    like.target.classList.toggle('element__like_active');
  });

  //удаляем карточку
  elementDelete.addEventListener('click', (el) => {
    el.currentTarget.closest('.element__item').remove();
  });

  return elementClone;
}

// Функция создание карточки
function prependCard(name, link) {
  const card = creatingСard(name, link);

  elementItem.prepend(card);
}


// Обработчик «отправки» формы:
function handleElementFormSubmit (evt) {
  evt.preventDefault(); //отмена дефолтной отправки формы

  prependCard(popupInputLinkNname.value, popupInputLinkSrc.value)

  exitModalPopup(popupAdd);

  popupInputLinkNname.value = '';
  popupInputLinkSrc.value = '';

}

popupSaveAdd.addEventListener('submit', handleElementFormSubmit);



