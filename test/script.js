const form = document.getElementById('searchForm');

form.addEventListener('submit', function(event) {
	event.preventDefault(); // Отменяем стандартное поведение формы

	const searchEngine = document.querySelector('input[name="searchEngine"]:checked').value;
	const query = document.getElementById('searchInput').value;

	let url;

	switch(searchEngine) {
		case 'google':
			url = `https://www.google.com/search?q=${query}`;
			break;
		case 'yandex':
			url = `https://yandex.ru/search/?text=${query}`;
			break;
		case 'duckduckgo':
			url = `https://duckduckgo.com/?q=${query}`;
			break;
		case 'yahoo':
			url = `https://search.yahoo.com/search?p=${query}`;
			break;
		case 'baidu':
			url = `https://www.baidu.com/s?wd=${query}`;
			break;
	}

	window.open(url, '_blank'); // Открываем ссылку в новой вкладке
});