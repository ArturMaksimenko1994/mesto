// ----------popup----------
let page = document.querySelector(".page");
let popupModal = document.querySelector(".popup__modal");
let popupShadow = document.querySelector(".popup__shadow");
let profileEdit = document.querySelector(".profile__edit");
let popupClose = document.querySelector(".popup__close");
// ----------editing a profile----------
let popupForm = document.querySelector(".popup__form");
let profileName = document.querySelector(".profile__name");
let profilePost = document.querySelector(".profile__post");
let popupInputName = document.querySelector(".popup__input-name");
let popupInputPost = document.querySelector(".popup__input-post");
let popupSave = document.querySelector(".popup__save");


function openPopup() {
  popupModal.classList.add("popup__modal_open");
  popupShadow.classList.add("popup__shadow_open");
  popupInputName.value = profileName.textContent;
  popupInputPost.value = profilePost.textContent;
}

function exitPopup() {
  popupModal.classList.remove("popup__modal_open");
  popupShadow.classList.remove("popup__shadow_open");
}

window.onclick = function (event) {
  if (event.target === popupShadow) {
    exitPopup();
  }
}

function formSubmitHandler(evt){
  evt.preventDefault();
  profileName.textContent = popupInputName.value;
  profilePost.textContent = popupInputPost.value;
  exitPopup();
}

popupForm.addEventListener('submit', formSubmitHandler);
popupClose.addEventListener('click', exitPopup);
profileEdit.addEventListener("click", openPopup);
