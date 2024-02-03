
// бургер меню 
const burger = document.querySelector('.burger');
const menuOverlay = document.querySelector('.menu-overlay');
const menuBg = document.querySelector('.menu-background');

burger.addEventListener('click', function() {
    burger.classList.toggle('close-button');
    menuOverlay.classList.toggle('menu-open');
    menuBg.classList.toggle('bg-open');
});

function toggleMenu() {
  var menuIcon = document.querySelector('.burger');
  menuIcon.classList.toggle('change');
}










function toggleActive(index) {
  // Убираем класс active у всех кнопок
  var buttons = document.querySelectorAll('.colum__menu .menu__link button');
  buttons.forEach(function(button) {
    button.classList.remove('active');
  });

  // Добавляем класс active к нажатой кнопке
  var clickedButton = document.querySelectorAll('.colum__menu .menu__link button')[index];
  clickedButton.classList.add('active');

  // Показываем блок контента, соответствующий нажатой кнопке, и скрываем остальные блоки
  var contents = document.querySelectorAll('.other-container .block');
  contents.forEach(function(content, i) {
    if (i === index) {
      content.style.display = 'block';
    } else {
      content.style.display = 'none';
    }
  });
}
