/**
 * Задача 3
 * В этой задаче вам необходимо дописать функцию,
 * которая проверяет группу на корректность
 * Функция принимает на вход строку содержащую символы (), {} или []
 * Должна вернуть True, если строка пустая или группа корректна
 * Или False, если группа неправильная
 * Правильная строка не может закрыть группу в неправильном порядке,
 * открыть группу, но не закрыть ее, или закрыть группу до ее открытия. 
 * 
 * Примеры корректных групп:
 * ([{}]), (), [], {}, {()}
 * Примеры некорректных:
 * )(), {(}), ([], [])
 * 
 * @param {*} group 
 */
function isGroup(group) {
    const symbols = { "(":")", "{":"}", "[":"]" };
    if (group == ""){
        return true;
    }
    if (group.length % 2 != 0){
        return false;
    } 
    for(let i = 0; i < (group.length / 2); i++){
        if (symbols[group[i]] != group[group.length - 1 - i]){
            return false;
        } 
    }
    return true;
}

module.exports.isGroup = isGroup;