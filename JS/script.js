// "use strict"
// let number = 4.6;

// console.log(4/0);
// console.log('4ggh'/0);
//  const persone = "Andrii";

//  let bool = true/false;



//  console.log(nub);

//  const obj = {
//      name: 'Danya',
//      age: 24,
//      isMarried: false,
//  }
//  console.log(obj.name);
//  console.log(obj['name']); 


//  let array = ['plum.png', 'orange.jpeg', 'mu.raw', [245, 'fmfmg'], {}];
//  console.log(array[3.0]);

// alert('Hello world');
// let result = confirm('How old are you?');
// console.log(result);

// let result = +prompt ('You are more than 18?',  '678');
// console.log(result + 5);

// const answers = [];

// answers[0] = 'Danya';
// answers[1] = 24;
//  console.log(answers);

// const answers = [];

// answers[0] = (prompt('Do you have child?', 'Yes/No'));
// answers[1] = (prompt('what is his/her name ', ''));
// answers[2] = (prompt('his/her has child?', 'Yes/No'));

// document.write(answers);
// console.log(typeof(answers));

// const arr = [
//     'dklvnkljvlnvd',
//     [
//         'here is me',
//         'here is you',
//     ],
//     [
//         'some str',
//         'some num',
//         'some qqq',
//     ]
// ];
// console.log(arr[2][0]);

// console.log(123);
// // alert(123);
// console.log(123);
// // alert(321);
// console.log(321);
// document.write('asdasd');

// const category = 'Toys';

// console.log('My toys '+ 'Max`s' + category );
// console.log(`MAX HAS  ${category}`);

// console.log(5+ +'5');

// let incr = 10,
//     decr = 10,
//     incrs = 10,
//     decrs = 10;

//     incr++;
//     decr--;

//     ++incrs; 
//     --decrs;

//     console.log(incr);
//     console.log(decr);
//     console.log(incrs);
//     console.log(decrs);

// const isChecked = true;
// const isClose = true;

// console.log(isChecked && isClose);

// console.log(isChecked || isClose);


// if (4 == 9 ) {
//     console.log('Ok')
// } else {
//     console.log('Don`t Ok')
// };

// let number = 50;

// if (number <= 27) {
//     console.log('NaN')
// } else if (number > 50) {
//     console.log('Number too much')
// }else {
//     console.log('Your number is perfect')
// };

// (number == 50) ? console.log('OK') : console.log('Error');

// let number = prompt('Choose beetween 48-51')


// switch (num) {
//     case 49:
//         console.log('not core');
//         break;
//     case 51:
//         console.log('not core');
//         break;
//     case 50:
//         console.log('core');
//         break;
//     case 48:
//         console.log('not');
//         break;
//     default:
//         console.log('NaN');
//         break;
//  }

// while (num <= 50){
//     console.log(num);
//     num++;
// }

// do{
//     console.log(num);
//     num++; 
// }
// while (num <= 40)
// for(let i = 1; i < 10; i++){
//     console.log(num);
//     num++; 
// }
// for ( let i = 10; i >= 1; i--){
//     if( i === 3){
//         // break;
//         continue;
//     }
//     console.log(i);
// }



// let a = confirm('Do you want ansver ');
// console.log(a);
// let num = 30;

// function showMessage(text){
//     console.log(text);
//     let num = 10;
//     console.log(num);
// } 
// showMessage('Hello world');
// console.log(num); 

// function calc(a, b){
//     return (a + b);
// }

// console.log(calc(4, 5)); 
// console.log(calc(48, 5)); 
// console.log(calc(10, 5)); 
 
// function ret(){
//     let num = 50;
//     return num;
// }

// let anotherNum = ret();
// console.log(anotherNum);

// let logger = function(){
//     console.log('Logger')
// };

// logger();


// const calc = (a, b) => a + b ; 

// console.log(calc(3,4));

// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
//   }
  
//   ask(
//     "Вы согласны?",
//     function() { alert("Вы согласились."); },
//     function() { alert("Вы отменили выполнение."); }
//   );

//   const ask =(question, yes, no) => {
//     if (confirm(question)) yes()
//     else no();
//   }
//   ask(
//     "Вы согласны?",
//     function() { alert("Вы согласились."); },
//     function() { alert("Вы отменили выполнение."); }
//   );

//   function ask(question, yes, no) {
//         if (confirm(question)) yes()
//         else no();
//       }

//     ask(
//         "Вы согласны?",
//         () => { alert("Вы согласились."); },
//          () => { alert("Вы отменили выполнение."); }
//       );  

// let str = 'Time';
// // let arr = [1, 3, 4,]

// // console.log(str[2]);  
// // console.log(arr.length); 
// console.log(str.toLowerCase()); 

// const fruit = 'some fruits';
// console.log(fruit.indexOf('t'));

// const logg = 'Hello world'; 

// console.log(logg.substr(6, 5));

// let number = 3.3;

// console.log(Math.round(number));

// const test = "12.2px";
// console.log(parseInt(test));
// console.log(parseFloat(test));


// function first() {
//     setTimeout(function() {
//         console.log(1);
//     }, 500);
// }

// function second() {
//     console.log(2);
// }

// first();
// second();
// function learnJS(lang, callback) {
//     console.log(`I learn ${lang}`);
//     callback(); 
// }

// function done() {
//     console.log('I have done this lesson');
// }

// function nedone() {
//     console.log('I have not done this lesson');
// }

// learnJS('English', done);
// learnJS('Math', nedone);




// learnJS(English, function() {
//     console.log('I have done this lesson')
// }); 

// const option = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     },
//     makeTest: function() {
//         console.log('test');
//     }
// };

// option.makeTest();

// // const {border, bg} = option.colors;
// const {border, bg} = option['colors'];
// console.log(bg);
// console.log(option.name);
// ['border']
// delete option.name;
 
// console.log(option['colors']['border']);
// let count = 0;

// for (let key in option ){
//     if(typeof(option[key]) === 'object'){
//             for (let i in option[key]){ 
//                 console.log(`Свойства ${i} имеет значение ${option[key][i]}`)
                
//             } 
//         } else {
//             console.log(`Свойства ${key} имеет значение ${option[key]}`)
           
//     }  
// }
// count++;
// console.log(count);

// console.log(Object.keys(option).length);


// let OBJ = new Object();

// console.log(OBJ);

// Масиви

// const arr = [1345, 386, 15, 767, 8098];
// console.log(arr.sort(compareNum));

// function compareNum(a, b){
//     return a - b;
// }
// arr.forEach(function (item, i, arr){
//     console.log(`${i}: ${item} in arr ${arr}`);
// });

// const str = prompt(' ', '');
// const products = str.split(', ');
// products.sort();
// console.log(products.join('; '));




// console.log(arr);

// for (let i = 1; i < arr.length;i++){
//     console.log(arr[i]);
// }

// console.log(arr[3]);

// for (let value of arr){
//     console.log(value);
// }

// arr[99] = 0;
// console.log(arr.length);
// console.log(arr);

// let a = 5;
// let b = a;

// b = b + 5;
// console.log(b);
// console.log(a);

// let obj = {
//     a: 5,
//     b: 1
// };

// let copy = obj;  

// copy.a = 10;
// console.log(copy);
// function copy(mainObj){
//     let objCopy = {};
//     let key; 
//     for(key in mainObj){
//         objCopy[key] = mainObj[key];
        
//     } 
//     return objCopy;
// }

// console.log(obj);

// const numbers = {
//     a: 5,
//     b: 7,
//     c: {
//         x: 9,
//         y: 11
//     }
// };
 
// const newNumbers = copy(numbers);

// numbers.c.y = 12;
// newNumbers.a = 10;
// console.log(numbers);
// console.log(newNumbers);
 

// let add = {
//     n: 3,
//     m: 6
// };

// console.log(Object.assign(numbers, add));
// let newObj = Object.assign({}, add);
// newObj.n = 6;
// console.log(newObj);

// let oldArr = ['a', 'b', 'c'];
// let newArr = oldArr.slice();

// newArr[1] = 'dsva lfdm';
// console.log(newArr);
// console.log(oldArr);

// const video = ['Youtube.com', 'twitch.com', 'vimeo'];
// const blogs = ['lifejornal', 'insta'];
// let internet = [...video, ...blogs, 'vk', 'facebook'];
// console.log(internet);
// console.log(...video);
// console.log(...blogs);

// function log(a, b, c){
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// const num = [6, 7, 3];

// log(...num);

// let someArr = ['Novus', 'Silpo', 'Atb', 'eko'];

// console.log(someArr);
// console.log(...someArr);

// let someObj = {
//     a: 'Novus',
//     b:'Silpo',  
//     c:'Atb',
//     d:'eko'
// };


// let modeObj = {...someObj};
// console.log(modeObj);

// let q = {
//     one: 1,
//     two: 2
// };
// let newQ = {...q};
// console.log(newQ);

// let str = 'some';
// let strObj = new String(str);

// console.log(typeof(str));
// console.log(typeof(strObj));

const soldier = {
    health: 400,
    armor: 100
};

// const jonh = {
//     health: 100,
// }

const jonh = Object.create(soldier);
console.log(jonh.health);


// jonh.__proto__ = soldier;

// Object.setPrototypeOf(jonh, soldier)

// console.log(jonh.armor);