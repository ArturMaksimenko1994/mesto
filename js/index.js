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


//открытие popup
function openPopup(popupOpen) {
  popupOpen.classList.add('popup_open');
}


//закрытие popup
function exitModalPopup(popupExit) {
  popupExit.classList.remove('popup_open');
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


// --------------------popup-add--------------------
const popupAdd = document.querySelector(".popup_add");
const popupFormAdd = document.querySelector(".popup__form_add");
const profileAdd = document.querySelector(".profile__add");
const popupAddExit = document.querySelector(".popup__close_add");
const popupSaveAdd = document.querySelector(".popup__save_add");
const elementСard = document.querySelector(".element__card").content;


function openModalLink() {
  openPopup(popupAdd);
}
profileAdd.addEventListener('click', openModalLink);


function openModalLinkExit() {
	exitModalPopup(popupAdd);
}
popupAddExit.addEventListener('click', openModalLinkExit);


// Обработчик «отправки» формы:
function addPopupForm (evt) {
  evt.preventDefault(); //отмена дефолтной отправки формы
  prependAddCard(popupInputLinkNname.value, popupInputLinkSrc.value)
  exitModalPopup(popupAdd);
  //очищаем
  popupInputLinkNname.value = '';
  popupInputLinkSrc.value = '';
}

//при клике запускаем собития формы добавления
popupFormAdd.addEventListener('submit', addPopupForm);


// -------------------CARD-------------------
const elementItem = document.querySelector('.element');
// получаем input popup-add
const popupInputLinkNname = document.querySelector('.popup__input_link_name');
const popupInputLinkSrc = document.querySelector('.popup__input_link_src');

// --------------------popup-image--------------------
const popupImage = document.querySelector(".popup_image");
const popupImageExit = document.querySelector(".popup__close_image");
const popupPicture = document.querySelector(".popup__picture");
const popupText = document.querySelector(".popup__text");

function closePopupImg() {
	exitModalPopup(popupImage);
}

popupImageExit.addEventListener('click', closePopupImg);
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
  prependAddCard(e.name, e.link)
});

function creatingСard(name, link) {
  const elementClone = elementСard.querySelector(".element__item").cloneNode(true);
  const elementImg = elementClone.querySelector(".element__img");
  const elementTitle = elementClone.querySelector(".element__title");
  const elementLike = elementClone.querySelector(".element__like");
  const elementDelete = elementClone.querySelector(".element__delete");

  elementImg.src = link;
  elementImg.alt = name;
  elementTitle.textContent = name;

  // --------------------popup-image--------------------
  function openPopupImage() {
    openPopup(popupImage);
    popupPicture.src = elementImg.src;
    popupPicture.alt = elementTitle.textContent;
    popupText.textContent = elementTitle.textContent;
  }
  elementImg.addEventListener('click', openPopupImage);

  //запускаем собитые по клику, лайкаем фото, при пофторном удаляем модификатор
  elementLike.addEventListener('click', (like) => {
    like.target.classList.toggle('element__like_active');
  });

  //удаляем карточку при нажатии
  elementDelete.addEventListener('click', (el) => {
    el.currentTarget.closest('.element__item').remove();
  });

  return elementClone;
}

// Функция создание карточки
function prependAddCard(name, link) {
  const card = creatingСard(name, link);
  elementItem.prepend(card);// добавляем в начало блока elementItem методом prepend
}

//выход по клику вне окон popup
window.onclick = function (event) {
  if (event.target === popupEdit || event.target === popupAdd || event.target === popupImage) {
    exitModalPopup(popupEdit);
    exitModalPopup(popupAdd);
    exitModalPopup(popupImage);
  }
}
