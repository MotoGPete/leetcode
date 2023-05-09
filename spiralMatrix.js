/**
 * @param {number[][]} matrix
 * @return {number[]}
 */

 /** Given an m x n matrix, return all elements of the matrix in spiral order.

  */
 var spiralOrder = function(matrix) {
    var m = matrix[0].length
    var n = matrix.length
    var top = 0, bottom = n-1, left = 0, right = m -1

    var output = new Array()
    while(top<=bottom && left<=right){
        for(let i=left;i<=right;i++){
            output.push(matrix[top][i])
            console.log(output)
        }
        top++
       
        for(let i=top;i<=bottom;i++){
            output.push(matrix[i][right])
            console.log(output)
        }
        right--
        
        if(top<=bottom){
            for(let i=right;i>=left;i--){
                output.push(matrix[bottom][i])
                console.log(output)
        }
        bottom--
        }

        if(left<=right){
        for(let i=bottom;i>=top;i--){
            output.push(matrix[i][left])
            console.log(output)
        }
        left++
        console.log("first loop")
        }
    }
    return output
    
};