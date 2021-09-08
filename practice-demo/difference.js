function difference(array, differenceArr) {
    if (!(array instanceof Array) || !(differenceArr instanceof Array)) {
        return []
    }
    let newArr = []
    for (let item of array) {
        if (differenceArr.indexOf(item) === -1) {
            newArr.push(item)
        }
    }
    return newArr
}

console.log(difference([2, 1], [2, 3]))