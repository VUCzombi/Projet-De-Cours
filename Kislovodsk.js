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

//Базовая страница
document.getElementById("redirectButton").addEventListener("click", function () {
  window.location.href = "url"; // Замените "url" на адрес страницы, на которую вы хотите перейти
});


//Навигационное панель
function toggleDropdown() {
  var dropdownContent = document.querySelector('.dropdown-content');
  if (dropdownContent.style.display === 'block') {
    dropdownContent.style.display = 'none';
  } else {
    dropdownContent.style.display = 'block';
  }
}

function hideDropdown() {
  var dropdownContent = document.querySelector('.dropdown-content');
  dropdownContent.style.display = 'none';
}
