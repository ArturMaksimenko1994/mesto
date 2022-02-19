import './index.css';
import {
  formList,
  setValidation,
  profileEdit,
  popupFormEdit,
  profileAdd,
  popupFormAdd,
  popupInputName,
  popupInputPost,
  popupInputLinkNname,
  popupInputLinkSrc,
  initialCards,// массив из 6 карточек
  formValidators
} from './../utils/constants.js';

import Card from '../components/Card.js';
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import FormValidator from '../components/FormValidator.js';
import UserInfo from '../components/UserInfo.js';


// Отображение профиля на странице
const userInfo = new UserInfo({
  userName: '.profile__name',
  userInfo: '.profile__post'
});


//класс Section для отрисовки карточек на странице
const section = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const cardElement = createCard(item.name, item.link, '.element__card');
      section.addItem(cardElement);
    },
  },
  '.element'
);
section.rendererItems();


// Данные профиля
const popupEdit = new PopupWithForm(

  '.popup_edit', () => {
    let {popupTextName,popupTextPost} = popupEdit.submitHandler()
    userInfo.setUserInfo(
      popupTextName,
      popupTextPost
    );
    // Закрытие попапа:
		popupEdit.close();
  }
)
popupEdit.setEventListeners();


// Функция добавления карточки
function createCard(name, link, templateSelector) {
  const card = new Card(
    {
      name: name,
      link: link
    },
    templateSelector, () => {
      popupWithImage.open(name, link);
    }
  );
  const cardElement = card.generateCard();
  return cardElement;
}


// Данные карточки
const popupAdd = new PopupWithForm(
  '.popup_add', () => {
    let {popupNameCard,popupLinkCard} = popupAdd.submitHandler()
    section.addItem(
      createCard(
        popupNameCard,
        popupLinkCard,
        '.element__card'
      )
    );
		popupAdd.close();
  }
)
popupAdd.setEventListeners();


// Действия с попапом картинки
const popupWithImage = new PopupWithImage('.popup_image');
popupWithImage.setEventListeners();

// Валидация форм
formList.forEach((forms) => {
  const formValidator = new FormValidator(setValidation, forms);

  formValidators[forms.name] = formValidator;
  formValidators[forms.name].enableValidation();
});


// Открытие add окна
profileAdd.addEventListener('click', () => {
  formValidators[popupFormAdd.name].resetValidation();
  popupAdd.open();
});


// Открытие edit окна
profileEdit.addEventListener('click', () => {
  const item = userInfo.getUserInfo();
  popupInputName.value = item.name;
  popupInputPost.value = item.info;

  formValidators[popupFormEdit.name].resetValidation();
  popupEdit.open();
});



