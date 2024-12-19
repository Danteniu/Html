const modal = document.getElementById("serviceModal");
const serviceType = document.getElementById("serviceType");
const closeBtn = document.getElementsByClassName("close")[0];

function openModal(service) {
    modal.style.display = "block";
    serviceType.textContent = service;
}

closeBtn.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

document.getElementById("serviceForm").onsubmit = function (event) {
    event.preventDefault();
    alert("Форма отправлена!");
    modal.style.display = "none";
}



function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const burgerMenu = document.querySelector('.burger-menu');
    sidebar.classList.toggle('active');
    burgerMenu.classList.toggle('active');
}



// Изменение текста H1
const h1 = document.querySelector("h1");
if (h1) {
    h1.textContent = "Добро пожаловать на наш сайт!";
}

// Изменение цвета текста H2
const h2 = document.querySelector("h2");
if (h2) {
    h2.style.color = "red";
}

// Изменение текста первого параграфа
const firstParagraph = document.querySelector("p");
if (firstParagraph) {
    firstParagraph.textContent = "Это новый текст параграфа.";
}

// Скрытие встроенного видео
const video = document.querySelector("video");
if (video) {
    video.style.display = "none";
}

// Объект для хранения данных формы
const formData = {
    name: "",
    email: "",
    phone: "",
    date: "",
    comment: "",
    printData: function () {
        console.log(`Имя: ${this.name}`);
        console.log(`E-mail: ${this.email}`);
        console.log(`Телефон: ${this.phone}`);
        console.log(`Дата: ${this.date}`);
        console.log(`Комментарий: ${this.comment}`);
    },
};

// Функция для обработки данных формы
function submitForm(event) {
    // Предотвращение стандартного поведения формы
    event.preventDefault();

    // Получение данных формы
    const name = document.querySelector("#name").value.trim();
    const email = document.querySelector("#email").value.trim();
    const phone = document.querySelector("#phone").value.trim();
    const date = document.querySelector("#date").value.trim();
    const comment = document.querySelector("#comment").value.trim();

    // Валидация данных
    if (!name || !email || !comment) {
        alert("Поля 'Имя', 'E-mail' и 'Комментарий' обязательны для заполнения.");
        return;
    }

    const phoneRegex = /^\d+$/;
    if (!phoneRegex.test(phone)) {
        alert("Телефон должен содержать только цифры.");
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Введите корректный адрес электронной почты.");
        return;
    }

    // Запись данных в объект formData
    formData.name = name;
    formData.email = email;
    formData.phone = phone;
    formData.date = date;
    formData.comment = comment;

    // Вывод данных в консоль
    formData.printData();
}
// Получаем элементы формы
const form = document.getElementById("serviceForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const commentInput = document.getElementById("comment");
const dateInput = document.getElementById("date");
const agreeCheckbox = document.getElementById("agree");

// Функция для проверки корректности email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Функция для проверки корректности телефона
function isValidPhone(phone) {
    const phoneRegex = /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/;
    return phoneRegex.test(phone);
}

// Обработка отправки формы
form.onsubmit = function (event) {
    event.preventDefault();

    // Собираем данные формы
    const formData = {
        name: nameInput.value.trim(),
        email: emailInput.value.trim(),
        phone: phoneInput.value.trim(),
        date: dateInput.value.trim(),
        comment: commentInput.value.trim(),
    };

    // Проверяем заполненность обязательных полей
    if (!formData.name || !formData.email || !formData.comment) {
        alert("Пожалуйста, заполните все обязательные поля!");
        return;
    }

    // Проверяем корректность email и телефона
    if (!isValidEmail(formData.email)) {
        alert("Пожалуйста, введите корректный email!");
        return;
    }

    if (!isValidPhone(formData.phone)) {
        alert("Пожалуйста, введите корректный номер телефона!");
        return;
    }

    // Проверяем согласие на обработку данных
    if (!agreeCheckbox.checked) {
        alert("Вы должны согласиться на обработку персональных данных!");
        return;
    }

    // Выводим данные в консоль
    console.log("Данные формы отправлены:");
    console.log(`Имя: ${formData.name}`);
    console.log(`E-mail: ${formData.email}`);
    console.log(`Телефон: ${formData.phone}`);
    console.log(`Дата: ${formData.date}`);
    console.log(`Комментарий: ${formData.comment}`);

    // Уведомление об успешной отправке
    alert("Форма успешно отправлена!");
    modal.style.display = "none";

    // Сбрасываем форму
    form.reset();
};

// Настройка маски ввода для телефона
IMask(phoneInput, {
    mask: '+{7} (000) 000-00-00'
});

// Функция выводит сообщение в консоль
function showMessage(message) {
    console.log(message);
}

// Функция изменяет цвет фона страницы
function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}

// Функция переключает видимость элемента
function toggleVisibility(selector) {
    const element = document.querySelector(selector);
    if (element) {
        const isVisible = window.getComputedStyle(element).display !== "none";
        element.style.display = isVisible ? "none" : "block";
    } else {
        console.warn(`Элемент с селектором "${selector}" не найден.`);
    }
}

// Функция извлекает параметр utm_term из URL и изменяет текст H1
function updateH1FromUTM() {
    const urlParams = new URLSearchParams(window.location.search);
    const utmTerm = urlParams.get("utm_term");
    const h1 = document.querySelector("h1");
    if (h1) {
        h1.textContent = utmTerm || h1.textContent;
    }
}

// Дополнительные функции
// Функция выводит текущее время в консоль
function logCurrentTime() {
    const now = new Date();
    const time = now.toLocaleTimeString("ru-RU");
    console.log(`Текущее время: ${time}`);
}

// Функция возвращает фон к исходному цвету
function resetBackgroundColor() {
    document.body.style.backgroundColor = "white";
}

// Вызов функций
showMessage("Скрипт загружен!");
logCurrentTime();

document.addEventListener("DOMContentLoaded", () => {
    resetBackgroundColor(); // Возвращаем фон к исходному цвету
    changeBackgroundColor("lightblue"); // Меняем цвет фона
    toggleVisibility(".content"); // Переключаем видимость элемента
    updateH1FromUTM(); // Обновляем текст H1, если есть utm_term
});
document.querySelector("h1").addEventListener("click", function () {
    alert("Вы кликнули на заголовок - так держать!");
});

document.getElementById("changePractices").addEventListener("click", function () {
    const practicesTable = document.querySelector("#practicals tbody");
    practicesTable.innerHTML = `
    <tr><td>1</td><td>Базовое бэкенд-приложение</td><td></td><td></td></tr>
    <tr><td>2</td><td>HTTP-запросы</td><td></td><td></td></tr>
    <tr><td>3</td><td>JSON и работа с ним</td><td></td><td></td></tr>
    <tr><td>4</td><td>HTTP-ответы</td><td></td><td></td></tr>
    <tr><td>5</td><td>Проектирование API</td><td></td><td></td></tr>
    <tr><td>6</td><td>Роутинг и его настройка</td><td></td><td></td></tr>
    <tr><td>7</td><td>NoSQL базы данных</td><td></td><td></td></tr>
    <tr><td>8</td><td>Обеспечение авторизации и доступа пользователей</td><td></td><td></td></tr>
    <tr><td>9</td><td>Работа сторонних сервисов уведомления и авторизации</td><td></td><td></td></tr>
    <tr><td>10</td><td>Основы ReactJS</td><td></td><td></td></tr>
    <tr><td>11</td><td>Работа с компонентами динамической DOM</td><td></td><td></td></tr>
    <tr><td>12</td><td>Использование хуков в React</td><td></td><td></td></tr>
    <tr><td>13</td><td>Основы микросервисной архитектуры</td><td></td><td></td></tr>
    <tr><td>14</td><td>Разработка классических модулей веб-приложений</td><td></td><td></td></tr>
  `;
});

const profilePicture = document.querySelector(".profile-picture img");

profilePicture.addEventListener("mouseover", function () {
    this.style.transform = "scale(1.1)";
    this.style.transition = "transform 0.3s";
});

profilePicture.addEventListener("mouseout", function () {
    this.style.transform = "scale(1)";
});

profilePicture.addEventListener("click", function () {
    this.src = "https://upload.wikimedia.org/wikipedia/commons/7/70/Example.png"; // Замените на URL фото преподавателя
});

profilePicture.addEventListener("dblclick", function () {
    alert("Не налегай, у меня не так много любимых преподавателей");
});
const paragraph = document.querySelector("p");

paragraph.addEventListener("click", function () {
    this.style.transition = "background-color 0.5s ease";
    this.style.backgroundColor = this.style.backgroundColor === "lightblue" ? "white" : "lightblue";
});
const showLecturesButton = document.getElementById("showLectures");
const lecturesTable = document.getElementById("lecturesTable");

showLecturesButton.addEventListener("click", function () {
    lecturesTable.style.display = "block";
    setTimeout(() => {
        lecturesTable.style.opacity = "1";
    }, 10); // Небольшая задержка для плавной анимации
});

