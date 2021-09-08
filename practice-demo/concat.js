const arr1 = [1, 2, [3], [[5]]]

function concat(array) {
    let result = []
    let resIndex = 0
    for (let item of array) {
        if (item instanceof Array) {
            for (let i of item) {
                result[resIndex++] = i
            }
        } else {
            result[resIndex++] = item
        }
    }
    return result
}

console.log(concat(arr1))