/**
 * Задача 2
 * Допишите функцию, разбивающую массив на группы по размеру
 * Если массив не может быть разделен равномерно, последней частью
 * будут оставшиеся элементы. Порядок элементов внутри группы важен.
 * 
 * arrayStripped(['a', 'b', 'c', 'd'], 2)) => [['a', 'b'], ['c', 'd']]
 * arrayStripped([1, 'b', 5, 0, 'c'], 2)) => [[1, 'b'], [5, 0], ['c']]
 * 
 * Если разбивать на группы нечего, выведите пустой массив.
 * 
 * @param {*} array массив на вход
 * @param {*} size из скольких элементов состоит группа
 * @returns массив разбитый на группы
*/
const arrayStripped = (array, size) => {
    if ((isNaN(size)) || (size == null) || (size == 0)) { //Исправил условие, теперь если ввести size = 0 выдаст ошибку
        throw Error();
    }
    if ((!Array.isArray(array)) || (array == undefined) || (array.length == [])) {
        return [];
    }
    return stripe(array, size);
}

function stripe(array, size){
    let array2 = [];
    while (array.length > 0){
        array2.push(array.splice(0, size));
    }
    return array2;
}

module.exports.arrayStripped = arrayStripped;
