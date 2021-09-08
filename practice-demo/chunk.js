
const array1 = [1, 2, 3, 4, 5]

// mine
function chunk(array, size) {
    const leftArray = array.slice(0, size)
    const rightArray = array.slice(size)
    const newArr = []
    newArr.push(leftArray, rightArray)
    return newArr
}

console.log(chunk(array1, 2))

// lodash

function chunkLodash(array, size = 1) {
    size = Math.max(parseInt(size))
    const length = array == null ? 0 : array.length
    if (!length || size <= 1) {
        return []
    }
    const result = new Array(Math.ceil(length / size))
    let index = 0
    let resIndex = 0
    while (index < length) {
        result[resIndex++] = array.slice(index, index += size)
    }
    return result
}

console.log(chunkLodash(array1, 2))