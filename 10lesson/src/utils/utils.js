export const objToArray = (obj) => {
    const dataArray = []
    for (let item in obj) {
        dataArray.push(obj[item])
    }
    return dataArray
}