/**
 * Класс TransactionsWidget отвечает за
 * открытие всплывающих окон для
 * создания нового дохода или расхода
 * */

class TransactionsWidget {
  /**
   * Устанавливает полученный элемент
   * в свойство element.
   * Если переданный элемент не существует,
   * необходимо выкинуть ошибку.
   * */
  constructor( element ) {
    if (!element) {
      throw new Error('Ошибка! element не может быть пустым');
    } 
    else {
      this.element = element;
      this.registerEvents();
    }
  }
  /**
   * Регистрирует обработчики нажатия на
   * кнопки «Новый доход» и «Новый расход».
   * При нажатии вызывает Modal.open() для
   * экземпляра окна
   * */
  registerEvents() {
    const btn_success = document.querySelector('.btn-success');
    const btn_danger = document.querySelector('.btn-danger');


    btn_success.addEventListener('click', (e)=>{
      e.preventDefault();
      App.getModal('modal-new-income').open();
    })

    btn_danger.addEventListener('click', (e)=>{
      e.preventDefault();
      App.getModal('modal-new-expence').open();
    })
  }
}
