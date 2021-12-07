// ----------popup----------
let popupModal = document.querySelector(".popup__modal");
let popup = document.querySelector(".popup");
let profileEdit = document.querySelector(".profile__edit");
let popupClose = document.querySelector(".popup__close");
// ----------editing a profile----------
let popupForm = document.querySelector(".popup__form");
let profileName = document.querySelector(".profile__name");
let profilePost = document.querySelector(".profile__post");
let popupInputName = document.querySelector(".popup__input_text_name");
let popupInputPost = document.querySelector(".popup__input_text_post");

// функция открывает попап и забирает значения profile__name и profile__post
function openPopup() {
  popup.classList.add("popup_open");
  popupInputName.value = profileName.textContent;
  popupInputPost.value = profilePost.textContent;
}

//выход из popup
function exitPopup() {
  popup.classList.remove("popup_open");
}

//выход по клику вне окна popup
window.onclick = function (event) {
  if (event.target === popup) {
    exitPopup();
  }
}

//присваиваем новые значения profile__name и profile__post
function formSubmitHandler(evt){
  evt.preventDefault(); //отмена дефолтной отправки формы
  profileName.textContent = popupInputName.value;
  profilePost.textContent = popupInputPost.value;
  exitPopup();
}

//при клике запускаем собития
popupForm.addEventListener('submit', formSubmitHandler);
popupClose.addEventListener('click', exitPopup);
profileEdit.addEventListener("click", openPopup);
