const url1 = "https://images.wallpaperscraft.ru/image/single/mashina_seryj_mokryj_147750_3840x2160.jpg"

const url2 = "https://images.wallpaperscraft.ru/image/single/bmw_avtomobil_bamper_191131_3840x2160.jpg"

const url3 = "https://images.wallpaperscraft.ru/image/single/mitsubishi_lancer_evo_x_tiuning_96277_3840x2400.jpg"

//промысел - специальный объект б содержащий свое состояние б которое может примимать однно из трех возможных значений
//- pending -ожидание
//-fulfilled -выполнению успешно
///-rejected-выполнено неудачно

//const promise ={
//    star:['pending','fulfilled','rejected']

//resolveQueue:[
//   ()=>{console.log(1),
//()=>{ console.log(2)}
//  }
//]

//}

console.log('до promise')
const promise = new Promise(() => {
    console.log('внутри promise')
})

console.log('после promise ')

//Изменение состояния промиса
//пРИ СОЗДАНИЯ промис получиет состояние  pending

//Функция передавая в конструктор прмиса б может иметь два параметра (обычно их называют resolve и reject)б
//Эти параметры  являются функциями  б вызывая первую из них (resolve) мы переводим 


function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
            console.log('resolved')
        }, ms)
    })
}
let promise3 = delay(3000)
//метод then() добовляет вочереть  выпослено успешно
promise3.then(() => {
    console.log(1)
})
promise3.then(() => {
    console.log(2)
})
promise3.then(() => {
    console.log(3)
})
console.log('после then ')

//******Чейнинг промисов */

//метод then , помещает переданную в него функцию в очередь промиса и возвращает новый промис 
//У этого нового промиса так же можно вызвать метод then , который в свою очередь вернет новый промис и так далее.

promise3
    .then(() => { console.log(1) })
    .then(() => { console.log(2) })
    .then(() => { console.log(3) })

function loadImage(url) {
    return new Promise((resolve) => {
        const img = document.createElement('img')
        img.height = 200
        img.src = url;
        document.body.append(img);
        img.addEventListener('load', () => {
            resolve();


        })

    })
}


loadImage(url1)
    .then(() => { return loadImage(url2); })
    .then(() => { return loadImage(url3); })
    .then(() => { return loadImage(url3); })


