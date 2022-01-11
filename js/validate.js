// Функция, которая добавляет класс с ошибкой
const showInputError = (formElement, inputElement, errorMessage, list) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(list.inputErrorClass);
  errorElement.classList.add(list.errorClass);
  errorElement.textContent = errorMessage;
};


// Функция, которая удаляет класс с ошибкой
const hideInputError = (formElement, inputElement, list) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(list.inputErrorClass);
  errorElement.classList.remove(list.errorClass);
  errorElement.textContent = '';
};


// Функция, которая проверяет валидность поля
const isValid = (formElement, inputElement, list ) => {
  if (!inputElement.validity.valid) {
    // Если поле не проходит валидацию, покажем ошибку
    showInputError(formElement, inputElement, inputElement.validationMessage, list);
  } else {
    // Если проходит, скроем
    hideInputError(formElement, inputElement, list);
  }
};


// добавляем собитие всем input
const setEventListeners = (formElement, list) => {
  const inputList = Array.from(formElement.querySelectorAll(list.inputSelector));
  const buttonElement = formElement.querySelector(list.submitButtonSelector);
  console.log(buttonElement)
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      isValid(formElement, inputElement, list)
      toggleButtonState(inputList, buttonElement, list);
    });
  });
};


// Функция принимает массив полей
const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  })
};


//Функция принимает массив полей ввода и элемент кнопки, состояние которой нужно менять
const toggleButtonState = (inputList, buttonElement, list) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(list.inactiveButtonClass);
    buttonElement.setAttribute('disabled', true);
  } else {
    buttonElement.classList.remove(list.inactiveButtonClass);
    buttonElement.removeAttribute('disabled');
  }
};


// добавляем собитие всем form
const enableValidation = (list) => {
  const formList = Array.from(document.querySelectorAll(list.formSelector));

  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();// отменяем стандартную отпправку формы
    });
    setEventListeners(formElement, list);
  });
};


enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save',
  inactiveButtonClass: 'popup__save_inactive',
  inputErrorClass: 'popup__input_error',
  errorClass: 'popup__input-message_active'
});


