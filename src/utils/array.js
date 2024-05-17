export const deepClone = (array) => {
    return JSON.parse(JSON.stringify(array))
}

export const findObjectById = (id, array) => {
    return array.find((itemInArray) => itemInArray.id === id)
}

export const findIndexById = (idWithUnknowIndex, array) => {
    return array.findIndex((itemInArray) => itemInArray.id === idWithUnknowIndex)
}

export const removeObjectById = (idOfProductToRemove, array) => {
    return array.filter((itemInArray) => itemInArray.id !== idOfProductToRemove)
}

export const isEmpty = (array) => {
    return array.length === 0
}