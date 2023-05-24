$(document).ready(function() {
    // Обработчик клика на кнопке "Изменить"
    $('.edit-card').click(function() {
      // Получаем данные из карточки
      var card = $(this).closest('.card');
      var title = card.find('.card-title').text();
      var description = card.find('.card-text').text();
      
      // Заполняем форму в модальном окне
      $('#card-title').val(title);
      $('#card-description').val(description);
    });
    
    // Обработчик клика на кнопке "Сохранить" в модальном окне
    $('.save-card').click(function() {
      // Получаем данные из формы в модальном окне
      var title = $('#card-title').val();
      var description = $('#card-description').val();
      
      // Обновляем содержимое карточки
      var card = $('.edit-card').closest('.card');
      card.find('.card-title').text(title);
      card.find('.card-text').text(description);
      
      // Закрываем модальное окно
      $('#edit-modal').modal('hide');
    });
  });