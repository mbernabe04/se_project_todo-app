class Todo {
  constructor(data, selector) {
    this._data = data;
    this._templateElement = document.querySelector(selector);
  }

  _setEventListeners() {
    // delete handler

    this._todoCheckboxEl.addEventListener("change", () => {
      this._data.completed = !this._data.completed;
    });
  }

  _generateCheckboxEl() {
    this._todoCheckboxEl = _todoElement.querySelector(".todo__completed");
    this._todoLabel = _todoElement.querySelector(".todo__label");
    this._todoCheckboxEl.checked = this._data.completed;
    this._todoCheckboxEl.id = `todo-${this._data.id}`;
    this._todoLabel.setAttribute("for", `todo-${this._data.id}`);
  }

  getView() {
    this._todoElement = this._templateElement.content
      .querySelector(".todo")
      .cloneNode(true);

    const todoNameEl = _todoElement.querySelector(".todo__name");
    const todoDate = _todoElement.querySelector(".todo__date");
    const todoDeleteBtn = _todoElement.querySelector(".todo__delete-btn");

    todoNameEl.textcontent = this._data.name;

    // implemnt daates

    this._generateCheckboxEl();
    this._setEventListeners();

    return _todoElement;
  }
}

export default Todo;
