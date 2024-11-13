// Функция для отправки данных продукта на сервер
function saveProductToServer(name, protein, carbs, fats, ccal) {
	const productData = { name, protein, carbs, fats, ccal };

	fetch('https://6725230fc39fedae05b40910.mockapi.io/fat_Alien/calories', {
		 method: 'POST', // Тип запроса
		 headers: {
			  'Content-Type': 'application/json', // Отправляем JSON
		 },
		 body: JSON.stringify(productData) // Передаем данные в формате JSON
	})
	.then(response => response.json()) // Преобразуем ответ сервера в JSON
	.then(data => {
		 console.log('Продукт успешно сохранен на сервере:', data);
		 alert('Продукт успешно сохранен!');

		 // Отображаем сохраненный продукт на странице
		 const savedProductElement = document.getElementById('saved-product');
		 savedProductElement.innerHTML = `
			  <h3>Сохраненный продукт:</h3>
			  <p>Название: ${data.name}</p>
			  <p>Белки: ${data.protein} г</p>
			  <p>Жиры: ${data.fats} г</p>
			  <p>Углеводы: ${data.carbs} г</p>
			  <p>Калории: ${data.ccal} ккал</p>
		 `;
	})
	.catch(error => {
		 console.error('Ошибка при сохранении данных на сервере:', error);
		 alert('Произошла ошибка при сохранении данных.');
	});
}
