export const deepClone = (array) => {
    return JSON.parse(JSON.stringify(array))
}

export const findToArray = (id, array) => {
    return array.find((itemInArray) => itemInArray.id === id)
}

export const getIndex = (idWithUnknowIndex, array) => {
    return array.findIndex((itemInArray) => itemInArray.id === idWithUnknowIndex)
}

export const getFilter = (idOfProductToRemove, array) => {
    return array.filter((itemInArray) => itemInArray.id !== idOfProductToRemove)
}