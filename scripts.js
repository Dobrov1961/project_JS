/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

// // 1
// const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '1');
// console.log(numberOfFilms);
// // // // 2

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false,
// };
// // 3
// // 3) Задайте пользователю по два раза вопросы:
// //     - 'Один из последних просмотренных фильмов?'
// //     - 'На сколько оцените его?'
// // Ответы стоит поместить в отдельные переменные
// // Записать ответы в объект movies в формате: 
// //     movies: {
// //         'logan': '8.1'
// //     }
// let nameMovie = prompt('Один из последних просмотренных фильмов?');
// let numberMovie = +prompt('На сколько оцените его?');

// personalMovieDB.movies = {
//     [nameMovie]: numberMovie,
// };
// console.log(personalMovieDB);
/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла


2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

'use strict';

// Код возьмите из предыдущего домашнего задания

// 1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

// let agree = confirm('Do you want ansver ');

// if (agree == true) {
//     const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '1');

//     const personalMovieDB = {
//         count: numberOfFilms,
//         movies: {},
//         actors: {},
//         genres: [],
//         privat: false,
//     };

//     let nameMovie = prompt('Один из последних просмотренных фильмов?');
//     let numberMovie = +prompt('На сколько оцените его?');

//     personalMovieDB.movies = {
//         [nameMovie]: numberMovie,
//     };
// }else {
//     alert('tnaks for your time');
// }

// let qus1 = prompt('Один из последних просмотренных фильмов?');
// let qus2 = +prompt('На сколько оцените его?');
// let qus3 = prompt('Один из последних просмотренных фильмов?');
// let qus4 = +prompt('На сколько оцените его?');

// personalMovieDB.movies[qus1] = qus2;
// personalMovieDB.movies[qus3] = qus4;

// for (let i = 0; i < 2; i++){
//     let qus1 = prompt('Один из последних просмотренных фильмов?');
//     let qus2 = prompt('На сколько оцените его?');
//     personalMovieDB.movies[qus1] = qus2;
// }
// console.log(personalMovieDB);


// 2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
// отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
// возвращаем пользователя к вопросам опять

// if (lengthString <= 50) {
//     const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '1');

//     const personalMovieDB = {
//         count: numberOfFilms,
//         movies: {},
//         actors: {},
//         genres: [],
//         privat: false,
//     };

//     let nameMovie = prompt('Один из последних просмотренных фильмов?');
//     let numberMovie = +prompt('На сколько оцените его?');

//     personalMovieDB.movies = {
//         [nameMovie]: numberMovie,
//     };
// }else if (lengthString >= 1) {
//     const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '1');

//     const personalMovieDB = {
//         count: numberOfFilms,
//         movies: {},
//         actors: {},
//         genres: [],
//         privat: false,
//     };

//     let nameMovie = prompt('Один из последних просмотренных фильмов?');
//     let numberMovie = +prompt('На сколько оцените его?');

//     personalMovieDB.movies = {
//         [nameMovie]: numberMovie,
// }else {
//     console.log('problem')
// };
// if (number <= 27) {
//     console.log('NaN')
// } else if (number > 50) {
//     console.log('Number too much')
// }else {
//     console.log('Your number is perfect')
// };
// 222222222

// const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '1');

//     const personalMovieDB = {
//         count: numberOfFilms,
//         movies: {},
//         actors: {},
//         genres: [],
//         privat: false,
//     };

//     let nameMovie = prompt('Один из последних просмотренных фильмов?');
//     let numberMovie = prompt('На сколько оцените его?');

//     personalMovieDB.movies = {
//         [nameMovie]: numberMovie,
//     };

//    let numberOfFilmsLenght =  numberOfFilms.length;
//    console.log(numberOfFilmsLenght);

//    let nameMovieLenght =  nameMovie.length;
//    console.log(nameMovieLenght);

//    let numberMovieLenght =  numberMovie.length;
//    console.log(numberMovieLenght);

//    if (numberOfFilmsLenght > 50) {
//     const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '1');

//     const personalMovieDB = {
//         count: numberOfFilms,
//         movies: {},
//         actors: {},
//         genres: [],
//         privat: false,
//     };

//     let nameMovie = prompt('Один из последних просмотренных фильмов?');
//     let numberMovie = prompt('На сколько оцените его?');

//     personalMovieDB.movies = {
//         [nameMovie]: numberMovie,
//     };
// } else if (numberOfFilmsLenght < 1) {
//     const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '1');

//     const personalMovieDB = {
//         count: numberOfFilms,
//         movies: {},
//         actors: {},
//         genres: [],
//         privat: false,
//     };

//     let nameMovie = prompt('Один из последних просмотренных фильмов?');
//     let numberMovie = +prompt('На сколько оцените его?');

//     personalMovieDB.movies = {
//         [nameMovie]: numberMovie,
//     };
// }else {
//     console.log('Perfect')
// };
// if (nameMovieLenght > 50) {
//     const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '1');

//     const personalMovieDB = {
//         count: numberOfFilms,
//         movies: {},
//         actors: {},
//         genres: [],
//         privat: false,
//     };

//     let nameMovie = prompt('Один из последних просмотренных фильмов?');
//     let numberMovie = prompt('На сколько оцените его?');

//     personalMovieDB.movies = {
//         [nameMovie]: numberMovie,
//     };
// } else if (nameMovieLenght < 1) {
//     const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '1');

//     const personalMovieDB = { 
//         count: numberOfFilms,
//         movies: {},
//         actors: {},
//         genres: [],
//         privat: false,
//     };

//     let nameMovie = prompt('Один из последних просмотренных фильмов?');
//     let numberMovie = prompt('На сколько оцените его?');

//     personalMovieDB.movies = {
//         [nameMovie]: numberMovie,
//     };
// }else {
//     console.log('Perfect')
// };

// const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '1');
// console.log(numberOfFilms);
// // // // 2

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false,
// };
// let qus1;
// let qus2;


// console.log(personalMovieDB);
// let i = 0;
// while(i < 2){
//     i++;
//     let qus1 = prompt('Один из последних просмотренных фильмов?' , '');
//     let qus2 = prompt('На сколько оцените его?', '');
//     // personalMovieDB.movies[qus1] = qus2;
//     if (qus1 != null && qus2 != null && qus1 !='' && qus2 !='' && qus1.length < 50 && qus2.length < 50){
//                 personalMovieDB.movies[qus1] = qus2;
//                 console.log('All is fine');
//             }else {
//                 console.log('Error');
//                 i--;
//             };

// }
// let i = 0;
// do{
//     i++;
//     let qus1 = prompt('Один из последних просмотренных фильмов?' , '');
//     let qus2 = prompt('На сколько оцените его?', '');
//     // personalMovieDB.movies[qus1] = qus2;
//     if (qus1 != null && qus2 != null && qus1 !='' && qus2 !='' && qus1.length < 50 && qus2.length < 50){
//                 personalMovieDB.movies[qus1] = qus2;
//                 console.log('All is fine');
//             }else {
//                 console.log('Error');
//                 i--;
//             };
// }

// while(i < 2);

// 3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
// "Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
// "Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка";
// const nameuser = prompt('Ваше имя?', 'Аня/Андрей')
// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '1');

// console.log(numberOfFilms);
// // // // 2

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false,
// };

// if( personalMovieDB.count < 10){
//     console.log(`${nameuser} Просмотрено довольно мало фильмов`);
// }else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
//     console.log(`${nameuser} Вы классический зритель`);
// } else if( personalMovieDB.count >= 30 ){
//     console.log(`${nameuser} Вы киноман`);
// } else 
// console.log("Вы киноман");


// switch(personalMovieDB.count){
//     case <10 :
//     console.log("Просмотрено довольно мало фильмов"); 
//     break;
//     case 10> :
//     console.log("Вы классический зритель");
//     break;
//     case <30 :
//     console.log("Вы классический зритель");
//     break;
//     case 30> :
//     console.log("Вы киноман); 
//     break;
//     default:
//     console.log("помилка");
//     break;   

// }


// switch (num) {
//     case 49:
//         console.log('not core');
//         break;
//     case 100:
//         console.log('not core');
//         break;
//     case 50:
//         console.log('core');
//         break;
//     case 23:
//         console.log('not');
//         break;
//     default:
//         console.log('NaN');
//         break;
//  }

// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '1');

// function start(){
    
// };


// const personalMovieDB = {
//     count: numberOfFilms,
//      movies: {},
//     actors: {},
//     genres: [],
//     privat: false,
// };

// for (let i = 0; i < 2; i++){
//     let qus1 = prompt('Один из последних просмотренных фильмов?' , '');
//     let qus2 = prompt('На сколько оцените его?', '');
//     // personalMovieDB.movies[qus1] = qus2;

//     if (qus1 != null && qus2 != null && qus1 !='' && qus2 !='' && qus1.length < 50 && qus2.length < 50){
//         personalMovieDB.movies[qus1] = qus2;
//         console.log('All is fine');
//     }else {
//         console.log('Error');
//         i--;
//     };
// };




/* Задание на урок:

1) Первую часть задания повторить по уроку



2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/



// Код возьмите из предыдущего домашнего задания
// while(numberOfFilms !='' && numberOfFilms != null ) 

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }  
}
start();
console.log(numberOfFilms);

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++){
        let qus1 = prompt('Один из последних просмотренных фильмов?' , '');
        let qus2 = prompt('На сколько оцените его?', '');
        // personalMovieDB.movies[qus1] = qus2;
    
        if (qus1 != null && qus2 != null && qus1 !='' && qus2 !='' && qus1.length < 50 && qus2.length < 50){
            personalMovieDB.movies[qus1] = qus2;
            console.log('All is fine');
        }else {
            console.log('Error');
            i--;
        }
    }
}
rememberMyFilms();

function detectPersonalLevel() {
    if( personalMovieDB.count < 10){
        console.log('Просмотрено довольно мало фильмов');
    }else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
        console.log(' Вы классический зритель');
    } else if( personalMovieDB.count >= 30 ){
        console.log(' Вы киноман');
    } else {
       console.log("Вы киноман"); 
    }
}

detectPersonalLevel();


// 2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
// false - выводит в консоль главный объект программы

function showMyDB() {
    if(personalMovieDB.privat === false){
        console.log(personalMovieDB);
    }
}
showMyDB();

// 3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
// "Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
// genres

// function writeYourGenres() {
//     for(let i = 0; i < 3; i++) {
//         let answer = prompt("Ваш любимый жанр под номером?");
//         personalMovieDB.genres.push(`Ваш любимый жанр под номером ${answer}`);
//     }
// }
// writeYourGenres();

// function writeYourGenres() {
//     for(let i = 1; i <= 3; i++) {
//         let answer = ;
//         personalMovieDB.genres.push(answer);
//     }
// }
// writeYourGenres();

function writeYourGenres() {
    for(let i = 1; i <= 3; i++) {
        personalMovieDB.genres.push(prompt(`Ваш любимый жанр под номером ${i}?`));
    }
}
writeYourGenres();


/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

'use strict';

// Код возьмите из предыдущего домашнего задания




