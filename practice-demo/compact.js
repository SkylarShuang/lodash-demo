const array1 = 1

// mine 

function compact(array) {
    if (!(array instanceof Array)) {
        return []
    }
    let result = []
    for (let ele of array) {
        if (ele) {
            result.push(ele)
        }
    }
    return result
}

console.log(compact(array1))