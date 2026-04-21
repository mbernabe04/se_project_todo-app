class FormValidator {
  constructor(settings, formElement) {
    this._formEl = formElement;
    this._settings = settings;
    inputSelector = settings.inputSelector;
    formSelector = settings.formSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._inputErrorClass = inputErrorClass;
    this._errorClass = errorClass;
  }

  _showInputError(inputElement, errorMessage) {
    const errorEl = this._formEl.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(this._inputErrorClass);
    errorEl.textContent = errorMessage;
    errorEl.classList.add(this._errorClass);
  }

  _hideInputError = (inputElement) => {
    const errorElementId = `#${inputElement.id}-error`;
    const errorElement = this._formEl.querySelector(errorElementId);
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = "";
  };

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  }

  _setEventListeners() {
    this._inputList = Array.from(
      this._formEl.querySelectorAll(this._inputSelector),
    );
    this._buttonElement = this._formEl.querySelector(
      this._submitButtonSelector,
    );
    this._hasInvalidInput();
    this._toggleButtonState();

    this._toggleButtonState();

    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        toggleButtonState(inputList, buttonElement, settings);
      });
    });
  }

  enableValidation() {
    this._formEl.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    this._setEventListeners();
  }
}

export default FormValidator;
