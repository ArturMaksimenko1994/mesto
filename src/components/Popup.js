export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._handleEscapeKey = this._handleEscapeKey.bind(this);
  }

  open() {
    this._popup.classList.add("popup_open");
    document.addEventListener("keydown", this._handleEscapeKey);
  }

  close() {
    document.removeEventListener("keydown", this._handleEscapeKey);
    this._popup.classList.remove("popup_open");
  }

  _handleEscapeKey(evt) {
    if (evt.key === "Escape") this.close();
  }

  setEventListeners() {
    const button = this._popup.querySelector(".popup__close");
    button.addEventListener("click", () => this.close());

    this._popup.addEventListener("mousedown", (evt) => {
      if (evt.target.classList.contains("popup")) {
        this.close();
      }
    });
  }
}
