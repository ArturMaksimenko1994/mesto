import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._cardLink = this._popup.querySelector(".popup__picture");
    this._cardTitle = this._popup.querySelector(".popup__text");
  }

  open(name, link) {
    super.open();
    this._cardTitle.textContent = name;
    this._cardLink.src = link;
    this._cardLink.alt = name;
  }
}
