// let maxim = 55
// let group

// switch (true) {
//     case (maxim >= 0 && maxim <= 17):
//         group = 'children'
//         break;
//     case (maxim >= 17 && maxim <= 60):
//         group = 'adult'
//         break;
//     default:
//         group = 'ancient'
//         break;
// }

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// let browser = prompt("Enter your browser's name")

// switch (true) {
//     case (browser == 'Edge'):
//         p.textContent = "You've got the Edge"
//         break;
//     case (browser == 'Firefox' || browser == 'Safari' || browser == 'Opera'):
//         p.textContent = "We support these browsers as well"
//         break;
//     default:
//         p.textContent = "We hope that this page displays correctly"
// }

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=

// let a = ''

// switch (true) {
//     case (a === 0):
//         p.textContent = 0
//         break;
//     case (a === 1):
//         p.textContent = 1
//         break;
//     case (a === 2 || a === 3):
//         p.textContent = '2, 3'
// }

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// const b = 10

// switch (true) {
//     case (true):
//         const a = 5
//         console.log(a)
//         console.log(b)
//         break;
//     console.log(a)

//     case (true):
//         const b = 10
//         console.log(a)
//         console.log(b)
//         break;
// }
// console.log(b)

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// let username = prompt('Enter username')
// let surname = prompt('Enter surname')

// switch (true) {
//     case (username.length > 4 && surname.length > 5):
//         console.log(parseInt(username.length) + parseInt(Number(surname.length)))
//         break;
//     default:
//         console.log("oops, something went wrong")
// }

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// let integer = Math.floor(Math.random() * 6)

// switch (true) {
//     case (integer === 1):
//         console.log('Ваше число; ' + 1)
//         break;
//     case (integer === 2):
//         console.log('Ваше число; ' + 2)
//         break;
//     case (integer === 3):
//         console.log('Ваше число; ' + 3)
//         break;
//     case (integer === 4):
//         console.log('Ваше число; ' + 4)
//         break;
//     case (integer === 5):
//         console.log('Ваше число; ' + 5)
//         break;
// }

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// let lang = prompt('please select a language')

// switch (true) {
//     case (lang == 'ua'):
//         alert('Червень')
//         break;
//     case (lang == 'ru'):
//         alert('Июнь')
//         break;
//     case (lang == 'en'):
//         alert('June')
//         break;
//     case (lang == 'fr'):
//         alert('Janvier')
//         break;
// }

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=

//Напиши скрипт вибору опції доставки товару. Опція зберігається в змінній option: 1 - самовивіз, 2 - кур"єр, 3 - пошта. В змінну message записати повідомлення в залежності від опції:
//'Ви зможете забрати товар завтра з 12:00 в нашому офісі'
//'Кур"єр доставить замовлення завтра з 9:00 до 18:00'
//'Посилка буде відправлена сьогодні'
//'Вам передзвонит менеджер'.

// let option = prompt("Select option, from 1 to 3.\n 1 - Самовивіз, 2 - кур'єр, 3 - пошта")
// let message = "Щось пішло не так:/"

// switch (true) {
//     case (option == 1):
//         message = 'Ви зможете забрати товар завтра з 12:00 в нашому офісі'
//         alert(`${message}, вам передзвонить менеджер`)
//         break;
//     case (option == 2):
//         message = "Кур'єр доставить замовлення завтра з 9:00 до 18:00"
//         alert(`${message}, вам передзвонить менеджер`)
//         break;
//     case (option == 3):
//         message = 'Посилка буде відправлена сьогодні'
//         alert(`${message}, вам передзвонить менеджер`)
//         break;
//     default:
//         alert(message)
// }

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// let stars = prompt('Please enter star rate')

// switch (true) {
//     case(stars === 1):
//         alert('20$')
//         break;
//     case(stars === 2):
//         alert('30$')
//         break;
//     case(stars === 3):
//         alert('50$')
//         break;
//     case(stars === 4):
//         alert('70$')
//         break;
//     case(stars === 5):
//         alert('120$')
//         break;
//     default:
//         alert('There are no such number of stars!')
//         break;
// }

// let some = 0
// while (some < 10) {
//     some += 1
//     console.log(some)
// }

// let client = 15
// let maxClient = 25

// while (client < maxClient) {
//     console.log(client)
//     client += 1
// }

// let password = ''
// do {
//     password = prompt('Enter password more than 3 signs')
// }
// while (password.length < 3)
// console.log(password)

// let pythonIsTrash = 19
// for (let i = 0; i < pythonIsTrash.length; i++) {
//     console.log(i)
// }

// let maximum = 99
// let total = 0
// for(let i = 0; i <= maximum; i++){
//     total += i
// }
// console.log(total)

// let max = 20
// for (let i = 0; i < max; i++) {
//     if (i < 7) {
//         break
//     }
//     console.log(i)
// }

// let max = 12
// for (let i = 0; i < max; i++) {
//     if (i % 2 === 0) {
//         continue
//     }
//     console.log(i)
// }

// let min = 0
// let max = 17
// total = 0
// for (let i = 0; i < max; i++) {
//     if (i % 2 === 0) {
//         total += i
//         console.log(total)
//     }
// }


// let userInput;

// do {
//     userInput = prompt("Будь ласка, введіть число більше 100:", "");
// } while (userInput === null || isNaN(userInput) || Number(userInput) <= 100);

// alert("Ви ввели число більше 100. Дякуємо!");

//Написати скрипт який буде перевіряти середній бал успішності учня. Прервати роботу циклу, коли середній бал буде меньше 7.

// Цикл повинен питати число поки відвідувач не введе число, більше 100, або не натисне кнопку Відміна (ESC).
// let input
// do {
//     input = Number(prompt('Введіть число більше ніж 100'))
// }
// while(input < 100) {
//     console.log('correct')
// }

// password = 12345
// let message
// let input = prompt('enter password')
// if (input == password) {
//     message = 'welcome'
//     console.log(message)
// }
// else if (input != password) {
//     message = 'incorrect password'
//     console.log(message)
// }
// else {
//     message = 'canceled by user'
//     console.log(message)
// }
// console.log(message)

// let message
// let password = 12345
// while (true) {
//     let input = prompt('enter password')
//     if (input == password) {
//         message = 'welcome'
//         console.log(message)
//     }
//     else if (input != password) {
//         message = 'incorrect password'
//         console.log(message)
//     }
//     else {
//         message = 'canceled by user'
//         console.log(message)
//     }
// }

// let priceChina = 100
// let priceChili = 250
// let priceAustralia = 170
// let priceIndia = 70
// let priceJamayka = 120

// let country = prompt('Enter your country for delievery')
// while (true) {
//     switch (country) {
//         case(country === 'china') {
//             console.log(`delievery to ${country}, will cost ${priceChina}`)
//             break;
//         }
//         case(country === 'chili') {
//             console.log(`delievery to ${country}, will cost ${priceChili}`)
//             break;
//         }
//         case(country === 'australia') {
//             console.log(`delievery to ${country}, will cost ${priceAustralia}`)
//             break;
//         }
//         case(country === 'india') {
//             console.log(`delievery to ${country}, will cost ${priceIndia}`)
//             break;
//         }
//         case(country === 'jamayka') {
//             console.log(`delievery to ${country}, will cost ${priceJamayka}`)
//             break;
//         }
//         default {
//             console.log('we dont send to this country')
//         }
//     }
// }

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- HomeWork -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// 1:
    // let counter = 0
    // while (counter < 10) {
    //     counter++
    //     console.log(counter)
    // }

// 2:
    // for (let i = 0; i < 20; i++) {
    //     if (i%2){
    //         continue
    //     }
    //     else{
    //         console.log(i)
    //     }
    // }

// 3:
    // for (let i = 1; i < 11; i++) {
    //     console.log(i*7)
    // }

// 4:
    // let array = [1,2,3,4,5]
    // let counter = 0
    // while (counter < 5) {
    //     console.log(array[counter])
    //     counter++
    // }

// 5:
    // let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    // for (let i = 0; i < array.length; i++) {
    //     if (array[i] !== 7) {
    //         console.log(array[i])
    //     } else {
    //         break;
    //     }
    // }

// 6:
    // let n = 12
    // for (let i = 0; i < n; i++) {
    //     if (!i <= n) {
    //         console.log(i)
    //     }
    //     else{break}
    // }

// 7:
    // counter = 0
    // while (counter < 20) {
    //     counter++
    //     if (counter%3) {
    //         console.log(counter)
    //     }
    //     else{continue}
    // }
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/* let req
let sum = 0
do {
    req = Number(prompt('enter a number'))
    sum = req + sum
}
while(req === null || req === undefined || req === isNaN) {
    console.log(sum)
} */

// let priceChina = 100
// let priceChili = 250
// let priceAustralia = 170
// let priceIndia = 70
// let priceJamayka = 120


// let input = prompt('Enter your country').toLowerCase()
// let countries = ['china', 'chilli', 'australia', 'india', 'jamayka']
// let prices = [100, 250, 170, 70, 120]
// for (let i = [0]; i < countries.length; i++) {
//     if (input === countries[i]) {
//         console.log(prices[i])
//     }
//     else{
//         console.log('something went wrong')
//     }
// }




// let block = document.querySelector('.block')
// block.classList.remove('disabled')

// reverse.addEventListener('mouseenter', function() {
//     block.classList.toggle('disabled')
    
//     block.classList.toggle('active')
// })

// reverse.addEventListener('mouseleave', function() {
//     block.classList.toggle('active')
    
//     block.classList.toggle('disabled')
// })
// block.classList.remove('disabled')

// let block = document.querySelector('block');
// let reverse = document.querySelector('reverse');

// reverse.addEventListener('mouseenter', function() {
//     block.classList.remove('disabled');
//     block.classList.add('active');
// });

// reverse.addEventListener('mouseleave', function() {
//     block.classList.remove('active');
//     block.classList.add('disabled');
// });

/* let python = [1,2,3,4,5]

for (let i = 0; i < python.length; i++) {
    console.log(python[i])
}

let java = [1,2,3,4,5,6,7,8,9,10]
for (let javas of java) {
    console.log(javas)
} */

/* let numbers = [ 1, 3, 14, 25, 16, 77, 15, 5, 20, 34]
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 15) {
        console.log(numbers[i])
        continue
    }
} */


/* let Arr1 = [1, 5, "4", "hello"];
let Arr2 = [true, 2, {}, ["a"], 222];


for (let i = 0; i < 2; i++) {
    console.log(`Елемент Arr1 за індексом ${i + 1}:`, Arr1[i]);
    console.log(`Елемент Arr2 за індексом ${i + 1}:`, Arr2[i]);
}
    

let sum = Arr1[1] + Arr2[1];
console.log("Сума елементів за індексом 2:", sum); */


/* let myList = ["hello", "something", "nothing"]
console.log(myList[0])
myList[2] = "everything"
 */

/* let myList = [1,2,3,4,5,6,7,8,9,10]
let total = 0

for (let count of myList) {
    if (myList[count] % 2 === 0) {
        total += myList[count]
    }
}
console.log(total) */

/* Напиши скрипт пошуку логіна. Якщо логіна немає, вивести повідомлення 'Користувач [логін] не знайдено.' Якщо знайшли логін, вивести повідомлення 'Користувач [логін] знайдено.' 
  - Спочатку через for
  - Потім через for...of
  - Логіка break
  - Метод includes() с тернарним оператором */

/*   let userLogins = ["first_user", "second_user", "not_user", "user"]
  let userLoginToFind = 'user' */

/* for(let i = 0; i < userLogins.length; i++) {
    if (userLogins[i] === userLoginToFind) {
        console.log(userLoginToFind)

    }
    else {
        console.log(`User ${userLoginToFind} not found`)
    }
} */

/* if (userLogins.includes(userLoginToFind)) {
    console.log(`User ${userLoginToFind} found`)
}
else {
    console.log(`User ${userLoginToFind} not found`)
}
 */

/* let arr1 = [1,2,3,4,5]
let arr2 = [1,2,3,4,5]
let total = 0
let total2 = 0
let fullTotal = 0

for (count of arr1) {
    total += count
}
for (count2 of arr2) {
    total2 += count2
    fullTotal = total + total2
}
console.log(fullTotal) */

/* 
1. Створити масив з трьох чисел. Змінити значення другого елемента масиву на 10.
2. Створити масив із трьох рядків. Додати до масиву ще одну рядків.
3. Створити скрипт який поверне суму всіх чисел в масиві.
4. Створити масив з 5-ти чисел. Вивести на екран всі елементи масиву за допомогою циклу for.
5. Створити масив із 5-ти рядків. Вивести на екран кожен рядокз масиву, який містить більше 5-ти символів.
6. Створити масив з 10-ти чисел. Знайти та вивести на екран максимальне значення з масиву.
7. Створити масив з 10-ти чисел. Знайти всі парні числа в масиві та вивести їх на екран. */

/* 1:
    let arr1 = [1,2,3]
    arr[2] = 10 */

/* 2:
    let array = ['first string', 'second string', 'third string']
    array[3] = 'extra string' */

/* 3:
    let array = [1,2,3,4,5,6,73891]
    let sum = 0
    for (let i = 0; i < array.length; i++) {
        sum += array[i]
    }
    console.log(sum) */

/* 4:
    let array = [1,2,3,4,5]
    for (let i = 0; i < array.length; i++) {
        console.log(array[i])
    } */

/* 5:
    let array = ["str", 'string', '        ', 'striiiiiiiiiiiing', '1953125', 'abc']
    for (let i = 0; i < array.length; i++) {
        if (array[i].length > 5) {
            console.log(array[i])
        }
        else {
            continue
        }
    } */

/* 6:
    let array = [1,-1, 10, 4, 102239, -73, 9471736, 99999, 9, 0]
    let highest = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] > highest) {
            highest = array[i]
        }
    }
    console.log(highest) */

/* 7:
    let array = [2, 192034, 0, -1, -7, -38912, 13903, 127389, 993, 1000]
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            console.log(array[i])
        }
    } */

/* let random1 = document.querySelector('.first')
let random2 = document.querySelector('.second')
let random3 = document.querySelector('.third')

let generator = document.querySelector('.generator')

let randomArray = [random1, random2, random3]

generator.addEventListener(function() {
    for (let i = 0; i < randomArray.length; i++) {
        
    }
}) */

/* ----------- .split() ---------

let text = "Hello world, my name is Danya"
console.log(text.split(' '))

-------------- .join() ---------- 

let text = ['say my name', 'my name', 'is danya']
console.log(text.join(','))

--- .indexOf() && .includes() ---

let arr = [1,2,3,4,5,6,7,8,9,10,11]
console.log(arr.indexOf(4))
console.log(arr.includes(7))

-------- .push() && .shift() ------- 

let array = [1,2,3,4,5,6,7,8]
console.log(array.unshift(0))
console.log(array.shift())

--------- .push() && .pop() ---------

let array = ["Hello", "world", "!!"]
array = array.pop()
console.log(array)
console.log(array.push('sdjui'))

--------------- .slice() ------------

let array = [1,2,3,4,5,6,7]
console.log(array.slice("4"))

------------ .splice() ------------- 

let text = ["hello", 'bye', 'dowiu', 'djwoefwe']
console.log(text.splice(1, 5, "jjj",))

------------ .concat() ------------

let arrOne = [1, 2, 3, 4, 5]
let arrTwo = ["one", "two", "tree", "four", "five"]
let arrTree = arrOne.concat(arrTwo)
console.log(arrTree)

-------------------------------- */

/* let array = [1,2,3,4,5]
array.push(6)
console.log(array) */

/* let array = ['string', 'integer', 'boolean']
array.pop()
console.log(array) */

/* let numbers = [1,2,3,4,5,6,7,8,9,10]
let fiveNumbers = numbers.slice(0, 5)
console.log(fiveNumbers) */

/* let numbers = [1,2,3,4,5,6,7,8,9,10]
console.log(numbers.indexOf(3)) */

/* let words = ['a', 'b', 'c', 'd', 'e', 'f']
console.log(words.join(',')) */

/* const array1 = [5, 10, 15, 20];
const array2 = [10, 20, 30];э
const totalArray = array1.concat(array2);
let total = 0

for (let i = 0; i < totalArray.length(); i++) {
    total += totalArray[i]
}
console.log(total) */

/* const message = 'Welcome to Ukraine!'
let messageToArray = []

for (let i = 0; i < message.length; i++) {
    messageToArray.push(message[i])
}
console.log(messageToArray)
console.log(messageToArray.indexOf("l"))

joinedArray = messageToArray.join("")
console.log(joinedArray) */

/* const playerList = ['firstPlayer', 'secondPlayer', 'thirdPlayer']

for (let i=0; i < playerList.length; i++) {
    console.log(playerList[i], '-', i+1)
} */

/* let styles = ['джаз', "блюз"]
styles.push('рок-н-ролл')
let centerIndex;


if (styles.length % 2 == 0) {
    centerIndex = styles.length/2
}
else {
    centerIndex = styles.length/2-0.5
}

styles[centerIndex] = 'класика'

console.log(styles.shift())
styles.unshift("реп", "реггі")
console.log(styles) */

/* 1:
    const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax']
    let friendsToString = friends.join(',') */

/* 2:
    let cards = [
        "карточка-1",
        "карточка-2",
        "карточка-3",
        "карточка-4",
        "карточка-5"
    ]
    cards.splice(2, 1)
    console.log(cards)

    cards.push("карточка-6")
    console.log(cards)

    cards.splice(2, 1, "карточка-7")
    console.log(cards) */




/* let add = function (a, b) {
    return a + b
}

console.log(add(2+2))

function addSecond () {} */

/* function addArray (array) {
    let total = 0
    for (let i = 0; i < array.length; i++) {
        total += array[i]
    }
    return total
} */

/* function checkEven (number) {
    if (number % 2 === 0) {
        return true
    }
    else {
        return false
    }
} */

/* let myArray = [1,2,3,4,28, 30]

function findMaxNumber (array) {
    let maxNumber = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] > maxNumber) {
            maxNumber = array[i]
        }
    }
    return maxNumber
}

console.log(findMaxNumber(myArray)) */

/* function name (name) {
    return 'Привіт,'+name
} */

/* function math (a, b) {
    const add = a+b
    const subtract = a-b
    const multilpy = a*b
    return `Сумма: ${add}\nРізниця: ${subtract}\nДобуток: ${multilpy}`
}
console.log(math(5, 9)) */

/* function makeMessage(...numbers) {
    let total = 0
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i]
    }
    return total
}
console.log(makeMessage(5^9)) */

/* 1:
    function logItems (array) {
        for (let i = 0; i < array.length; i++) {
            console.log(i+1, '-', array[i])
        }
    } */

/* 2:
    function calculateEngravingPrice(message, pricePerWord) {
        let messageToArray = message.split(' ')
        return messageToArray.length*pricePerWord
    } */

/* 3:
    function findLongestWord (string) {
        let longestWord = ''
        let stringToArray = string.split(' ')
        for (let i = 0; i < stringToArray.length; i++) {
            if (stringToArray[i].length > longestWord.length) {
                longestWord = stringToArray[i]
            }
        }
        return longestWord
    } */

/* 4:
    function formatString (str) {
        if (str.length > 40) {
            console.log(str.slice(0, 40) + '...')
        }
        else {
            console.log(str)    
        }
    } */


/* function checkForSpam (message) {
    let newMessage = message.split(' ')
    console.log(newMessage)
    for (let i = 0; i < newMessage.length; i++) {
        
        if ('spam' === newMessage[i].toLowerCase() || 'sale' === newMessage[i].toLowerCase()) {
            return true
        }

        else{
            return false
        }
    }
}
console.log(checkForSpam('spaaam notspam eee sale')) */
    

/* function myAvarageScore (scores) {
    let total = 0
    for (let i = 0; i < scores.length; i++) {
        total += scores[i]
    }
    let avarageTotal = total / scores.length

    if (avarageTotal >= 91 && avarageTotal <= 100) {
        return 'A'
    }
    else if(avarageTotal >= 81 && avarageTotal <= 90) {
        return 'B'
    }
    else if(avarageTotal >= 71 && avarageTotal <= 80) {
        return 'C'
    }
    else {
        return 'D'
    }

}
console.log(myAvarageScore([100])) */

/* function searchLogin (logins) {
    const loginToSearch = 'danya'
    for (let i = 0; i < logins.length; i++) {
        if (logins[i] === loginToSearch) {
            console.log(`Користувач ${loginToSearch} знайдено!`)
        }else{
            console.log(`Користувач ${loginToSearch} не знайдено:\\`)
        }
    }
}
searchLogin([1,2,3,'a',5,5]) */

/* function changeCase(string) {
    let modifiedString = ''
    for (let i = 0; i < string.length; i++) {
        if (string[i] === string[i].toUpperCase()) {
            modifiedString += string[i].toLowerCase()
        } else {
            modifiedString += string[i].toUpperCase()
        }
    }
    console.log(modifiedString)
}
changeCase('JavaScript') */


/* function addUserNumbers(a, b) {
    return a+b
}

let addUserNumbers = function (a, b) {
    return a+b
} */

/* const getUsername = (name) => `hello, ${name}`
console.log(getUsername('danya')) */

/* const mathOperators = (a, b) => `сума >>> ${a+b}\nрізниця >>> ${a-b}\nдобуток >>> ${a*b}`
console.log(mathOperators(2, 3)) */

/* const returnSquaredArray = (args) => {
    squaredArgs = []
    for (let i = 0; i < args.length; i++) {
        squaredArgs.push(args[i]**2)
    }
    return squaredArgs
}
console.log(returnSquaredArray([1,2,3,4,5])) */

/* const film = {
    name: 'Harry Potter',
    year: 2010,
    country: 'USA',
    producer: 'me'
}
film.country = 'Ukraine'
console.log(film) */

/* const footbalTeam = {
    name: 'Dynamo',
    country: 'Ukraine',

    message() {
        console.log(this.name, this.country)
    }
}
footbalTeam.message() */

/* const book = {
    name: 'Harry Potter',
    year: 2005,
    author: 'Joanne Rowling'
}
delete book.year
console.log(book) */
/* 
const myArray = {
    age: 0,
    increaseAge(age) {
        this.age += age 
    }
}  */

/* const person = {
    name: 'Yarik',
    age: 13,
    genger: 'female',
    log() {
        console.log(this.name, this.age, this.genger)
    } 
} */

/* const students = [
    { name: 'Sanya', age: 15, gender: 'female', grade: 33},
    { name: 'Yarik', age: 13, gender: 'female', grade: 50},
    { name: 'Andriy', age: 10, gender: 'female', grade: 10},
    { name: 'Danya', age: 13, gender: 'female', grade: 69}
]
function avarageScore(group) {
    let total = 0
    for (let i = 0; i < group.length; i++) {
        total += group[i].grade
    }
    return total/group.length
}

console.log(avarageScore(students)) */

/* const restraunt = {
    name: 'Фронтенд 11 (2 підгрупа)',
    cuisine: 'italian',
    addres: true,
    rating: 5,
    edit() {
        let editedAddres = prompt('Enter new restraunt name:')
        if (editedAddres === '') {
            alert("please enter a new name")
        }
        else {
            this.addres = editedAddres
        }
    }
}

restraunt.edit()
console.log(restraunt) */


const cart = {
    items: [],

    getItems() { // робить
        return this.items
    },

    add(product) { // робить
        this.items.push(product)
    },

    remove(productName) { // робить
        this.items.splice(this.items.indexOf(productName)), 1
    },

    clear() { // робить
        this.items = []
    },

    Price() { // робить
        let totalPrice = 0
        for(let i = 0; i < this.items.length; i++) {
            totalPrice += this.items[i].price
        }
        return totalPrice
    },

    increaseQuantity(productName) {
        for(let i = 0; i < this.items.length; i++) {
            if (this.items[i] === productName) {
                this.items.push(productName)
            }
        }
    },

    decreaseQuantity(productName) {
        for(let i = 0; i < this.items.length; i++) {
            if (this.items[i] === productName) {
                this.items.splice(this.items.indexOf(productName)), 1
            }
        }
    },



}

/* cart.add({ name: '🍇', price: 70 })
cart.add({ name: '🍋', price: 60 })
cart.increaseQuantity({ name: '🍋', price: 60 })
console.log(cart.items) */
/* { name: '🍎', price: 50 }
{ name: '🍇', price: 70 }
{ name: '🍋', price: 60 }
{ name: '🍓', price: 110 } */





/* const bank = {
    name: 'danya',
    number: '-1',
    balance: 9172389012793,

    deposit(amount) {
        this.balance += amount;
        console.log(`Рахунок поповнено на ${amount} грн. Новий залишок: ${this.balance} грн.`);
    },
    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log(`Тут таке дєло ${amount}. Ваш новий баланс капут ${this.balance}.`);
        } else {
            console.log('Такий баланс');
        }
    },
};

bank.deposit(3000) */




/* inputTemp = prompt("enter the temperature:")

const weather = {
    temperature: inputTemp,
    humadity: 30,
    windSpeed: 30,
    
    checkTemperature() {
        if(this.temperature < 0) {
            console.log('Temperature is lower than 0')
            return true
        } else if(this.temperature >= 0) {
            console.log('Temperature is greater than 0')
            return false
        }
    }
}


weather.checkTemperature() */


/* let title = document.querySelector('.title')


const movie = {
    title: "Yarik VS Sashko",
    director: "Me",
    year: "2025",
    rating: 10,

    checkRating() {
        if(this.rating > 8) {
            title.style.color = "green"
            return true
        } else if(this.rating <= 8) {

            return false
        }
    } 
}

title.innerHTML = movie.title

movie.checkRating() */

/* const car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2020,
    features: ['power windows', 'rear camera', 'navigation'],
    safety: {
        airbags: true,
        antilock_brakes: true,
        stability_control: true
    }
}

const {make, model, year, features, safety: {airbags, antilock_brakes, stability_control}} = car
 */
/* 
const movie = {
    title: 'The Shawshank Redemption',
    director: {
        name: 'Frank Darabont',
        nationality: 'American'
    },
    actors: ['Tim Robbins', 'Morgan Freeman'],
    release_year: 1994,
    ratings: {
        imdb: 9.3,
        rotten_tomatoes: 90
    }
}
let {title, director = {}, actors = [], release_year, ratings = {}} = movie
console.log({title, director, actors, release_year, ratings}) */

/* const books = {
    count: 3,
    list: [
        {
            title: 'The Great Gatsby',
            author: 'F. Scott Fitzgerald',
            year: 1925
        },
        {
            title: 'To Kill a Mockingbird',
            author: 'Harper Lee',
            year: 1960
        },
        {
            title: '1984',
            author: 'George Orwell',
            year: 1949
        }
    ]
}
let  {count, list = [{}], ...otherBooks} = books
console.log(count, list)     */

/* let products = [
    {name: 'Product 1', price: 10, category: 'cat-1', stock: 5},
    {name: 'Product 2', price: 20, category: 'cat-2', stock: 10},
    {name: 'Product 3', price: 30, category: 'cat-3', stock: 15},

    function totalProductStock(product) {
        let total = 0
        for (let i = 0; i < product.length; i++) {
            total += product[i].price
        }
        return total
    }
] */

/* let user = {

    name: 'user',
    age: 13,
    email: 'user@example.com',

    login(callback) {
        console.log(`Доброго ранку, ${this.name}, ваш вік ${this.age}, ваш email ${this.email}`)
        callback()
    }
}

user.login(function() {
    
}) */

/* let human = {
    name: 'Yarik',
    age: 7,
    height: 150,

    getObjectLength() {
        return `${this.name}, ${this.age}, ${this.height}`
    }
}


console.log(human.getObjectLength(human)) */

/* function checkGenre(movies, genre){

    let searchingMovies = []
    for (let i = 0; i < movies.length; i++) {
        if (movies[i].genre === genre) {
            searchingMovies.push(movies[i])
        }
    }
    return searchingMovies
}

let movies = [
    {title: 'Movie #1', director: 'Me', year: 2025, genre: 'drama'},
    {title: 'Movie #2', director: 'Burym', year: 1999, genre: 'horror'},
    {title: 'Movie #3', director: 'Yarik', year: -1, genre: 'comedy'}
] */

/* const items = [
    { name: 'Футболка', price: 250, quantity: 2 },
    { name: 'Джинси', price: 800, quantity: 1 },
    { name: 'Кросівки', price: 1200, quantity: 1 }
  ];

function totalQuantity(items) {
    let total = 0
    for (let i = 0; i < items.length; i++) {
        total += items[i].price
    }
    return total
}

console.log(totalQuantity(items)) */

/* const add = {
    team1: 'x люди',
    team2: 'Сашко та Ярик',
    team3: 'мелстрой team'
}

let newObj = Object.values(add)
let newObj2 = [...add] */

/* let list = [1, 2, 3, 4, 5]
console.log(Math.max(...list)) */

/* let object = {
    name: "andriy",
    age: 7,
    country: 'ua',
    secname: 'burum',
}

for (let k in object) {
    console.log(object[k])
} */

/* const findBestEmployee = function (employees) {
    let array = Object.values(employees)
    let max = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i]
        }
    }
    return max
};

/*
* Викличи функції для перевірки працездатності твоєї реалізації.
*/
/* console.log(
findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
}),
); // lorence

console.log(
findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
}),
); // mango

console.log(
findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
}),
); // lux */

/* const user = {
    name: 'Mango',
    age: 20,
    hobby: 'html',
    premium: true,
};

user.mood = ''
user.hobby = 'skydiving'
user.premium = false

console.log(Object.entries(user)) */

/* const countProps = function (obj) {
    let props = Object.values(obj)
    return props.length
}

console.log(countProps({
    name: 'Mango',
    age: 20,
    hobby: 'html',
    premium: true,
})) */

/* const car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2020,
    features: ['power windows', 'rear camera', 'navigation'],
    safety: {
        airbags: true,
        antilock_brakes: true,
        stability_control: true
    }
}

 */

/* const person = {
    name: 'Nelli',
    surname: 'Laroy',
    age: 25
};

function logInfo(object) {
    const {name, surname, age} = object
    console.log(`Мене звати ${name} ${surname}, мені ${age} років`)
}


logInfo(person) */

/* const student = {
    name: 'Bruce',
    surname: 'Lee',
    grades: [4, 5, 3]
};

function calculateAvarageGrade(student) {
    const {name, surname, grades} = student
    let avarageGrade = 0
    for (let i of grades) {
        avarageGrade += i
    }
    return avarageGrade / grades.length
}
console.log(calculateAvarageGrade(student)) */

/* const items = [
    { name: 'Футболка', price: 250, quantity: 2 },
    { name: 'Джинси', price: 800, quantity: 1 },
    { name: 'Кросівки', price: 1200, quantity: 1 }
];

function caclulateTotalCost(array) {
    let totalCost = 0
    for (let {price, quantity} of array) {
        totalCost += price * quantity
    }
    return totalCost
}

console.log(caclulateTotalCost(items)) */

/* const person = {
    name: 'John',
    emails: ['john@gmail.com', 'john@example.com', 'john123@yahoo.com']
};

function getFirstEmail({emails}) {
    return emails[0]
}
console.log(getFirstEmail(person))
console.log(true + 1) */

/* employeesList = {
    danya: 350,
    yarik: 200,
    sashko: 400,
    andriy: 250,
}

function countTotalSalary(employees) {
    
} */

/* const data = {
    users: [
        { name: 'John', age: 25 },
        { name: 'Jane', age: 17 },
        { name: 'Bob', age: 30 },
        { name: 'Alice', age: 20 }
    ]
};

let getAdultUsers = ({users}) => {
    let arr = []
    for (let {age, name} of users) {
        if (age >= 18) {
            arr.push(name, age)
        }
    }
    return arr
}

console.log(getAdultUsers(data)) */

/* const musicLibrary = {
    count: 2,
    artists: [
        {
            name: 'The Beatles',
            albums: [
                {
                    title: 'Sgt. Pepper\'s Lonely Hearts Club Band',
                           year: 1967,
             tracks: [
                        { title: 'With a Little Help from My Friends', duration: '2:44' },
                        { title: 'Lucy in the Sky with Diamonds', duration: '3:28' },
                        { title: 'A Day in the Life', duration: '5:33' }
                ]
                },
                {
                    title: 'Abbey Road',
                    year: 1969,
                    tracks: [
                        { title: 'Come Together', duration: '4:19' },
                        { title: 'Something', duration: '3:01' },
                        { title: 'Here Comes the Sun', duration: '3:06' }
                    ]
                }
            ]
        },
        {
            name: 'Pink Floyd',
            albums: [
                {
                    title: 'The Wall',
                    year: 1979,
                    tracks: [
                    { title: 'Another Brick in the Wall, Part 2', duration: '3:59' },
                    { title: 'Comfortably Numb', duration: '6:23' },
                    { title: 'Hey You', duration: '4:40' }
                    ]
                },
                {
                    title: 'Dark Side of the Moon',
                    year: 1973,
                    tracks: [
                        { title: 'Speak to Me/Breathe', duration: '3:58' },
                        { title: 'Time', duration: '7:06' },
                        { title: 'Money', duration: '6:22' }
                    ]
                }
            ]
        }
    ]
}

const {
    count,
    artists: [
        {
            name,
            albums: [
                {
                    title,
                    year,
                    tracks: [
                        { title:title1, duration:duration },
                        { title:title2, duration:duration1 },
                        { title:title3, duration:duration2 }
                ],
                },
                {
                    title:title4,
                    year:year1,
                    tracks: [
                        { title:title5, duration:duration3 },
                        { title:title6, duration:duration4 },
                        { title:title7, duration:duration5 }
                    ],
                },
            ],
        },
        {
            name:name1,
            albums: [
                {
                    title:title8,
                    year:year2,
                    tracks: [
                        { title:title9, duration:duration6 },
                        { title:title10, duration:duration7 },
                        { title:title11, duration:duration8 }
                    ],
                },
                {
                    title:title12,
                    year:year3,
                    tracks: [
                        { title:title13, duration:duration9 },
                        { title:title14, duration:duration10 },
                        { title:title15, duration:duration11 }
                    ],
                },
            ],
        },
    ],
} = musicLibrary
console.log(count, artists, tracks, duration    ) */

/* const person = { 
    name: 'Alice', 
    age: 25, 
    address: { 
        city: 'London', 
        country: 'UK', 
        coordinates: { 
        latitude: 51.5074, 
        longitude: -0.1278 
      } 
    }, 

    interests: ['coding', 'reading', 'traveling'], 
    education: { 
        degree: 'Bachelor', 
        major: 'Computer Science', 
        university: 'University of London' 
    }, 

    friends: [ 
      {  
        name: 'Bob',  
        age: 27,  
        hobbies: ['football', 'painting'] 
      }, 
      {  
        name: 'Charlie',  
        age: 24,  
        hobbies: ['cooking', 'gardening'] 
      }, 
      {  
        name: 'David',  
        age: 26,  
        hobbies: ['photography', 'hiking'] 
      }, 
      {  
        name: 'Emma',  
        age: 25,  
        hobbies: ['dancing', 'yoga'] 
      }, 
      {  
        name: 'Frank',  
        age: 28,  
        hobbies: ['fishing', 'playing guitar'] 
      }, 
      {  
        name: 'Grace',  
        age: 23,  
        hobbies: ['writing', 'playing piano'] 
      } 
    ] 
};

const {
    name, 
    age, 
    address: { 
        city, 
        country, 
        coordinates: { 
        latitude, 
        longitude 
      } 
    }, 

    interests: [interest1, interest2, interest3], 
    education: { 
        degree, 
        major, 
        university 
    }, 

    friends: [ 
      {  
        name:name1,  
        age:age1,  
        hobbies: [hobby, hobby1] 
      }, 
      {  
        name:name2,  
        age:age2,  
        hobbies: [hobby3, hobby4] 
      }, 
      {  
        name:name3,
        age:age3,  
        hobbies: [hobby5, hobby6] 
      }, 
      {  
        name:name4,  
        age:age5,  
        hobbies: [hobby7, hobby8] 
      }, 
      {  
        name:name5,
        age:age6,
        hobbies: [hobby9, hobby10] 
      }, 
      {  
        name:name6,  
        age:age7,  
        hobbies: [hobby11, hobby12] 
      } 
    ] 
} = person */

/* const user = { 
    id: 'GodzilaYarko',
    name: 'YaroslaV4ik', 
    email: 'prograMmMist@example.com', 
    address: '123 Main Street, Anytown, USA' 
};

const orders = [ 
    { id: 1, product: 'Smartphone', price: 999 }, 
    { id: 2, product: 'Laptop', price: 1499 }, 
    { id: 3, product: 'Headphones', price: 199 } 
];

function logInfoOrders(object, ...args) {
    const {
        id,
        name,
        email,
        address
    } = object;
    let order = args[args.length-1]
    const {
        product,
        price
    } = orders

    return `User ${id}, ${name}, ${email}, ${address} with last purchase ${order}`
}

console.log(logInfoOrders(user, orders)) */

/* const orders = [ 
    { id: 1, product: 'Smartphone', price: 999 }, 
    { id: 2, product: 'Laptop', price: 1499 }, 
    { id: 3, product: 'Headphones', price: 199 } 
];

const user = { 
    id: "Yarik", 
    name: 'YaroslaV4ik', 
    email: 'prograMmMist@example.com', 
    address: '123 Main Street, Anytown, USA' 
};
function totalSumma(user, orders){
    const{
      id,
      name,
      email,
      address
    } = user
    let total = orders[orders.length - 1]
    let {
      price,
      product,
    } = total
    return `User: ${user.name} ${user.email} ${user.address} ${total.price} ${total.product}`
  } 
console.log(totalSumma(user , orders)) */

/* const numbers = [31, 14, 3, 17, 7, 2, 77]
console.log(numbers.filter(numbers => numbers > 2 && numbers < 77)) */

/* const players = [
    { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
    { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
    { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
    { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
    { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
]

console.log(players.every(player => player.timePlayed > 200)) */

/* const people = [
    { name: 'John', age: 32, occupation: 'programmer' },
    { name: 'Jane', age: 26, occupation: 'teacher' },
    { name: 'Mike', age: 42, occupation: 'engineer' },
    { name: 'Emily', age: 17, occupation: 'designer' }
]

function returnFullAge(people) {
    return people.filter(person => person.age > 18)
}

console.log(returnFullAge(people)) */

/* const array1 = [1, 2, 3, 44, 4, 5, 6, 6, 7];
const array2 = [5,12, 3, 14, 4, 5, 6, 6, 7]

let array3 = array1.concat(array2.filter(item => !array2.includes(item)))

console.log(array3) */

/* const array = [1, 27, 3, 44, 4, 5, 16, 6, 7];

function filterRange(array, max, min) {
    return array.
}

console.log(filterRange(array)) */

/* сonst chuVaki = [
    { name: 'Sashko', isActive: true },
    { name: 'Danch', isActive: false },
    { name: 'Andriyko', isActive: true },
    { name: 'Yaroslav4ik', isActive: false },
];

function everyPlayerIsOnline (players) {
    return players.every(player => player.isOnline)
}

console.log(everyPlayerIsOnline(chuVaki)) */

const people = [
    {
        id: '701b29c3-b35d-4cf1-a5f6-8b12b29a5081',
        name: 'Moore Hensley',
        email: 'moorehensley@indexia.com',
        eyeColor: 'blue',
        friends: ['Sharron Pace'],
        isActive: false,
        balance: 2811,
        skills: ['ipsum', 'lorem'],
        gender: 'male',
        age: 37,
    },
    {
        id: '7a3cbd18-57a1-4534-8e12-1caad921bda1',
        name: 'Sharlene Bush',
        email: 'sharlenebush@tubesys.com',
        eyeColor: 'blue',
        friends: ['Briana Decker', 'Sharron Pace'],
        isActive: true,
        balance: 3821,
        skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
        gender: 'female',
        age: 34,
    },
    {
        id: '88beb2f3-e4c2-49f3-a0a0-ecf957a95af3',
        name: 'Ross Vazquez',
        email: 'rossvazquez@xinware.com',
        eyeColor: 'green',
        friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
        isActive: false,
        balance: 3793,
        skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
        gender: 'male',
        age: 24,
    },
    {
        id: '249b6175-5c30-44c6-b154-f120923736f5',
        name: 'Elma Head',
        email: 'elmahead@omatom.com',
        eyeColor: 'green',
        friends: ['Goldie Gentry', 'Aisha Tran'],
        isActive: true,
        balance: 2278,
        skills: ['adipisicing', 'irure', 'velit'],
        gender: 'female',
        age: 21,
    },
    {
        id: '334f8cb3-eb04-45e6-abf4-4935dd439b70',
        name: 'Carey Barr',
        email: 'careybarr@nurali.com',
        eyeColor: 'blue',
        friends: ['Jordan Sampson', 'Eddie Strong'],
        isActive: true,
        balance: 3951,
        skills: ['ex', 'culpa', 'nostrud'],
        gender: 'male',
        age: 27,
    },
    {
        id: '150b00fb-dd82-427d-9faf-2879ea87c695',
        name: 'Blackburn Dotson',
        email: 'blackburndotson@furnigeer.com',
        eyeColor: 'brown',
        friends: ['Jacklyn Lucas', 'Linda Chapman'],
        isActive: false,
        balance: 1498,
        skills: ['non', 'amet', 'ipsum'],
        gender: 'male',
        age: 38,
    },
    {
        id: 'e1bf46ab-7168-491e-925e-f01e21394812',
        name: 'Sheree Anthony',
        email: 'shereeanthony@kog.com',
        eyeColor: 'brown',
        friends: ['Goldie Gentry', 'Briana Decker'],
        isActive: true,
        balance: 2764,
        skills: ['lorem', 'veniam', 'culpa'],
        gender: 'female',
        age: 39,
    }
]

let names = people.map(element => element.name)
console.log(names)

// eyes
function eyeColor(color) {
    let searchingPeople = people.filter(element => element.eyeColor === color)
    return searchingPeople.map(element => element.name)
}

console.log(eyeColor('brown'))

// genders

function findGender(gender) {
    let searchingPeople = people.filter(element => element.gender === gender)
    return searchingPeople.map(element => element.name)
}

console.log(findGender('male'))

// isnt active