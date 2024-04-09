// Функция для прокрутки страницы наверх
function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  
  // Отображение кнопки прокрутки наверх при прокрутке страницы вниз
  window.onscroll = function() {scrollFunction()};
  
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("scrollTopButton").style.display = "block";
    } else {
      document.getElementById("scrollTopButton").style.display = "none";
    }
  }

//Базовая страница
document.getElementById("redirectButton").addEventListener("click", function() {
    window.location.href = "url"; // Замените "url" на адрес страницы, на которую вы хотите перейти
});
