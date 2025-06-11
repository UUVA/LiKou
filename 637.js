/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function (n) {
    let res = [n]
    let arr = []
    let sum=0
    while (res.length > 0) {
        let length = res.length
        let nums = res.length
        while (length--) {
            var p = res.shift()
            sum += p.val
            if (p.left) { res.push(p.left) }
            if (p.right) { res.push(p.right) }
        }
        arr.push(sum / nums)
        sum=0
    }
    return arr
}

