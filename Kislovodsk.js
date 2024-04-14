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
function toggleMenu() {
  var sideNav = document.getElementById("sideNav");
  if (sideNav.style.width === "250px") {
    sideNav.style.width = "0";
  } else {
    sideNav.style.width = "250px";
  }
}

function closeNav() {
  document.getElementById("sideNav").style.width = "0";
}

//
document.getElementById('openAllBtn').addEventListener('click', function () {
  var allLinksContainer = document.getElementById('allLinks');
  var originalLinks = document.querySelectorAll('.site-nav .nav-link:not(#openAllBtn)');
  var clonedLinksContainer = allLinksContainer.cloneNode(true);
  // Remove id attribute to prevent duplicate IDs
  clonedLinksContainer.removeAttribute('id');
  // Remove any existing cloned links
  var existingClonedLinks = allLinksContainer.querySelectorAll('.nav-link');
  existingClonedLinks.forEach(function (link) {
      link.parentNode.removeChild(link);
  });
  // Append cloned links
  originalLinks.forEach(function (link) {
      allLinksContainer.appendChild(link.cloneNode(true));
  });
  // Show all links container
  allLinksContainer.style.display = 'block';
});
