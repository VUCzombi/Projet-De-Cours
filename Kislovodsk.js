// Функция для прокрутки страницы наверх
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Отображение кнопки прокрутки наверх при прокрутке страницы вниз
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("scrollTopButton").style.display = "block";
  } else {
    document.getElementById("scrollTopButton").style.display = "none";
  }
}

//Базовая страница///document.getElementById("redirectButton").addEventListener("click", function () {
//window.location.href = "url"; // Замените "url" на адрес страницы, на которую вы хотите перейти
//});


//Навигационное панель
function toggleMenu() {
  var sideNav = document.getElementById("sideNav");
  if (sideNav.style.width === "250px") {
    sideNav.style.width = "0";
  } else {
    sideNav.style.width = "250px";
  }
}


//Боковое меню для мобильных устройств
// Функция для открытия боковой панели
function openNav() {
  document.getElementById("sidenav").style.width = "250px";
}

// Функция для закрытия боковой панели
function closeNav() {
  document.getElementById("sidenav").style.width = "0";
}
document.addEventListener('DOMContentLoaded', function () {

  // Обработчик события для кнопки "Показать все ссылки"
  document.getElementById('openAllBtn').addEventListener('click', function () {
    var allLinksContainer = document.getElementById('allLinks');
    var originalLinks = document.getElementsByClassName('nav-link'); // Получаем все ссылки с классом "nav-link"
    var clonedLinksContainer = allLinksContainer.cloneNode(true);
    // Удаляем атрибут id, чтобы избежать дублирования идентификаторов
    clonedLinksContainer.removeAttribute('id');
    // Удаляем любые существующие клонированные ссылки
    var existingClonedLinks = allLinksContainer.querySelectorAll('.nav-link');
    existingClonedLinks.forEach(function (link) {
      link.parentNode.removeChild(link);
    });
    // Добавляем клонированные ссылки
    originalLinks.forEach(function (link) {
      allLinksContainer.appendChild(link.cloneNode(true));
    });
    // Показываем контейнер со всеми ссылками
    allLinksContainer.style.display = 'block';
  });

});


// Функция для открытия и закрытия списка услуг
function toggleDropdown(button) {
  var dropdownContent = button.nextElementSibling;
  if (dropdownContent.style.display === "block") {
    dropdownContent.style.display = "none"; // Если меню открыто, закрываем его
  } else {
    dropdownContent.style.display = "block"; // Если меню закрыто, открываем его
  }
}

// Бот тг
document.addEventListener('DOMContentLoaded', function () {
  const leadElement = document.querySelector('.lead');

  leadElement.addEventListener('click', function () {
    this.addEventListener('click', function () {
      feedback(this.innerHTML);
    });
  });
});
function feedback(action, status) {
  //
  let token = "6722776972:AAH1azrK2T2XxIafvbplvz3NpNCqaHL_Mv0";/* :TODO NOTSECURITY REWERITE */

  let chat_id = "2042801143";
  let user_phone = prompt('Введите телефон для контакта с вами');
  var msg = `${action} от ${user_phone}`;// from ${getCookie("@")}`;
  var url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${msg}&parse_mode=html`;

  if (user_phone !== "" && user_phone !== null) {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        alert(`Благодарим за  заказ «${action}».\nСейчас ответственный свяжется с вами`)
        window.location.href = "/#menu";
      });
  }
  else { console.log(' no null') }

}


