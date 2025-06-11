/**
 * @param {number} n
 * @return {number}
 */
var nextGreaterElement = function(n) {
    const numStr = String(n)
    const numStrs = []
    for (let i = 0; i < numStr.length; i++) {
        numStrs.push(numStr.charAt(i))
    }

    let eachPermute = []
    let visited = new Array(numStrs.length).fill(0)

    let minInteger = Number.MAX_SAFE_INTEGER
    let maxInteger = Math.pow(2, 31) - 1

    const dfs = function () {
        if (eachPermute.length === numStrs.length) {
            let result = ''
            eachPermute.forEach(element => {
                result += element
            })
            if (+result <= maxInteger && +result > n) {
                minInteger = Math.min(minInteger, +result)
            }
            return
        }

        for (let i = 0; i < numStrs.length; i++) {
            if (visited[i] === 0) {
                visited[i] = 1
                eachPermute.push(numStrs[i])
                dfs()

                // 回溯
                visited[i] = 0
                eachPermute.pop()
            }
        }
    }

    // 调用dfs，求出全排列
    dfs()


    if (minInteger === Number.MAX_SAFE_INTEGER) {
        return -1
    }

    return minInteger
};

