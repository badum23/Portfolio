
// бургер меню
const burger = document.querySelector('.burger');
const menuOverlay = document.querySelector('.menu-overlay');

burger.addEventListener('click', function() {
    burger.classList.toggle('close-button');
    menuOverlay.classList.toggle('menu-open');
});

function toggleMenu() {
  var menuIcon = document.querySelector('.burger');
  menuIcon.classList.toggle('change');
}


// ЯКОРНЫЕ ССЫЛКИ
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const offsetTop = targetElement.offsetTop;

      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth' // Добавление плавной анимации при прокрутке
      });
    }
  });
});



// ПРОФИЛЬ
// Получаем ссылки на кнопки и дивы
// Получаем ссылки на все кнопки и дивы
const buttons = document.querySelectorAll('.button');
const divs = document.querySelectorAll('div[id^="div"]');

// Добавляем обработчики событий для всех кнопок
buttons.forEach(button => {
    button.addEventListener('click', function() {
        // Получаем id целевого div'а
        const targetId = button.getAttribute('data-target');

        // Скрываем все div'ы
        divs.forEach(div => {
            div.classList.add('hidden');
        });

        // Показываем только целевой div
        document.getElementById(targetId).classList.remove('hidden');
    });
});



// ПРОГРЕСС БАР
var onlinePercentage = 0; // Ваша переменная, представляющая заполненность онлайна.

function updateProgressBar() {
  var progressBar = document.getElementById('progress-bar');
  onlinePercentage = Math.min(100, Math.max(60, onlinePercentage)); // Ограничиваем от 0 до 100
  progressBar.style.width = onlinePercentage + '%';
}

// Пример: увеличиваем онлайн на 10% каждые 2 секунды (вы можете изменить это значение по своему усмотрению).
setInterval(function() {
  onlinePercentage += 0;
  updateProgressBar();
}, 200);а










// ПОПАПЫ
// function openPopup(id) {
//   document.getElementById(id).style.display = 'flex';
// }

// function closePopup(id) {
//   document.getElementById(id).style.display = 'none';
// }

// function togglePopups(showId, hideId) {
//   closePopup(hideId);
//   openPopup(showId);
// }

// function openRegistrationPopup() {
//   togglePopups('regOverlay', 'authOverlay',);

// }

// function openAuthPopup() {
//   togglePopups('authOverlay', 'regOverlay',);

// }

// function openForgPopup() {
//   togglePopups('forgOverlay', 'authOverlay',);

// }

// function closeForgPopup() {
//   togglePopups('authOverlay', 'forgOverlay',);

// }



// МОНИТОРИНГ ОНЛАЙНА
function updatePlayerCount() {
  var ip = "s1.zheki444.com:22005";
  $.getJSON('https://cdn.rage.mp/master', function(masterlist) {
    if (masterlist[ip] != undefined) {
      // Обновление содержимого элемента с id="online" значением из masterlist[ip].players
      document.getElementById('online').innerHTML = masterlist[ip].players;
      ShowCounter();
    }
  });
}

// Вызов функции updatePlayerCount() для обновления значения
updatePlayerCount();




