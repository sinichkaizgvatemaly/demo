// Функция для обновления текущей даты и времени
function updateDate() {
	const date = new Date(); // Получаем текущую дату и время
	const options = {
		 year: 'numeric',
		 month: 'long',
		 day: 'numeric',
		 hour12: false,
	};
	const dateBlock = document.getElementById('date-block'); // Находим элемент для отображения даты
	if (dateBlock) {
		 dateBlock.textContent = date.toLocaleString('ru-RU', options); // Обновляем текст с датой в формате "день месяц год, часы:минуты:секунды"
	}
}

// Слушаем событие 'DOMContentLoaded', чтобы выполнить код после загрузки страницы
document.addEventListener('DOMContentLoaded', function () {
	// Обновление даты при загрузке страницы и каждую секунду
	updateDate(); // Обновляем дату один раз при загрузке страницы
	setInterval(updateDate, 1000); // Обновляем дату каждую секунду (1000 миллисекунд)
});






document.getElementById('searchBtn').addEventListener('click', function() {
	const searchResults = document.getElementById('searchResults');
	searchResults.style.display = 'block'; // Показываем при клике на кнопку
});

// При необходимости скрывать `searchResults` по клику на кнопку очистки
document.getElementById('clearBtn').addEventListener('click', function() {
	document.getElementById('searchInput').value = ''; // Очищаем поле ввода
	document.getElementById('searchResults').style.display = 'none'; // Скрываем результаты
});

// Закрытие `searchResults` при клике вне его зоны
document.addEventListener('click', function(event) {
	const searchResults = document.getElementById('searchResults');
	const searchContainer = document.querySelector('.search-container'); // Контейнер, внутри которого находится поиск

	// Проверяем, что клик был не по кнопке, не по полю ввода и не по результатам поиска
	if (!searchContainer.contains(event.target)) {
		 searchResults.style.display = 'none';
	}
});


