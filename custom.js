// Находим поле ввода номера телефона по ID
const phoneInput = document.getElementById("loginInput");

// Удаляем начальный ноль
phoneInput.addEventListener("input", function (event) {
    let value = event.target.value.replace(/\D/g, ""); // Удаляем все нецифровые символы
    if (value.startsWith("0")) {
        value = value.substring(1); // Убираем первый символ, если это "0"
    }
    event.target.value = value; // Обновляем значение поля ввода
});
