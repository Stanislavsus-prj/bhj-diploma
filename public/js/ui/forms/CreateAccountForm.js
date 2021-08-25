/**
 * Класс CreateAccountForm управляет формой
 * создания нового счёта
 * */
class CreateAccountForm extends AsyncForm {
  /**
   * Создаёт счёт с помощью Account.create и закрывает
   * окно в случае успеха, а также вызывает App.update()
   * и сбрасывает форму
   * */
  onSubmit(data) {
  	Account.create(data, (err, response) => {
      if (err === null && response.success) {
        App.update(); 
        const regForm = new Modal(this.element.closest('.modal'));
        regForm.close();
      }
      this.element.reset(); 
    });
  }
}