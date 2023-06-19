// let name = "Марина"
// alert(`Привет, ${name}!`)
// alert(`Привет, ${158+2}!`)


// let element = document.getElementById('el1');
// console.log(element);

// // добавляем класс элементу
// element.classList.add('active');

// // delete class
// element.classList.remove('active');



// Создаем функцию, которую будет отрабатывать кнопка
let count = 0;

function clickButton() {
    // alert('Кнопка нажата!')
    let element = document.getElementById('el1');
    // if (count % 2 == 0) element.classList.add('active');
    // else element.classList.remove('active');
    // Тернарный оператор. Аналогичный код
    // count % 2 == 0 ? element.classList.add('active') : element.classList.remove('active');
    // count++;
    // element.classList.contains('active'); // проверка на класс. Если он есть - True, если нет - Faulse
    element.classList.toggle('active');
}

// Обращение к кнопке
let btn = document.getElementById('btn');
console.log(btn)
btn.addEventListener('click', clickButton)


function btn_list(){
    let element = document.getElementById('el3')
    let element_2 = document.getElementById('el4')
    element.classList.toggle('ice')
    element_2.classList.toggle('ice')
    // if (count % 2 == 0) element.classList.add('ice');
    // else element.classList.remove('ice');
    count++;
}


let btn_lst = document.getElementsByClassName('second_button');
console.log(btn_lst)
btn_lst[0].addEventListener('click', btn_list)


async function sendRequest(event){
    // получили запрос в инпут
    let name = document.getElementsByTagName('input')[0].value;
    let url = 'https://jsonplaceholder.typicode.com/users/';
    event.preventDefault(); //не обновлять страницу
    // отправляем запрос на сервер, чтобы записать данные
    let response = await fetch(url,
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        // преобразование в JSON
        body: JSON.stringify(name)

    });
    // ответ сервера
    alert(response.status);
    alert(name);
}

let form = document.getElementById("form");
form.addEventListener('submit', sendRequest);




// element.textContent