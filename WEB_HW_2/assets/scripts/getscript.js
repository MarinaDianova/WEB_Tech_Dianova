async function start(){
    // создали переменную с url строковую
    let url = 'https://jsonplaceholder.typicode.com/users/';
    // наш html накапливаемый в цикле
    let html = '';
    // отправили запрос на сервер
    let response = await fetch(url);
    // получили ответ и обработали в формате JSON
    let users = await response.json();
    // console.log(users);
    
    // перебираем массив и заполняем html
    users.forEach(element => {
        let segment = `<h2>${element.name}</h2>`;
        html += segment;
    });
    // находим нужный элемент и вставляем накопленный html в цикле
    let section = document.getElementById('userSection');
    section.innerHTML = html;

}
start();

