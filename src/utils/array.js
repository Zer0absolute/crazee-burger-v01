export const deepClone = (array) => {
    return JSON.parse(JSON.stringify(array))
}

export const findToArray = (id, array) => {
    return array.find((itemInArray) => itemInArray.id === id)
}

export const getIndex = (id, array) => {
    return array.findIndex((itemInArray) => itemInArray.id === id)
}