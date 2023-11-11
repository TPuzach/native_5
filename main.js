const name1 = ["Donald", "Joe", "Barack"]
console.log(name1.sort())
//1. cортирует строки из коробки без доп параметров

const name2 = ["Donald", "Joe", "Barack", "Alex", "Юра", "Игорь"]
console.log(name2.sort())

// 2. сортирует строки типа по "алфавиту" (unicode table)

console.log(name1)

// работает мутабельно (сортирует массив на месте)

console.log(name1.sort() === name1)

// 4. возвращает ссылку на исходный массив

const nums = [1000, 300, 850, 999, 4, -1]
console.log(nums.sort())

// 5. для остальных случаев необходимо передать функцию сравнения

// const compareFunction = (a, b) => { // по возрастанию
//     // >0 - надо переставить
//     // <0 - не надо менять местами
//     if (a > b){
//         return 10
//     } else {
//         return -1
//     }
// }
const compareFunction = (a, b) => a- b
console.log(nums.sort(compareFunction))

//6. функция сравнения должна возвращать число большее или меньшее 0

console.log(nums.reverse())

//7. вместе с сорт часто используется reverse


const students =[
    {

        name: "Bob",
        age: 22,
        isStudent: true,
        scores: 85
    },
    {

        name: "Alex",
        age: 24,
        isStudent: true,
        scores: 89
    },
    {

        name: "Ann",
        age:30,
        isStudent: true,
        scores: 120
    },
    {

        name: "Donald",
        age: 21,
        isStudent: true,
        scores: 100
    },
    {

        name: "alex",
        age: 27,
        isStudent: true,
        scores: 13
    },
]

console.log(students.sort((a,b) => a.age - b.age))

// 8. Сортировка массива объектов по числовым значениям


const sortByName = (a,b) => {
    if(a.name > b.name){
        return 10
    } else {
        return -10
    }
}
console.log(students.sort(sortByName))
console.log(students.sort((a,b) => a.name.localeCompare(b.name)))

// 9. Сортировка массива объектов по строковым значениям

// bubble sort

const numbers = [23, 67, 12, 90, 34]
for (let i = 0; i < numbers.length; i++) {
    if(numbers[i] > numbers[i +1]){ // кривой порядок
        [numbers[i +1],numbers[i] ] = [numbers[i], numbers[i +1]];
    }
}
console.log(numbers)