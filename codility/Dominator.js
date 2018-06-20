function solution(A) {
    let res = {};
    let arr1 = [];
    let arr2 = [];
    let arr3 = [];
    let result;
    for (let val in A) {
        let idx = A[val];
        res[idx] = res[idx] == undefined ? 1 : res[idx] += 1;
    }

    for (let val in res) {
        arr1.push(res[val]);
        arr2.push(Number(val));
    }
    const resIdx = arr1.indexOf(Math.max(...arr1));
    const value = arr2[resIdx];

    for (let i = 0, len = A.length; i < len; i++) {
        if (value === A[i]) {
            arr3.push(i);
        }
    }
    return arr3[arr3.length-1]
}

console.log(solution([3, 4, 3, 2, 3, -1, 3, 3]));
