import "./index.css";
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithConfirmDelete from "../components/PopupWithConfirmDelete.js";
import UserInfo from "../components/UserInfo.js";
import FormValidator from "../components/FormValidator.js";
import Api from "../components/Api.js";
import {
  profileEdit,
  popupFormEdit,
  profileAdd,
  popupFormAdd,
  userNameInput,
  userJobInput,
  popupForms,
  formValidators,
  profileIcons,
  popupSaveEdit,
  popupSaveAdd,
  popupSaveDelete,
  popupSaveAvatar,
  popupFormAvatar,
} from "./../utils/constants.js";


//работаем с API
const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort36",
  headers: {
    authorization: "0f2196a7-ac75-4b8c-88fc-6c8538fba14b",
    "Content-Type": "application/json",
  },
});


//проходим по API
Promise.all([api.getCards(), api.renderProfile()])
.then(([cards,userData]) => {
  userInfo.setUserInfo(userData.name, userData.about, userData._id);
  userInfo.updateUserAvatar(userData.avatar);
  renderCards.renderItems(cards);
})
.catch((err) => {alert(err)});


// функция создания
export function createCard(data, templateClass, id, api, popupWithConfirm) {
  const newCard = new Card(
    data,
    templateClass,
    id,
    api,
    popupWithConfirm,
    () => {
      popupWithImage.open(data.name, data.link);
    }
  );
  return newCard.generateCard();
}


//профиль
const userInfo = new UserInfo({
  userName: ".profile__name",
  userJob: ".profile__post",
  userAvatar: ".profile__avatar",
});


//функция удаления
const popupWithConfirmDelete = new PopupWithConfirmDelete(
  ".popup_delete",
  (card) => {
    popupSaveDelete.textContent = "Удаление...";
    api
      .deleteCard(card._cardId)
      .then(() => {
        card.remove();
        popupWithConfirmDelete.close();
      })
      .catch((err) => {
        alert(err);
      })
      .finally(() => {
        popupSaveDelete.textContent = "Да";
      });
  }
);
popupWithConfirmDelete.setEventListeners();


//рендерим карточку на стринце
const renderCards = new Section(
  {
    render: (item) => {
      const cardElement = createCard(
        item,
        ".element__card",
        userInfo.getUserInfo().id,
        api,
        popupWithConfirmDelete
      );
      renderCards.addItem(cardElement);
    },
  },
  ".element"
);


//функция редактирования профиля
const editPopupWithForm = new PopupWithForm(
  ".popup_edit",
  (res) => {
    popupSaveEdit.textContent = "Сохраняю...";
    api
      .updateProfile(res.popupInputName, res.popupInputPost)
      .then((res) => {
        userInfo.setUserInfo(res.name, res.about, res._id);
        editPopupWithForm.close();
      })
      .finally(() => {
        popupSaveEdit.textContent = "Сохранить";
      })
      .catch((err) => {
        alert(err);
      });
  }
);
editPopupWithForm.setEventListeners();


//функция добавления карты
const addPopupWithForm = new PopupWithForm(
  ".popup_add",
  (data) => {
    popupSaveAdd.textContent = "Создаю...";
    api
      .postCard(data.popupInputPlace, data.popupInputLink)
      .then((res) => {
        const card = createCard(
          res,
          ".element__card",
          userInfo.getUserInfo().id,
          api,
          popupWithConfirmDelete
        );
        renderCards.addItem(card, "new");
        addPopupWithForm.close();
      })
      .finally(() => {popupSaveAdd.textContent = "Создать"})
      .catch((error) => alert(error));
  }
);
addPopupWithForm.setEventListeners();


//функция обновления аватара карты
const changeAvatarPopupWithForm = new PopupWithForm(
  ".popup_avatar",
  (data) => {
    popupSaveAvatar.textContent = "Сохраняю...";
    api
      .changeAvatar(data.popupInputAvatar)
      .then((res) => {
        userInfo.updateUserAvatar(res.avatar);
        changeAvatarPopupWithForm.close();
      })
      .finally(() => {
        popupSaveAvatar.textContent = "Сохранить";
      })
      .catch((err) => {
        alert(err);
      });
  }
);
changeAvatarPopupWithForm.setEventListeners();


//данные для открытой popupImg
const popupWithImage = new PopupWithImage(".popup_image");
popupWithImage.setEventListeners();


//click по Edit-кнопке
profileEdit.addEventListener("click", () => {
  const data = userInfo.getUserInfo();
  userNameInput.value = data.userName;
  userJobInput.value = data.userDescription;
  formValidators[popupFormEdit.name].resetValidation();
  editPopupWithForm.open();
});


//click по доб. кнопки
profileAdd.addEventListener("click", () => {
  formValidators[popupFormAdd.name].resetValidation();
  addPopupWithForm.open();
});


//click по аватарке
profileIcons.addEventListener("click", () => {
  formValidators[popupFormAvatar.name].resetValidation();
  changeAvatarPopupWithForm.open();
});


// валидация всех форм
popupForms.forEach((formElement) => {
  const formValidator = new FormValidator(
    {
      formSelector: '.popup__form',
      inputSelector: '.popup__input',
      submitButtonSelector: '.popup__save',
      inactiveButtonClass: 'popup__save_inactive',
      inputErrorClass: 'popup__input_error',
      errorClass: 'popup__input-message_active'
    },
    formElement
  );
  const formName = formElement.name;
  formValidators[formName] = formValidator;
  formValidators[formName].enableValidation();
});
